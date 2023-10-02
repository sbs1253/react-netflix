import axios from '../api/axios';
import React, { useEffect, useState } from 'react';
import './Row.css';
import MovieModal from './MovieModal';

export default function Row({ title, id, fetchUrl, isLargeRow }) {
  const [movies, setMovies] = useState([]);
  const [modalOpen, setModalOpen] = useState(false);
  const [movieSelected, setMovieSelected] = useState({});
  useEffect(() => {
    fetchMovieData();
  }, []);
  const fetchMovieData = async () => {
    const request = await axios.get(fetchUrl);
    setMovies(request.data.results);
    // console.log(request);
    return request;
  };
  const handleClick = (movie) => {
    setModalOpen(true);
    setMovieSelected(movie);
    // console.log(movieSelected);
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
              onClick={() => handleClick(movie)}
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
      {modalOpen && (
        <MovieModal {...movieSelected} setModalOpen={setModalOpen} />
        // Component 구조분해 할당
        // prop로 넘겼을 경우는 객체 key값으로 받을 수 있게 분해됨
        // * 현재파일에서 콘솔로 확인했을때는 분해되지 않아서 헷갈렸음
      )}
    </section>
  );
}
