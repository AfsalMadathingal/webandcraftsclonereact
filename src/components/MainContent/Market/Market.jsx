import React, { useEffect, useRef } from 'react';
import marketVideo from '../../../assets/video/market.mp4'
import './market.css'

export default function Design() {  
    const market = useRef();
    const marketParrent = useRef(null);


 useEffect(() => {
   
    const spans = [...market.current.children]
    console.log(market.current)
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const totalScrollHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrollFraction = scrollPosition / totalScrollHeight;
      const numberOfSpans = spans.length;
      const spansToColor = Math.floor(scrollFraction * numberOfSpans);

      spans.forEach((span, index) => {
        if (index < spansToColor) {
          span.classList.add('white');
        } else {
          span.classList.remove('white');
        }

      });

      if(spans[spans.length-1].classList.contains('white')){

  
        marketParrent.current.classList.remove('market-sticky')
        
       
      }else{
       
        marketParrent.current.classList.add('market-sticky')
      
      }

      

    };

    window.addEventListener('scroll', handleScroll);

    
    return () => {
      
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible', 'zoom-in');
            entry.target.classList.remove('zoom-out');
          } else {
            entry.target.classList.remove('zoom-in');
            entry.target.classList.add('zoom-out');
          }
        });
      },
      {
        threshold: 0.1, // Adjust this value based on when you want to trigger the animation
      }
    );

    const element = marketParrent.current;
    if (element) {
      observer.observe(element);
    }

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, []);

    return (
      <>
        <div ref={marketParrent} className="market market-sticky">
          <div className="market-video-div">
            <h1>Market</h1>
            <video
              className="market-video"
              autoPlay
              loop
              muted
              src={marketVideo}
            ></video>
          </div>
          <p ref={market}>
            <span>Experts in solving the WHY, WHERE</span>
            <br />
            <span>and HOW of propelling your</span>
            <br />
            <span>business to new frontiers</span>
          </p>
          <h2 className="learn-more">
            Learn More <i className="fa-solid fa-arrow-right"></i>
          </h2>
        </div>
      </>
    );
}