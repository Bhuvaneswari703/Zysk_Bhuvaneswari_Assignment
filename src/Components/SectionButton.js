import React from "react";
import './SectionButton.css';  // Importing the CSS for styling

const SectionButton = () => {
  return (
    <section className="section-container">
      <div className="section-content">
        <h2>Start your free trial</h2>
        <p>Join over 4,000+ startups already growing with Untitled.
        </p>
        <div class="twobutt">
          <button class="btnn-3">Demo</button>
          <button class="btnn-4">sign up</button>
        </div>
      </div>
    </section>
  );
};

export default SectionButton;
