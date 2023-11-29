import { useState } from "react";
import arrowup from "./arrowup.png";

function Collapse({ title, content }) {
  const [open, setOpen] = useState(false);

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
