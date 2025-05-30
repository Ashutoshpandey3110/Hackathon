
import { Routes, Route } from "react-router-dom"
import Navbar from "./components/Navbar"
import Myprofile from "./pages/Myprofile"
import Home from "./pages/Home"
import About from "./pages/About"
import LineTracker from "./pages/LineTracker"
import Step1 from "./pages/Step1"

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

      </Routes>

        
    </div>
  )
}

export default App