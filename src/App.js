import React, { useState } from 'react';
import { Search, MapPin, ChevronDown, Lightbulb } from 'lucide-react';
import Dashboard from './Dashboard';
import CalendarScreen from './CalendarScreen';
import NewTask from './NewTask';

// First Screen - Farm Location Setup
function FarmLocationSetup({ onNext }) {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedRegion, setSelectedRegion] = useState('Greater Accra');
  const [selectedDistrict, setSelectedDistrict] = useState('Accra Metro');

  const regions = ['Greater Accra', 'Northern', 'Upper East', 'Upper West', 'Central', 'Volta', 'Ashanti', 'Eastern', 'Western', 'Ahafo', 'Savannah', 'Oti', 'Bono East', 'Bono', 'Western North'];
  
  // Districts mapped to each region
  const regionDistricts = {
    'Greater Accra': ['Accra Metro', 'Tema Metro', 'Ga West', 'Ga East', 'Ga South', 'Ga Central', 'Adentan', 'Ashaiman', 'Kpone Katamanso', 'La Nkwantanang Madina', 'Ledzokuku', 'Shai Osudoku',
    'Ningo Prampram', 'Krowor', 'La Dade Kotopon', 'Ablekuma North', 'Ablekuma West', 'Ablekuma Central', 'Ayawaso Central', 'Ayawaso East', 'Ayawaso North', 'Ayawaso West', 'Okaikwei North', 
    'Okaikwei Central', 'Korle Klottey', 'Weija Gbawe'],
    'Northern': ['Tamale Metro', 'Sagnarigu', 'Kumbungu', 'Tolon', 'Savelugu', 'Nanton', 'Karaga', 'Gushegu', 'Zabzugu', 'Tatale Sanguli', 'Yendi', 'Mion', 'Saboba', 'Chereponi', 'Kpandai', 
    'Nanumba North', 'Nanumba South'],
    'Upper East': ['Bolgatanga', 'Bongo', 'Builsa North', 'Builsa South', 'Kassena Nankana West', 'Kassena Nankana East', 'Talensi', 'Nabdam', 'Bawku West', 'Bawku', 'Garu', 'Tempane', 'Binduri', 'Pusiga'],
    'Upper West': ['Wa', 'Wa East', 'Wa West', 'Nadowli Kaleo', 'Daffiama Bussie Issa', 'Sissala East', 'Sissala West', 'Jirapa', 'Lambussie', 'Lawra', 'Nandom'],
    'Central': ['Cape Coast Metro', 'Komenda Edina Eguafo Abirem', 'Abura Asebu Kwamankese', 'Mfantsiman', 'Ajumako Enyan Esiam', 'Gomoa West', 'Gomoa East', 'Effutu', 'Awutu Senya East', 'Awutu Senya West', 
    'Agona West', 'Agona East', 'Asikuma Odoben Brakwa', 'Assin North', 'Assin Central', 'Assin South', 'Twifo Atti Morkwa', 'Hemang Lower Denkyira', 'Upper Denkyira East', 'Upper Denkyira West', 'Ekumfi'],
    'Volta': ['Ho', 'Ho West', 'Adaklu', 'Agotime Ziope', 'Hohoe', 'Afadjato South', 'South Dayi', 'North Dayi', 'Kpando', 'Biakoye', 'Jasikan', 'Kadjebi', 'Krachi East', 'Krachi West', 'Krachi Nchumuru', 
    'Nkwanta South', 'Nkwanta North', 'Keta', 'Anloga', 'Ketu South', 'Ketu North', 'Akatsi South', 'Akatsi North', 'Central Tongu', 'North Tongu', 'South Tongu'],
    'Ashanti': ['Kumasi Metro', 'Asokore Mampong', 'Oforikrom', 'Old Tafo', 'Suame', 'Kwadaso', 'Nhyiaeso', 'Asokwa', 'Bantama', 'Kwabre East', 'Afigya Kwabre South', 'Atwima Nwabiagya North', 'Atwima Nwabiagya South', 
    'Bosomtwe', 'Ejisu', 'Mampong', 'Sekyere Afram Plains', 'Sekyere Central', 'Sekyere East', 'Sekyere Kumawu', 'Sekyere South', 'Ejura Sekyedumase', 'Offinso North', 'Offinso South', 'Ahafo Ano North', 'Ahafo Ano South East', 
    'Ahafo Ano South West', 'Adansi North', 'Adansi Asokwa', 'Obuasi', 'Obuasi East', 'Bekwai', 'Bosome Freho', 'Atwima Mponua', 'Atwima Kwanwoma', 'Amansie Central', 'Amansie South', 'Amansie West'],
    'Eastern': ['New Juaben South', 'New Juaben North', 'Nsawam Adoagyiri', 'Akuapem North', 'Akuapem South', 'Okere', 'Suhum', 'Ayensuano', 'West Akim', 'East Akim', 'Atiwa West', 'Atiwa East', 'Fanteakwa North', 'Fanteakwa South', 
    'Kwahu West', 'Kwahu East', 'Kwahu South', 'Kwahu Afram Plains North', 'Kwahu Afram Plains South', 'Akyemansa', 'Asuogyaman', 'Yilo Krobo', 'Lower Manya Krobo', 'Upper Manya Krobo', 'Achiase', 'Akwatia', 'Denkyembour', 'Upper West Akim', 'Birim North', 'Birim Central', 'Birim South', 'Kwaebibirem'],
    'Western': ['Sekondi Takoradi Metro', 'Shama', 'Ahanta West', 'Nzema East', 'Ellembelle', 'Jomoro', 'Tarkwa Nsuaem', 'Prestea Huni Valley', 'Wassa East', 'Mpohor', 'Amenfi East', 'Amenfi Central', 'Amenfi West'],
    'Ahafo': ['Asunafo North', 'Asunafo South', 'Asutifi North', 'Asutifi South', 'Tano North', 'Tano South'],
    'Savannah': ['Bole', 'Central Gonja', 'East Gonja', 'North Gonja', 'Sawla Tuna Kalba', 'North East Gonja', 'West Gonja'],
    'Oti': ['Krachi East', 'Krachi West', 'Krachi Nchumuru', 'Nkwanta South', 'Nkwanta North', 'Biakoye', 'Jasikan', 'Kadjebi'],
    'Bono East': ['Techiman', 'Techiman North', 'Nkoranza North', 'Nkoranza South', 'Kintampo North', 'Kintampo South', 'Atebubu Amantin', 'Sene West', 'Sene East', 'Pru West', 'Pru East'],
    'Bono': ['Sunyani', 'Sunyani West', 'Berekum East', 'Berekum West', 'Dormaa East', 'Dormaa West', 'Dormaa Central', 'Jaman North', 'Jaman South', 'Tain', 'Wenchi', 'Banda'],
    'Western North': ['Sefwi Wiawso', 'Sefwi Akontombra', 'Aowin', 'Suaman', 'Bodi', 'Juaboso', 'Bia East', 'Bia West']
  };

  // Get districts for selected region
  const districts = regionDistricts[selectedRegion] || [];

  const handleNext = () => {
    onNext({ region: selectedRegion, district: selectedDistrict });
  };

  return (
    <div className="min-h-screen bg-white flex flex-col max-w-md mx-auto">
      {/* Header */}
      <div className="p-6 pb-4">
        <h1 className="text-3xl font-myFont2 font-bold text-headercolor mb-1 ">Setup Your Location</h1>
        <p className="font-myFont text-sm text-textcolor">Step 1 of 2</p>
        
        {/* Progress Bar */}
        <div className="mt-4 w-full bg-gray-200 rounded-full h-2">
          <div className="bg-progressbarcolor h-2 rounded-full" style={{ width: '50%' }}></div>
        </div>
      </div>

      {/* Map Section */}
      <div className="px-6 mb-6 mt-5">
        <div className="relative w-full h-48 bg-gray-100 rounded-xl overflow-hidden border border-gray-200">
          {/* Map Image */}
          <img 
            src="/map.png" 
            alt="Map Location" 
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      {/* Content Section */}
      <div className="px-6 flex-1">
        <h2 className="text-2xl font-myFont font-bold text-headercolor mb-2">Where is your farm located?</h2>
        <p className="text-base text-subheadcolor font-myFont mb-6">
          This helps us provide accurate weather data, crop recommendations and local alerts specific to your area
        </p>

        {/* Search Input */}
        <div className="relative mb-6">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
          <input
            type="text"
            placeholder="Search Region"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-10 pr-4 py-3 border border-borderbarcolor rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
          />
        </div>

        {/* Region Selector */}
        <div className="mb-4">
          <label className="block text-sm font-myFont font-semibold text-gray-900 mb-2 uppercase tracking-wide">
            Select Region
          </label>
          <div className="relative">
            <select
              value={selectedRegion}
              onChange={(e) => {
                setSelectedRegion(e.target.value);
                // Reset district when region changes
                const newDistricts = regionDistricts[e.target.value] || [];
                setSelectedDistrict(newDistricts[0] || '');
              }}
              className="w-full px-4 py-3 border border-borderbarcolor rounded-xl appearance-none focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent bg-white"
            >
              {regions.map((region) => (
                <option key={region} value={region}>
                  {region}
                </option>
              ))}
            </select>
            <ChevronDown className="absolute right-4 top-1/2 transform -translate-y-1/2 text-subheadcolor w-5 h-5 pointer-events-none" />
          </div>
        </div>

        {/* District Selector */}
        <div className="mb-8">
          <label className="block text-sm font-myFont font-semibold text-subheadcolor mb-2 uppercase tracking-wide">
            Select District
          </label>
          <div className="relative">
            <select
              value={selectedDistrict}
              onChange={(e) => setSelectedDistrict(e.target.value)}
              className="w-full px-4 py-3 border border-borderbarcolor rounded-xl appearance-none focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent bg-white"
            >
              {districts.map((district) => (
                <option key={district} value={district}>
                  {district}
                </option>
              ))}
            </select>
            <ChevronDown className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5 pointer-events-none" />
          </div>
        </div>
      </div>

      {/* Next Button */}
      <div className="p-6 pt-0">
        <button 
          onClick={handleNext}
          className="w-full bg-barbackgroundcolor hover:bg-indigo-700 text-white font-semibold py-4 rounded-2xl transition-colors"
        >
          Next
        </button>
      </div>
    </div>
  );
}

