import { useState } from "react";
import arrowLeft from "./arrowleft.png";
import arrowRight from "./arrowright.png";

function Slideshow({ pictures }) {
  const [currentSlide, setCurrentSlide] = useState(0);

  const previousSlide = () => {
    setCurrentSlide(
      currentSlide === 0 ? pictures.length - 1 : currentSlide - 1
    );
  };

  const nextSlide = () => {
    setCurrentSlide(
      currentSlide === pictures.length - 1 ? 0 : currentSlide + 1
    );
  };

  return (
    <div className="slideshow">
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
      <img
        className="slideshow_img"
        src={pictures[currentSlide]}
        alt={`Slide numéro ${currentSlide + 1}`}
      />
      <div className="slideshow_counter">
        <p>
          {pictures.length > 1 ? `${currentSlide + 1}/${pictures.length}` : ""}
        </p>
      </div>
    </div>
  );
}

export default Slideshow;
