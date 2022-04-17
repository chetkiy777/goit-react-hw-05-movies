import {List} from './Pages.styled'

const Reviews = ({reviews}) => {

  return <List>
      {reviews && reviews.map(review => <li key={review.id}>{review.content}</li>)}
    
    </List>;
};

export default Reviews;
