import { useState, useCallback} from 'react';
import { FindedList } from 'components/FindedList/FindedList';
import { ApiService } from 'API/apiService';
const apiService = new ApiService();

const MoviesPage = () => {
  const [findedArr, setFindedArr] = useState(null);


  const getFindedFilms = useCallback((e) => {
    const inputQuery = e.currentTarget.elements.searchInput.value

    if (inputQuery === '') {
      return;
    }

    apiService.getFilmByName(inputQuery).then(setFindedArr)
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

      {findedArr && <FindedList findedArray={findedArr}/>}

    </div>
  );
};

export default MoviesPage;
