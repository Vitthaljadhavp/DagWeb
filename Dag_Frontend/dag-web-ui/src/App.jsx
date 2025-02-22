import React, { useState } from 'react';
import './App.css';
import { Route, Routes, Navigate } from 'react-router-dom';
import Home from '../src/Components/Home/Home';
import WebApp from '../src/Components/Web-app/WebApp';
import DigitalMarketing from '../src/Components/Dig-mark/DigMark';
import Career from '../src/Components/Career/Career';
import Header from '../src/Components/Header/Header';
import Footer from '../src/Components/Footer/Footer';

const App = () => {
  const [showEnquiryForm, setShowEnquiryForm] = useState(false);

  const toggleEnquiryForm = () => {
    setShowEnquiryForm(!showEnquiryForm);
  };

  return (
    <div className="app w-100 p-0 m-0">
      <Header showEnquiryForm={showEnquiryForm} toggleEnquiryForm={toggleEnquiryForm} />
      <Routes>
        <Route path="/" element={<Navigate to="/home" />} />
        <Route path="/home" element={<Home />} />
        <Route path="/page/career" element={<Career />} />
        <Route path="/page/webapp" element={<WebApp toggleEnquiryForm={toggleEnquiryForm} />} />
        <Route path="/page/digmark" element={<DigitalMarketing />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
