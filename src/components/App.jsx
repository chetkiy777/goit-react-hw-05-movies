import { Route, Routes } from 'react-router-dom';
import AppBar from 'components/AppBar/AppBar';
import HomePage from 'components/pages/HomePage';
import MoviesPage from 'components/pages/MoviesPage';
import Container from './Container/Container';
import MovieDetailsPage from './pages/MovieDetailsPage';
import Cast from './pages/Cast';
import Reviews from './pages/Reviews';

export const App = () => {
  return (
    <Container>
      <AppBar />
      <Routes>
        <Route path="/" exact="true" element={<HomePage />} />
        <Route path="/movies" exact="true" element={<MoviesPage />} />
        <Route path="/movie/:movieId" element={<MovieDetailsPage />} />
        <Route path="/movie/:movieId/credits" element={<Cast />} />
        <Route path="/movie/:movieId/reviews" element={<Reviews />} />
      </Routes>
    </Container>
  );
};
