import Link from "next/link";

export default function NavBar() {
  return (
    <nav className="w-full bg-white border-b border-[var(--border)] py-3 px-6 flex items-center justify-between fixed top-0 left-0 z-50 shadow-none">
      <div className="text-xl font-bold tracking-tight text-[var(--accent)]">
        <Link href="/">Caramel</Link>
      </div>
      <div className="flex gap-6 text-base font-medium">
        <Link href="/" className="hover:text-[var(--accent)] transition-colors">Home</Link>
        <Link href="/cars" className="hover:text-[var(--accent)] transition-colors">Browse Cars</Link>
        <Link href="/auth/signin" className="hover:text-[var(--accent)] transition-colors">Sign In</Link>
        <Link href="/auth/signup" className="ml-2 px-4 py-1.5  text-white rounded-full hover:bg-blue-700 transition-colors font-semibold">
          Sign Up
        </Link>
      </div>
    </nav>
  );
} 