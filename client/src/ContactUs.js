import React from 'react';
import './ContactUs.css'; // Import the CSS file

function ContactUs() {
  return (
    <div className="container mt-5">
      <div className="contact-box">
        <h2 className="text-center mb-4">Contact Us</h2>
        <div className="row">
          <div className="col-md-6">
            <h4>Our Address</h4>
            <p>108 107 Alamgir Rd, Bihar Muslim Society BMCHS Sharafabad, Karachi, Karachi City, Sindh</p>
            <p>Cityville, State, Country</p>
          </div>
          <div className="col-md-6">
            <h4>Contact Information</h4>
            <p>Email: support@zamzam.com</p>
            <p>Phone: 0307 8981200</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactUs;
