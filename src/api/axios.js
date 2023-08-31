import axios from 'axios';
const instance = axios.create({
  baseURL: 'https://api.themoviedb.org/3',
  params: {
    api_key: '833f2d412fb26602f509c13dfc64e1b0',
    language: 'ko-KR',
  },
});

export default instance;
