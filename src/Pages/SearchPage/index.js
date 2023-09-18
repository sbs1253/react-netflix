import React, { useEffect, useState } from 'react';
import axios from '../../api/axios';
import { useLocation } from 'react-router-dom';

function SearchPage() {
  const [searchResult, setSearchResult] = useState([]);

  const useQuery = () => {
    return new URLSearchParams(useLocation().search);
  };
  let query = useQuery();
  const searchTerm = query.get('q');
  // console.log(useQuery().get('q'));

  useEffect(() => {
    if (searchTerm) {
      fetchSearchResult(searchTerm);
    }
  }, [searchTerm]);

  const fetchSearchResult = async (searchTerm) => {
    try {
      const request = await axios.get(
        `/search/multi?include_adult=false&query=${searchTerm}`
      );
      console.log(request);
      setSearchResult(request.data.results);
    } catch (error) {
      console.log(error);
    }
  };
  return <div></div>;
}

export default SearchPage;
