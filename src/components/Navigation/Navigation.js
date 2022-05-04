import { NavLink } from 'react-router-dom';
import styles from './styles.module.css';

const Navigation = () => {
  return (
    <nav>
      <NavLink to="/" className={styles.link}>
        Главная
      </NavLink>
      <NavLink to="movies" className={styles.link}>
        Фильмы
      </NavLink>
    </nav>
  );
};

export default Navigation;
