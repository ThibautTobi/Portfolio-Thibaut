import React, { useState, useEffect } from 'react';
import '../CSS/ProgressBar.css';

function ProgressBar () {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      if (progress < 100) {
        setProgress(progress + 1);
      }
    }, 50);

    return () => {
      clearInterval(interval);
    };
  }, [progress]);

  return (
    <div className="progress-bar-container">
      <div
        className="progress-bar"
        style={{ width: `${progress}%` }}
      ></div>
      <span className="progress-text">{`${progress}%`}</span>
    </div>
  );
};

export default ProgressBar;
