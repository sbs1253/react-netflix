import axios from '../api/axios';
import React, { useEffect, useState } from 'react';
import './Row.css';
export default function Row({ title, id, fetchUrl, isLargeRow }) {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    fetchMovieData();
  }, []);
  const fetchMovieData = async () => {
    const request = await axios.get(fetchUrl);
    setMovies(request.data.results);
    // console.log(request);
    return request;
  };
  return (
    <section className='row'>
      {/* title */}
      <h2>{title}</h2>
      <div className='slider'>
        <div
          className='slider__arrow-left'
          onClick={() => {
            document.getElementById(id).scrollLeft -= window.innerWidth - 80;
          }}
        >
          <span className='arrow'>{'<'}</span>
        </div>
        <div id={id} className='row__posters'>
          {/* several row__poster */}
          {movies.map((movie) => (
            <img
              key={movie.id}
              className={`row__poster ${isLargeRow && 'row__posterLarge'}`}
              src={`https://image.tmdb.org/t/p/original/${
                isLargeRow ? movie.poster_path : movie.backdrop_path
              }`}
              loading='lazy'
              alt={movie.name}
            />
          ))}
        </div>
        <div
          className='slider__arrow-right'
          onClick={() => {
            document.getElementById(id).scrollLeft += window.innerWidth - 80;
          }}
        >
          <span className='arrow'>{'>'}</span>
        </div>
      </div>
    </section>
  );
}
