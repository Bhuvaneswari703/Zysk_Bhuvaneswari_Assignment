import React from 'react';
import './SectionOne.css';

const SectionOne = () => {
  return (
    <section className="container">
      <div className="card">
        <img src="Featured icon (3).png" alt="Card " className="card-image" />
        <h2>Connect with customers</h2>
        <p>Solve a problem or close a sale in real-time with chat. If no one is available, customers are seamlessly routed to email without confusion.
        </p>
      </div>
      <div className="card">
        <img src="Featured icon (4).png" alt="Card " className="card-image" />
        <h2>Connect the tools you already use</h2>
        <p>Explore 100+ integrations that make your day-to-day workflow more efficient and familiar. Plus, our extensive developer tools.
        </p>
      </div>
      <div className="card">
        <img src="Featured icon (5).png" alt="Card " className="card-image" />
        <h2>Our people make the difference</h2>
        <p>We’re an extension of your customer service team, and all of our resources are free. Chat to our friendly team 24/7 when you need help.Frequently asked questions
        </p>
      </div>
    </section>
  );
};

export default SectionOne;
