import { Routes, Route } from 'react-router-dom';
import Cast from './Cast';
import Reviews from './Reviews';

const MovieDetailsPage = ({ film }) => {
  return (
    <div>
      <h1>Movie Title</h1>

      <h2>Overview:</h2>

      <p>Lorem ipsum dolor sit amet consectetur</p>

      <Routes>
        <Route path={`/movies/:movieId/cast`} element={<Cast />} />
        <Route path={`/movies/:movieId/reviews`} element={<Reviews />} />
      </Routes>
    </div>
  );
};

export default MovieDetailsPage;
