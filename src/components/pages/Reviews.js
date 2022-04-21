import {List} from './Pages.styled'
import { BlockTitle } from './Pages.styled';

const Reviews = ({reviews}) => {

  return <List>
      {reviews ? reviews.map(review => 
        <li key={review.id}>
          <BlockTitle>author: {review.author}</BlockTitle>
          <p>{review.content}</p>
        </li>) 
      : <div>We don't have any reviews for this movie</div>
    }
    
    </List>;
};

export default Reviews;
