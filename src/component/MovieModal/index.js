import React, { useState, useEffect, useRef } from 'react';
import './MovieModal.css';
import movieTrailer from 'movie-trailer';
import useOnClickOutside from '../../hook/useOnClickOutside';
function MovieModal({
  backdrop_path,
  title,
  overview,
  name,
  release_date,
  first_air_date,
  vote_average,
  setModalOpen,
}) {
  const [trailerId, setTrailerId] = useState('');
  const ref = useRef();
  useOnClickOutside(ref, () => setModalOpen(false));
  // movieModal이 띄워졌을때 실행되므로 ref 는 그때 할당됌
  useEffect(() => {
    if (trailerId) {
      setTrailerId('');
      // trailerId가 있으면 영상 x
    } else {
      movieTrailer(title || name || '')
        .then((url) => {
          // console.log('url', url);
          const urlParams = new URLSearchParams(new URL(url).search);
          setTrailerId(urlParams.get('v'));
        })
        .catch((error) => console.log('error', error));
    }
  }, []);

  return (
    <div className='presentation'>
      <div className='wrapper-modal'>
        <div className='modal' ref={ref}>
          <span className='modal-close' onClick={() => setModalOpen(false)}>
            X
          </span>
          {trailerId ? (
            <iframe
              width='100%'
              height='350px'
              src={`https://www.youtube.com/embed/${trailerId}?autoplay=1`}
              title='YouTube video player'
              frameborder='0'
              allow='autoplay; fullscreen'
            ></iframe>
          ) : (
            <img
              src={`https://image.tmdb.org/t/p/original/${backdrop_path}`}
              alt='movie__poster-img'
              className='modal__poster-img'
            />
          )}

          <div className='modal__content'>
            <p className='modal__details'>
              <span className='modal__user-perc'>100% for you </span>
              {release_date ? release_date : first_air_date}
            </p>
            <h2 className='modal__title'>{title ? title : name}</h2>
            <p className='modal__overview'>평점: {vote_average}</p>
            <p className='modal__overview'>{overview}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MovieModal;
