import React, {useEffect, useContext} from 'react';
import StarshipsContext from '../../context/StarshipsContext';
import {RingLoader} from 'react-spinners';


const StarshipDetails = () => {
    const {getStarshipById, starshipDetails, isLoading, error } = useContext(StarshipsContext);
  
    useEffect(() => {
        getStarshipById();
    }, []);

  return (
    <div>
       {!isLoading && starshipDetails &&
          <div >
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