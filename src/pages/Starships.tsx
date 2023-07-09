import { useEffect, useState } from 'react';
import { Navbar } from '../components/Navbar';
import axios from 'axios';
import "reactjs-popup/dist/index.css";
import { StarshipInfoCard } from '../components/StarshipInfoCard';

interface Starship {
  name: string
  model: string
  index: number
}

function Starships() {
  const [starships, setStarships] = useState<Starship[] | null>(null);
  const [selectedStarship, setSelectedStarship] = useState<Starship>();

  function getStarships() {
    axios.get('https://swapi.dev/api/starships/')
    .then(res => {
      console.log(res.data.results);
      setStarships(res.data.results as Starship[]);
    });
  }

  function handleStarshipClick(starship: Starship) {
    if (selectedStarship && selectedStarship.name === starship.name) {
      setSelectedStarship(undefined);
    } else {
      setSelectedStarship(starship);
    }
  };

  useEffect( () => {
    getStarships();
  }, [])
  
  return (
    <>
      <Navbar />
      <div className='starshipsPageDiv'>
        { starships === null && <div className='loading'>Loading...</div> }
        {starships?.map((starship, index) => {
          return (
            <div key={index} className='starshipInfoDiv'onClick={() => handleStarshipClick(starship)}>
              <div className='starshipName'>
                <a>{starship.name.toUpperCase()}</a>
              </div>
              <div className='starshipModel'>{starship.model}</div>
              {selectedStarship && selectedStarship.name === starship.name && <StarshipInfoCard selectedStarship={selectedStarship} />}
            </div>
          );
        })}
      </div>
    </>
  );
}

export default Starships;
