import React, { createContext, useState} from 'react';
import axios from 'axios';


const StarshipsContext = createContext();

const StarshipsProvider = ({children}) => {
    const [ starships, setStarships ] = useState([]);
    const [ isLoading, setIsLoading] = useState(false);
    const [ error, setError] = useState(null);
    const [ page, setPage ] = useState(1);
    const [ starshipDetails, setStarshipDetails ] = useState(null);
    const [ isLoadingImage, setIsLoadingImage] = useState(false);
    const [ starshipImage, setStarshipImage ] = useState(null);
    const [ isBottom, setIsBottom ] = useState(false);

    const handleScroll = () => {
      const scrollTop = window?.scrollY || document?.documentElement?.scrollTop || document?.body?.scrollTop;
      const scrollHeight = document?.documentElement?.scrollHeight || document?.body?.scrollHeight;
      const innerHeight = window.innerHeight;
    
      if(scrollTop + innerHeight + 100 >= scrollHeight) {
        setIsBottom(true);
      } 
     
    }


    const getStarships = async () => {
        setIsLoading(true);

        try {
          const response = await axios.get('https://swapi.py4e.com/api/starships', {
                  params: {
                  page: page
                  }
                })
            error && setError(false);
          setStarships([...starships, ...response.data.results]);
          setIsBottom(false);
          setPage(page + 1)
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
          const response = await axios.get(`https://swapi.py4e.com/api/starships/${id}`)
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
          starshipImage && setStarshipImage(null);
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
        isBottom,
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
        getStarshipImageById,
        handleScroll
    }}
   >
    {children}
   </StarshipsContext.Provider>
  )
}

export { StarshipsProvider };
export default StarshipsContext;