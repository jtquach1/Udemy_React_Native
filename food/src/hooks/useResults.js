import { useEffect, useState } from 'react';
import yelp from '../api/yelp';

// PART 1:
// Add in all the code we need to make a request to the Yelp API.
// At the bottom: return a couple of different variables 
// that we're going to make available to SearchScreen component.
// PART 3: 
// We can now use this helper function inside of other components.
export default () => {
    const [results, setResults] = useState([]);
    const [errorMessage, setErrorMessage] = useState('');

    const searchApi = async (searchTerm) => {
        console.log('Hi there!');

        try {
            const response = await yelp.get('/search', {
                params: {
                    limit: 50,
                    term: searchTerm,
                    location: 'san jose',
                },
            });
            setResults(response.data.businesses);
        } catch (err) {
            setErrorMessage('Something went wrong');
        }
    };

    // Call searchApi when comment is first rendered.
    useEffect(() => {
        searchApi('pasta');
    }, []);
    
    // PART 2:
    // return results, errorMessage, and searchApi as a variable array for SearchScreen
    return [searchApi, results, errorMessage];
};