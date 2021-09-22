import React from 'react';
import styles from './Header.module.css';
import { Link } from 'react-router-dom';
import carrinho from '../Assets/carrinho.png';
import logout from '../Assets/logout.png';
import { UserContext } from '../UserContext';

const Header = () => {
  const { data, userLogout } = React.useContext(UserContext);

  return (
    <header className={styles.Header}>
      <nav className={`${styles.nav} container`}>
        <Link to="/produtos" aria-label="Home">
          <img className={styles.logo} src={carrinho} alt="logo" />
        </Link>
        {data ? (
          <section className={styles.sair}>
            {data.name}
            <img
              className={styles.botao_sair}
              src={logout}
              alt="logo"
              onClick={userLogout}
            />
          </section>
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
