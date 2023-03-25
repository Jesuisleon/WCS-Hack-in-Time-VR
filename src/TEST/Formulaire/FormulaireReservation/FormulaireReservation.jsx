import { useState } from "react";
import "./FormulaireReservation.css";
import devisPersonnalise from "../FonctionDevis/DevisPersonnalise";
import FonctionDevis from "../FonctionDevis/FonctionDevis";
import ModalValidationFormulaireReservation from "./ModalValidationFormulaireReservation/ModalValidationFormulaireReservation";
import NavBar from "../../NavBar/NavBar";
import BackgroundVideo from "../../../img/background.mp4"
import { Link } from "react-router-dom"


export default function FormulaireReservation(){

    const [price, setPrice] = useState("");
    const [showModal, setShowModal] = useState(false);

    const validationReservation =(e) =>{
        e.preventDefault()
            setShowModal(true);
    }
        
    return (
        <section >
            <video id="background-video" loop autoPlay>
    <source src={BackgroundVideo} type="video/mp4" />
    Your browser does not support the video tag.
</video>
            <NavBar />    
            <div>
            <Link to="/">
                <div
                style={{backgroundColor: "white", borderRadius: "100%", marginLeft:"40%", marginTop:"3%", height: "2em", width: "2em", display: "flex",alignItems: "center", justifyContent: "center", zIndex: "55", position: "absolute", color: "black"}}>X</div>
        </Link>
        </div>
            <div className="divContainerFormulaire" style={{position: "absolute", top: "10em"}}>
        
                <div className="AllDivFormulaireReservation">
            
                <form>
                    <div className="titreFormulaireReservationDiv">
                        <h1 className="titreFormulaireReservation">Formulaire de réservation</h1>
                    </div>
                    <div className="inputFirstNameAndName">
                        <div className="inputFirstName">
                            <input type="text" />
                            <label>Prénom</label>
                        </div>
                        <div className="inputLastName">
                            <input type="text" />
                            <label>Nom</label>
                        </div>
                    </div>
                    <div className="inputDateReservationHeureReservation">
                        <div className="dateReservation">
                            <input type="date" />
                        </div>
                        <div className="heureReservation">
                            <input type="time" />
                        </div>
                    </div>
            
                    <div className="AllNombrePersonnesTemps">
                        <div className="nombrePersonnes">
                            <select onChange={(e) => setPrice (e.target.value)} name="nombrePersonnesSelect" id="nombrePersonnes" >
                                <option value="titleSelect" id="nombrePersonnes" selected>-- Nombre de personnes --</option>
                                    {devisPersonnalise.map((devisPerso) => (
                                        <option  key={devisPerso.id} id={devisPerso.id} value={devisPerso.nombrePersonnes}>{devisPerso.nombrePersonnes}</option>
                                    ))}
                            </select>
                        </div>
                            <div className="tempsReservation">
                                    <select name="tempsReservationSelect" id="tempsReservatoin" >
                                        <option value="" id="tempsReservation" selected>-- Temps d'immersion --</option>
                                        <option key="tempsImmersion" id="tempsImmersion" value="">45 min</option>
                                    </select>
            
                            </div>
                        </div>
                        <div className="devis">
                                <FonctionDevis
                                devisPrice={price}
                                />
                            </div>
            
                    <div className="wrapper">
                        <button onClick={validationReservation} className="btn btn--border btn--primary btn--animated" type="submit">Envoyer la demande</button>
                    </div>
            
                </form>
                </div>
                {showModal ? <ModalValidationFormulaireReservation /> : null}
                </div>
        </section>
    )
}