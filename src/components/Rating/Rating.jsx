import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

function Rating({ rating }) {
  const maxRating = 5;
  const stars = [];

  for (let i = 1; i <= maxRating; i++) {
    if (i <= rating) {
      stars.push(
        <FontAwesomeIcon icon={faStar} className="star_red" key={i} />
      );
    } else {
      stars.push(<FontAwesomeIcon icon={faStar} className="star" key={i} />);
    }
  }

  return <div className="rating">{stars}</div>;
}

export default Rating;
