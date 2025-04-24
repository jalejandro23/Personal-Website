import { useEffect, useState } from 'react'
import './App.css'
import Experiences from './experiences.jsx'
import Projects from './projects.jsx'
import HomePage from './HomePage.jsx'
import profile_pic from './icons/profile_pic.jpeg'
import northwestern_logo from './icons/northwestern logo.png'
import { BrowserRouter, Routes, Route, NavLink, useLocation } from 'react-router-dom'
import { FaGithub } from 'react-icons/fa'
import { FaLinkedin } from 'react-icons/fa'


function App() {

  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={
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
            <h1>Jayden Alejandro</h1>
            {/* <h2>Computer Science @ Northwestern</h2> */}
            <div className="card">
              <button onClick={() => document.body.classList.toggle('dark-mode')} className="theme-button">
                Change Mode Preferences
              </button>
            </div>
            
            <HomePage/>
            <nav>
              <NavLink to='/'>Home </NavLink>
              <NavLink to='/experiences'>Experiences </NavLink>
              <NavLink to='/projects'>Projects </NavLink>
            </nav> 
          </>
        } />
        <Route path='/experiences' element={
          <>
          <Experiences title="Experiences" />
          <nav>
            <NavLink className="width" to='/'>Home </NavLink>
            <NavLink className="width" to='/experiences'>Experiences </NavLink>
            <NavLink className="width" to='/projects'>Projects </NavLink>
          </nav>
          </>
          } />
        <Route path='/projects' element={
          <>
          <Projects title="Projects" />
          <nav>
            <NavLink to='/'>Home </NavLink>
            <NavLink to='/experiences'>Experiences </NavLink>
            <NavLink to='/projects'>Projects </NavLink>
          </nav>
          </>
          } />
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
