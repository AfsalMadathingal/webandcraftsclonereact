import { useEffect, useRef } from 'react';
import './Intro.css'
import butterFly from '../../../assets/video/butterfly.mp4'


export default function MainCont() {
  const textone = useRef();
  const textoneParent = useRef();

  useEffect(() => {
   
    const spans = [...textone.current.children]
    console.log(textone.current)
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

      if(spans[spans.length-1].classList.contains('white') && spans[spans.length-1].innerText === 'happen !'){

       textoneParent.current.classList.remove('text-one-non-sticky')

      }else{
       
        textoneParent.current.classList.add('text-one-non-sticky')
        
      
      }

      

    };

    window.addEventListener('scroll', handleScroll);

    
    return () => {
      
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);



  return (
    <>
    
    <div ref={textoneParent}  className="text-one text-one-non-sticky">
      <p ref={textone} className='text-intro'>
        <span>We</span> <span>believe</span> <span>in</span> <span>a</span>{" "}
        <span>world</span> <span>where</span> <br /> {" "}
        <span>technology </span> <span> fosters</span> <span>your</span>{" "}
        <span>everyday</span>  <br /> <span>experiences.</span><span> And</span>{" "}
        <span>our</span> <span>mission</span> <span>is</span>  <br /> <span>to</span>{" "}
        <span>make</span> <span>it</span> <span>happen !</span>
      </p>
    </div>

    </>
  );
}
