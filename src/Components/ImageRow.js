import React from "react";
import "./ImageRow.css";  // Import the CSS for styling

const ImageRow = () => {
  return (
    <div className="container">
      <div className="image-row">
        <img src="Fictional company logo.png" alt="Image 1" className="image" />
        <img src="f1.png" alt="Image 2" className="image" />
        <img src="f2.png" alt="Image 3" className="image" />
        <img src="f3.png" alt="Image 4" className="image" />
        <img src="f4.png" alt="Image 5" className="image" />
        <img src="f5.png" alt="Image 6" className="image" />
      </div>
    </div>
  );
};

export default ImageRow;
