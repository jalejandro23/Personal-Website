import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Sample from './Sample.jsx'
import Experiences from './experiences.jsx'
import Projects from './projects.jsx'
import HomePage from './HomePage.jsx'
import profile_pic from './assets/profile_pic.jpeg'
import northwestern_logo from './assets/northwestern logo.png'
import { BrowserRouter, Routes, Route, NavLink, useLocation } from 'react-router-dom'


function App() {
  // const [count, setCount] = useState(0)
  // const location = useLocation()

  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={
          <>
            <div>
            <a href="https://www.mccormick.northwestern.edu/" target="_blank">
                <img src={northwestern_logo} className="northwestern logo" alt="Northwestern logo" />
              </a>
              <a href="https://www.linkedin.com/in/jayden-alejandro-726584248/" target="_blank">
                <img src={profile_pic} className="profile_pic" alt="Profile Pic" />
              </a>
            </div>
            <h1>Jayden Alejandro</h1>
            <h2>Computer Science @ Northwestern</h2>
            <div className="card">
              <button onClick={() => document.body.classList.toggle('dark-mode')}>
                Change Mode Preferences
              </button>
            </div>
            <nav>
              <NavLink to='/'>Home </NavLink>
              <NavLink to='/experiences'>Experiences </NavLink>
              <NavLink to='/projects'>Projects </NavLink>
            </nav>
            <p className="read-the-docs">Click on my Profile Picture to learn more about me!</p> 
            <Sample 
              // name="Data Structures & Algorithms" 
              // name2="Intro to Computer Systems" 
              // name3="Foundations of Security" 
              // name4="Intro to AI"
              // <p></p>
            /> 
          </>
        } />
        <Route path='/experiences' element={
          <>
          <nav>
            <NavLink to='/'>Home </NavLink>
            <NavLink to='/experiences'>Experiences </NavLink>
            <NavLink to='/projects'>Projects </NavLink>
          </nav>
          <Experiences title="Experiences" />
          </>
          } />
        <Route path='/projects' element={
          <>
          <nav>
            <NavLink to='/'>Home </NavLink>
            <NavLink to='/experiences'>Experiences </NavLink>
            <NavLink to='/projects'>Projects </NavLink>
          </nav>
          <Projects title="Projects" />
          </>
          } />
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
