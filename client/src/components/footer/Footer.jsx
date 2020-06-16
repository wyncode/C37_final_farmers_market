import React from 'react';
import '../footer/footer.css';

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-content">
        <div className="footer-section socials">
          <a>
            <i class="fab fa-instagram"></i>
          </a>

          <a>
            <i class="fab fa-facebook-f"></i>
          </a>

          <a>
            <i class="fab fa-twitter"></i>
          </a>
          <ul>
            <a>
              <li>Help</li>
            </a>
            <a>
              <li>Payment Options</li>
            </a>
          </ul>
        </div>

        <div className="footerAddress">
            <p>8305 Biscyane Rd</p>
            <p>Miami, FL 33106</p>
        </div>
        <div className="footer-section links"></div>

        <div className="footer-section address"></div>
      </div>
    </div>
  );
};

export default Footer;
