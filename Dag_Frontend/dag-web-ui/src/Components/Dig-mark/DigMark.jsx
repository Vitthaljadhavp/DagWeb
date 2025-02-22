import React, { useState } from 'react';
import Footer from '../Footer/Footer';
import '../Dig-mark/DigMark.css'
import mainBannerPng from '../../Assests/Main Banner.png'
import servicePng from '../../Assests/SEO Service.png'
import digmarkSideimg from '../../Assests/Digital Marketing Side Image.png'

const DigMark = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    phoneNumber: '',
    email: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Form submission logic
    console.log('Form submitted', formData);
  };

  return (
    <>
      <div className='digmarkmain'>

        {/* Main Banner */}
        <div className="body1">
          <div className="card">
            <img src={mainBannerPng} alt="Main Banner" className="card-img" />
          </div>
        </div>

        {/* Content Section */}
        <section className="container p1">
          <div className="pa1">
            <h4>
              Maximize Your Reach, Multiply Your Leads – DAG’s Digital Marketing Solutions for Guaranteed Growth!
            </h4>
          </div>
          <div className="pa2 text-center">
            <p>
              Your one-stop destination for comprehensive digital marketing strategies that drive results. At DAG, we
              specialize in generating high-quality leads tailored to your industry needs.
            </p>
          </div>
        </section>

        <div class="container p1">
          <div class="pa1">
            <h4 >About Us</h4>
          </div>
          <div class="pa2 text-center">
            <h4>DAG - Pioneering Digital Marketing for Lead Generation Success
            </h4>
            <p>In today’s competitive market, capturing quality leads is essential to drive growth and boost revenue. At DAG, we bring together cutting-edge digital marketing techniques and personalized strategies to transform your lead generation efforts. With expertise across various industries, our team is dedicated to delivering digital marketing solutions that don’t just meet industry standards—they set them.
            </p>
          </div>
        </div>
        <div class="p1 container-fluid p-2">
          <div class="pa1">
            <h4>Why Choose DAG for Your Web & AI Development Needs?</h4>
          </div>
          <div class="row p-2">
            <div class="col-lg-6">
              <p className='text-start'>Why Choose DAG?</p>
              <ul>
                <li>
                  <h6>Proven Success:</h6>
                  <p>Trusted by clients across industries, we have a track record of generating thousands of leads monthly.
                  </p>
                </li>
                <li>
                  <h6>Customized Strategies:</h6>
                  <p>eads monthly.
                    Customized Strategies: From B2B to B2C, our strategies are designed with your specific goals and audience in mind</p>
                </li>
                <li>
                  <h6>Experienced Professionals:</h6>
                  <p>Our digital marketing experts have deep knowledge in SEO, PPC, Social Media, Content Marketing, and more.</p>
                </li>
                <li>
                  <h6>Results-Driven Approach:</h6>
                  <p>We focus on leads that convert, ensuring you get value from every campaign.
                  </p>
                </li>
              </ul>
            </div>
            <div class="col-lg-6">
              <div class="service-img">
                <img src={digmarkSideimg} class="img-fluid rounded-top w-100 " alt="Image" />
              </div>
            </div>
          </div>
        </div>
        <br></br>

        {/* Services Section */}
        <section className="container-fluid service pb-5" id="services">
          <div className="container pb-5">
            <div className="text-center mx-auto pb-5">
              <h1 className="display-5 mb-4">Our Services</h1>
              <p style={{ color: 'black' }}>
                Comprehensive Digital Marketing Services to Drive Qualified Leads
              </p>
            </div>
            <div className="row g-4">
              <div className="col-md-6 col-lg-4">
                <div className="service-item">
                  <div className="service-img">
                    <img src={servicePng} className="img-fluid rounded-top w-100" alt="SEO" />
                  </div>
                  <div className="rounded-bottom p-4">
                    <h4>Search Engine Optimization (SEO)</h4>
                    <p>
                      Boost your online visibility with SEO strategies that rank your business at the top.
                    </p>
                  </div>
                </div>
              </div>
              {/* Add other services similarly */}
            </div>
          </div>
        </section>

        {/* Modal */}
        <div
          className="modal fade"
          id="exampleModal"
          tabIndex="-1"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h1 className="modal-title fs-5" id="exampleModalLabel">Enquiry Form</h1>
                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div className="modal-body">
                <form onSubmit={handleSubmit}>
                  <div className="form-group">
                    <label>First Name</label>
                    <input
                      type="text"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleInputChange}
                      className="form-control"
                      placeholder="Enter your first name"
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label>Last Name</label>
                    <input
                      type="text"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleInputChange}
                      className="form-control"
                      placeholder="Enter your last name"
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label>Phone Number</label>
                    <input
                      type="tel"
                      name="phoneNumber"
                      value={formData.phoneNumber}
                      onChange={handleInputChange}
                      className="form-control"
                      placeholder="Enter your phone number"
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label>Email</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="form-control"
                      placeholder="Enter your email"
                      required
                    />
                  </div>
                  <button type="submit" className="btn btn-primary">Submit</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DigMark;