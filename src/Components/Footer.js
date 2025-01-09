// // src/Components/Footer.js
// import React from 'react';
// import './Footer.css';  // Import the corresponding CSS file for styling

// const Footer = () => {
//   return (
//     <footer className="footer">
//       <div className="footer-container">
        
//         <div className="footer-links">
//           <a href="#privacy-policy">Product</a>
//           <a href="#terms-of-service">Company</a>
//           <a href="#contact-us">Resources</a>
//         </div>
//         <div className="footer-links">
//           <a href="#privacy-policy">Use cases
// </a>
//           <a href="#terms-of-service">Social</a>
//           <a href="#contact-us">Legal</a>
//         </div>
//         <div className="footer-links">
//           <a href="#privacy-policy">About us
// </a>
//           <a href="#terms-of-service">Startups</a>
//           <a href="#contact-us">Twitter</a>
//         </div>
//         <div className="footer-left">
//           {/* Left side image */}
//           <img src="Group 160.png" alt="Logo" className="footer-image" />
//         </div>
//         <div className="footer-right">
//           {/* Right side copy/text */}
//           <p>© 2077 zysktechnologies. All rights reserved.</p></div>
//       </div>
//     </footer>
//   );
// };

// export default Footer;



import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
         
          <ul>
          <li><a href="/">Product</a></li>
            <li><a href="/">Overview</a></li>
            <li><a href="/services">Features</a></li>
            <li><a href="/contact">Solution</a></li>
            <li><a href="/">Tutorials</a></li>
            <li><a href="/services">pricing</a></li>
            <li><a href="/contact">Releases</a></li>
          </ul>
        </div>
        <div className="footer-section">
          
          <ul>
          <li><a href="/">Company</a></li>
            <li><a href="/">About us</a></li>
            <li><a href="/services">Careers</a></li>
            <li><a href="/contact">Press</a></li>
            <li><a href="/">News</a></li>
            <li><a href="/services">Media kit</a></li>
            <li><a href="/contact">Contact</a></li>
          </ul>
        </div>
        <div className="footer-section">
         
          <ul>
            <li><a href="/">Reasouces</a></li>
            <li><a href="/">blog</a></li>
            <li><a href="/">Newletter</a></li>
            <li><a href="/">events</a></li>
            <li><a href="/">Help cneter</a></li>
            <li><a href="/">Tutorals</a></li>
            <li><a href="/">support</a></li>
          </ul>
        </div>
        <div className="footer-section">
         
          <ul>
            <li><a href="/">uscase</a></li>
            <li><a href="/">Startups</a></li>
            <li><a href="/">Enterprise</a></li>
            <li><a href="/">Govermentt</a></li>
            <li><a href="/">saas center</a></li>
            <li><a href="/">marketplace</a></li>
            <li><a href="/">Ecommerce</a></li>
          </ul>
        </div>
        <div className="footer-section">
      
          <ul>
          <li><a href="/">Social</a></li>
            <li><a href="/">Twitter</a></li>
            <li><a href="/">Linkedin</a></li>
            <li><a href="/">facebook</a></li>
            <li><a href="/">Github</a></li>
            <li><a href="/">Aneelisit</a></li>
            <li><a href="/">Dribbie</a></li>
          </ul>
        </div>
        <div className="footer-section">
      
          <ul>
          <li><a href="/">legal</a></li>
            <li><a href="/">Terms</a></li>
            <li><a href="/">Privacy</a></li>
            <li><a href="/">Cookies</a></li>
            <li><a href="/">Licenses</a></li>
            <li><a href="/">Setting</a></li>
            <li><a href="/">Contact</a></li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <img src="Group 160.png"></img>
       <div class="footer-bootoms">
       
       </div>
      </div>
    </footer>
  );
};

export default Footer;
