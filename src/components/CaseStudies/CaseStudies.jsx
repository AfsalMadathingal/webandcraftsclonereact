import "./CaseStudies.css";
import cardData from "../../cardData";
import React, { useEffect } from "react";

const CaseStudy = () => {
  useEffect(() => {
    const cards = document.querySelectorAll(".cards-study");

    cards.forEach((card) => {
      const video = card.querySelector(".video");
      const image = card.querySelector(".image");

      card.addEventListener("mouseover", () => {
        video.play();
      });

      card.addEventListener("mouseleave", () => {
        video.pause();
        video.currentTime = 0; 
      });
    });
  }, []);

  return (
    <div className="case-study">
      <h2>Case Studies</h2>

      <div className="cards-container">
        {cardData.map((card) => (
          <div key={card.id} className="cards-study">
            <div className="thumbnail">
              <video
                src={card.video}
                className="video"
                loop
                muted
              ></video>
              <img src={card.img} alt="" className="image" />
            </div>
            <div className="text-details">
              <h3>{card.title}</h3>
              <p>{card.description}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="view-work-button">
          View All Works <i className="fa-solid fa-arrow-right"></i>
      </div>
    </div>
  );
};

export default CaseStudy;
