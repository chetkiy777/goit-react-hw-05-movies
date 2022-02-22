import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import MovieDetailsPage from './MovieDetailsPage';
import { ApiService } from './../../API/apiService';
const apiService = new ApiService();

const HomePage = () => {
  const [trendingFilms, setTrendingFilms] = useState(null);

  useEffect(() => {
    apiService.getTrendingFilms().then(setTrendingFilms);
  }, []);

  return (
    <div>
      <h1>Trending today</h1>
      <ul>
        {trendingFilms &&
          trendingFilms.map(film => (
            <li key={film.id}>{film.title ?? 'NoName'}</li>
          ))}
      </ul>
    </div>
  );
};

export default HomePage;
