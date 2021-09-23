import React from 'react';
import { NavLink } from 'react-router-dom';
import cadastrar from '../../Assets/cadastrar.png';
import styles from './HeaderNavCategorias.module.css';

const HeaderNavCategorias = () => {
  return (
    <>
      <nav activeClassName={styles.nav}>
        <NavLink to="/cadastro_categorias" end>
          <img className={styles.imagem} src={cadastrar} alt="Cadastrar" />
        </NavLink>
      </nav>
    </>
  );
};

export default HeaderNavCategorias;
