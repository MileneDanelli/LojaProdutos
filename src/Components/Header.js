import React from 'react';
import styles from './Header.module.css';
import { Link } from 'react-router-dom';
import Carrinho from '../Assets/carrinho.png';
import { UserContext } from '../UserContext';

const Header = () => {
  const { data } = React.useContext(UserContext);

  return (
    <header className={styles.Header}>
      <nav className={`${styles.nav} container`}>
        <Link to="/" aria-label="Dogs-Home" className={styles.logo}>
          <Carrinho />
        </Link>
        {data ? (
          <Link to="/conta" className={styles.login}>
            {data.nome}
          </Link>
        ) : (
          <Link to="/login" className={styles.login}>
            Login / Criar
          </Link>
        )}
      </nav>
    </header>
  );
};

export default Header;