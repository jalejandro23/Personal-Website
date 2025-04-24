import './HomePage.css';
import Footer from './Footer'

function HomePage() {
    return (
        <div>
            <div className="about-me-grid">
                <div className="homepage-card">
                    <h2 className='about-header'> About Me! </h2>
                    <p> Hello! My name is Jayden Alejandro, I am an undergraduate at Northwestern University pursuing a Bachelor of Arts in Computer Science.</p>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default HomePage