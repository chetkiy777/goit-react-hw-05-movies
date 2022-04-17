import { useState } from 'react';
import { ApiService } from 'API/apiService';
import { Link } from 'react-router-dom';
const apiService = new ApiService();

const MoviesPage = () => {
  const [inputQuery, setInputQuery] = useState('');
  const [findedArr, setFindedArr] = useState(null);

  const handleSubmit = e => {
    e.preventDefault();
    if (inputQuery === '') {
      return;
    }

    apiService.searchQuery = inputQuery;

    apiService.getFilmByName().then(setFindedArr);
  };

  return (
    <div>
      <form action="/" onSubmit={handleSubmit}>
        <input
          name="searchInput"
          value={inputQuery}
          onChange={e => setInputQuery(e.currentTarget.value)}
        />
        <button type="submit">Search</button>
      </form>
      <ul>
        {findedArr &&
          findedArr.map(film => {
            return (
              <li key={film.id}>
                <Link to={`/movie/${film.id}`}>{film.title ?? film.name}</Link>
              </li>
            );
          })}
      </ul>
    </div>
  );
};

export default MoviesPage;
