import React from 'react';
import './TextButtonSection.css';

const TextButtonSection = () => {
  // const handleButtonClick = () => {
  //   alert('Button Clicked!');
  // };

  return (
    <section className="text-button-section">
      <div className="content">
        <button class="btn-1">
     
<span class="btn-2">New feature</span>
<span class="sp">check out the team dashboard</span>        </button>
        <h2 className="section-heading">Beautiful analytics to grow smarter</h2>
        <p className="section-text">
        Powerful, self-serve product and growth analytics to help you convert,
        engage, and retain more users. Trusted by over 4,000 startups.

        </p>
        {/* <button className="text-button" onClick={handleButtonClick}>
          Learn More
        </button> */}
        <div class="twobut">
          <button class="btn-3">Demo</button>
          <button class="btn-4">sign up</button>
        </div>
      </div>
    
    </section>
  );
};

export default TextButtonSection;
