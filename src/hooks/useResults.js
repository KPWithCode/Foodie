import { useEffect, useState} from 'react'
import yelp from '../api/yelp';



export default () => {
    const [results, setResults] = useState([]);
    const [errorMessage, setErrorMessage] = useState('');
    
    const searchApi = async (searchTerm) => {
        console.log('Hi There')
        try {
            const response= await yelp.get('/search', {
             params: {
                 limit:50,
                 term: searchTerm,
                 location: 'New York City'
             }
            })
            setResults(response.data.businesses)
        } catch(err) {
           setErrorMessage('Something went wrong')
        } 
    };
    //  Goal: Make an inital call to the api before search
    // searchApi('pasta') HIS IS BAD because the state causes our component to keep rerendering
    // INSTEAD make initial call by using the useEffect hook.
    useEffect(() => {
        searchApi('pasta')
    },[])

    return [searchApi,results,errorMessage];
}