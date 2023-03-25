import "../ModalValidationFormulaireReservation/ModalValidationFormulaireReservation.css"
import { Link } from 'react-router-dom'

export default function ModalValidationFormulaireReservation() {

  return (
    <div
      tabIndex="-1"
      className="popUpModal" 
    >
      <div className="AllModal">
          <div className="positionModalSurLaPage">
            <h3 className="titleTextModal">
              Votre demande à bien était prise en compte, nous vous recontacteront dès que possible.
            </h3>
            <Link to="/">
                <div className="wrapper">
                    <button className="btn btn--border btn--primary btn--animated" type="submit">Super, merci !</button>
                </div>
            </Link>
        </div>
      </div>
    </div>
  );
}
