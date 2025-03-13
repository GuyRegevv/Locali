import React, { useState } from "react";
import Logo from "../components/Logo";

export default function AuthPage({ onLoginSuccess }) {
  // State for form inputs and mode toggle
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");

  // Toggle between login and signup modes
  const toggleAuthMode = () => {
    setIsLogin(!isLogin);
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Call the onLoginSuccess function to simulate successful login
    if (onLoginSuccess) {
      onLoginSuccess();
    }

    // For now, just log the form data (we'll implement actual auth later)
    console.log(isLogin ? "Login attempt" : "Signup attempt", {
      email,
      password,
      name: isLogin ? null : name,
    });

    // Clear form
    setEmail("");
    setPassword("");
    if (!isLogin) setName("");
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-4">
      {/* Logo placeholder */}
      <Logo />

      {/* Auth Card */}
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        <h1 className="text-2xl font-bold text-center text-gray-800 mb-6">
          {isLogin ? "Login to Your Account" : "Create New Account"}
        </h1>

        <form onSubmit={handleSubmit}>
          {/* Name field (only for signup) */}
          {!isLogin && (
            <div className="mb-4">
              <label
                htmlFor="name"
                className="block text-gray-700 text-sm font-bold mb-2"
              >
                Full Name
              </label>
              <input
                id="name"
                type="text"
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-400"
                placeholder="Enter your full name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>
          )}

          {/* Email field */}
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              Email Address
            </label>
            <input
              id="email"
              type="email"
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-400"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          {/* Password field */}
          <div className="mb-6">
            <label
              htmlFor="password"
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              Password
            </label>
            <input
              id="password"
              type="password"
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-400"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          {/* Submit button */}
          <button
            type="submit"
            className="w-full bg-gray-700 hover:bg-gray-800 text-white font-bold py-2 px-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-500 transition-colors"
          >
            {isLogin ? "Login" : "Sign Up"}
          </button>
        </form>

        {/* Auth mode toggle */}
        <div className="mt-4 text-center">
          <p className="text-gray-600">
            {isLogin ? "Don't have an account? " : "Already have an account? "}
            <button
              className="text-gray-800 font-semibold hover:underline focus:outline-none"
              onClick={toggleAuthMode}
            >
              {isLogin ? "Sign Up" : "Login"}
            </button>
          </p>
        </div>
      </div>
    </div>
  );
}
