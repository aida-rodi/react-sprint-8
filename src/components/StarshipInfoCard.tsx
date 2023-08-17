import { useEffect, useState } from "react";

export function StarshipInfoCard({selectedStarship}: any) {
  const [image, setImage] = useState('');

  useEffect(() => {
    const imageId = selectedStarship.url.slice(32, -1);
    setImage(`https://starwars-visualguide.com/assets/img/starships/${imageId}.jpg`);
  }, [selectedStarship.url]);
  const handleImageError = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
    e.currentTarget.src = `https://starwars-visualguide.com/assets/img/big-placeholder.jpg`;
  };

  return (
    <div className="starshipsInfoCardDiv">
      <div className="starshipImageDiv">
      <img className="starshipImage" src={image} alt={selectedStarship.name + ' image'} onError={handleImageError}></img>
      </div>
      <div>
        <ul>
          <li><span className="infoCategory">Model: </span>{selectedStarship.model}</li>
          <li><span className="infoCategory">Starship Class: </span>{selectedStarship.starship_class}</li>
          <li><span className="infoCategory">Manufacturer: </span>{selectedStarship.manufacturer}</li>
          <li><span className="infoCategory">Cost: </span>{selectedStarship.cost_in_credits} credits</li>
          <li><span className="infoCategory">Crew: </span>{selectedStarship.crew}</li>
          <li><span className="infoCategory">Passengers Capacity: </span>{selectedStarship.passengers}</li>
          <li><span className="infoCategory">Cargo Capacity: </span>{selectedStarship.cargo_capacity}</li>
          <li><span className="infoCategory">Consumables: </span>{selectedStarship.consumables}</li>
          <li><span className="infoCategory">Length: </span>{selectedStarship.length} meters</li>
          <li><span className="infoCategory">Hyperdrive rating: </span>{selectedStarship.hyperdrive_rating}</li>
          <li><span className="infoCategory">Maximum Speed in Realspace: </span>{selectedStarship.MGLT} MGLT</li>
        </ul>
      </div>
    </div>
  )
};