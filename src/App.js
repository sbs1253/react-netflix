import './App.css';
import requests from './api/requests';
import Banner from './component/Banner';
import Nav from './component/Nav';
import Row from './component/Row';

function App() {
  return (
    <div className='app'>
      <Nav />
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

export default App;
