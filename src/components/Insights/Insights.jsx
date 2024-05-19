import './Insights.css'
import insImage from '../../assets/images/CEO_Jilu_Joseph_s_TE_Dx_MEC_Talk_d3fcdcf8cf.webp'
import insImage2 from '../../assets/images/DSC_09058_2ceec90ced.webp'
import insImage3 from '../../assets/images/Web_Development_with_Python_cf8d7a8016.webp'

export default function Insights() {

  const insightsData = [

    {
      image: insImage,
      content:"Event. 5 mins read",
      date:"May 22, 2024",
      title:"The Art of Achieving: CEO Jilu Joseph's Inspiring TEDxMEC Talk"
    },

    {
      image: insImage2,
      content:"News. 3 mins read",
      date:"May 22, 2024",
      title:"WAC Gifts Its First Employee a Mercedes-Benz"
    },
    {
      image: insImage3,
      content:"Blog. 13 mins read",
      date:"May 22, 2024",
      title:"Web Development with Python: An Ideal Choice for Scalable Web"
    }

    ]

  return (

    <div className="insights">
      <h2>Insights</h2>

      <div className="cards-container">

      {insightsData.map((data, index) => (
         <div key={index} className="card">
         <div className="thumbnail">
           <img
             src={data.image}
             alt=""
             className="image" 
           />
         </div>
         <div className="text-container">
         <div className="text-head">
           <p>{data.content}</p>
           <p>{data.date}</p>
         </div>
         <h2>{data.title}</h2>
         </div>
       </div>
      ))}

      </div>
      <div className="button-insights">
        View All Insights <i className="fa-solid fa-arrow-right"></i>
      </div>
    </div>

  );
}
