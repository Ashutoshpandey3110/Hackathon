
import { Routes, Route } from "react-router-dom"
import Navbar from "./components/Navbar"
import Myprofile from "./pages/Myprofile"
import Home from "./pages/Home"
import About from "./pages/About"
import LineTracker from "./pages/LineTracker"
import Step1 from "./pages/Step1"
import Step2 from "./pages/Step2"
import Step3 from "./pages/Step3"
import Step4 from "./pages/Step4"
import Footer from "./components/Footer"

const App = () => {

  
  return (
    <div >
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/myProfile" element={<Myprofile />} />
        <Route path = "/about" element={<About/>}/>
        <Route path = "/line-tracker" element={<LineTracker/>}/>
        <Route path = "/line-track/step1" element={<Step1/>}/>
        <Route path = "/line-track/step2" element={<Step2/>}/> 
        <Route path = "/line-track/step3" element={<Step3/>}/> 
        <Route path = "/line-track/step4" element={<Step4/>}/>      
      </Routes>
      <Footer/>
        
    </div>
  )
}

export default App