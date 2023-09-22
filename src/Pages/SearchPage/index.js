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

  const renderSearchResults = () => {
    return searchResult.length > 0 ? (
      <section className='search-container'>
        {searchResult.map((movie) => {
          if (movie.backdrop_path !== null && movie.media_type !== 'person') {
            const movieImageUrl =
              'https://image/tmdb.org/t/p/w500' + movie.backdrop_path;
            return (
              <div className='movie'>
                <div className='movie__colimn-poster'>
                  <img src='{movieImageUrl}' alt='' className='movie__poster' />
                </div>
              </div>
            );
          }
        })}
      </section>
    ) : (
      <section className='no-results'>
        <div className='no-results__text'>
          <p> 당신이 찾고자 하는 영화 "{searchTerm}"가 없습니다</p>
        </div>
      </section>
    );
  };

  return <div></div>;
}

export default SearchPage;
