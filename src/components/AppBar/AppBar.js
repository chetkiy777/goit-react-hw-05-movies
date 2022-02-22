import Navigation from '../Navigation/Navigation';
import styles from './styles.modules.css';

const AppBar = () => {
  return (
    <header className={styles.header}>
      <Navigation />
    </header>
  );
};

export default AppBar;
