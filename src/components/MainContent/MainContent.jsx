import { useEffect, useRef } from 'react';
import Design from './Design/Design';
import Intro from './IntroText/Intro';
import Build from './build/Build';
import Market from './Market/Market';
import CaseStudy from '../CaseStudies/CaseStudies';
import OurStory from '../OurStory/OurStory';


export default function MainCont() {



  return (
    <>
    <Intro/>
    <Design/>
    <Build/>
    <Market/>
    <CaseStudy/>
    <OurStory/>
    </>
  );
}