// Second Screen - Choose Your Crops
function ChooseYourCrops({ onComplete, locationData }) {
  const [selectedCrops, setSelectedCrops] = useState([]);

  const crops = [
    { id: 1, name: 'Maize(Corn)', image: 'Images/crops/maize.jpg' },
    { id: 2, name: 'Cassava', image: 'Images/crops/cassava.jpg' },
    { id: 3, name: 'Yam', image: 'Images/crops/yam.jpg' },
    { id: 4, name: 'Rice', image: 'Images/crops/rice.jpg' },
    { id: 5, name: 'Groundnut(Peanuts)', image: 'Images/crops/peanut.jpg' },
    { id: 6, name: 'Plantain', image: 'Images/crops/plantain.jpg' },
    { id: 7, name: 'Millet', image: 'Images/crops/millet.jpg' },
    { id: 8, name: 'Sorghum', image: 'Images/crops/sorghum.jpg' },
    { id: 9, name: 'Cowpea', image: 'Images/crops/cowpea.jpg' },
    { id: 10, name: 'Other Crops', image: null }
  ];

  const toggleCrop = (cropId) => {
    setSelectedCrops(prev => 
      prev.includes(cropId) 
        ? prev.filter(id => id !== cropId)
        : [...prev, cropId]
    );
  };

  const handleComplete = () => {
    onComplete({ crops: selectedCrops });
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
        <button 
          onClick={handleComplete}
          className={`w-full font-semibold py-4 rounded-2xl transition-colors ${
            selectedCrops.length > 0
              ? 'bg-barbackgroundcolor hover:bg-indigo-700 text-white'
              : 'bg-gray-300 text-gray-500 cursor-not-allowed'
          }`}
          disabled={selectedCrops.length === 0}
        >
          Complete Setup
        </button>
      </div>
    </div>
  );
}

