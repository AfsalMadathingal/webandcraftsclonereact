import './footer.css'

export default function Footer() {

    return (
        <div className="footer">
            <div className="footer-head">
                <div className="footer-titles">
                <h2 className="footer-title">Get started now!</h2>
                <p>It takes less than a minute of your time.</p>
                </div>
                <div className="footer-button">
                    Request a quote <i className="fa-solid fa-arrow-right"></i>
                </div>
            </div>
            <ul className="footer-list">
                <li className="footer-item">
                    <ul>
                        <li>Company</li>
                        <li>About</li>
                        <li>Services</li>
                        <li>Industries</li>
                        <li>Works</li>
                        <li>Careers</li>
                        <li>Contact</li>
                    </ul>
                </li>
                <li className="footer-item">
                    <ul>
                        <li>Services</li>
                        <li>Branding</li>
                        <li>Experience Design</li>
                        <li>Technology</li>
                        <li>Digital Marketing</li>
                        <li>Other</li>
                    </ul>
                </li>
                <li className="footer-item">
                    <ul>
                        <li>Partnership</li>
                        <li>Awards and Recognitions</li>
                        <li>Insights</li>
                        <li>Blogs</li>
                        <li>Resource Augmentation</li>
                        <li>Testimonials</li>
                        <li>Our Clients</li>
                        <li>Submit Feedback to Our CEO</li>
                        <li>Download Brochure</li>
                    </ul>
                </li>
                <li className="footer-item">
                    <ul>
                        <li>Connect</li>
                        <li>General Enquiry: +91 480 2733 111</li>
                        <li>Sales Enquiry: +91 480 2733 555</li>
                        <li>Email: info@webandcrafts.com</li>
                        <li>HR Enquiry: +91 480 2733 999</li>
                        <li>WhatsApp (Sales): +91 8606 483 399</li>
                    </ul>
                </li>
            </ul>
            <div className="footer-end">
            <p>&copy; 2023 WAC. All rights reserved. Cloned By Afsal Madathingal </p>
            <div className="social-icons-footer">
                <i className="fa-brands fa-facebook"></i>
                <i className="fa-brands fa-twitter"></i>
                <i className="fa-brands fa-linkedin"></i>
                <i className="fa-brands fa-youtube"></i>
                <i className="fa-brands fa-instagram"></i>
                <i className="fa-brands fa-behance"></i>
            </div>
            </div>
            
        </div>
    );

}