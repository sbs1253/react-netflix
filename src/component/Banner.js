import axios from '../api/axios';
import React, { useEffect, useState } from 'react';
import requests from '../api/requests';

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
  };
  return <div>Banner</div>;
};

export default Banner;
