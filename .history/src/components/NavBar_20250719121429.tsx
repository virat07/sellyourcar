"use client";

import Link from "next/link";
import { useState } from "react";
import { HiMenu, HiX } from "react-icons/hi";

export default function NavBar() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <nav className="w-full bg-white border-b border-[var(--border)] py-3 px-6 flex items-center justify-between fixed top-0 left-0 z-50 shadow-none">
      <div className="text-xl font-bold tracking-tight text-[var(--accent)]">
        <Link href="/">Caramel</Link>
      </div>
      {/* Desktop Menu */}
      <div className="hidden md:flex gap-6 text-base font-medium">
        <Link href="/" className="hover:text-[var(--accent)] transition-colors">Home</Link>
        <Link href="/cars" className="hover:text-[var(--accent)] transition-colors">Browse Cars</Link>
        <Link href="/auth/signin" className="hover:text-[var(--accent)] transition-colors">Sign In</Link>
        <Link
          href="/auth/signup"
          style={{ color: "#fff" }}
          className="ml-2 px-4 py-1.5 bg-blue-600 rounded-full hover:bg-blue-700 transition-colors font-semibold"
        >
          Sign Up
        </Link>
      </div>
      {/* Hamburger Icon for Mobile */}
      <button
        className="md:hidden text-3xl text-[var(--accent)] focus:outline-none"
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle menu"
      >
        {menuOpen ? <HiX /> : <HiMenu />}
      </button>
      {/* Mobile Menu */}
      {menuOpen && (
        <div className="absolute top-full left-0 w-full bg-white border-b border-[var(--border)] flex flex-col items-center gap-4 py-4 shadow-lg md:hidden animate-fade-in z-50">
          <Link href="/" className="hover:text-[var(--accent)] transition-colors w-full text-center" onClick={() => setMenuOpen(false)}>Home</Link>
          <Link href="/cars" className="hover:text-[var(--accent)] transition-colors w-full text-center" onClick={() => setMenuOpen(false)}>Browse Cars</Link>
          <Link href="/auth/signin" className="hover:text-[var(--accent)] transition-colors w-full text-center" onClick={() => setMenuOpen(false)}>Sign In</Link>
          <Link
            href="/auth/signup"
            style={{ color: "#fff" }}
            className="px-4 py-1.5 bg-blue-600 rounded-full hover:bg-blue-700 transition-colors font-semibold w-full text-center"
            onClick={() => setMenuOpen(false)}
          >
            Sign Up
          </Link>
        </div>
      )}
    </nav>
  );
} 