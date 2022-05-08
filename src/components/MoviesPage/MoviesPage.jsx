import { useState, useCallback} from 'react';
import { Link } from "react-router-dom";
import * as axios from 'axios';
// import { ApiService } from 'API/apiService';
// const apiService = new ApiService();

const MoviesPage = () => {
  const [findedArr, setFindedArr] = useState(null);


  const getFindedFilms = useCallback((e) => {
    const inputQuery = e.currentTarget.elements.searchInput.value

    if (inputQuery === '') {
      return;
    }

    axios.get(`https://api.themoviedb.org/3/search/movie?api_key=4a69d9470951ad07e8f0cc655bb46705&query=${inputQuery}&page=1&include_adult=false`).then(res => setFindedArr(res.data.results))
    // apiService.getFilmByName(inputQuery).then(setFindedArr)
  },[])
  
  const handleSubmit = e => {
    e.preventDefault();
    getFindedFilms(e)
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
        {findedArr ? findedArr.map(film => {
              return (
                  <li key={film.id}>
                      <Link to={`/movies/${film.id}`}>{film.title ?? film.name}</Link>
                  </li>
                  );
              })
              : null
          }   
      </ul>

    </div>
  );
};

export default MoviesPage;
