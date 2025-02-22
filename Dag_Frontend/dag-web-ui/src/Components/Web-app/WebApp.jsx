import React, { useState } from 'react';import './WebApp.css';
import Footer from '../Footer/Footer';
import './WebApp.css';
import custWebDevImg from '../../Assests/image4.png';
import eCommImg from '../../Assests/image2.png';
import aiDevImg from '../../Assests/image1.png';
import websiteDevImg from '../../Assests/Website Development.png';
import mainBannerImg from '../../Assests/Main Banner1.png';
import { FaHospital, FaShoppingCart, FaGraduationCap, FaBuilding, FaUniversity, FaPlane, FaIndustry, FaUtensils, FaBalanceScale, FaFilm, FaCar, FaDumbbell, FaLaptop, FaTools } from "react-icons/fa";


const WebApp = ({ toggleEnquiryForm }) => {
  // Scroll to the Contact Us section
  const handleContactUsClick = () => {
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <div className='webappmain'>
        {/* Main Banner Section */}
        <div className="banner-container">
          <div className="banner" style={{ height: "-webkit-fill-available" }}>
            <img
              src={mainBannerImg}
              alt="Main Banner"
              className="card-img"
              style={{ height: "-webkit-fill-available" }}
            />
            <div className="banner-content">
              {/* <h3>We Build Intelligent, Scalable, and High-Impact Digital Solutions</h3> */}
              <h1>Transform Your Business with Cutting-Edge Web and AI Solutions from DAG</h1>
              {/* <p>At DAG, we specialize in comprehensive website development and AI-powered app development services tailored to empower your business. Whether you’re a startup, an established brand, or a business looking to enhance its digital presence, we deliver customized solutions that combine functionality, creativity, and advanced technology.</p> */}
              <div className="banner-buttons">
                <button className="Enquire-Now" onClick={toggleEnquiryForm}>Enquire Now</button>
                <button className="Contact-Us" onClick={handleContactUsClick}>Contact Us</button>
              </div>
            </div>
          </div>
        </div>


        {/* About Us Section */}
<div className="about-section container py-5">
  <div className="row align-items-center">
    <div className="col-md-6">
      <h2 className="text-success">About Us</h2>
      <h1 className="fw-bold">
        We Build Intelligent, Scalable, and High-Impact Digital Solutions
      </h1>
      <p>
        At DAG, we specialize in comprehensive Website Development and AI-Powered Web App Development services 
        tailored to empower your business. Whether you’re a startup, an established brand, or a business looking 
        to enhance its digital presence, we deliver customized solutions that combine functionality, creativity, 
        and advanced technology.
      </p>
      <p>
        Our mission is to not only build digital assets but to create intelligent platforms that drive engagement, 
        streamline operations, and scale your business.
      </p>
      <button className="btn btn-success px-4 py-2">Discover Now</button>
    </div>
    <div className="col-md-6 text-center">
      <img src={mainBannerImg} alt="About Us" className="img-fluid rounded" />
    </div>
  </div>
</div>


        {/* Services Section */}
        <div className="container-fluid service pb-5" id="services">
          <div className="container pb-5">
            <div className="text-center mx-auto pb-5">
              <h1 className="display-5 mb-4">Our Services</h1>
            </div>
            <div className="row g-4">
              {/* Service Item - Custom Website Development */}
              <div className="col-md-6 col-lg-4">
                <div className="card">
                  <div className="service-img">
                    <img
                      src={custWebDevImg}
                      className="img-fluid rounded-top w-100"
                      alt="Custom Website Development"
                    />
                  </div>
                  <div className="rounded-bottom p-4">
                    <a href="/old" target="_blank" rel="noopener noreferrer" className="h4 d-inline-block mb-4">
                      Custom Website Development
                    </a>
                    <p>Launch a high-performance website that aligns perfectly with your brand identity and goals.</p>
                  </div>
                </div>
              </div>

              {/* Service Item - E-Commerce Solutions */}
              <div className="col-md-6 col-lg-4">
                <div className="card">
                  <div className="service-img">
                    <img
                      src={eCommImg}
                      className="img-fluid rounded-top w-100"
                      alt="E-Commerce Solutions"
                    />
                  </div>
                  <div className="rounded-bottom p-4">
                    <a href="/old" target="_blank" rel="noopener noreferrer" className="h4 d-inline-block mb-4">
                      E-Commerce Solutions
                    </a>
                    <p>Transform your business with a robust, secure e-commerce platform that provides a seamless online shopping experience.</p>
                  </div>
                </div>
              </div>

              {/* Service Item - AI App Development */}
              <div className="col-md-6 col-lg-4">
                <div className="card">
                  <div className="service-img">
                    <img
                      src={aiDevImg}
                      className="img-fluid rounded-top w-100"
                      alt="AI App Development"
                    />
                  </div>
                  <div className="rounded-bottom p-4">
                    <a href="/old" target="_blank" rel="noopener noreferrer" className="h4 d-inline-block mb-4">
                      AI App Development
                    </a>
                    <p>Create apps that think, learn, and interact just like humans. Automate processes and drive deeper customer insights with our AI-powered applications.</p>
                  </div>
                </div>
              </div>

              {/* Additional Service Items can be added here following a similar structure */}
            </div>
          </div>
        </div>

        {/* Why Choose DAG Section */}
        <div className="p1 container-fluid">
          <div className="pa1">
            <h2>Why Choose DAG for Your Web & AI Development Needs?</h2>
            <hr style={{ border: 'black', margin: '0 250px' }} />
          </div>
          <div className="row">
            <div className="col-lg-6">
              <h5>Why Choose DAG?</h5>
              <ul>
                <li>
                  <h6>End-to-End Website Development:</h6>
                  <p>From simple business websites to complex e-commerce platforms, we develop websites...</p>
                </li>
                <li>
                  <h6>AI-Powered App Development:</h6>
                  <p>Our AI-driven applications are designed to enhance user experience and bring innovation to your fingertips...</p>
                </li>
                <li>
                  <h6>Seamless User Experience:</h6>
                  <p>Every project we handle is crafted with a user-first approach...</p>
                </li>
                <li>
                  <h6>Scalability & Security:</h6>
                  <p>As your business grows, so should your digital tools...</p>
                </li>
              </ul>
            </div>
            <div className="col-lg-6">
              <div className="service-img">
                <img
                  src={websiteDevImg}
                  className="img-fluid rounded-top w-100"
                  alt="Web Development"
                />
              </div>
            </div>
          </div>
        </div>


        {/* Industries We Serve Section */}
        <div className="container py-5">
          <h2 className="text-center mb-4">Industries We Serve</h2>
          <div className="row g-4">
            {[
              { icon: <FaHospital />, title: "Healthcare & Medical" },
              { icon: <FaShoppingCart />, title: "E-commerce & Retail" },
              { icon: <FaGraduationCap />, title: "Education & E-learning" },
              { icon: <FaBuilding />, title: "Real Estate" },
              { icon: <FaUniversity />, title: "Finance & Banking" },
              { icon: <FaPlane />, title: "Travel & Hospitality" },
              { icon: <FaIndustry />, title: "Manufacturing & Industrial" },
              { icon: <FaUtensils />, title: "Food & Beverage" },
              { icon: <FaBalanceScale />, title: "Legal & Consulting" },
              { icon: <FaFilm />, title: "Entertainment & Media" },
              { icon: <FaCar />, title: "Automobile & Transport" },
              { icon: <FaDumbbell />, title: "Fitness & Wellness" },
              { icon: <FaLaptop />, title: "Technology" },
              { icon: <FaTools />, title: "Construction & Architecture" }
            ].map((industry, index) => (
              <div className="col-md-4 col-lg-3" key={index}>
                <div className="card text-center p-3 shadow-sm">
                  <div className="icon mb-3" style={{ fontSize: "2rem", color: "#28a745" }}>{industry.icon}</div>
                  <h5>{industry.title}</h5>
                </div>
              </div>
            ))}
          </div>
          {/* Ready to Start Your Project? Section */}
          <div className="text-center mt-5">
            <h2 className="text-success">Ready to Start Your Project?</h2>
            <p>
              DAG is here to help you elevate your digital presence and take advantage of the latest technologies. Whether you need a
              New Website, an AI-powered Web App, or a revamp of your existing digital assets, we’re ready to discuss your needs.
            </p>
            <button className="btn btn-success px-4 py-2" onClick={handleContactUsClick}>Contact Us</button>
          </div>

          {/* Get a Free Consultation Today Section */}
        <div className="free-consultation container-fluid py-5" style={{ backgroundColor: "#f8f9fa" }}>
          <div className="container py-5">
            <div className="row align-items-center">
              <div className="col-md-6">
                <h2>Get a Free Consultation Today</h2>
                <p>
                  Discover the potential of your project with a free consultation.
                  Let’s discuss your goals, challenges, and how our solutions can help your business thrive.
                </p>
                <button className="btn btn-success" onClick={handleContactUsClick}>Contact Us</button>
              </div>
              <div className="col-md-6 text-center">
                <img src={mainBannerImg} alt="Consultation" className="img-fluid rounded" />
              </div>
            </div>
          </div>
        </div>

        {/* Contact & Enquiry Section */}
        <div className="contact-enquiry-section container py-5">
          <div className="row">
            {/* Left Side: Contact Information */}
            <div className="col-md-6">
              <h2 className="text-success">Get in Touch</h2>
              <p>Fill out the form below, and one of our experts will reach out to you within 24 hours.</p>
              <p><strong>Email Us:</strong> careers@directadmissionguideline.com</p>
              <p><strong>Call Us:</strong> +91 90961 74933</p>
            </div>

            {/* Right Side: Enquiry Form */}
            <div className="col-md-6">
              <h2 className="text-success">Enquiry Form</h2>
              <form>
                <div className="mb-3">
                  <label className="form-label">Name</label>
                  <input type="text" className="form-control" placeholder="Enter your name" required />
                </div>
                <div className="mb-3">
                  <label className="form-label">Number</label>
                  <input type="text" className="form-control" placeholder="Enter your phone number" required />
                </div>
                <div className="mb-3">
                  <label className="form-label">Email ID</label>
                  <input type="email" className="form-control" placeholder="Enter your email" required />
                </div>
                <div className="mb-3">
                  <label className="form-label">Message</label>
                  <textarea className="form-control" rows="3" placeholder="Enter your message" required></textarea>
                </div>
                <button type="submit" className="btn btn-success">Submit</button>
              </form>
            </div>
          </div>
        </div>
        </div>
      </div>
    </>
  );
};

export default WebApp;
