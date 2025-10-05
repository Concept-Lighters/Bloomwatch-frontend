import React, { useState } from 'react';
import { Lightbulb } from 'lucide-react';
import { useNavigate } from 'react-router';
import farmService from '../services/farmService';

// Choose Your Crops - Step 2 of Farm Onboarding
export default function ChooseYourCrops() {
  const navigate = useNavigate();
  const [selectedCrops, setSelectedCrops] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const crops = [
    { id: 1, name: 'Maize(Corn)', image: '/images/crops/maize.jpg' },
    { id: 2, name: 'Cassava', image: '/images/crops/cassava.jpg' },
    { id: 3, name: 'Yam', image: '/images/crops/yam.jpg' },
    { id: 4, name: 'Rice', image: '/images/crops/rice.jpg' },
    { id: 5, name: 'Groundnut(Peanuts)', image: '/images/crops/peanut.jpg' },
    { id: 6, name: 'Plantain', image: '/images/crops/plantain.jpg' },
    { id: 7, name: 'Millet', image: '/images/crops/millet.jpg' },
    { id: 8, name: 'Sorghum', image: '/images/crops/sorghum.jpg' },
    { id: 9, name: 'Cowpea', image: '/images/crops/cowpea.jpg' },
    { id: 10, name: 'Other Crops', image: null }
  ];

  const toggleCrop = (cropId) => {
    setSelectedCrops(prev => 
      prev.includes(cropId) 
        ? prev.filter(id => id !== cropId)
        : [...prev, cropId]
    );
  };

  const handleComplete = async () => {
    if (selectedCrops.length === 0) {
      setError('Please select at least one crop');
      return;
    }

    setError('');
    setLoading(true);

    try {
      // Get crop names based on selected IDs
      const cropNames = selectedCrops.map(id => {
        const crop = crops.find(c => c.id === id);
        return crop ? crop.name : null;
      }).filter(Boolean);

      // Save to backend
      await farmService.setupCrops({ crops: cropNames });
      
      // Store crops data in localStorage
      localStorage.setItem('selectedCrops', JSON.stringify(selectedCrops));
      navigate('/dashboard');
    } catch (err) {
      setError(err.message || 'Failed to save crops. Please try again.');
      console.error('Crops setup error:', err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-white flex flex-col max-w-md mx-auto">
      {/* Header */}
      <div className="p-6 pb-4">
        <h1 className="text-2xl font-myFont2 font-bold text-headercolor mb-1">Choose Your Crops</h1>
        <p className="text-sm font-myFont text-subheadcolor mb-4">Step 2 of 2</p>
        
        {/* Progress Bar */}
        <div className="w-full bg-gray-200 rounded-full h-2">
          <div className="bg-progressbarcolor h-2 rounded-full" style={{ width: '100%' }}></div>
        </div>
      </div>

      {/* Content Section */}
      <div className="px-6 flex-1 overflow-y-auto">
        <h2 className="text-lg font-bold font-myFont2 text-headercolor mb-2">What crops do you grow?</h2>
        <p className="text-sm text-subheadcolor font-myFont mb-10">
          Select all crops you currently grow or plan to grow. This helps us provide tailored advice and alerts.
        </p>

        {/* Crops Grid */}
        <div className="grid grid-cols-2 gap-4 mb-6">
          {crops.map((crop) => (
            <div
              key={crop.id}
              onClick={() => toggleCrop(crop.id)}
              className={`relative rounded-lg overflow-hidden cursor-pointer transition-all ${
                selectedCrops.includes(crop.id)
                  ? 'ring-4 ring-indigo-600'
                  : 'ring-1 ring-gray-200'
              }`}
            >
              {crop.image ? (
                <div className="relative h-32 bg-gray-100">
                  <img
                    src={crop.image}
                    alt={crop.name}
                    className="w-full h-full object-cover"
                  />
                  {selectedCrops.includes(crop.id) && (
                    <div className="absolute inset-0 bg-indigo-600 bg-opacity-30 flex items-center justify-center">
                      <div className="w-8 h-8 bg-indigo-600 rounded-full flex items-center justify-center">
                        <svg className="w-5 h-5 text-white" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" viewBox="0 0 24 24" stroke="currentColor">
                          <path d="M5 13l4 4L19 7"></path>
                        </svg>
                      </div>
                    </div>
                  )}
                </div>
              ) : (
                <div className="relative h-32 bg-purple-100 flex items-center justify-center">
                  <span className="text-4xl">🌾</span>
                  {selectedCrops.includes(crop.id) && (
                    <div className="absolute inset-0 bg-indigo-600 bg-opacity-30 flex items-center justify-center">
                      <div className="w-8 h-8 bg-indigo-600 rounded-full flex items-center justify-center">
                        <svg className="w-5 h-5 text-white" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" viewBox="0 0 24 24" stroke="currentColor">
                          <path d="M5 13l4 4L19 7"></path>
                        </svg>
                      </div>
                    </div>
                  )}
                </div>
              )}
              <div className="bg-white p-2">
                <p className="text-sm font-small font-myFont text-gray-900 text-left">{crop.name}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Pro Tip */}
        <div className="mb-6">
          <div className="flex items-start">
            <Lightbulb className="w-5 h-5 text-bulbcolor mr-2 flex-shrink-0 mt-0.5" />
            <div>
              <h3 className="text-sm font-myFont font-bold text-antextcolor mb-1">Pro Tip</h3>
              <p className="text-sm font-myFont text-antextcolor2">
                You can add or remove crops anytime from your profile settings. Start with your main crops.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Complete Setup Button */}
      <div className="p-6 pt-0">
        {error && (
          <div className="mb-4 bg-red-50 border border-red-200 text-red-600 px-4 py-3 rounded-lg text-sm">
            {error}
          </div>
        )}
        <button 
          onClick={handleComplete}
          className={`w-full font-semibold py-4 rounded-2xl transition-colors ${
            selectedCrops.length > 0 && !loading
              ? 'bg-barbackgroundcolor hover:bg-indigo-700 text-white'
              : 'bg-gray-300 text-gray-500 cursor-not-allowed'
          }`}
          disabled={selectedCrops.length === 0 || loading}
        >
          {loading ? 'Completing Setup...' : 'Complete Setup'}
        </button>
      </div>
    </div>
  );
}
