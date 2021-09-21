import React from 'react';
import styles from './Item.module.css';

const Item = ({ photo }) => {
  return (
    <li className={styles.photo}>
      <img src={photo.imagem} alt={photo.nome} />
    </li>
  );
};

export default Item;
