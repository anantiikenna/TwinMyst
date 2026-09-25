"use client";
import { createContext, useContext, useSyncExternalStore } from "react";

type ConsentValue = "accepted" | "declined" | null;

const STORAGE_KEY = "cookie-consent";
const CONSENT_EVENT = "tm-cookie-consent";

const CookieConsentContext = createContext<{
  consent: ConsentValue;
  setConsent: (value: ConsentValue) => void;
}>({ consent: null, setConsent: () => {} });

function subscribe(callback: () => void) {
  window.addEventListener(CONSENT_EVENT, callback);
  window.addEventListener("storage", callback);
  return () => {
    window.removeEventListener(CONSENT_EVENT, callback);
    window.removeEventListener("storage", callback);
  };
}

function getSnapshot(): ConsentValue {
  return localStorage.getItem(STORAGE_KEY) as ConsentValue;
}

function getServerSnapshot(): ConsentValue {
  return null;
}

export function useCookieConsent() {
  return useContext(CookieConsentContext);
}

export function CookieConsentProvider({ children }: { children: React.ReactNode }) {
  const consent = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);

  const setConsent = (value: ConsentValue) => {
    if (value) {
      localStorage.setItem(STORAGE_KEY, value);
    } else {
      localStorage.removeItem(STORAGE_KEY);
    }
    window.dispatchEvent(new Event(CONSENT_EVENT));
  };

  return (
    <CookieConsentContext.Provider value={{ consent, setConsent }}>
      {children}
      {consent === null && (
        <div
          role="dialog"
          aria-label="Cookie consent"
          className="fixed bottom-0 inset-x-0 z-50 bg-abyss text-white p-4 sm:p-5 shadow-2xl"
        >
          <div className="container-page flex flex-col sm:flex-row items-start sm:items-center gap-4 justify-between">
            <p className="text-sm text-white/80">
              We use cookies to improve your experience and understand how the site is used. Read our{" "}
              <a href="/privacy" className="underline text-gold">
                Privacy Policy
              </a>
              .
            </p>
            <div className="flex gap-3 shrink-0">
              <button
                type="button"
                onClick={() => setConsent("declined")}
                className="px-4 py-2 text-sm rounded-lg border border-white/25 hover:bg-surface/10 transition"
              >
                Decline
              </button>
              <button
                type="button"
                onClick={() => setConsent("accepted")}
                className="px-4 py-2 text-sm rounded-lg bg-gold text-abyss font-semibold hover:bg-gold-bright transition"
              >
                Accept
              </button>
            </div>
          </div>
        </div>
      )}
    </CookieConsentContext.Provider>
  );
}
