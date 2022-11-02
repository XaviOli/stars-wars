import React, {useEffect, useContext} from 'react';
import StarshipsContext from '../../context/StarshipsContext';
import { useParams } from 'react-router-dom';
import {RingLoader} from 'react-spinners';


const StarshipDetails = () => {
    const { id } = useParams();
    const {getStarshipImageById, getStarshipById, starshipDetails, starshipImage, isLoading, isLoadingImage, error } = useContext(StarshipsContext);
    const isLoadingDetails = isLoadingImage || isLoading;

    useEffect(() => {
        getStarshipImageById(id);
        getStarshipById(id);
    }, []);

  return (
    <div>
       {!isLoadingDetails && starshipDetails &&
          <div >
            {starshipImage && 
            <img 
            alt="starship image" 
            src={starshipImage} 
            />}
            <h2>{starshipDetails.name}</h2>
            <p>{starshipDetails.model}</p>
          </div>} 
          <div 
          style={{
          width: '100%',
          display: 'flex',
          justifyContent: 'center'
        }}>

        {isLoading && <RingLoader 
          color="#808080"
          />}

        {!isLoading && error && <p>error</p>}
      </div>

      </div>

  )
}

export default StarshipDetails;