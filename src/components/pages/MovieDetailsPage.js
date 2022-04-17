import style from './styles.module.css';
import { useEffect, useState } from 'react';
import { useParams, Link, Outlet } from 'react-router-dom';
import { ApiService } from 'API/apiService';
import { Container, MainInfoBlock, AdditionalInfoBlock, AboutFilmInfo } from 'components/pages/Pages.styled';

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
      <div>

        <MainInfoBlock>
          <div>
            <img
              src={`https://image.tmdb.org/t/p/w500/${filmInfo.poster_path}`}
              alt=""
            />
          </div>

          <AboutFilmInfo>
            <h2>{filmInfo.original_title}</h2>

            <p>User score: 74%</p>

            <div>
              <p>
                <b>Overview: </b>
              </p>
              <p>{filmInfo.overview}</p>
            </div>

            <div>
              <p><b>Genres:</b></p>
              {filmInfo.genres.map(genre => <span key={genre.id}> {genre.name} </span>)}
            </div>
          </AboutFilmInfo>
        </MainInfoBlock>

        <AdditionalInfoBlock>
          <span>Additional Info</span>

          <ul>
            <li>
              <Link to="cast">Cast</Link>
            </li>
            <li>
              <Link to="reviews">Reviews</Link>
            </li>
          </ul>

        </AdditionalInfoBlock>

        <Outlet/>
          
      </div>          
      )}
    </Container>
  );
};

export default MovieDetailsPage;
