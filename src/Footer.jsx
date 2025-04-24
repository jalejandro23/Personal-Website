import React from "react";
import './footer.css';

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-content">
        <div className="footer-left">links*</div>
        <div className="footer-right">
          <a className="ffont" href="https://www.linkedin.com/in/jayden-alejandro-726584248/" target="_blank" rel="noopener noreferrer">
            LinkedIn
          </a>
          <a className="ffont" href="https://www.instagram.com/jaydenalejandro._/" target="_blank" rel="noopener noreferrer">
            Instagram
          </a>
          <a className="ffont" href="https://github.com/jalejandro23" target="_blank" rel="noopener noreferrer">
            GitHub
          </a>
        </div>
      </div>
    </footer>
  );
}
