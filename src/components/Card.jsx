import React from "react";
import "../css/Card.css";

import image from "../img/FarWest.webp";
import { Link } from "react-router-dom"


const Card = ({description ,title, image}) => {
  return (
    <div className="card-container">
      <img
        className="card-img"
        src={image}
        alt={title}
      />
        <h1 className="card-title">{title}</h1>
        <h2 className="card-time">45min</h2>
        <p className="card-description">{description}</p>
        <Link to ="/travel">
        <button className="card-button">Reserver</button>
        </Link>
      </div>
  )
}

export default Card

