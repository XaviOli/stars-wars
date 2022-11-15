import React, {useEffect, useContext} from 'react';
import StarshipsContext from '../../context/StarshipsContext';
import { useParams } from 'react-router-dom';
import {RingLoader} from 'react-spinners';
import {LoaderContainer} from '../starships/starships_styles';
import imageReplacement from '../../assets/img/no-image-found.jpg';

const StarshipDetails = () => {
    const { id } = useParams();
    const {getStarshipImageById, getStarshipById, starshipDetails, starshipImage, isLoading, isLoadingImage, error } = useContext(StarshipsContext);
    const isLoadingDetails = isLoadingImage || isLoading;

    useEffect(() => {
        getStarshipImageById(id);
        getStarshipById(id);
    }, []);

  return (
        <div className="flex justify-center align-center">
        {!isLoadingDetails && starshipDetails &&
            <div className="w-3/4 flex mt-6 bg-gray-900 rounded-md overflow-hidden border border-stone-600 shadow-md shadow-gray-900">
              <div className="w-2/4 bg-black">
              {starshipImage ? 
                <img 
                className="w-full h-full object-contain"
                alt="starship image" 
                src={starshipImage} 
                /> :  
                <img 
                className="w-full h-full object-contain"
                alt="starship image" 
                src={imageReplacement} 
                />}
              </div>
              <div className="p-8 w-2/4">
                <h2 className="font-bold text-3xl pb-8">{starshipDetails.name}</h2>
                <p className="pb-2"><span className="pr-2 font-bold">Model:</span>{starshipDetails.model}</p>
                <p className="pb-2"><span className="pr-2 font-bold">Cargo Capacity:</span>{starshipDetails.cargo_capacity}</p>
                <p className="pb-2"><span className="pr-2 font-bold">Consumables:</span>{starshipDetails.consumables}</p>
                <p className="pb-2"><span className="pr-2 font-bold">Cost Iin Credits:</span>{starshipDetails.cost_in_credits}</p>
                <p className="pb-2"><span className="pr-2 font-bold">Created:</span>{starshipDetails.created}</p>
                <p className="pb-2"><span className="pr-2 font-bold">Crew:</span>{starshipDetails.crew}</p>
                <p className="pb-2"><span className="pr-2 font-bold">Hyperdrive Rating:</span>{starshipDetails.hyperdrive_rating}</p>
                <p className="pb-2"><span className="pr-2 font-bold">Length:</span>{starshipDetails.length}</p>
                <p className="pb-2"><span className="pr-2 font-bold">Manufacturer:</span>{starshipDetails.manufacturer}</p>

              </div>
            </div>} 
            

          {isLoading && 
            <LoaderContainer>
            <RingLoader 
              color="#808080"
              />
             </LoaderContainer>}

          {!isLoading && error && <p>error</p>}
       
      </div>

  )
}

export default StarshipDetails;