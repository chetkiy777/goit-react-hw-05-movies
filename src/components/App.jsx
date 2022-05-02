import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AppBar from 'components/AppBar/AppBar';
import HomePage from 'components/pages/HomePage';
import MoviesPage from 'components/MoviesPage/MoviesPage';
import { Container } from './App.styled';
import MovieDetailsPage from './pages/MovieDetailsPage';
import Cast from './pages/Cast';
import Reviews from './pages/Reviews';

export const App = () => { 

  return (
    <BrowserRouter basename='goit-react-hw-05-movies/'>
      <Container>
        <Routes>
          <Route path="/" element={<AppBar />} >
            <Route index element={<HomePage />} />
            <Route path="movies" element={<MoviesPage />} />
            <Route path="movies/:movieId/*" element={<MovieDetailsPage />} >
              <Route path="cast" element={<Cast />}/>
              <Route path="reviews" element={<Reviews />}/>
            </Route>
          </Route>
        </Routes>
      </Container>
    </BrowserRouter>
  );
};
 