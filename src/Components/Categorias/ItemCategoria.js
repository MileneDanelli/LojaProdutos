import React from 'react';
import styles from './ItemCategoria.module.css';
import { URL_IMAGE } from '../../api';
import { Link } from 'react-router-dom';

const ItemCategoria = ({ categoria }) => {
  return (
    <li className={styles.photo}>
      <Link to={`/categoria/${categoria.id}`}>
        <img
          src={URL_IMAGE + '/img/categorias/' + categoria.imagem}
          alt={categoria.nome}
        />
      </Link>
    </li>
  );
};

export default ItemCategoria;
