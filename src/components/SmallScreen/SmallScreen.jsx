import "./smallScreen.css";
import afsalmadathingal from "../../assets/images/afsalmadathingal.png";
export default function SmallScreen() {
  return (
    <div className="small-screen">
      <div className="image-cont">
        <img className="image" src={afsalmadathingal} alt="" />
      </div>

      <h1>Thank you for your interest in seeing my work.</h1>
      <h1>
        Currently, this clone is not responsive.<br /> I designed this only to
        be viewed on desktop. <br />
        I am working on making it responsive.

      </h1>
      <h1>Click the icon Below to See My all Works <br />
      or you can open this link on Desktop/PC </h1>
      <div className="sociallinks">
        <a href="https://www.linkedin.com/in/afsalmadathingal/">
          <i className="fa-brands fa-linkedin"></i>
        </a>
        <a href="https://github.com/AfsalMadathingal">
          <i className="fa-brands fa-github"></i>
        </a>
        <a href="https://afsalmadathingal.online/">
          <i className="fa-solid fa-globe"></i>
        </a>
      </div>
    </div>
  );
}
