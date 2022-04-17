import {List} from './Pages.styled'

const Cast = ({actors}) => {

  return  <List>
        {actors && actors.map(actor => <li key={actor.id}>{actor.name}</li>)}
  </List>
}

export default Cast;
