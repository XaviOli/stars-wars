import React, {useEffect, useContext} from 'react';
import StarshipsContext from '../../context/StarshipsContext';
import {RingLoader} from 'react-spinners';
import { useNavigate } from "react-router-dom";
import { LoaderContainer, StarshipContainer, StarshipsListContainer, StarshipsName} from './starships_styles';


const Starships = () => {
  const {getStarships, handleScroll, isBottom, starships, isLoading, error } = useContext(StarshipsContext);
  const navigate = useNavigate();

  useEffect(() => {
    if(isBottom) {
      getStarships();
    }
  }, [isBottom]);


  useEffect(()=> {
    getStarships();
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    }
  }, [])

  return (
    <>
      <StarshipsListContainer>
       {starships?.length > 0 && starships.map((starship, index) => 
          <div 
            key={index} 
            onClick={() => {
              const id = starship.url.split("starships/")[1].replaceAll('/', '');
              navigate(`/starship/${id}`);
            }}>
              <StarshipContainer>
                <StarshipsName>{starship.name}</StarshipsName>
                <p>{starship.model}</p>
              </StarshipContainer>
          </div>)
        } 
            
          {isLoading && 
            <LoaderContainer>
                <RingLoader 
                  color="#808080"
                  />
            </LoaderContainer>}
      

          {!isLoading && error && !isBottom && <p>error</p>}      
          </StarshipsListContainer>
    </>
  )
}

export default Starships;