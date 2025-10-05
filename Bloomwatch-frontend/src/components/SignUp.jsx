/*
CreateAccount.jsx
Tailwind + React single-file component that recreates the onboarding signup screen from the provided image.
Instructions:
1. Make sure Tailwind CSS is configured in your React project.
2. Import and render <CreateAccount /> in your app (for example in App.jsx).
*/

import React, { useState } from "react";
import { Eye, EyeOff, Calendar, ChevronDown } from "lucide-react";
import { Link, useNavigate } from "react-router";
import { FcGoogle } from "react-icons/fc";
import { FaApple } from "react-icons/fa";

export default function SignUp() {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);

  const handleSignUp = (e) => {
    e.preventDefault();
    // After successful signup, navigate to farm setup
    navigate('/farm-setup');
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 p-4">
      <div className="w-full max-w-sm bg-white rounded-2xl shadow-lg p-6">
        {/* Header */}
        <h1 className="text-2xl font-semibold text-gray-900 text-center">Create Your Account</h1>
        <p className="text-sm text-gray-500 text-center mt-1">
          Sign up to access your health records and services.
        </p>

        {/* Social buttons */}
        <div className="flex gap-3 mt-6">
          <button className="flex-1 border border-gray-200 py-2 rounded-lg flex items-center justify-center gap-2 text-sm font-medium hover:bg-gray-50">
            <FcGoogle /> Google
          </button>
          <button className="flex-1 border border-gray-200 py-2 rounded-lg flex items-center justify-center gap-2 text-sm font-medium hover:bg-gray-50">
            <FaApple/> Apple
          </button>
        </div>

        {/* Divider */}
        <div className="flex items-center justify-center my-5">
          <div className="flex-1 border-t border-gray-200" />
          <span className="mx-2 text-xs text-gray-400">Or continue manually</span>
          <div className="flex-1 border-t border-gray-200" />
        </div>

        {/* Form */}
        <form onSubmit={handleSignUp} className="space-y-4">
          <div>
            <label className="text-sm font-medium text-gray-700">Full Name</label>
            <input
              type="text"
              defaultValue="Ama"
              className="mt-1 w-full border border-gray-200 rounded-lg px-3 py-2 text-gray-800 focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
          </div>

          <div>
            <label className="text-sm font-medium text-gray-700">Date of Birth</label>
            <div className="relative mt-1">
              <input
                type="text"
                placeholder="dd/mm/yyy"
                className="w-full border border-gray-200 rounded-lg px-3 py-2 text-gray-800 focus:outline-none focus:ring-2 focus:ring-purple-500 pr-10"
              />
              <Calendar className="absolute right-3 top-2.5 text-gray-400 w-5 h-5" />
            </div>
          </div>

          <div>
            <label className="text-sm font-medium text-gray-700">Gender</label>
            <div className="relative mt-1">
              <select className="appearance-none w-full border border-gray-200 rounded-lg px-3 py-2 text-gray-800 focus:outline-none focus:ring-2 focus:ring-purple-500">
                <option>Female</option>
                <option>Male</option>
                <option>Other</option>
              </select>
              <ChevronDown className="absolute right-3 top-2.5 text-gray-400 w-5 h-5 pointer-events-none" />
            </div>
          </div>

          <div>
            <label className="text-sm font-medium text-gray-700">Phone Number</label>
            <input
              type="text"
              placeholder="020 123 456 7890"
              className="mt-1 w-full border border-gray-200 rounded-lg px-3 py-2 text-gray-800 focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
          </div>

          <div>
            <label className="text-sm font-medium text-gray-700">Password</label>
            <div className="relative mt-1">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="••••••••"
                className="w-full border border-gray-200 rounded-lg px-3 py-2 text-gray-800 focus:outline-none focus:ring-2 focus:ring-purple-500 pr-10"
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

          <button
            type="submit"
            className="w-full mt-4 py-3 rounded-full bg-purple-700 text-white font-medium text-lg shadow-md hover:opacity-95 focus:outline-none focus:ring-4 focus:ring-purple-200"
          >
            Create Account
          </button>
        </form>

        <p className="text-center text-sm text-gray-500 mt-4">
          Already have an account? <Link
              to="/login"
              className="text-purple-700 font-medium underline"
            >
              Login
            </Link>
            </p>
      </div>
    </div>
  );
}
