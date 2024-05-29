import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from './Home';
import Products from './Productss';
import ContactUs from './ContactUs';
import CurrentProducts from './currentproducts';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const linkStyle = {
    color: 'white', // Text color
    padding: '10px 20px', // Padding
    borderRadius: '5px', // Rounded corners
    textDecoration: 'none', // Remove underline
    margin: '0 10px', // Space between links
    display: 'inline-block' // Ensure links are inline
  };

  const linkHoverStyle = {

  };

  return (
    <Router>
      <div className="app">
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
          <div className="container-fluid">
            <Link className="navbar-brand" to="/">Zam Zam Electronic</Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav ms-auto" style={{ listStyleType: 'none', display: 'flex', padding: 0 }}>
                <li className="nav-item">
                  <Link
                    className="nav-link"
                    to="/"
                    style={linkStyle}
                    onMouseOver={(e) => e.currentTarget.style.backgroundColor = linkHoverStyle.backgroundColor}
                    onMouseOut={(e) => e.currentTarget.style.backgroundColor = linkStyle.backgroundColor}
                  >
                    Home
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    className="nav-link"
                    to="/products"
                    style={linkStyle}
                    onMouseOver={(e) => e.currentTarget.style.backgroundColor = linkHoverStyle.backgroundColor}
                    onMouseOut={(e) => e.currentTarget.style.backgroundColor = linkStyle.backgroundColor}
                  >
                    Edit Products
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    className="nav-link"
                    to="/contact-us"
                    style={linkStyle}
                    onMouseOver={(e) => e.currentTarget.style.backgroundColor = linkHoverStyle.backgroundColor}
                    onMouseOut={(e) => e.currentTarget.style.backgroundColor = linkStyle.backgroundColor}
                  >
                    Contact Us
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    className="nav-link"
                    to="/current-products"
                    style={linkStyle}
                    onMouseOver={(e) => e.currentTarget.style.backgroundColor = linkHoverStyle.backgroundColor}
                    onMouseOut={(e) => e.currentTarget.style.backgroundColor = linkStyle.backgroundColor}
                  >
                    Current Products
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        <div className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products" element={<Products />} />
            <Route path="/contact-us" element={<ContactUs />} />
            <Route path="/current-products" element={<CurrentProducts />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;