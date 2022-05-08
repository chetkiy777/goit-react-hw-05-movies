import { BrowserRouter, Route, Routes } from 'react-router-dom';
import React, { Suspense } from 'react';
// import AppBar from 'components/AppBar/AppBar';
// import HomePage from 'components/pages/HomePage';
// import MoviesPage from 'components/MoviesPage/MoviesPage';
// import MovieDetailsPage from './pages/MovieDetailsPage';
// import Cast from './pages/Cast';
// import Reviews from './pages/Reviews';
import { Container } from './App.styled';

const AppBar = React.lazy(() => import('components/AppBar/AppBar'));
const HomePage = React.lazy(() => import('components/pages/HomePage'));
const MoviesPage = React.lazy(() => import('components/MoviesPage/MoviesPage'));
const MovieDetailsPage = React.lazy(() => import('./pages/MovieDetailsPage'))
const Cast = React.lazy(() => import('./pages/Cast'))
const Reviews = React.lazy(() => import('./pages/Reviews'))




export const App = () => { 

  return (
    <BrowserRouter basename='/goit-react-hw-05-movies/'>
      <Suspense fallback={<div>Загрузка</div>}>
        <Container>
          <Routes>
            <Route path="/" element={<AppBar />} >
              <Route index element={<HomePage />} />
              <Route path="/movies" element={<MoviesPage />} />
              <Route path="movies/:movieId/*" element={<MovieDetailsPage />} >
                <Route path="cast" element={<Cast />}/>
                <Route path="reviews" element={<Reviews />}/>
              </Route>
            </Route>
          </Routes>
        </Container>
      </Suspense>
    </BrowserRouter>
  );
};
 