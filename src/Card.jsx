import FarWest from "../src/img/FarWest.webp"

function Cards() {
  return (
    <div className="App">
      <div className="card-container">
      <img
        className="card-img"
        src={FarWest}
        alt="far-west"
      />
        <h1 className="card-title">Far West</h1>
        <h2 className="card-time">2 heures</h2>
        <p className="card-description">Revivez le combat de billy the Kid et Pat Garette</p>
        <button className="card-button">Travel</button>
      </div>
    </div>
  );
}
export default Cards;
