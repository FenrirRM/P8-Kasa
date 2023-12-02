import { useState } from "react";

// Import des assets pour les flèches du carrousel.
import arrowLeft from "./arrowleft.png";
import arrowRight from "./arrowright.png";

// Fonction du carrousel avec la prop pictures en paramètre.
function Slideshow({ pictures }) {

  // Initialisation de l'état local "currentSlide" à 0 à l'aide du hook "useState".
  const [currentSlide, setCurrentSlide] = useState(0);

  // Au clic sur la flèche de gauche, affiche le slide précédent.
  const previousSlide = () => {
    setCurrentSlide(
      currentSlide === 0 ? pictures.length - 1 : currentSlide - 1
    );
    //Si currentSlide est 0 (première image) alors on passe à la dernière image.
    //Sinon currentSlide décrémente de 1 pour afficher l'image précédente.
  };

  // Au clic sur la flèche de droite, affiche le slide suivant.
  const nextSlide = () => {
    setCurrentSlide(
      currentSlide === pictures.length - 1 ? 0 : currentSlide + 1
    );
    //Si currentSlide est length - 1 (dernière image) alors on passe à la première image.
    //Sinon currentSlide incrémente de 1 pour afficher l'image suivante.
  };

  return (
    <div className="slideshow">
      {/* Affichage des flèches du carrousel */}
      {/* pictures.length > 1 pour afficher seulement si il y as plusieurs image */}
      {pictures.length > 1 && (
        <div className="slideshow_arrow">
          <button className="slideshow_arrow_left" onClick={previousSlide}>
            <img src={arrowLeft} alt="Flèche gauche" className="arrow" />
          </button>
          <button className="slideshow_arrow_right" onClick={nextSlide}>
            <img src={arrowRight} alt="Flèche droite" className="arrow" />
          </button>
        </div>
      )}
      {/* Affichage des images du carrousel en fonction de currentSlide */}
      <img
        className="slideshow_img"
        src={pictures[currentSlide]}
        alt={`Slide numéro ${currentSlide + 1}`}
      />
      <div className="slideshow_counter">
        <p>
          {/* Affichage du compteur en bas du carrousel */}
          {/* pictures.length > 1 pour afficher seulement si il y as plusieurs image */}
          {pictures.length > 1 ? `${currentSlide + 1}/${pictures.length}` : ""}
        </p>
      </div>
    </div>
  );
}

export default Slideshow;
