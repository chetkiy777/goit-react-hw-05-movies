import styles from './styles.module.css';
import { useEffect, useState } from 'react';
import { ApiService } from './../../API/apiService';
import { Link } from 'react-router-dom';
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
            <li key={film.id}>
              <Link to={`/movie/${film.id}`} className={styles.link}>
                {film.title ?? film.name}
              </Link>
            </li>
          ))}
      </ul>
    </div>
  );
};

export default HomePage;
