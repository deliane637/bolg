import flearnaxylogo from '../assets/logo.png';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-brand">
          <div className="footer-logo">
            <img src={flearnaxylogo} alt="Flearnaxy" className="footer-logo-img" />
            <span className="footer-brand-name">Flearnaxy</span>
          </div>
          <p className="footer-description">
            Empowering learners worldwide with quality education and innovative learning experiences.
          </p>
          <div className="social-links">
            <a href="#" className="social-link">Twitter</a>
            <a href="#" className="social-link">LinkedIn</a>
            <a href="#" className="social-link">Facebook</a>
          </div>
        </div>

        <div className="footer-links">
          <div className="footer-column">
            <h4 className="footer-heading">For Students</h4>
            <a href="#" className="footer-link">Profile</a>
            <a href="#" className="footer-link">My Learning</a>
            <a href="#" className="footer-link">Wishlist</a>
            <a href="#" className="footer-link">Earning F-coins</a>
          </div>

          <div className="footer-column">
            <h4 className="footer-heading">For Instructors</h4>
            <a href="#" className="footer-link">Become an Instructor</a>
            <a href="#" className="footer-link">Teaching Resources</a>
            <a href="#" className="footer-link">Course Creation</a>
            <a href="#" className="footer-link">Earnings</a>
          </div>

          <div className="footer-column">
            <h4 className="footer-heading">Company</h4>
            <a href="#" className="footer-link">About Us</a>
            <a href="#" className="footer-link">Terms of Service</a>
            <a href="#" className="footer-link">Blog</a>
            <a href="#" className="footer-link">Privacy Policy</a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; 2026 Flearnaxy. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;