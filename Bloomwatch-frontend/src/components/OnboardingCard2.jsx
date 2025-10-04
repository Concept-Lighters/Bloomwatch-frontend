import React from "react";
import { useNavigate } from "react-router";

export default function OnboardingCard2() {

  const navigate = useNavigate();

  const handleNext = () => {
    navigate("/onboarding3");
  }
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
      <div className="w-full max-w-sm bg-white rounded-2xl shadow-2xl overflow-hidden">
        {/* Hero image (top) */}
        <div className="relative h-[52vh] sm:h-96 lg:h-[480px] bg-gray-200">
          {/* Put your image in public/onboard-harvest.jpg or change the src */}
          <img
            src="/images/Card2.jpg"
            alt="Farmer protecting crops with phone app"
            className="object-cover w-full h-full"
          />
        </div>

        {/* Card content */}
        <div className="px-6 pb-6 pt-6 bg-white">
          <h1 className="text-center text-2xl font-semibold text-gray-900">
            Protect Your Harvest
          </h1>
          <p className="mt-3 text-center text-sm text-gray-600 leading-relaxed">
            Early warnings for diseases, pests, and weather. Stay ahead of
            threats before they harm your crop.
          </p>

          {/* pagination dots */}
          <div className="mt-6 flex items-center justify-center space-x-2">
            <div
              className="w-3 h-3 rounded-full bg-gray-300"
              aria-hidden="true"
            />
            <div
              className="w-8 h-3 rounded-full bg-purple-700"
              aria-hidden="true"
            />
            <div
              className="w-3 h-3 rounded-full bg-gray-300"
              aria-hidden="true"
            />
          </div>

          {/* Next button */}
          <div className="mt-6">
            <button
              onClick={handleNext}
              className="w-full py-4 rounded-full bg-purple-700 text-white font-medium text-lg shadow-md hover:opacity-95 focus:outline-none focus:ring-4 focus:ring-purple-200"
              aria-label="Next"
            >
              Next
            </button>
          </div>
        </div>

        {/* Bottom safe-area indicator (thin bar) */}
        <div className="bg-white py-2 flex justify-center">
          <div className="w-24 h-1 rounded-full bg-gray-200" />
        </div>
      </div>
    </div>
  );
}
