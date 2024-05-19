import './services.css'
import servicesData from '../../servicesData'


export default function Services() {


    return (

        <div className="services">
      <h2>Services</h2>

      <div className="cards-container">
        {servicesData.map((card) => (
          <div key={card.id} className="services-study">
            <div className="thumbnail">
              <img src={card.image} alt="" className="image" />
            </div>
            <div className="text-details">
              <h3>{card.name}</h3>
              <p>{card.Description}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="view-work-button">
          View All Services <i className="fa-solid fa-arrow-right"></i>
      </div>
    </div>
    )
}
