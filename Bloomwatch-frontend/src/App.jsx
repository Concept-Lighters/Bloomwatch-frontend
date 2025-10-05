import React from "react"
import { BrowserRouter as Router, Routes, Route } from "react-router"
import OnboardingCard1 from "./components/OnboardingCard1"
import OnboardingCard2 from "./components/OnboardingCard2"
import OnboardingCard3 from "./components/OnboardingCard3"
import SignUp from "./components/SignUp"
import Login from "./components/Login"
import CropHealth from "./components/cropHealth/CropHealth"
import CropSatellite from "./components/cropHealth/CropSatellite"
import CropWealth from "./components/cropHealth/CropWealth"


function App() {

  return (
    <>
      <Router> 
        <Routes>
           <Route path="/" element={<OnboardingCard1 />} />
          <Route path="/onboarding2" element={<OnboardingCard2 />} />
          <Route path="/onboarding3" element={<OnboardingCard3/>}/>
          <Route path="/signup" element={<SignUp/>} />
          <Route path="/login" element={<Login/>} />         
         </Routes>
       </Router>
      {/* <CropHealth /> */}

    </>
  )
}

export default App
