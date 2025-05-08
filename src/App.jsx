import React, { useEffect } from 'react'
import './App.css'
import AboutMePage from './aboutme.jsx'
import Experiences from './experiences.jsx'
import Projects from './projects.jsx'
import HomePage from './home.jsx'
import Footer from './Footer.jsx'
import profile_pic from './icons/profile_pic.jpeg'
import { BrowserRouter, Routes, Route, NavLink, useLocation } from 'react-router-dom'
import { FaGithub } from 'react-icons/fa'
import { FaLinkedin } from 'react-icons/fa'

function UpdateTitle() {
  const location = useLocation();

  useEffect(() => {
    const pathToTitle = {
      "/": "jayden alejandro",
      "/aboutme": "about | jayden alejandro",
      "/experiences": "experiences | jayden alejandro",
      "/projects": "projects | jayden alejandro",
    };

    document.title = pathToTitle[location.pathname] || "jayden alejandro";
  }, [location]);

  return null;
}

function App() {
  // const [isDarkMode, setIsDarkMode] = useState(true);

  // const toggleTheme = () => {
  //   setIsDarkMode(!isDarkMode);
  //   document.body.classList.toggle('dark-mode', isDarkMode);
  //   document.body.classList.toggle('light-mode', !isDarkMode);
  // }

  return (
    <>
    <BrowserRouter>
    <UpdateTitle />
      <Routes>
        <Route path='/' element={
          <>
            {/* <div>
              <a href="https://www.linkedin.com/in/jayden-alejandro-726584248/" target="_blank">
                <FaLinkedin size={32} className="linkedin-icon"/>
              </a>
              <a target="_blank">
                <img src={profile_pic} className="profile_pic" alt="Profile Pic" />
              </a>
              <a href="https://github.com/jalejandro23" target="_blank" rel="noopener noreferrer" className="github-link">
                <FaGithub size={32} className="github-icon"/>
              </a>
            </div> */}
            {/* <h1>Jayden Alejandro</h1> */}
            {/* <h2>Computer Science @ Northwestern</h2> */}
            <HomePage />
            {/* <div className="card">
              <button onClick={toggleTheme} className="theme-button">
                Change Mode Preferences
              </button>
            </div> */}
            <Footer />
            <nav>
              <NavLink className="width" to='/'>Home </NavLink>
              <NavLink className="width" to='/aboutme'> About Me  </NavLink>
              <NavLink className="width" to='/experiences'>Experiences </NavLink>
              <NavLink className="width" to='/projects'>Projects </NavLink>
            </nav> 
          </>
        } />
        <Route path='/aboutme' element={
          <>
          <div>
              <a href="https://www.linkedin.com/in/jayden-alejandro-726584248/" target="_blank">
                <FaLinkedin size={32} className="linkedin-icon"/>
              </a>
              <a target="_blank">
                <img src={profile_pic} className="profile_pic" alt="Profile Pic" />
              </a>
              <a href="https://github.com/jalejandro23" target="_blank" rel="noopener noreferrer" className="github-link">
                <FaGithub size={32} className="github-icon"/>
              </a>
            </div>
          <AboutMePage/>
          <nav>
            <NavLink className="width" to='/'>Home </NavLink>
            <NavLink className="width" to='/aboutme'> About Me  </NavLink>
            <NavLink className="width" to='/experiences'>Experiences </NavLink>
            <NavLink className="width" to='/projects'>Projects </NavLink>
          </nav>
          </>
          } />
        <Route path='/experiences' element={
          <>
          <Experiences/>
          <nav>
            <NavLink className="width" to='/'>Home </NavLink>
            <NavLink className="width" to='/aboutme'> About Me  </NavLink>
            <NavLink className="width" to='/experiences'>Experiences </NavLink>
            <NavLink className="width" to='/projects'>Projects </NavLink>
          </nav>
          </>
          } />
        <Route path='/projects' element={
          <>
          <Projects/>
          <nav>
            <NavLink className="width" to='/'>Home </NavLink>
            <NavLink className="width" to='/aboutme'> About Me  </NavLink>
            <NavLink className="width" to='/experiences'>Experiences </NavLink>
            <NavLink className="width" to='/projects'>Projects </NavLink>
          </nav>
          </>
          } />
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
