import { useState } from "react";
import "./App.css";
import About from "./Components/About";
import Navbar from "./Components/Navbar";
import Profile from "./Components/Profile";
import Resume from "./Components/Resume";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Contact from "./Components/Contact";
import Projects from "./Components/Projects";
import ForMobile from "./Components/ForMobile";

function App() {
  const [show, setShow] = useState(false);
  const[darkmode,setDarkmode]=useState("light");
  const[bgcolor,setBgcolor]=useState("white")
  const handleDarkMode=()=>{
    if(darkmode==="light"){
      setDarkmode("dark")
    document.body.style.backgroundImage="url(https://i.pinimg.com/564x/37/24/db/3724db00677625d737f96f8faf8e31de.jpg)" 
    document.body.style.width="100%" 
    setBgcolor("black")
    }else{
      setDarkmode("light")
      document.body.style.backgroundImage="url(./Components/SocialLinks/background.jpg)"
      setBgcolor("white")
    }
 }
  return (
    <>
      <BrowserRouter>
        <ForMobile show={show} setShow={setShow} darkmode={darkmode} setDarkmode={setDarkmode} handleDarkMode={handleDarkMode}/>
        <div className="flex justify-around items-center w-screen h-screen lg:flex-nowrap sm:flex-wrap p-10">
          <Profile show={show} setShow={setShow} darkmode={darkmode} bgcolor={bgcolor} />
          <Routes>
            <Route path="/About" element={<About bgcolor={bgcolor} darkmode={darkmode}/>}/>
            <Route path="/Resume" element={<Resume bgcolor={bgcolor} darkmode={darkmode}/>}/>
            <Route path="/Contact" element={<Contact bgcolor={bgcolor} darkmode={darkmode}/>}/>
            <Route path="/Projects" element={<Projects/>}/>
          </Routes>
          <Navbar bgcolor={bgcolor} darkmode={darkmode} />
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
