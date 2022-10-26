import React, { createContext, useState} from 'react';
import axios from 'axios';


const StarshipsContext = React.createContext();

const StarshipsProvider = ({children}) => {
    const [ starships, setStarships ] = useState(null);
    const [ isLoading, setIsLoading] = useState(false);
    const [ error, setError] = useState(null);
    const [ page, setPage ] = useState(1);
    const [ starshipDetails, setStarshipDetails ] = useState(null);
    const [isLoadingImage, setIsLoadingImage] = useState(false);
    const [ starshipImage, setStarshipImage ] = useState(null);

    const getStarships = async () => {
        setIsLoading(true);
        try {
          const response = await axios.get('https://swapi.dev/api/starships/', {
                  params: {
                  page: page
                  }
                })
            error && setError(false);
          setStarships(response.data.results);
        }
        catch(error){
            setError(error.message);
        }
        finally {
            setIsLoading(false);
        }
      
        // axios.get('https://swapi.dev/api/starships', {
        //   params: {
        //     page: 1
        //   }
        // })
        // .then((response)=> {
        //   setStarships(response.data.results);
        // })
        //.catch((error) => console.log(error));
        //.finally(()=> setIsLoading(false))
      };

      
    const getStarshipById = async (id) => {
        setIsLoading(true);
        try {
          const response = await axios.get(`https://swapi.dev/api/starships/${id}`)
          error && setError(false);
          setStarshipDetails(response.data);
        }
        catch(error){
            setError(error.message);
        }
        finally {
            setIsLoading(false);
        }
      
        // axios.get(starshipURL)
        // .then((response)=> {
        //   setStarships(response.data);
        // })
        //.catch((error) => console.log(error));
        //.finally(()=> setIsLoading(false))
      };

      const getStarshipImageById = async (id) => {
        setIsLoadingImage(true);
        try {
          await axios.get(`https://starwars-visualguide.com/assets/img/starships/${id}.jpg`)
          error && setError(false);
          setStarshipImage(`https://starwars-visualguide.com/assets/img/starships/${id}.jpg`);
        }
        catch(error){

        }
        finally {
            setIsLoadingImage(false);
        }
      
        // axios.get(starshipURL)
        // .then((response)=> {
        //   setStarships(response.data);
        // })
        //.catch((error) => console.log(error));
        //.finally(()=> setIsLoading(false))
      };

    
  return (
  <StarshipsContext.Provider 
    value={{
        starships,
        isLoading,
        isLoadingImage,
        error,
        page,
        starshipDetails,
        starshipImage,
        setPage,
        getStarships,
        getStarshipById, 
        getStarshipImageById
    }}
   >
    {children}
   </StarshipsContext.Provider>
  )
}

export { StarshipsProvider };
export default StarshipsContext;