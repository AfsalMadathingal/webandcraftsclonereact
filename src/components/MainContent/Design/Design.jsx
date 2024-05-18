import React, { useEffect, useRef, useState } from 'react';
import butterFly from '../../../assets/video/butterfly.mp4'
import './Design.css'

export default function Design() {  
    const textTwo = useRef();
    const textTwoParrent = useRef(null);
    const [block,setBlock] = useState(false)


 useEffect(() => {
   
    const spans = [...textTwo.current.children]
    console.log(textTwo.current)
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

  
        textTwoParrent.current.classList.remove('text-two-sticky')
        console.log("from design")
       
      }else{
       
        textTwoParrent.current.classList.add('text-two-sticky')
      
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

    const element = textTwoParrent.current;
    if (element) {
      observer.observe(element);
    }

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, []);

    return(
        <>
       
        <div ref={textTwoParrent} className="text-two text-two-sticky">
        <div className='text-two-video-div'>
        <h1>Design</h1>
          <video className='text-two-video' autoPlay loop muted src={butterFly}></video>
        </div>
          <p ref={textTwo}>
                  <span>Intelligent</span> <span>design</span> <span>is</span> <span>the</span> <span>essence</span> <span>of</span> <span>nature;</span><br />
                  <span>that's</span> <span>our</span> <span>inspiration</span> <span>in</span> <span>crafting</span><br />
                  <span>tomorrow's</span> <span>tech</span> <span>realm</span>
              </p>
            <h2 className='learn-more'>Learn More  <i className="fa-solid fa-arrow-right"></i></h2>
      </div>

      </>
    )
}