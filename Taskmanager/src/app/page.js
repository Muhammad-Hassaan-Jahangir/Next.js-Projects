export default function LoginPage() {
  return (
    <div className="flex flex-col min-h-screen bg-black text-white">
      {/* Header */}
      <header>
        {/* Your Navbar component here */}
      </header>

      {/* Main Content */}
      <main className="flex-grow flex items-center justify-center px-4">
        <div className="bg-gray-900 p-8 rounded-lg shadow-lg w-full max-w-md">
          <h1 className="text-2xl font-bold text-center mb-6">Login Here</h1>

          <label className="block mb-2">Email</label>
          <input
            type="email"
            className="w-full p-3 mb-4 rounded-md text-black"
          />

          <label className="block mb-2">Password</label>
          <input
            type="password"
            className="w-full p-3 mb-6 rounded-md text-black"
          />

          <div className="flex justify-center gap-4">
            <button className="bg-green-600 hover:bg-green-700 px-6 py-2 rounded-md">
              Login
            </button>
            <button className="bg-orange-500 hover:bg-orange-600 px-6 py-2 rounded-md">
              Reset
            </button>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer>
        {/* Your Footer component here */}
      </footer>
    </div>
  );
}
