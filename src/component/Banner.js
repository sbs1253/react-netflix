import axios from '../api/axios';
import React, { useEffect, useState } from 'react';
import requests from '../api/requests';
import './Banner.css';
const Banner = () => {
  const [movie, setMovie] = useState([]);
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    // 영화 정보 가져오기
    const request = await axios.get(requests.fetchNowPlaying);

    // 여러 영화중 하나의 id 가져오기
    const movieId =
      request.data.results[
        Math.floor(Math.random() * request.data.results.length)
      ].id;
    // 상세정보 가져오기
    const { data: movieDetail } = await axios.get(`movie/${movieId}`, {
      params: { append_to_response: 'videos' },
    });
    console.log({ data: movieDetail });
    setMovie(movieDetail);
  };
  return (
    <header
      className='banner'
      style={{
        backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
        backgroundPosition: 'top center',
        backgroundSize: 'cover',
      }}
    >
      <div className='banner__contents'>
        {/* title */}
        <h1 className='banner__title'>
          {movie?.title || movie?.name || movie?.original_name}
        </h1>
        <div className='banner__buttons'>
          <button className='banner__button play'>Play</button>
          <button className='banner__button info'>
            <div className='space'></div> More Infomation
          </button>
        </div>
        {/* div > 2 button */}
        <h1 className='banner__description'>{movie?.overview}</h1>
        {/* Description */}
      </div>
      <div className='banner--fadeBottom'></div>
    </header>
  );
};

export default Banner;
