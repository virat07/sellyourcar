import Image from "next/image";

export default function Home() {
  return (
    <main className="relative flex flex-col items-center justify-center min-h-[90vh] pt-32 pb-16 px-4 overflow-hidden">
      {/* Animated gradient background */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-blue-900 via-purple-900 to-black animate-gradient-move opacity-80" />
      <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[120vw] h-[60vh] bg-gradient-to-r from-cyan-400/30 via-blue-500/20 to-purple-600/30 rounded-full blur-3xl animate-pulse-slow" />
      <section className="relative z-10 max-w-2xl w-full mx-auto bg-white/10 backdrop-blur-lg rounded-3xl shadow-2xl border border-blue-400/30 p-10 flex flex-col items-center gap-6">
        <h1 className="text-5xl sm:text-6xl font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-blue-400 to-purple-500 animate-gradient-x mb-2">
          The Future of Car Buying
        </h1>
        <p className="text-lg sm:text-xl text-white/90 font-medium mb-4">
          Discover your next car with a seamless, all-digital experience. Browse, finance, and buy—no paperwork, no hassle, just drive.
        </p>
        <a
          href="/cars"
          className="inline-block px-10 py-3 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 text-white text-xl font-bold rounded-full shadow-lg hover:from-blue-500 hover:to-cyan-400 transition-all border border-blue-400/40 ring-2 ring-cyan-400/30 animate-glow"
        >
          Browse Cars
        </a>
      </section>
    </main>
  );
}
