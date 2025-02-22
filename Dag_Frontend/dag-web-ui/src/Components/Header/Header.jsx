import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import './Header.css';
import { Link } from "react-router-dom";

const Header = ({ showEnquiryForm, toggleEnquiryForm }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [toggleButton, setToggleButton] = useState(false);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header className={`fixed-top transition ${isScrolled ? "scrolled" : ""}`}>
        <nav className="navbar navbar-expand-lg navbar-light px-4 px-lg-5 py-3 py-lg-0">
          <Link to="/" className="navbar-brand p-0">
            <h1>DAG</h1>
          </Link>

          <button
            className="navbar-toggler btn text-success"
            onClick={() => setToggleButton(!toggleButton)}
            type="button"
          >
            <span className={`fa ${toggleButton ? "fa-times" : "fa-bars"}`}></span>
          </button>

          <div className={`collapse navbar-collapse ${toggleButton ? "show" : ""}`} id="navbarCollapse">
            <div className="navbar-nav ms-auto py-0">
              <a href="#" className="nav-item nav-link">Home</a>
              <a href="#about" className="nav-item nav-link">About</a>
              <a href="#services" className="nav-item nav-link">Services</a>
              <a href="#why-choose-us" className="nav-item nav-link">Why Choose Us</a>
              <a href="#contact" className="nav-item nav-link">Contact Us</a>
            </div>
            <button
              className="btn btn-primary text-light rounded-pill py-2 px-4 my-3 my-lg-0"
              onClick={toggleEnquiryForm}
            >
              Enquire Now
            </button>
          </div>
        </nav>
      </header>

      {/* Enquiry Form Modal */}
      {showEnquiryForm && (
        <div className="enquiry-form-overlay">
          <div className="enquiry-form-container">
            <h2>Enquiry Form</h2>
            <form>
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input type="text" id="name" name="name" className="form-control" required />
              </div>

              <div className="form-group">
                <label htmlFor="number">Number</label>
                <input type="tel" id="number" name="number" className="form-control" required />
              </div>

              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input type="email" id="email" name="email" className="form-control" required />
              </div>

              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea id="message" name="message" rows="4" className="form-control" required></textarea>
              </div>

              <div className="form-buttons">
                <button type="submit" className="btn btn-primary">Submit</button>
                <button type="button" className="btn btn-secondary" onClick={toggleEnquiryForm}>Close</button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default Header;
