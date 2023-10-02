import { Outlet, Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './component/Footer';
import Nav from './component/Nav';
import MainPage from './Pages/MainPage';
import DetailPage from './Pages/DetailPage';
import SearchPage from './Pages/SearchPage';

const Layout = () => {
  return (
    <div>
      <Nav />
      <Outlet />
      <Footer />
    </div>
  );
};
function App() {
  return (
    <div className='app'>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<MainPage />} />
          <Route path=':movieId' element={<DetailPage />} />
          <Route path='search' element={<SearchPage />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
