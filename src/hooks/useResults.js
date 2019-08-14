import React, { useState, useEffect } from 'react';
import yelp from '../api/yelp';

export default () => {
    const [results, setResults] = useState([]);
    const [errorMessage, setErrorMessage] = useState('');

    const searchApi = async (searchTerm, location) => {
        //console.log('Hi')
        try {
            const response = await yelp.get('/search', {
                params: {
                    limit: 50,
                    term: searchTerm,
                    location: location

                }
            });
            setResults(response.data.businesses)
        } catch (err) {
            setErrorMessage('Something Went wrong!');
        }
    };
    // Correct way to initial the API is by using below code 
    useEffect(() => {
        //setTerm("Indian");
        searchApi('Breakfast', 'Miami');
    }, []
    );

    return [searchApi, results, errorMessage];

};