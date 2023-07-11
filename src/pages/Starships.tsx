import { useEffect, useState } from 'react';
import { Navbar } from '../components/Navbar';
import axios from 'axios';
import InfiniteScroll from "react-infinite-scroll-component";
import { StarshipInfoCard } from '../components/StarshipInfoCard';

interface Starship {
  name: string
  model: string
  index: number
}

function Starships() {
  const [starships, setStarships] = useState<Starship[]>([]);
  const [selectedStarship, setSelectedStarship] = useState<Starship>();
  const [page, setPage] = useState<number>(1);
  const [hasMore, setHasMore] = useState<boolean>(false);

  const callAPI = async(page: number) => {
    const res = await axios.get(`https://swapi.dev/api/starships/?page=${page}`)
    console.log(res.data);
    return res.data
  }

  const getStarships = async(page: number) => {
    const data = await callAPI(page)
    setStarships([...starships as Starship[], ...data.results] as Starship[])
    setHasMore(true)
  };

  const getMoreShips = async() => {
		const newPage = page + 1;
    const additionalStarships = await callAPI(newPage);
    const results = additionalStarships.results;
    console.log('page:', newPage);
    console.log('results.length:', results.length);

		if (additionalStarships.next === null) {
			setHasMore(false);
      setStarships((previousStarships) => [...previousStarships, ...results]);
		} else {
			setPage(newPage);
			setStarships((previousStarships) => [...previousStarships, ...results]);
		}
    console.log('hasmore', hasMore);
	};

  function handleStarshipClick(starship: Starship) {
    if (selectedStarship && selectedStarship.name === starship.name) {
      setSelectedStarship(undefined);
    } else {
      setSelectedStarship(starship);
    }
  };

  useEffect( () => {
    getStarships(page);
  }, [])
  
  return (
    <>
      <Navbar />
      <InfiniteScroll
        dataLength={starships.length}
        hasMore={hasMore}
        next={getMoreShips}
        loader={<div className='loadingMore'>Loading more starships...</div>}>

          <div className='starshipsPageDiv'>
            { starships.length === 0 && <div className='loading'>Loading...</div> }
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
      </InfiniteScroll>
    </>
  );
}

export default Starships;
