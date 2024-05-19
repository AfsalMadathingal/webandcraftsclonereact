import { useEffect, useRef } from "react";
import Design from "./Design/Design";
import Intro from "./IntroText/Intro";
import Build from "./build/Build";
import Market from "./Market/Market";
import CaseStudy from "../CaseStudies/CaseStudies";
import OurStory from "../OurStory/OurStory";
import Services from "../services/Serivices";
import Clients from "../clients/Clients";
import Opertunites from "../opertunites/Opertunities";
import Insights from "../Insights/Insights";
import Footer from "../Footer/Footer";
export default function MainCont() {


  return (
    <>
      <Intro />
      <Design />
      <Build />
      <Market />
      <CaseStudy />
      <OurStory />
      <Services/>
      <Clients/>
      <Opertunites/>
      <Insights/>
      <Footer/>
    </>
  );
}
