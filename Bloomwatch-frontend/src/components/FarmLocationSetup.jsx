import React, { useState } from 'react';
import { Search, MapPin, ChevronDown } from 'lucide-react';
import { useNavigate } from 'react-router';
import farmService from '../services/farmService';

// Farm Location Setup - Step 1 of Farm Onboarding
export default function FarmLocationSetup() {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedRegion, setSelectedRegion] = useState('Greater Accra');
  const [selectedDistrict, setSelectedDistrict] = useState('Accra Metro');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

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

  const handleNext = async () => {
    setError('');
    setLoading(true);

    try {
      // Save to backend
      await farmService.setupLocation({ 
        region: selectedRegion, 
        district: selectedDistrict 
      });
      
      // Store location data in localStorage
      localStorage.setItem('farmLocation', JSON.stringify({ region: selectedRegion, district: selectedDistrict }));
      navigate('/choose-crops');
    } catch (err) {
      setError(err.message || 'Failed to save location. Please try again.');
      console.error('Location setup error:', err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-white flex flex-col max-w-md mx-auto">
      {/* Header */}
      <div className="p-6 pb-4">
        <h1 className="text-3xl font-myFont2 font-bold text-headercolor mb-1">Setup Your Location</h1>
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
        {error && (
          <div className="mb-4 bg-red-50 border border-red-200 text-red-600 px-4 py-3 rounded-lg text-sm">
            {error}
          </div>
        )}
        <button 
          onClick={handleNext}
          disabled={loading}
          className="w-full bg-barbackgroundcolor hover:bg-indigo-700 text-white font-semibold py-4 rounded-2xl transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {loading ? 'Saving...' : 'Next'}
        </button>
      </div>
    </div>
  );
}
