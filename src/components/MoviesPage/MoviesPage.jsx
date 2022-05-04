import { useState } from 'react';
import { ApiService } from 'API/apiService';
import { Link } from 'react-router-dom';
const apiService = new ApiService();

const MoviesPage = () => {
  const [findedArr, setFindedArr] = useState(null);

  const handleSubmit = e => {
    e.preventDefault();
    
    const inputQuery = e.currentTarget.elements.searchInput.value

    if (inputQuery === '') {
      return;
    }

    apiService.searchQuery = inputQuery;

    apiService.getFilmByName().then(setFindedArr);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          name="searchInput"
        />
        <button>Search</button>
      </form>
      <ul>
        {findedArr &&
          findedArr.map(film => {
            return (
              <li key={film.id}>
                <Link to={`/movies/${film.id}`}>{film.title ?? film.name}</Link>
              </li>
            );
          })}
      </ul>
    </div>
  );
};

export default MoviesPage;
