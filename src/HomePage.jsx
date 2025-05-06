import './HomePage.css';
import Footer from './Footer'

function HomePage() {
    return (
        <div>
            <div className="about-me-grid">
                <div className="homepage-card">
                    {/* <h2 className='about-header'> About Me! </h2> */}
                    <p> hey there, i'm jayden alejandro — a computer science major at northwestern university with a passion for building inclusive and impactful technology. i'm currently exploring opportunities in software engineering, with experience spanning web development, data structures, and artificial intelligence.
                    my interests lie in systems programming, developer tools, and human-centered design. more broadly, i'm driven by a desire to create performant, intuitive, and scalable tools that make tech more accessible and solve real-world challenges.</p>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default HomePage