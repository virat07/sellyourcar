export default function SignUpPage() {
  return (
    <main className="relative flex flex-col items-center justify-center min-h-[90vh] pt-32 pb-16 px-4 overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-blue-900 via-purple-900 to-black animate-gradient-move opacity-80" />
      <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[120vw] h-[60vh] bg-gradient-to-r from-cyan-400/30 via-blue-500/20 to-purple-600/30 rounded-full blur-3xl animate-pulse-slow" />
      <form className="relative z-10 bg-white/10 backdrop-blur-lg rounded-3xl shadow-2xl border border-blue-400/30 p-10 w-full max-w-md flex flex-col gap-6">
        <h2 className="text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-blue-400 to-purple-500 animate-gradient-x mb-2 text-center">Sign Up</h2>
        <label className="text-left font-medium text-white/80">Name</label>
        <input type="text" className="border border-cyan-400/30 rounded px-3 py-2 bg-white/20 text-white placeholder:text-cyan-200/60 focus:border-cyan-400 focus:outline-none" placeholder="Your Name" required />
        <label className="text-left font-medium text-white/80">Email</label>
        <input type="email" className="border border-cyan-400/30 rounded px-3 py-2 bg-white/20 text-white placeholder:text-cyan-200/60 focus:border-cyan-400 focus:outline-none" placeholder="you@email.com" required />
        <label className="text-left font-medium text-white/80">Password</label>
        <input type="password" className="border border-cyan-400/30 rounded px-3 py-2 bg-white/20 text-white placeholder:text-cyan-200/60 focus:border-cyan-400 focus:outline-none" placeholder="Password" required />
        <button type="submit" className="mt-4 px-4 py-2 bg-gradient-to-r from-cyan-400 to-blue-500 text-white rounded-full shadow-lg hover:from-blue-500 hover:to-cyan-400 transition-all font-bold border border-blue-400/40 animate-glow">Sign Up</button>
        <div className="text-sm text-center mt-2 text-cyan-200">
          Already have an account? <a href="/auth/signin" className="text-cyan-300 hover:underline">Sign In</a>
        </div>
      </form>
    </main>
  );
} 