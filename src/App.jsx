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
              <a href="https://github.com/jalejandro23?tab=repositories" target="_blank" rel="noopener noreferrer" className="github-link">
                <FaGithub size={32} className="github-icon"/>
              </a>
            </div>
            <h1>Jayden Alejandro</h1>
            {/* <h2>Computer Science @ Northwestern</h2> */}
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
            <p className="read-the-docs">Click on the Github Icon to learn more about the projects that I have worked on!</p> 
            
            <HomePage
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
