import { useParams } from "react-router-dom";
import { Navigate } from "react-router-dom";
import Data from "../../logements.json";
import Collapse from "../../components/Collapse/Collapse";
import Slideshow from "../../components/Slideshow/Slideshow";
import Rating from "../../components/Rating/Rating";

function Housing() {
  const { id } = useParams();
  const housing = Data.find((house) => house.id === id);

  if (housing === undefined) {
    return <Navigate to="*" />;
  }

  const {
    tags,
    equipments,
    title,
    location,
    rating,
    host: { name, picture },
    description,
  } = housing;

  const equipmentsList = equipments.map((equipment) => (
    <li key={equipment}>{equipment}</li>
  ));

  const tagList = tags.map((tag) => (
    <li className="tags" key={tag}>
      {tag}
    </li>
  ));

  return (
    <main>
      <Slideshow pictures={housing.pictures} />
      <div className="housing">
        <div className="housing_info">
          <h1 className="housing_info_title">{title}</h1>
          <p className="housing_info_location">{location}</p>
          <ul>{tagList}</ul>
        </div>
        <div className="housing_host-rating">
          <div className="housing_host-rating_host">
            <p>{name}</p>
            <img src={picture} alt="propiétaire" />
          </div>
          <Rating rating={rating} />
        </div>
      </div>

      <div className="housing_collapse">
        <Collapse title="Description" content={description} />
        <Collapse title="Équipements" content={<ul>{equipmentsList}</ul>} />
      </div>
    </main>
  );
}

export default Housing;
