/*
Login.jsx
Tailwind + React single-file component that matches the style of the previous Create Account screen.
Instructions:
1. Make sure Tailwind CSS is configured in your React project.
2. Place the hero image from your previous onboarding screen into your `public/` folder and name it `login-hero.jpg` (or adjust the path in the <img /> tag below).
3. Import and render <Login /> in your app (for example in App.jsx).
*/

import React, { useState } from "react";
import { Eye, EyeOff } from "lucide-react";
import { Link, useNavigate } from "react-router";
import { FcGoogle } from "react-icons/fc";
import { FaApple } from "react-icons/fa";
import authService from "../services/authService";

export default function Login() {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      const response = await authService.login({ email, password });
      
      // Store user data
      if (response.user) {
        localStorage.setItem('user', JSON.stringify(response.user));
      }
      
      // Navigate based on user setup status
      if (response.user?.farmSetupComplete) {
        navigate('/dashboard');
      } else {
        navigate('/farm-setup');
      }
    } catch (err) {
      setError(err.message || 'Login failed. Please check your credentials.');
      console.error('Login error:', err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 p-4">
      <div className="w-full max-w-sm bg-white rounded-2xl shadow-lg overflow-hidden">
        {/* Hero Image
        <div className="relative h-48 bg-gray-200">
          <img
            src="/login-hero.jpg"
            alt="Login hero illustration"
            className="object-cover w-full h-full"
          />
        </div> */}

        {/* Login Content */}
        <div className="p-6">
          <h1 className="text-2xl font-semibold text-gray-900 text-center">
            Welcome Back
          </h1>
          <p className="text-sm text-gray-500 text-center mt-1">
            Login to access your account and continue where you left off.
          </p>

          {/* Social Login Buttons */}
          <div className="flex gap-3 mt-6">
            <button className="flex-1 border border-gray-200 py-2 rounded-lg flex items-center justify-center gap-2 text-sm font-medium hover:bg-gray-50">
              <FcGoogle />{" "}
              Google
            </button>
            <button className="flex-1 border border-gray-200 py-2 rounded-lg flex items-center justify-center gap-2 text-sm font-medium hover:bg-gray-50">
              <FaApple />{" "}
              Apple
            </button>
          </div>

          {/* Divider */}
          <div className="flex items-center justify-center my-5">
            <div className="flex-1 border-t border-gray-200" />
            <span className="mx-2 text-xs text-gray-400">
              Or continue manually
            </span>
            <div className="flex-1 border-t border-gray-200" />
          </div>

          {/* Login Form */}
          <form onSubmit={handleLogin} className="space-y-4">
            {error && (
              <div className="bg-red-50 border border-red-200 text-red-600 px-4 py-3 rounded-lg text-sm">
                {error}
              </div>
            )}
            
            <div>
              <label className="text-sm font-medium text-gray-700">
                Email
              </label>
              <input
                type="email"
                placeholder="Email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                disabled={loading}
                className="mt-1 w-full border border-gray-200 rounded-lg px-3 py-2 text-gray-800 focus:outline-none focus:ring-2 focus:ring-purple-500 disabled:bg-gray-100"
              />
            </div>

            <div>
              <label className="text-sm font-medium text-gray-700">
                Password
              </label>
              <div className="relative mt-1">
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="••••••••"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  disabled={loading}
                  className="w-full border border-gray-200 rounded-lg px-3 py-2 text-gray-800 focus:outline-none focus:ring-2 focus:ring-purple-500 pr-10 disabled:bg-gray-100"
                />
                {showPassword ? (
                  <EyeOff
                    className="absolute right-3 top-2.5 text-gray-400 w-5 h-5 cursor-pointer"
                    onClick={() => setShowPassword(false)}
                  />
                ) : (
                  <Eye
                    className="absolute right-3 top-2.5 text-gray-400 w-5 h-5 cursor-pointer"
                    onClick={() => setShowPassword(true)}
                  />
                )}
              </div>
            </div>

            <div className="flex justify-end">
              <a
                href="#"
                className="text-sm text-purple-700 font-medium hover:underline"
              >
                Forgot Password?
              </a>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full mt-4 py-3 rounded-full bg-purple-700 text-white font-medium text-lg shadow-md hover:opacity-95 focus:outline-none focus:ring-4 focus:ring-purple-200 hover:cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {loading ? 'Logging in...' : 'Login'}
            </button>
          </form>

          <p className="text-center text-sm text-gray-500 mt-4">
            Don't have an account?{" "}
            <Link
              to="/signup"
              className="text-purple-700 font-medium underline"
            >
              Create one
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
