import React from 'react';
import { useLocation } from 'react-router';
import HeaderNavCategorias from './HeaderNavCategorias';
import styles from './HeaderCategorias.module.css';

const HeaderCategorias = () => {
  const [title, setTitle] = React.useState('');
  const location = useLocation();

  React.useEffect(() => {
    const { pathname } = location;
    switch (pathname) {
      case '/cadastro_categorias':
        setTitle('Cadastrar');
        break;
      default:
        setTitle('Categorias');
    }
  }, [location]);

  return (
    <header className={styles.header}>
      <h1 className="title">{title}</h1>
      {location.pathname === '/cadastro_categorias' ? (
        ''
      ) : (
        <HeaderNavCategorias />
      )}
    </header>
  );
};

export default HeaderCategorias;
