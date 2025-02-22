import React from 'react';

const Footer = () => {
    return (
        <footer >
            <div
                style={{ backgroundColor: 'rgb(21, 36, 52)', color: 'rgb(130, 133, 137)' }}
                className="container-fluid footer py-5 wow fadeIn m-0"
                data-wow-delay="0.2s"
            >
                <div className="container-fluid py-5 border-start-0 border-end-0">
                    <div className="row g-5">
                        <div className="col-md-6 col-lg-6 col-xl-4">
                            <div className="footer-item">
                                <h6 className="text-white">DAG</h6>
                                <p className="mb-4 description">
                                    DAG is a versatile online marketplace that connects businesses and professionals with clients across various industries. Offering a wide range of services, including education, finance, legal, real estate, and more, DAG simplifies lead generation and helps service providers grow their clientele. By streamlining the connection between providers and customers, DAG enables businesses to showcase their expertise and deliver tailored solutions efficiently, making it a go-to platform for diverse professional needs.
                                </p>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-6 col-xl-4">
                            <div className="footer-item">
                                <h6 className="text-white mb-4">Quick Links</h6>
                                <div className="QuickLinks">
                                    <a href="#"><i className="fas fa-angle-right me-2"></i> Home</a>
                                    <a href="#about"><i className="fas fa-angle-right me-2"></i> About Us</a>
                                    <a href="#services"><i className="fas fa-angle-right me-2"></i> Services</a>
                                    <a href="#contact"><i className="fas fa-angle-right me-2"></i> Contact us</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-6 col-xl-4">
                            <div className="footer-item">
                                <h6 className="text-white mb-4">Contact Info</h6>
                                <div className="d-flex align-items-center">
                                    <i className="fas fa-map-marker-alt me-3"></i>
                                    <p className="text-white mb-0">
                                        Offc. No. - 72, 1st floor, Gol Market, Near YCM Hospital, Pimpri, Pune - 18
                                    </p>
                                </div>
                                <div className="d-flex align-items-center">
                                    <i className="fas fa-envelope me-3"></i>
                                    <p className="text-white mb-0">careers@directadmissionguideline.com</p>
                                </div>
                                <div className="d-flex align-items-center">
                                    <i className="fa fa-phone-alt me-3"></i>
                                    <p className="text-white mb-0">+91 90961 74933</p>
                                </div>
                                <div className="d-flex">
                                    <a className="btn btn-sm-square rounded-circle me-3" href="#">
                                        <i className="fab fa-facebook-f text-white"></i>
                                    </a>
                                    <a className="btn btn-sm-square rounded-circle me-3" href="#">
                                        <i className="fab fa-twitter text-white"></i>
                                    </a>
                                    <a className="btn btn-sm-square rounded-circle me-3" href="#">
                                        <i className="fab fa-instagram text-white"></i>
                                    </a>
                                    <a className="btn btn-sm-square rounded-circle me-0" href="#">
                                        <i className="fab fa-linkedin-in text-white"></i>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Copyright Start */}
                <div className="container-fluid copyright p-1">
                    <div className="container">
                        <div className="row g-4 align-items-center">
                            <div className="col-md-6 text-center text-md-start mb-md-0">
                                <span className="text">
                                    <a href="#" className="border-bottom text-light text-decoration-none">
                                        <i className="fa-regular text-light fa-copyright"></i> DAG
                                    </a>
                                    <span className="text-secondary">, All rights reserved.</span>
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
