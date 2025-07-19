import Link from "next/link";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center min-h-[80vh]">
      <section className="w-full max-w-2xl mx-auto text-center py-24 px-4">
        <h1 className="text-5xl sm:text-6xl font-extrabold tracking-tight mb-6 text-[var(--foreground)]">
          Discover Your Next Car
        </h1>
        <p className="text-lg sm:text-xl text-[var(--foreground)]/80 font-medium mb-10">
          A modern, seamless car buying experience. Browse, finance, and buy—no paperwork, no hassle, just drive.
        </p>
        <Link
          href="/cars"
          className="inline-block px-8 py-3 bg-[var(--accent)] text-white text-lg font-semibold rounded-full shadow-md hover:bg-opacity-90 transition"
        >
          Browse Cars
        </Link>
      </section>
      <section className="w-full max-w-4xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-8 mt-12 px-4">
        <div className="bg-white dark:bg-[#23272f] border border-[var(--border)] rounded-2xl p-6 shadow-sm flex flex-col items-center">
          <svg width="32" height="32" fill="none" className="mb-3 text-[var(--accent)]"><circle cx="16" cy="16" r="16" fill="currentColor" fillOpacity="0.1"/><path d="M10 16h12M16 10v12" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/></svg>
          <h3 className="font-bold text-lg mb-2">Easy Financing</h3>
          <p className="text-sm text-[var(--foreground)]/70">Get instant approval and flexible payment options tailored for you.</p>
        </div>
        <div className="bg-white dark:bg-[#23272f] border border-[var(--border)] rounded-2xl p-6 shadow-sm flex flex-col items-center">
          <svg width="32" height="32" fill="none" className="mb-3 text-[var(--accent)]"><circle cx="16" cy="16" r="16" fill="currentColor" fillOpacity="0.1"/><path d="M8 16l4 4 8-8" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/></svg>
          <h3 className="font-bold text-lg mb-2">Verified Listings</h3>
          <p className="text-sm text-[var(--foreground)]/70">All cars are thoroughly inspected and quality assured for peace of mind.</p>
        </div>
        <div className="bg-white dark:bg-[#23272f] border border-[var(--border)] rounded-2xl p-6 shadow-sm flex flex-col items-center">
          <svg width="32" height="32" fill="none" className="mb-3 text-[var(--accent)]"><circle cx="16" cy="16" r="16" fill="currentColor" fillOpacity="0.1"/><path d="M12 20h8M12 16h8M12 12h8" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/></svg>
          <h3 className="font-bold text-lg mb-2">Seamless Process</h3>
          <p className="text-sm text-[var(--foreground)]/70">From browsing to buying, enjoy a smooth, digital-first experience.</p>
        </div>
      </section>
    </main>
  );
}
