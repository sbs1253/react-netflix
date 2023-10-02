import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from '../../api/axios';
function DetailPage() {
  let { movieId } = useParams();
  // route 설정시에도 동일한 이름의 파라미터 사용!!
  const [movies, setMovies] = useState({});
  // console.log('movieId', movieId);
  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(`/movie/${movieId}`);
      setMovies(request.data);
      // console.log(movies);
    }
    fetchData();
  }, [movieId]);
  if (!movies) return <div>상세페이지가 존재하지 않음</div>;
  return (
    <section>
      <img
        className='modal__poster-img'
        alt='movies_image'
        src={`https://image.tmdb.org/t/p/original/${movies.backdrop_path}`}
      ></img>
    </section>
  );
}

export default DetailPage;
