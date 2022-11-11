import React, {useEffect, useContext} from 'react';
import StarshipsContext from '../../context/StarshipsContext';
import {RingLoader} from 'react-spinners';
import { useNavigate } from "react-router-dom";
import { LoaderContainer, StarshipsListContainer} from './starships_styles';
import { Div} from '../../styles';

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
            className="w-1/2 bg-gray-900 my-4 rounded cursor-pointer"
            onClick={() => {
              const id = starship.url.split("starships/")[1].replaceAll('/', '');
              navigate(`/starship/${id}`);
            }}>
              <Div  className="container px-4 py-4">
                <h2 className="text-xl font-bold">{starship.name}</h2>
                <p>{starship.model}</p>
              </Div>
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