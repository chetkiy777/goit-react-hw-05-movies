import { Link } from "react-router-dom";

export const FindedList = ({findedArray}) => {
    return <ul>
        {findedArray.map(film => {
            return (
                <li key={film.id}>
                    <Link to={`/movies/${film.id}`}>{film.title ?? film.name}</Link>
                </li>
                );
            })
        }   
    </ul>
}