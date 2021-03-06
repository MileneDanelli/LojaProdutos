import React from 'react';
import useFetch from '../../Hooks/useFetch';
import { PRODUTOS_GET } from '../../api';
import Error from '../Helper/Error';
import styles from './Feed.module.css';
import Item from './Item';

const Feed = ({ user }) => {
  const { data, error, request } = useFetch();
  React.useEffect(() => {
    async function fetchProdutos() {
      const token = window.localStorage.getItem('token');
      const { url, options } = PRODUTOS_GET(token);
      await request(url, options);
    }
    fetchProdutos();
  }, [request, user]);

  if (error) return <Error error={error} />;
  if (data)
    return (
      <ul className={`${styles.feed} animeLeft`}>
        {data.map((produto) => (
          <Item key={produto.id} produto={produto} />
        ))}
      </ul>
    );
  else return null;
};

export default Feed;
