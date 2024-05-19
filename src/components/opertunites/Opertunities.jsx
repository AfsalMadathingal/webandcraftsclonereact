import React, { useState, useEffect } from 'react';
import './opertunities.css';
import employeeImages from '../../employeeImages';
import joinLogo from '../../assets/images/join-team.webp';

export default function Opertunites() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const incrementIndex = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % employeeImages.length);
  };

  useEffect(() => {
    const interval = setInterval(incrementIndex, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="opertunites">
      <div className="opertunites-text">
        <h2>You Will Like It <br /> Here!</h2>
        <p>
          At WAC, we are all about creating a habitat that lets you grow <br /> stronger roots and larger branches. Together let’s make a fruitful <br /> journey!
        </p>
        <div className="opertunites-button">Explore Opportunities <i className="fa-solid fa-arrow-right"></i></div>
      </div>
      <div className="employees-photo">
        <img src={employeeImages[currentIndex]} alt={`Employee ${currentIndex + 1}`} />
      </div>
        <div className="join-team">
            <img src={joinLogo} alt="" />
        </div>
    </div>
  );
}
