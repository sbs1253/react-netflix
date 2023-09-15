import React from 'react';
import Banner from '../../component/Banner';
import Row from '../../component/Row';
import requests from '../../api/requests';

function MainPage() {
  return (
    <div className='app'>
      <Banner />
      <Row
        title='NETFLIX ORIGINALS'
        id='NO'
        fetchUrl={requests.fetchNetflixOriginals}
        isLargeRow
      ></Row>
      <Row
        title='Action Movies'
        id='AM'
        fetchUrl={requests.fetchActionMovies}
      ></Row>{' '}
      <Row
        title='Comedy Movies'
        id='CM'
        fetchUrl={requests.fetchComedyMovies}
      ></Row>{' '}
      <Row
        title='Horror Movies'
        id='HM'
        fetchUrl={requests.fetchHorrorMovies}
      ></Row>{' '}
      <Row
        title='Romance Movies'
        id='RM'
        fetchUrl={requests.fetchRomanceMovies}
      ></Row>
    </div>
  );
}

export default MainPage;
