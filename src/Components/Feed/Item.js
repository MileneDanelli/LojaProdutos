import React from 'react';
import styles from './Item.module.css';
import { URL_IMAGE } from '../../api';
import { Link } from 'react-router-dom';

const Item = ({ produto }) => {
  return (
    <li className={styles.photo}>
      <Link to={`/produto/${produto.id}`}>
        <img
          src={URL_IMAGE + '/img/produtos/' + produto.imagem}
          alt={produto.nome}
        />
      </Link>
    </li>
  );
};

export default Item;
