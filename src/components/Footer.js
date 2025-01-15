import { FaFacebook, FaInstagram, FaLinkedin, FaRegCopyright } from "react-icons/fa";
import '../styles/Footer.css'

const Footer = () => (
    <>
        <div className='footer-container'>
            <div className='logo'>
                <img src="https://res.cloudinary.com/dxkjmlrfk/image/upload/v1736684213/Screenshot_2025-01-12_174628_x2tbyp.png" alt="logo"  />
                <h1>We know what works</h1>
            </div>
            <ul className='service-lists'>
                <h2>Services</h2>
                <li>Digital Marketing</li>
                <li>Web Development</li>
                <li>Graphic Designing</li>
                <li>Video Editing</li>
                <li>3D Design</li>
            </ul>
            <div className='contact-section'>
                <h2>Contact Us</h2>
                <p>
                    4th Floor, above Sri Vasu Sarees, Plot No 418, opp. Matsuri, near Miyapur,
                    <br />
                    Hyderabad, Telangana 500049
                    Phone:+91-7661919989
                </p>
            </div>
            <div className='social-section'>
                <h2>Social links</h2>
                <FaFacebook  className="social-icon" />
                <FaInstagram className="social-icon" />
                <FaLinkedin className="social-icon" />
            </div>
        </div>
        <div className="terms-container">
            <p> <span> <FaRegCopyright /> Copyright 2024 Digital Web Technologies. All Roghts Reserved. Privacy Policy </span> </p>
            <p> <span> Terms of Service </span>  <span> Privacy & Policy </span></p>
        </div>
    </>
)

export default Footer