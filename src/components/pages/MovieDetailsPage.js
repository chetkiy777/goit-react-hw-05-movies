import style from './styles.module.css';
import { useEffect, useState } from 'react';
import { useParams, Link, Outlet } from 'react-router-dom';
import { ApiService } from 'API/apiService';
import { Container } from 'components/App.styled';

const apiService = new ApiService();

const MovieDetailsPage = ({setReviews, setActors}) => {
  const [filmInfo, setFilmInfo] = useState(null);

  const { movieId } = useParams();

  useEffect(() => {
    apiService.getFilmDetails(Number(movieId)).then(setFilmInfo);
  }, [movieId])

    useEffect(() => {
    apiService.getFilmActors(Number(movieId)).then(setActors);
  }, [movieId, setActors])

    useEffect(() => {
    apiService.getFilmReviews(Number(movieId)).then(setReviews);
  }, [movieId, setReviews])

  return (
    <Container>
      {filmInfo && (
        <div className={style.filmInfo}>
          <div className={style.thumb}>
            <img
              src={`https://image.tmdb.org/t/p/w500/${filmInfo.poster_path}`}
              alt=""
            />
          </div>

          <div className={style.aboutFilm}>
            <h2>{filmInfo.original_title}</h2>
            <p>User score: 74%</p>
            <div className={style.overview}>
              <p>
                <b>Overview: </b>
              </p>
              <p>{filmInfo.overview}</p>
            </div>

            <div>
              <p><b>Genres:</b></p>
              {filmInfo.genres.map(genre => <span key={genre.id}> {genre.name} </span>)}
            </div>

            <div className={style.additionalInfo}>
              <span>Additional Info</span>

              <ul>
                <li className={style.castLink}>
                  <Link to="cast">Cast</Link>
                </li>
                <li>
                  <Link to="reviews">Reviews</Link>
                </li>
              </ul>

            </div>

            <Outlet/>

          </div>
        </div>          
      )}
    </Container>
  );
};

export default MovieDetailsPage;
