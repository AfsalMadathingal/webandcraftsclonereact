import './ourstory.css'
import wac from '../../assets/video/wac (1).mp4'
export default function OurStory() {

    return (
        <div className="our-story">
            <div className='our-story-text'>
            <h1>Our Story</h1>
            <p>In a world brimming with possibilities, we <br /> sprouted, seizing our destiny to create <br /> an extraordinary narrative - a tale that <br /> encapsulates laughter, tears, challenges, <br /> and triumphs.</p>
            <div className="about-us-button">
                About Us
                <i className="fa-solid fa-arrow-right"></i>
            </div>
            </div>
            
            <video src={wac} autoPlay loop muted ></video>
        </div>
    );
}