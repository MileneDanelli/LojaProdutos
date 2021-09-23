import React from 'react';
import { useParams } from 'react-router';
import useFetch from '../../Hooks/useFetch';
import { CATEGORIA_GET, URL_IMAGE } from '../../api';
import Error from '../Helper/Error';
import styles from './Categoria.module.css';
import EdicaoCategoria from './EdicaoCategoria';
import DeletarCategoria from './DeletarCategoria';

function Categoria() {
  const { id } = useParams();
  const { data, error, request } = useFetch();

  React.useEffect(() => {
    async function fetchCategoria() {
      const { url, options } = CATEGORIA_GET(id);
      await request(url, options);
    }
    fetchCategoria();
  }, [request, id]);

  if (error) return <Error error={error} />;
  if (data)
    return (
      <ul className="container animeLeft">
        <h1 className="title">{data.nome}</h1>
        <img
          className={styles.foto}
          src={URL_IMAGE + '/img/categorias/' + data.imagem}
          alt={data.nome}
        />
        <div className={styles.attr}>
          <DeletarCategoria id={id} />
        </div>
        <EdicaoCategoria id={id} />
      </ul>
    );
  else return null;
}

export default Categoria;
