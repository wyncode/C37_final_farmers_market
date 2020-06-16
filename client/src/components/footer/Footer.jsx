import React from 'react';
import '../footer/footer.css';

const Footer = () => {
  return (
    <div className="footer">
        <div className="footer-social footer-section">
            <a>
              <i className="fab fa-instagram"></i>
            </a>

            <a>
              <i className="fab fa-facebook-f"></i>
            </a>

            <a>
              <i className="fab fa-twitter"></i>
            </a>
          </div>
          <ul className="footer-links footer-section">
            <li>
              <a>Help</a>
            </li>
            <li>
              <a>Payment Options</a>
            </li>
          </ul>
        <ul className="footer-section">
            <li>8305 Biscyane Rd</li>
            <li>Miami, FL 33106</li>
        </ul>
    </div>
  );
};

export default Footer;
