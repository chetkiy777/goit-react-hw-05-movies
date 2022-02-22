import { useState } from 'react';
import styles from './styles.module.css';

const MoviesPage = () => {
  const [inputQuery, setInputQuery] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    if (inputQuery === '') {
      return;
    }

    console.log(inputQuery);
  };

  return (
    <form action="/" onSubmit={handleSubmit}>
      <input
        name="searchInput"
        className={styles.searchInput}
        value={inputQuery}
        onChange={e => setInputQuery(e.currentTarget.value)}
      />
      <button type="submit">Search</button>
    </form>
  );
};

export default MoviesPage;
