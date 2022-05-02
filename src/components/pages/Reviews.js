import {List} from './Pages.styled';
import { useParams } from 'react-router-dom';
import { BlockTitle } from './Pages.styled';
import {useState, useEffect} from 'react';
import { ApiService } from 'API/apiService';
const apiService = new ApiService();


const Reviews = () => {

    const [reviews, setReviews] = useState(null)
    const { movieId } = useParams();
    
    useEffect(() => {
      apiService.getFilmReviews(Number(movieId)).then(setReviews);
    }, [movieId]);

  return <div>
      {reviews ? reviews.map(review => 
        <List>
          <li key={review.id}>
            <BlockTitle>author: {review.author}</BlockTitle>
            <p>{review.content}</p>
          </li>
        </List>)
      : <span> We don't have any reviews for this movie </span>
    }
    
    </div>
};

export default Reviews;
