import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AppBar from 'components/AppBar/AppBar';
import HomePage from 'components/pages/HomePage';
import MoviesPage from 'components/MoviesPage/MoviesPage';
import { Container } from './App.styled';
import MovieDetailsPage from './pages/MovieDetailsPage';
import Cast from './pages/Cast';
import Reviews from './pages/Reviews';
import { useState } from 'react';

export const App = () => {

  const [actors, setActors] = useState(null)
  const [reviews, setReviews] = useState(null)

  return (
    <BrowserRouter>
      <Container>
        <AppBar />
        <Routes>
          <Route path="/" index element={<HomePage />} />
          <Route path="/movies" element={<MoviesPage />} />
          <Route path="/movie/:movieId/*" element={<MovieDetailsPage setActors={setActors} setReviews={setReviews}/>}>
            <Route path="cast" element={<Cast actors={actors}/>} />
            <Route path="reviews" element={<Reviews reviews={reviews}/>} />
          </Route>
        </Routes>
      </Container>
    </BrowserRouter>
  );
};
