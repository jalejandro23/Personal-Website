import { useState } from 'react'
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

  document.addEventListener('keydown', function(dark) {
    //low-budget dark mode
    if (dark.code === 'Space') {
      if (document.body.style.backgroundColor === "black") {
        document.body.style.backgroundColor = "white";
        document.body.style.color = "black";
      } else {
        document.body.style.backgroundColor = "black";
        document.body.style.color = "white";
      }
    }
  });

  return (
    <>
    <BrowserRouter>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={profile_pic} className="profile_pic" alt="Profile Pic" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Jayden Alejandro</h1>
      <h2>CS @ Northwestern</h2>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
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
      <Sample name="Data Structures & Algorithms" name2="Intro to Computer Systems"> 
      </Sample>
      <dark></dark>
      </BrowserRouter>
    </>
  )
}

export default App
