import style from './styles.module.css';
import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ApiService } from 'API/apiService';
import Container from 'components/Container/Container';
const apiService = new ApiService();

const MovieDetailsPage = () => {
  const [filmInfo, setFilmInfo] = useState(null);

  const { movieId } = useParams();

  useEffect(() => {
    apiService.getFilmDetails(Number(movieId)).then(setFilmInfo);
  }, [movieId])

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
              <p>Action</p>
            </div>

            <div className={style.additionalInfo}>
              <span>Additional Info</span>

              <ul>
                <li className={style.castLink}>
                  <Link exact="true" to={`/movie/${movieId}/credits`}>
                    Cast
                  </Link>
                </li>
                <li>
                  <Link exact="true" to={`/movie/${movieId}/reviews`}>
                    Review
                  </Link>
                </li>
              </ul>

            </div>

          </div>
        </div>          
      )}
    </Container>
  );
};

export default MovieDetailsPage;
