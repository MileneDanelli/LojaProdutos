import React from 'react';
import useFetch from '../../Hooks/useFetch';
import { CATEGORIAS_GET } from '../../api';
import Error from '../Helper/Error';
import styles from './FeedCategorias.module.css';
import ItemCategoria from './ItemCategoria';

const FeedCategorias = ({ user }) => {
  const { data, error, request } = useFetch();
  React.useEffect(() => {
    async function fetchCategorias() {
      const token = window.localStorage.getItem('token');
      const { url, options } = CATEGORIAS_GET(token);
      await request(url, options);
    }
    fetchCategorias();
  }, [request, user]);

  if (error) return <Error error={error} />;
  if (data)
    return (
      <ul className={`${styles.feed} animeLeft`}>
        {data.map((categoria) => (
          <ItemCategoria key={categoria.id} categoria={categoria} />
        ))}
      </ul>
    );
  else return null;
};

export default FeedCategorias;
