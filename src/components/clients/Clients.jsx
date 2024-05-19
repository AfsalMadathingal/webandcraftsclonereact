import "./clients.css";
import brandLogo from "../../brandLogo.js";

export default function Clients() {
  return (
    <div className="clients">
      <div className="clients-heading">
        <h2>Clients</h2>
        <p>Our Clients are everyting to us; so are we to them.</p>
      </div>

      <div className="brand-logos">
        {brandLogo.map((logo, ind) => (
          <div key={ind} className="logo">
            <img src={logo} alt="" />
          </div>
        ))}
        {brandLogo.map((logo, ind) => (
          <div key={ind} className="logo">
            <img src={logo} alt="" />
          </div>
        ))}
        
      </div>
      <div className="view-work-button">
          View All Clients <i className="fa-solid fa-arrow-right"></i>
    </div>
    </div>
  );
}
