import './aboutme.css';
import Footer from './Footer'

function AboutMePage( {title} ) {
    return (
        <div>
            <h1 className="about-h1"><span style={{ color: "#fbbf24"}}>*</span>{title}</h1>
            <Footer />
        </div>
    )
}

export default AboutMePage;