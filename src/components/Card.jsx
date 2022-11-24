import "../css/Card.css";
import image from "../img/FarWest.webp";

const Card = ({description ,title, image}) => {
  return (
    <div className="card-container">
      <img
        className="card-img"
        src={image}
        alt="far-west"
      />
        <h1 className="card-title">{title}</h1>
        <h2 className="card-time">45min</h2>
        <p className="card-description">{description}</p>
        <button className="card-button">Travel</button>
     </div>
  )
}

export default Card

