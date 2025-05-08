import './aboutme.css';
import Footer from './Footer'

function AboutMePage() {
    return (
        <div>
            <h1 className="about-h1"><span style={{ color: "#fbbf24"}}>*</span><span style={{ color: "#f0f4ff"}}>about me</span></h1>
            <div className="about-me-grid">
                <div className="aboutme-card">
                    {/* <h2 className='about-header'> About Me! </h2> */}
                    <p> during my undergraduate career at northwestern, i have contributed to a wide range of projects and initiatives aimed at empowering students and fostering inclusive communities. 
                        i have developed tools to enhance digital accessibility, organized events that celebrate diversity in tech, and served on the executive board of the national society of black engineers, where i’ve helped support first-year students and promote professional development. 
                        i’ve also collaborated across clubs like women in computing, emerging coders, and the society of hispanic professional engineers to build spaces for connection, creativity, and growth.</p>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default AboutMePage;