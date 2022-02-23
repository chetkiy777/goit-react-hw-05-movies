import { Route, Routes } from 'react-router-dom';
import AppBar from 'components/AppBar/AppBar';
import HomePage from 'components/pages/HomePage';
import MoviesPage from 'components/pages/MoviesPage';
import Container from './Container/Container';

export const App = () => {
  return (
    <Container>
      <AppBar />
      <Routes>
        <Route path="/" exact="true" element={<HomePage />} />

        <Route path="/movies" exact="true" element={<MoviesPage />} />
      </Routes>
    </Container>
  );
};
