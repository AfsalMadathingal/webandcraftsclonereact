import "./build.css";
import buildVideo from "../../../assets/video/build.mp4";
import { useEffect, useRef } from "react";

export default function Build() {


    const buildText = useRef();
    const buildParrent = useRef(null);




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
            threshold: 0.1, 
          }
        );
    
        const element = buildParrent.current;
        if (element) {
          observer.observe(element);
        }
    
        return () => {
          if (element) {
            observer.unobserve(element);
          }
        };
      }, []);



      useEffect(() => {
   
        const spans = [...buildText.current.children]
       
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
    
      
            buildParrent.current.classList.remove('build-sticky')
            console.log("from design")
           
          }else{
           
            buildParrent.current.classList.add('build-sticky')
          
          }
    
          
    
        };
    
        window.addEventListener('scroll', handleScroll);
    
        
        return () => {
          
          window.removeEventListener('scroll', handleScroll);
        };
      }, []);





  return (
    <div ref={buildParrent} className="build build-sticky">
      <div className="build-video-div">
        <video className="build-video" loop autoPlay muted src={buildVideo}></video>
      </div>
      <div ref={buildText} className="build-text">
      <h1>Build</h1>
      <p>
        <span>Constantly adopting cutting edge technology</span>
        <br />
        <span>for your enterprise to harness its endless</span>
        <br />
        <span>possibilities and leave a global imprint</span>
        <br />
      </p>
      <h2 className="learn-more">
        Learn More <i className="fa-solid fa-arrow-right"></i>
      </h2>
      </div>
      
    </div>
  );
}
