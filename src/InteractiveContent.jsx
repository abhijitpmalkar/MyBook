import React, { useState, useEffect } from 'react';
import './InteractiveContent.css'; // Import CSS file for styling
import axios from 'axios'; // Import Axios for making HTTP requests

const InteractiveContent = ({ title }) => {
  const [contentSections, setContentSections] = useState([]);
  
  useEffect(() => {
    // Fetch content from API
    axios.get('https://my-book-back-end.vercel.app')
      .then(response => {
        setContentSections(response.data);
      })
      .catch(error => {
        console.error('Error fetching content:', error);
      });
  }, []); // Empty dependency array ensures the effect runs only once after the component mounts

  return (
    <div className="interactive-content">
      <h2>{title}</h2>
      <div className="content-wrapper">
        {contentSections.map((section, index) => (
          <div key={index} className="content-section">
            <h3>{section.name}</h3>
            <div dangerouslySetInnerHTML={{ __html: section.content }} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default InteractiveContent;
