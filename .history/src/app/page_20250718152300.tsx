import Link from "next/link";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center  bg-white w-full">
      <section className="w-full text-center py-20 px-0">
        <h1 className="text-5xl sm:text-6xl font-extrabold tracking-tight mb-4 text-gray-900">
          Find Your Next Car
        </h1>
        <p className="text-lg sm:text-xl text-gray-700 font-medium mb-8">
          Shop, compare, and buy from a wide range of quality vehicles. Easy, transparent, and hassle-free.
        </p>
        {/* Search Bar (not functional) */}
        <form className="w-full flex flex-col sm:flex-row items-center gap-3 mb-8 px-4 max-w-3xl mx-auto">
          <input
            type="text"
            placeholder="Search by make, model, or keyword"
            className="flex-1 px-5 py-3 rounded-full border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none text-lg bg-white text-gray-900 placeholder:text-gray-400"
            aria-label="Search cars"
          />
          <button
            type="submit"
            className="px-7 py-3 bg-blue-600 text-white font-bold rounded-full shadow-md hover:bg-blue-700 transition-all text-lg"
          >
            Search
          </button>
        </form>
        <Link
          href="/cars"
          className="inline-block px-8 py-3 bg-blue-600 text-white text-lg font-semibold rounded-full shadow-md hover:bg-blue-700 transition"
        >
          Browse All Cars
        </Link>
      </section>
      <section className="w-full grid grid-cols-1 sm:grid-cols-3 gap-8 mt-12 px-4">
        <div className="bg-gray-50 border border-gray-200 rounded-2xl p-6 shadow-sm flex flex-col items-center w-full">
          <svg width="32" height="32" fill="none" className="mb-3 text-blue-600"><circle cx="16" cy="16" r="16" fill="currentColor" fillOpacity="0.08"/><path d="M10 16h12M16 10v12" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/></svg>
          <h3 className="font-bold text-lg mb-2 text-gray-900">Easy Financing</h3>
          <p className="text-sm text-gray-600">Get instant approval and flexible payment options tailored for you.</p>
        </div>
        <div className="bg-gray-50 border border-gray-200 rounded-2xl p-6 shadow-sm flex flex-col items-center w-full">
          <svg width="32" height="32" fill="none" className="mb-3 text-blue-600"><circle cx="16" cy="16" r="16" fill="currentColor" fillOpacity="0.08"/><path d="M8 16l4 4 8-8" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/></svg>
          <h3 className="font-bold text-lg mb-2 text-gray-900">Verified Listings</h3>
          <p className="text-sm text-gray-600">All cars are thoroughly inspected and quality assured for peace of mind.</p>
        </div>
        <div className="bg-gray-50 border border-gray-200 rounded-2xl p-6 shadow-sm flex flex-col items-center w-full">
          <svg width="32" height="32" fill="none" className="mb-3 text-blue-600"><circle cx="16" cy="16" r="16" fill="currentColor" fillOpacity="0.08"/><path d="M12 20h8M12 16h8M12 12h8" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/></svg>
          <h3 className="font-bold text-lg mb-2 text-gray-900">Seamless Process</h3>
          <p className="text-sm text-gray-600">From browsing to buying, enjoy a smooth, digital-first experience.</p>
        </div>
      </section>
    </main>
  );
}
