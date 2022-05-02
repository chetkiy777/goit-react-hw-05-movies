import { useEffect, useState } from 'react';
import { useParams, Link, Outlet } from 'react-router-dom';
import { ApiService } from 'API/apiService';
import { Container, MainInfoBlock, AdditionalInfoBlock, AboutFilmInfo, MovieListItem, BlockTitle } from 'components/pages/Pages.styled';
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
      <div>

        <MainInfoBlock>
          <div>
            <img
              src={`https://image.tmdb.org/t/p/w500/${filmInfo.poster_path}` }
              alt=""
            />
          </div>

          <AboutFilmInfo>
            <h2>{filmInfo.original_title}</h2>

            <p>User score: 74%</p>

            <div>
              <BlockTitle>Overview:</BlockTitle>
              <p>{filmInfo.overview}</p>
            </div>

            <div>
              <BlockTitle>Genres:</BlockTitle>
              {filmInfo.genres.map(genre => <span key={genre.id}> {genre.name} </span>)}
            </div>
          </AboutFilmInfo>
        </MainInfoBlock>

        <AdditionalInfoBlock>
          <span>Additional Info</span>

          <ul>
            <MovieListItem>
              <Link to="cast">Cast</Link>
            </MovieListItem>
            <MovieListItem>
              <Link to="reviews">Reviews</Link>
            </MovieListItem>
          </ul>

        </AdditionalInfoBlock>

        <Outlet/>
          
      </div>          
      )}
    </Container>
  );
};

export default MovieDetailsPage;
