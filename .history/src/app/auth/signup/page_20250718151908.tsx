export default function SignUpPage() {
  return (
    <main className="flex flex-col items-center justify-center min-h-[90vh] bg-white pt-28 pb-16 px-2">
      <form className="bg-white border border-gray-200 rounded-3xl shadow-lg p-10 w-full max-w-md flex flex-col gap-6">
        <h2 className="text-3xl font-extrabold text-blue-900 mb-2 text-center">Sign Up</h2>
        <label className="text-left font-medium text-gray-700">Name</label>
        <input type="text" className="border border-gray-300 rounded px-3 py-2 bg-white text-gray-900 placeholder:text-gray-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 focus:outline-none" placeholder="Your Name" required />
        <label className="text-left font-medium text-gray-700">Email</label>
        <input type="email" className="border border-gray-300 rounded px-3 py-2 bg-white text-gray-900 placeholder:text-gray-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 focus:outline-none" placeholder="you@email.com" required />
        <label className="text-left font-medium text-gray-700">Password</label>
        <input type="password" className="border border-gray-300 rounded px-3 py-2 bg-white text-gray-900 placeholder:text-gray-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 focus:outline-none" placeholder="Password" required />
        <button type="submit" className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-full shadow hover:bg-blue-700 transition-all font-bold">Sign Up</button>
        <div className="text-sm text-center mt-2 text-gray-600">
          Already have an account? <a href="/auth/signin" className="text-blue-600 hover:underline">Sign In</a>
        </div>
      </form>
    </main>
  );
} 