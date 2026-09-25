import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-[60vh] flex items-center justify-center bg-abyss">
      <div className="text-center px-4">
        <p className="eyebrow">Lost in the mystery</p>
        <h1 className="mt-4 text-6xl font-bold text-ink">404</h1>
        <p className="mt-3 text-ink-soft">Page not found</p>
        <Link href="/" className="btn-blue mt-8 inline-block">
          Go Home
        </Link>
      </div>
    </div>
  );
}
