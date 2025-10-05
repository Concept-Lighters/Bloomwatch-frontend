import React from "react"
import { BrowserRouter as Router, Routes, Route } from "react-router"
import OnboardingCard1 from "./components/OnboardingCard1"
import OnboardingCard2 from "./components/OnboardingCard2"
import OnboardingCard3 from "./components/OnboardingCard3"
import SignUp from "./components/SignUp"
import Login from "./components/Login"
import CropHealth from "./components/cropHealth/CropHealth"
import CropSatellite from "./components/cropHealth/CropSatellite"
import FarmLocationSetup from "./components/FarmLocationSetup"
import ChooseYourCrops from "./components/ChooseYourCrops"
import Dashboard from "./components/Dashboard"
import CalendarScreen from "./components/CalendarScreen"
import NewTask from "./components/NewTask"
import CropWeather from "./components/cropHealth/CropWeather"


function App() {

  return (
    <>
      <Router> 
        <Routes>
          {/* Initial Onboarding Screens (Vite) */}
          <Route path="/" element={<OnboardingCard1 />} />
          <Route path="/onboarding2" element={<OnboardingCard2 />} />
          <Route path="/onboarding3" element={<OnboardingCard3/>}/>
          
          {/* Authentication Screens (Vite) */}
          <Route path="/signup" element={<SignUp/>} />
          <Route path="/login" element={<Login/>} />
          
          {/* Farm Setup Screens (CRA - migrated) */}
          <Route path="/farm-setup" element={<FarmLocationSetup />} />
          <Route path="/choose-crops" element={<ChooseYourCrops />} />
          
          {/* Main App Screens (CRA - migrated) */}
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/calendar" element={<CalendarScreen />} />
          <Route path="/new-task" element={<NewTask />} />
          
          {/* Crop Health Screens (Vite) */}
          <Route path="/crop-health" element={<CropHealth />} />
          <Route path="/crop-satellite" element={<CropSatellite />} />
          <Route path="/crop-wealth" element={<CropWeather />} />
         </Routes>
       </Router>
    </>
  )
}

export default App
