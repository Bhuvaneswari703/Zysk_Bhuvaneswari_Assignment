import React, { useState } from 'react';
import './FAQ.css'; // Import the CSS for styling

const FAQ = () => {
  // State to manage the visibility of answers
  const [activeIndex, setActiveIndex] = useState(null);

  // Toggle the visibility of the answer when a question is clicked
  const toggleAnswer = (index) => {
    if (activeIndex === index) {
      setActiveIndex(null); // If clicked again, hide the answer
    } else {
      setActiveIndex(index); // Otherwise, show the answer
    }
  };

  // FAQ data (questions and answers)
  const faqData = [
    {
      question: 'Can I change my plan later?',
      answer: 'React is a JavaScript library for building user interfaces'
    },
    {
      question: 'What is your cancellation policy?',
      answer: 'JSX stands for JavaScript XML. '
    },
    {
      question: 'Can other info be added to an invoice?',
      answer: 'React handles state through the '
    },
    {
        question: 'How does billing work?',
        answer: 'React handles state through the '
      },
      {
        question: 'How do I change my account email?',
        answer: 'React handles state through the `useState` '
      },
     
  ];

  return (
    <div className="faq-container">
      <h2 className="faq-heading">Frequently Asked Questions</h2>
      <div className="faq-list">
        {faqData.map((item, index) => (
          <div key={index} className="faq-item">
            <div
              className="faq-question"
              onClick={() => toggleAnswer(index)}
            >
              <h3>{item.question}</h3>
            </div>
            {activeIndex === index && (
              <p className="faq-answer">{item.answer}</p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;
