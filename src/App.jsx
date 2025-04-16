import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Sample from './Sample.jsx'
import Experiences from './experiences.jsx'
import Projects from './projects.jsx'
import HomePage from './HomePage.jsx'
import profile_pic from './assets/profile_pic.jpeg'
import { BrowserRouter, Routes, Route, NavLink } from 'react-router-dom'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <BrowserRouter>
      <div>
      <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
        <a href="https://vite.dev" target="_blank">
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
      <Routes>
        <Route path='/' element={<p className="read-the-docs">Click on my Profile Picture to learn more about me!</p>} ></Route>
        <Route path='/experiences' element={<Experiences title="experiences" />} ></Route>
        <Route path='/projects' element={<Projects title="projects" />} ></Route>
      </Routes>
      <Sample name="Data Structures & Algorithms" name2="Intro to Computer Systems" name3="Foundations of Security" name4="Intro to AI"> 
      </Sample>
      </BrowserRouter>
    </>
  )
}

export default App
