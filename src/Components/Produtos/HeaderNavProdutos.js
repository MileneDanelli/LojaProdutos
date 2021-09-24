import React from 'react';
import { NavLink } from 'react-router-dom';
import cadastrar from '../../Assets/cadastrar.png';
import styles from './HeaderNavProdutos.module.css';

const HeaderNavProdutos = () => {
  return (
    <>
      <nav>
        <NavLink to="/cadastro_produtos" end>
          <img className={styles.imagem} src={cadastrar} alt="Cadastrar" />
        </NavLink>
      </nav>
    </>
  );
};

export default HeaderNavProdutos;
