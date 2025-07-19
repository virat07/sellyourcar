import Link from "next/link";

export default function Home() {
  return (
    <main className="relative flex flex-col items-center justify-center min-h-[90vh] pt-32 pb-16 px-1 overflow-hidden bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700">
      {/* Layered background shapes */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[120vw] h-[60vh] bg-gradient-to-r from-yellow-400/20 via-blue-400/10 to-blue-900/30 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-1/2 h-1/3 bg-gradient-to-tr from-yellow-300/10 to-blue-400/10 rounded-full blur-2xl" />
      </div>
      {/* Hero Section */}
      <section className="relative z-10 max-w-3xl w-full mx-auto bg-white/90 dark:bg-blue-950/80 backdrop-blur-lg rounded-3xl shadow-2xl border border-blue-200/40 p-12 flex flex-col items-center gap-8">
        <h1 className="text-5xl sm:text-6xl font-extrabold tracking-tight mb-4 text-blue-900 dark:text-white drop-shadow-lg text-center">
          Find Your Dream Car
        </h1>
        <p className="text-lg sm:text-xl text-blue-800/80 dark:text-blue-100/80 font-medium mb-6 text-center">
          Search, compare, and buy from a wide range of verified vehicles. Fast, easy, and secure.
        </p>
        {/* Search Bar */}
        <form className="w-full flex flex-col sm:flex-row items-center gap-4 mb-4">
          <input
            type="text"
            placeholder="Search by make, model, or keyword..."
            className="flex-1 px-5 py-3 rounded-full border border-blue-300 focus:border-yellow-400 focus:ring-2 focus:ring-yellow-300 outline-none text-lg bg-white/90 dark:bg-blue-900/80 text-blue-900 dark:text-white placeholder:text-blue-400/70"
            aria-label="Search cars"
          />
          <button
            type="submit"
            className="px-7 py-3 bg-gradient-to-r from-yellow-400 to-yellow-500 text-blue-900 font-bold rounded-full shadow-md hover:from-yellow-500 hover:to-yellow-400 transition-all text-lg border border-yellow-300"
          >
            Search
          </button>
        </form>
        <Link
          href="/cars"
          className="inline-block px-8 py-3 bg-gradient-to-r from-blue-700 to-blue-900 text-white text-lg font-semibold rounded-full shadow-lg hover:from-blue-900 hover:to-blue-700 transition-all border border-blue-800/40"
        >
          Browse All Cars
        </Link>
      </section>
      {/* Feature Highlights */}
      <section className="relative z-10 w-full max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-10 mt-16 px-1">
        <div className="bg-white/90 dark:bg-blue-950/80 border border-blue-200/40 rounded-2xl p-8 shadow-xl flex flex-col items-center">
          <svg width="40" height="40" fill="none" className="mb-4 text-yellow-400"><circle cx="20" cy="20" r="20" fill="currentColor" fillOpacity="0.15"/><path d="M13 20h14M20 13v14" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/></svg>
          <h3 className="font-bold text-xl mb-2 text-blue-900 dark:text-white">Easy Financing</h3>
          <p className="text-base text-blue-800/80 dark:text-blue-100/80 text-center">Get instant approval and flexible payment options tailored for you.</p>
        </div>
        <div className="bg-white/90 dark:bg-blue-950/80 border border-blue-200/40 rounded-2xl p-8 shadow-xl flex flex-col items-center">
          <svg width="40" height="40" fill="none" className="mb-4 text-blue-400"><circle cx="20" cy="20" r="20" fill="currentColor" fillOpacity="0.15"/><path d="M12 20l6 6 10-10" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/></svg>
          <h3 className="font-bold text-xl mb-2 text-blue-900 dark:text-white">Verified Listings</h3>
          <p className="text-base text-blue-800/80 dark:text-blue-100/80 text-center">All cars are thoroughly inspected and quality assured for peace of mind.</p>
        </div>
        <div className="bg-white/90 dark:bg-blue-950/80 border border-blue-200/40 rounded-2xl p-8 shadow-xl flex flex-col items-center">
          <svg width="40" height="40" fill="none" className="mb-4 text-yellow-400"><circle cx="20" cy="20" r="20" fill="currentColor" fillOpacity="0.15"/><path d="M15 27h10M15 20h10M15 13h10" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/></svg>
          <h3 className="font-bold text-xl mb-2 text-blue-900 dark:text-white">Seamless Process</h3>
          <p className="text-base text-blue-800/80 dark:text-blue-100/80 text-center">From browsing to buying, enjoy a smooth, digital-first experience.</p>
        </div>
      </section>
    </main>
  );
}
