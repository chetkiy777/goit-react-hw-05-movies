import { Link } from 'react-router-dom';


const HomePage = ({trendingFilms}) => {

  return (
    <div>
      <h1>Trending today</h1>
      <ul>
        {trendingFilms &&
          trendingFilms.map(film => (
            <li key={film.id}>
              <Link to={`/movie/${film.id}`}>
                {film.title ?? film.name}
              </Link>
            </li>
          ))}
      </ul>
    </div>
  );
};

export default HomePage;
