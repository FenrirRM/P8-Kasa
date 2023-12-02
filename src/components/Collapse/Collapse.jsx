import { useState } from "react";

// Import de l'image pour la flèche du collapse
import arrowup from "./arrowup.png";

// Fonction du Collapse avec les props title et content en paramètres.
function Collapse({ title, content }) {
  // Initialisation de l'état local "open" à false à l'aide du hook "useState".
  const [open, setOpen] = useState(false);

  // Change l'état de open false en true et inversement.
  const toggle = () => {
    setOpen(!open);
  };

  return (
    <div className="collapse">
      <div className="collapse_title">
        <h2>{title}</h2>
        <img
          src={arrowup}
          alt="flêche collapse"
          className={open ? "arrow arrow_down" : "arrow arrow_up"}
          onClick={toggle} 
        />
      </div>
      <div
        className={
          open
            ? "collapse_content collapse_content_show"
            : "collapse_content collapse_content_hide"
        }
      >
        {content}
      </div>
    </div>
  );
}

export default Collapse;
