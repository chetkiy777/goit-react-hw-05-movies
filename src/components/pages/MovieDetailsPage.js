import { useEffect, useState } from 'react';
import { Routes, Route, useParams } from 'react-router-dom';
import { ApiService } from 'API/apiService';
import Cast from './Cast';
import Reviews from './Reviews';
const apiService = new ApiService();

const MovieDetailsPage = () => {
  const [filmInfo, setFilmInfo] = useState();

  const { movieId } = useParams();

  useEffect(() => {
    apiService.getFilmDetails(Number(movieId)).then(setFilmInfo);
  }, [movieId]);

  return (
    <div>
      {filmInfo && (
        <div>
          <h1>{filmInfo.original_title}</h1>
          <p>Overview: {filmInfo.overview}</p>
        </div>
      )}
    </div>
  );
};

export default MovieDetailsPage;
