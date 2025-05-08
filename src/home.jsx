import React from "react";
import { motion } from "framer-motion";
import "./home.css";
import Footer from "./Footer";


const starVariants = {
  initial: () => ({
    x: 0,
    y: 0,
    opacity: Math.random(),
  }),
  animate: (i) => ({
    x: Math.random() * 2000 - 1000,  // Fast horizontal movement
    y: Math.random() * 1500 - 750,   // Fast vertical movement
    scale: [1, 0.5, 1],  // Pulsating effect
    opacity: [1, 0.2, 1],
    transition: {
      duration: Math.random() * 2 + 1,  // Speed between 1-3s
      repeat: Infinity,
      ease: "easeInOut",
      delay: Math.random() * 1,
    },
  }),
};

const generateStars = (count) => {
  const stars = [];
  for (let i = 0; i < count; i++) {
    const size = Math.random() * 4 + 1;
    const style = {
      left: `${Math.random() * 100}vw`,
      top: `${Math.random() * 100}vh`,
      width: `${size}px`,
      height: `${size}px`,
      backgroundColor: "#ffffff",
      position: "absolute",
      borderRadius: "50%",
    };

    stars.push(
      <motion.div
        key={`star-${i}`}
        style={style}
        custom={i}
        variants={starVariants}
        initial="initial"
        animate="animate"
      />
    );
  }
  return stars;
};

function HomePage() {
  return (
    <div
      className="homepage-container"
      style={{ position: "relative", minHeight: "100vh", backgroundColor: "#0d1b2a", overflow: "hidden" }}
    >
      {generateStars(200)}  {/* Increased star count for more intensity */}
      <div className="about-me-grid" style={{ position: "relative", zIndex: 1 }}>
        <p>hey there, i'm jayden alejandro — a computer science major at northwestern university with a passion for building inclusive and impactful technology. i'm currently exploring opportunities in software engineering, with experience spanning web development, data structures, and artificial intelligence.
        my interests lie in systems programming, developer tools, and human-centered design. more broadly, i'm driven by a desire to create performant, intuitive, and scalable tools that make tech more accessible and solve real-world challenges.</p>
      </div>
    </div>
  );
}

export default HomePage;