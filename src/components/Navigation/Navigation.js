import { NavLink } from 'react-router-dom';
import styles from './styles.module.css';

const Navigation = () => {
  return (
    <nav>
      <NavLink to="/">Главная</NavLink>
      <NavLink to="/movies">Фильмы</NavLink>
    </nav>
  );
};

export default Navigation;
