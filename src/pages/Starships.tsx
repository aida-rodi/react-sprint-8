import { useEffect, useState } from 'react';
import { Navbar } from '../components/Navbar';
import axios from 'axios';

interface Starship {
  name: string
  model: string
  index: number
}

function Starships() {
  const [starships, setStarships] = useState<Starship[]>([]);

  useEffect( () => {
    axios.get('https://swapi.dev/api/starships/')
    .then(res => {
      console.log (res.data.results)
      setStarships(res.data.results as Starship[])
    })
  }, [])
  
  return (
    <>
      <Navbar />
      <div className='starshipsPageDiv'>
        {starships.map((starship, index) => {
          return (
              <div key={index} className='starshipInfoDiv'>
                <div className='starshipName'>{starship.name.toUpperCase()}</div>
                <div className='starshipModel'>{starship.model}</div>
              </div>
          );
        })}
      </div>
    </>
  );
}

export default Starships;
