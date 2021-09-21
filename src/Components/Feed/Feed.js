import React from 'react';
import useFetch from '../../Hooks/useFetch';
import { PRODUTOS_GET } from '../../api';
import Error from '../Helper/Error';
import styles from './Feed.module.css';
import Item from './Item';

const Feed = ({ user, page, setInfinite }) => {
  const { data, error, request } = useFetch();
  React.useEffect(() => {
    async function fetchProdutos() {
      const token = window.localStorage.getItem('token');
      const total = 6;
      const { url, options } = PRODUTOS_GET(token);
      const { response, json } = await request(url, options);
      if (response && response.ok && json.length < total) setInfinite(false);
    }
    fetchProdutos();
  }, [request, user, page, setInfinite]);

  if (error) return <Error error={error} />;
  if (data)
    return (
      <ul className={`${styles.feed} animeLeft`}>
        {data.map((photo) => (
          <Item key={photo.id} photo={photo} />
        ))}
      </ul>
    );
  else return null;
};

export default Feed;
