import React from 'react';
import './Testimonial.css'; // Import the CSS for styling

const Testimonial = () => {
  return (
    <div className="testimonial-container">
      <div className="testimonial-content">
        <img
          src="f6.png" // Replace with the actual image URL
          alt="Testimonial"
          className="testimonial-image"
        />
       
        
        <h2 className="testimonial-heading">
        We’ve been using Untitled to kick start every new<br />
        project and can’t imagine working without it.
        </h2>
        <img
          src="Avatar.png" // Replace with the actual image URL
          alt="Testimonial"
          className="testimonial-image"
        />
      
        <h5>Candice Wu
        </h5>
        <p>Product Manager, Sisyphus</p>
      </div>
    </div>
  );
};

export default Testimonial;