// Main App Component with Routing Logic
export default function App() {
  const [currentStep, setCurrentStep] = useState('location');
  const [setupData, setSetupData] = useState({
    location: null,
    crops: null
  });

  const handleLocationNext = (locationData) => {
    setSetupData(prev => ({ ...prev, location: locationData }));
    setCurrentStep('crops');
  };

  const handleCropsComplete = (cropsData) => {
    setSetupData(prev => ({ ...prev, crops: cropsData }));
    console.log('Setup Complete! Data:', { ...setupData, crops: cropsData });
    setCurrentStep('dashboard');
  };

  const handleNavigate = (screen) => {
    setCurrentStep(screen);
  };

  return (
    <div>
      {currentStep === 'location' && (
        <FarmLocationSetup onNext={handleLocationNext} />
      )}
      {currentStep === 'crops' && (
        <ChooseYourCrops 
          onComplete={handleCropsComplete} 
          locationData={setupData.location}
        />
      )}
      {currentStep === 'dashboard' && (
        <Dashboard 
          userName="Ray"
          location={setupData?.location ? `${setupData.location.district}, ${setupData.location.region}` : 'Tema, Accra'}
          onNavigate={handleNavigate}
        />
      )}
      {currentStep === 'calendar' && (
        <CalendarScreen onNavigate={handleNavigate} />
      )}
      {currentStep === 'newTask' && (
        <NewTask 
          onNavigate={handleNavigate}
          onComplete={(taskData) => {
            console.log('Task completed:', taskData);
            handleNavigate('calendar');
          }}
        />
      )}
    </div>
  );
}