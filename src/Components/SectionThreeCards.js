// SectionThreeCards.js
import React from 'react';
import './SectionThreeCards.css';

const SectionThreeCards = () => {
  return (
    <section className="container">
      <div className="card">
    
      <img src="Featured icon.png" alt=" " className="card-image" />
      <h2>Share team inboxes</h2>
        <p>Whether you have a team of 2 or 200, our shared team inboxes keep everyone on the same page and in the loop.
        </p>
      </div>
      <div className="card">
        <img src="Featured icon 1.png" alt=" " className="card-image" />
        <h2>Deliver instant answers</h2>
        <p>An all-in-one customer service platform that helps you balance everything your customers need to be happy.
        </p>
      </div>
      <div className="card">
        <img src="Featured icon (2).png" alt="" className="card-image" />
        <h2>Manage your team with reports</h2>
        <p>Measure what matters with Untitled’s easy-to-use reports. You can filter, export, and drilldown on the data in a couple clicks.
        </p>
      </div>
    </section>
  );
};

export default SectionThreeCards;
