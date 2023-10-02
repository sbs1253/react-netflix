import React, { useEffect, useState } from 'react';
import axios from '../../api/axios';
import { useLocation, useNavigate } from 'react-router-dom';
import './SearchPage.css';
import useDebounce from '../../hook/useDebounce';
function SearchPage() {
  const [searchResult, setSearchResult] = useState([]);
  const navigator = useNavigate();
  const useQuery = () => {
    return new URLSearchParams(useLocation().search);
  };
  let query = useQuery();
  const searchTerm = query.get('q');
  const debouncedSearchTerm = useDebounce(searchTerm, 500);
  // console.log(useQuery().get('q'));
  // console.log(debouncedSearchTerm);
  useEffect(() => {
    if (debouncedSearchTerm) {
      fetchSearchResult(debouncedSearchTerm);
    }
  }, [debouncedSearchTerm]);

  const fetchSearchResult = async (searchTerm) => {
    try {
      const request = await axios.get(
        `/search/multi?include_adult=false&query=${searchTerm}`
      );
      setSearchResult(request.data.results);
      // console.log(searchResult);
    } catch (error) {
      console.log(error);
    }
  };

  const renderSearchResults = () => {
    return searchResult.length > 0 ? (
      <section className='search-container'>
        {searchResult.map((movie, id) => {
          if (movie.backdrop_path !== null && movie.media_type !== 'person') {
            const movieImageUrl =
              'https://image.tmdb.org/t/p/w500' + movie.backdrop_path;

            return (
              <div className='movie' key={movie.id}>
                <div
                  className='movie__colimn-poster'
                  onClick={() => {
                    navigator(`/${movie.id}`);
                  }}
                >
                  <img src={movieImageUrl} alt='' className='movie__poster' />
                </div>
              </div>
            );
          }
        })}
      </section>
    ) : (
      <section className='no-results'>
        <div className='no-results__text'>
          <p> 당신이 찾고자 하는 영화 "{debouncedSearchTerm}"가 없습니다</p>
        </div>
      </section>
    );
  };

  return renderSearchResults();
}

export default SearchPage;
