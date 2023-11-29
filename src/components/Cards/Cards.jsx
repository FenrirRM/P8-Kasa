import Data from "../../logements.json";
import { Link } from "react-router-dom";

function Cards() {
  return (
    <div className="gallery">
      {Data.map(({ id, title, cover }) => (
        <Link className="card" to={`Housing/${id}`} key={id}>
          <img className="card_img" src={cover} alt="Aperçu du logement" />
          <div className="card_title">
            <h2 className="card_title_text">{title}</h2>
          </div>
        </Link>
      ))}
    </div>
  );
}

export default Cards;
