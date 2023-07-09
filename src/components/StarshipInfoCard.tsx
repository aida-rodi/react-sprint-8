import { useEffect, useState } from "react";

export function StarshipInfoCard({selectedStarship}: any) {
  const [imageSource, setImageSource] = useState("");

  useEffect(() => {
      const imageId = selectedStarship.url.slice(32, -1);
      setImageSource(`https://starwars-visualguide.com/assets/img/starships/${imageId}.jpg`);
  }, [selectedStarship.url]);

  return (
    <div className="starshipsInfoCardDiv">
      <div className="starshipImageDiv">
      <img className="starshipImage" src={imageSource} alt={selectedStarship.name + ' image'}></img>
      </div>
      <div>
        <ul>
          <li><span className="infoCategory">Model:</span> {selectedStarship.model}</li>
          <li><span className="infoCategory">Starship Class: </span>{selectedStarship.starship_class}</li>
          <li><span className="infoCategory">Manufacturer: </span>{selectedStarship.manufacturer}</li>
          <li><span className="infoCategory">Cost: </span>{selectedStarship.cost_in_credits} credits</li>
          <li><span className="infoCategory">Crew: </span>{selectedStarship.crew} </li>
          <li><span className="infoCategory">Passengers Capacity: </span>{selectedStarship.passengers}</li>
          <li><span className="infoCategory">Cargo Capacity: </span>{selectedStarship.cargo_capacity}</li>
          <li><span className="infoCategory">consumables: </span>{selectedStarship.consumables}</li>
          <li><span className="infoCategory">Length: </span>{selectedStarship.length} meters</li>
          <li><span className="infoCategory">Hyperdrive rating: </span>{selectedStarship.hyperdrive_rating}</li>
          <li><span className="infoCategory">Maximum Speed in Realspace: </span>{selectedStarship.MGLT} MGLT</li>
        </ul>
      </div>
    </div>
    )
};