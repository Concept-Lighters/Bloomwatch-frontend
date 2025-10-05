import React from "react";
import { GoogleMap, LoadScript, Marker, Circle } from "@react-google-maps/api";
import { Home, Calendar, Map, Plus, Minus, Crosshair } from "lucide-react";
import { useNavigate } from "react-router"

const containerStyle = {
  width: "100%",
  height: "100%",
};

const center = {
  lat: 5.6037, // Accra (example location)
  lng: -0.1870,
};

export default function CropHealthMap() {

  const navigate = useNavigate();

  const handleNext = () => {
        navigate("/crop-health");

  }
  return (
    <div className="w-full h-screen flex flex-col bg-white font-sans">
      {/* Header */}
      <div className="flex justify-between items-center p-4">
        <h1 className="text-lg font-semibold">Crop Health Map</h1>
        <button className="text-indigo-600 text-sm font-medium"
         >
          Add Farm Location
        </button>
      </div>

      {/* Tabs */}
      <div className="flex justify-center gap-6 p-5">
        <button className="px-4 py-2 text-white bg-indigo-600 rounded-md"
        onClick={handleNext}>
          Health
        </button>
        <button className="px-4 py-2 text-gray-600"
        onClick={() => navigate("/crop-satellite")}
        >Satellite</button>
        <button className="px-4 py-2 text-gray-600"
        onClick={() => navigate("/crop-wealth")}
        >Weather</button>
      </div>

      {/* Google Map Section */}
      <div className="relative flex-1">
        <LoadScript googleMapsApiKey="YOUR_GOOGLE_MAPS_API_KEY">
          <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={13}>
            {/* Example farm markers */}
            <Marker position={center} label="Main Farm" />
            <Marker position={{ lat: 5.6137, lng: -0.1800 }} label="North Field" />

            {/* Example field boundaries */}
            <Circle
              center={center}
              radius={500}
              options={{
                strokeColor: "#4ade80",
                strokeOpacity: 0.8,
                strokeWeight: 2,
                fillColor: "#4ade8033",
                fillOpacity: 0.35,
              }}
            />
          </GoogleMap>
        </LoadScript>

        {/* Floating Buttons */}
        <div className="absolute right-4 top-1/3 flex flex-col gap-2 z-10">
          <button className="p-2 bg-white rounded-full shadow">
            <Plus size={18} />
          </button>
          <button className="p-2 bg-white rounded-full shadow">
            <Minus size={18} />
          </button>
          <button className="p-2 bg-white rounded-full shadow">
            <Crosshair size={18} />
          </button>
        </div>

        {/* Health Condition Card */}
        <div className="absolute bottom-4 left-4 right-4 bg-white rounded-lg shadow p-3 text-sm z-10">
          <div className="flex justify-between items-center">
            <h2 className="font-semibold">Health Condition</h2>
            <button className="text-gray-400 text-lg">×</button>
          </div>
          <div className="flex items-center justify-between mt-2">
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-green-500"></span>
              <span>Excellent</span>
            </div>
            <span>80-100%</span>
          </div>
          <div className="flex items-center justify-between mt-1">
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-yellow-400"></span>
              <span>Moderate Stress</span>
            </div>
            <span>50-79%</span>
          </div>
          <p className="text-xs text-gray-500 mt-2">
            Updated: 2 days ago • NASA Landsat
          </p>
        </div>
      </div>

      {/* Bottom Nav */}
      <div className="flex justify-around items-center border-t py-2 bg-white">
        <div className="flex flex-col items-center text-indigo-600">
          <Home size={20} 
          onClick={()=> navigate('/dashboard')}
          />
          <span className="text-xs">Home</span>
        </div>
        <div className="flex flex-col items-center text-gray-500">
          <Calendar size={20}
          onClick={()=> navigate('/calendar')}
          />
          <span className="text-xs">Calendar</span>
        </div>
        <div className="flex flex-col items-center text-gray-500">
          <Map size={20}
          onClick={()=> navigate('/crop-health')}
          />
          <span className="text-xs">Crop Map</span>
        </div>
      </div>
    </div>
  );
}
