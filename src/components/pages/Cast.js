import {List} from './Pages.styled'
import { ImageThumb } from './Pages.styled'

const Cast = ({actors}) => {

  return  <List>
        {actors ? actors.map(actor => <li key={actor.id}>
          <ImageThumb>
            <img src={`https://image.tmdb.org/t/p/w500/${actor.profile_path}`} alt=''/>
          </ImageThumb>
          <p>{actor.name}</p>
          <p>character: {actor.character}</p>
          </li>)
        : <div>We don't have any actors for this movie</div>
        }
  </List>
}

export default Cast;
