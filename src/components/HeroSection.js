import React, { useState, useEffect, useMemo } from "react";
import { BsArrowUpRightCircleFill } from "react-icons/bs";
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from "react-icons/md";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import "../styles/HeroSection.css";

const HeroSection = () => {
  const [currentText, setCurrentText] = useState(""); // Current text being animated
  const [isDeleting, setIsDeleting] = useState(false); // Whether we're in delete mode
  const [loopIndex, setLoopIndex] = useState(0); // Current sentence index
  const [dropdownVisible, setDropdownVisible] = useState(false); // State for dropdown visibility

  const typingSpeed = 100; // Speed of typing animation

  const sentences = useMemo(
    () => [
      "Digital Marketing",
      "Design & Development",
      "Sales & Marketing",
    ],
    []
  );

  useEffect(() => {
    const currentSentence = sentences[loopIndex % sentences.length]; // Get the current sentence
    let timeout;

    if (!isDeleting) {
      // Typing mode
      if (currentText.length < currentSentence.length) {
        timeout = setTimeout(() => {
          setCurrentText(currentSentence.slice(0, currentText.length + 1));
        }, typingSpeed);
      } else {
        // Pause before starting delete mode
        timeout = setTimeout(() => {
          setIsDeleting(true);
        }, 2000); // Pause for 2 seconds
      }
    } else {
      // Deleting mode
      if (currentText.length > 0) {
        timeout = setTimeout(() => {
          setCurrentText(currentSentence.slice(0, currentText.length - 1));
        }, typingSpeed / 2); // Faster deleting
      } else {
        // Move to the next sentence
        setIsDeleting(false);
        setLoopIndex(loopIndex + 1); // Go to the next sentence
      }
    }

    return () => clearTimeout(timeout); // Cleanup timeout on unmount
  }, [currentText, isDeleting, loopIndex, sentences]);

  const toggleDropdown = () => {
    setDropdownVisible((prev) => !prev); // Toggle dropdown visibility on click
  };

  return (
    <div className="container">
      <div className="grid-lines">
        {Array.from({ length: 144 }).map((_, index) => (
          <div key={index}></div> // Create grid cells
        ))}
      </div>

      <header className={`navbar ${dropdownVisible ? "changed-menu" : ""}`}>
        <img
          src="https://res.cloudinary.com/dxkjmlrfk/image/upload/v1736601539/Screenshot_2025-01-11_184740_m3y2qe.png"
          className="logo"
          alt="logo"
        />
        <nav className={`menu`}>
          <a href="#home" style={{ color: "#D52249" }}>
            Home
          </a>
          <a
            href="#services"
            onClick={toggleDropdown} // Toggle the dropdown on click
            className="toggleing"
          >
            Services   {dropdownVisible ? <MdKeyboardArrowUp /> : <MdKeyboardArrowDown />}
          </a>
          {dropdownVisible && (
            <div className="dropdown">
              <div className="serivce-intro">
                <p className="linked">Digital with Solutions</p>
                <h1>Explore Services</h1>
                <p>
                  We are growing your business with tailored digital tech
                  solutions
                </p>
              </div>
              <div className="services-container">
                <ul>
                  <h1>
                    Digital Marketing <MdOutlineKeyboardArrowRight />
                  </h1>
                  <li>Lorem ipsum</li>
                  <li>Lorem ipsum</li>
                  <li>Lorem ipsum</li>
                  <li>Lorem ipsum</li>
                  <li>Lorem ipsum</li>
                  <li>Lorem ipsum</li>
                </ul>
                <ul>
                  <h1>
                    Graphic Designing <MdOutlineKeyboardArrowRight />{" "}
                  </h1>
                  <li>Lorem ipsum</li>
                  <li>Lorem ipsum</li>
                  <li>Lorem ipsum</li>
                  <li>Lorem ipsum</li>
                  <li>Lorem ipsum</li>
                  <li>Lorem ipsum</li>
                </ul>
                <ul>
                  <h1>
                    Web Development <MdOutlineKeyboardArrowRight />
                  </h1>
                  <li>Lorem ipsum</li>
                  <li>Lorem ipsum</li>
                  <li>Lorem ipsum</li>
                </ul>
                <ul>
                  <h1>
                    3D Design <MdOutlineKeyboardArrowRight />
                  </h1>
                  <li>Lorem ipsum</li>
                  <li>Lorem ipsum</li>
                  <li>Lorem ipsum</li>
                  <li>Lorem ipsum</li>
                </ul>
                <ul>
                  <h1>
                    Video Editing <MdOutlineKeyboardArrowRight />
                  </h1>
                  <li>Lorem ipsum</li>
                  <li>Lorem ipsum</li>
                  <li>Lorem ipsum</li>
                  <li>Lorem ipsum</li>
                  <li>Lorem ipsum</li>
                  <li>Lorem ipsum</li>
                </ul>
              </div>
            </div>
          )}
          <a href="#careers">Careers</a>
          <a href="#blogs">Blogs</a>
          <a href="#about-us">About us</a>
        </nav>
        <button className="contact-btn">
          <span>Contact</span>
          <BsArrowUpRightCircleFill
            fill="#D52249"
            size="34px"
            className="contact-btn-icon"
          />
        </button>
      </header>

      <main className="hero">
        <div className="hero-content">
          <div className="hero-designs">
            <div className="circles"></div>
            <div className="circles circle1"></div>
            <div className="box-dotted right-box"></div>
          </div>
          <h1>Transforming Ideas into Reality: Excellence in</h1>
          <div>
            <h1 className="type-text">
              <span>{currentText}</span>
              <span className="cursor">|</span>
            </h1>
          </div>
          <div className="button-container">
            <button className="explore-btn">
              <span>
                Explore Services <span className="arrow">➔</span>
              </span>
            </button>
          </div>
          <div className="box-dotted left-box"></div>
        </div>
      </main>
    </div>
  );
};

export default HeroSection;
