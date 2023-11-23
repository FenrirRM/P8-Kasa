import { useParams } from "react-router-dom";
import Data from "../../logements.json";
import Collapse from "../../components/Collapse/Collapse";
import Slideshow from "../../components/Slideshow/Slideshow";

function Housing () {
    const {id} = useParams();
    const housing = Data.find((house) => house.id === id);



    return(
        <main className="housing">
            <Slideshow pictures={housing.pictures}/>
            <div className="housing_collapse">
            <Collapse title="Description" content={housing.description} />
            <Collapse title="Équipements" content={housing.equipments} />
            </div>
        </main>
    )
}

export default Housing;