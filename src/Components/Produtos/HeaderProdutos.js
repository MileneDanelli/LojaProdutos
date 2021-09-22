import React from 'react';
import { useLocation } from 'react-router';
import HeaderNavProdutos from './HeaderNavProdutos';
import styles from './HeaderProdutos.module.css';

const HeaderProdutos = () => {
  const [title, setTitle] = React.useState('');
  const location = useLocation();

  React.useEffect(() => {
    const { pathname } = location;
    switch (pathname) {
      case '/cadastro_produtos':
        setTitle('Cadastrar');
        break;
      default:
        setTitle('Produtos');
    }
  }, [location]);

  return (
    <header className={styles.header}>
      <h1 className="title">{title}</h1>
      {location.pathname === '/cadastro_produtos' ? '' : <HeaderNavProdutos />}
    </header>
  );
};

export default HeaderProdutos;
