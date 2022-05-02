import Navigation from '../Navigation/Navigation';
import { Outlet } from 'react-router-dom';
import styles from './styles.modules.css';

const AppBar = () => {
  return (
    <header className={styles.header}>
      <Navigation />
      <hr />
      <Outlet/>
    </header>
  );
};

export default AppBar;
