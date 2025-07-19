import Link from "next/link";

export default function NavBar() {
  return (
    <nav className="w-full backdrop-blur-md bg-white/10 border-b border-blue-400/30 shadow-lg py-4 px-8 flex items-center justify-between fixed top-0 left-0 z-50">
      <div className="text-2xl font-extrabold tracking-widest text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-300 to-purple-500 animate-gradient-x">
        <Link href="/">Caramel</Link>
      </div>
      <div className="flex gap-8 text-base font-semibold">
        <Link href="/" className="relative group">
          <span className="text-white group-hover:text-cyan-300 transition">Home</span>
          <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-cyan-400 group-hover:w-full transition-all duration-300"></span>
        </Link>
        <Link href="/cars" className="relative group">
          <span className="text-white group-hover:text-cyan-300 transition">Browse Cars</span>
          <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-cyan-400 group-hover:w-full transition-all duration-300"></span>
        </Link>
        <Link href="/auth/signin" className="relative group">
          <span className="text-white group-hover:text-cyan-300 transition">Sign In</span>
          <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-cyan-400 group-hover:w-full transition-all duration-300"></span>
        </Link>
        <Link href="/auth/signup" className="ml-2 px-5 py-1.5 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-full shadow-lg hover:from-cyan-400 hover:to-blue-600 transition-all font-bold border border-blue-400/40">
          Sign Up
        </Link>
      </div>
    </nav>
  );
} 