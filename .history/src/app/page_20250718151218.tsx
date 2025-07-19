import Link from "next/link";

export default function Home() {
  return (
    <main className="relative flex flex-col items-center justify-center min-h-[90vh] pt-32 pb-16 px-4 overflow-hidden">
      {/* Animated gradient background */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-cyan-700 via-purple-700 to-blue-900 animate-gradient-move opacity-90" />
      <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[120vw] h-[60vh] bg-gradient-to-r from-teal-400/30 via-blue-500/20 to-purple-600/30 rounded-full blur-3xl animate-pulse-slow" />
      <section className="relative z-10 max-w-2xl w-full mx-auto bg-white/10 backdrop-blur-lg rounded-3xl shadow-2xl border border-cyan-400/30 p-12 flex flex-col items-center gap-8">
        <h1 className="text-5xl sm:text-6xl font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-teal-300 via-blue-400 to-purple-500 animate-gradient-x mb-2 drop-shadow-lg">
          The Future of Car Buying
        </h1>
        <p className="text-lg sm:text-xl text-white/90 font-medium mb-4 drop-shadow">
          Discover your next car with a seamless, all-digital experience. Browse, finance, and buy—no paperwork, no hassle, just drive.
        </p>
        <Link
          href="/cars"
          className="inline-block px-10 py-3 bg-gradient-to-r from-teal-400 via-blue-500 to-purple-500 text-white text-xl font-bold rounded-full shadow-lg hover:from-blue-500 hover:to-teal-400 transition-all border border-cyan-400/40 ring-2 ring-teal-400/30 animate-glow"
        >
          Browse Cars
        </Link>
      </section>
      <section className="relative z-10 w-full max-w-4xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-10 mt-16 px-4">
        <div className="bg-white/20 backdrop-blur-lg border border-cyan-400/30 rounded-2xl p-8 shadow-xl flex flex-col items-center hover:scale-105 transition-transform">
          <svg width="40" height="40" fill="none" className="mb-4 text-teal-300"><circle cx="20" cy="20" r="20" fill="currentColor" fillOpacity="0.15"/><path d="M13 20h14M20 13v14" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/></svg>
          <h3 className="font-bold text-xl mb-2 text-white">Easy Financing</h3>
          <p className="text-base text-white/80">Get instant approval and flexible payment options tailored for you.</p>
        </div>
        <div className="bg-white/20 backdrop-blur-lg border border-cyan-400/30 rounded-2xl p-8 shadow-xl flex flex-col items-center hover:scale-105 transition-transform">
          <svg width="40" height="40" fill="none" className="mb-4 text-blue-300"><circle cx="20" cy="20" r="20" fill="currentColor" fillOpacity="0.15"/><path d="M12 20l6 6 10-10" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/></svg>
          <h3 className="font-bold text-xl mb-2 text-white">Verified Listings</h3>
          <p className="text-base text-white/80">All cars are thoroughly inspected and quality assured for peace of mind.</p>
        </div>
        <div className="bg-white/20 backdrop-blur-lg border border-cyan-400/30 rounded-2xl p-8 shadow-xl flex flex-col items-center hover:scale-105 transition-transform">
          <svg width="40" height="40" fill="none" className="mb-4 text-purple-300"><circle cx="20" cy="20" r="20" fill="currentColor" fillOpacity="0.15"/><path d="M15 27h10M15 20h10M15 13h10" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/></svg>
          <h3 className="font-bold text-xl mb-2 text-white">Seamless Process</h3>
          <p className="text-base text-white/80">From browsing to buying, enjoy a smooth, digital-first experience.</p>
        </div>
      </section>
    </main>
  );
}
