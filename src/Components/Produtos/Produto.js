import React from 'react';
import { useParams } from 'react-router';
import useFetch from '../../Hooks/useFetch';
import { PRODUTO_GET, URL_IMAGE } from '../../api';
import Error from '../Helper/Error';
import styles from './Produto.module.css';
import EdicaoProduto from './EdicaoProduto';
import DeletarProduto from './DeletarProduto';

function Produto() {
  const { id } = useParams();
  const { data, error, request } = useFetch();

  React.useEffect(() => {
    async function fetchProdutos() {
      const { url, options } = PRODUTO_GET(id);
      await request(url, options);
    }
    fetchProdutos();
  }, [request, id]);

  if (error) return <Error error={error} />;
  if (data)
    return (
      <ul className="container animeLeft">
        <h1 className="title">{data.nome}</h1>
        <img
          className={styles.foto}
          src={URL_IMAGE + '/img/produtos/' + data.imagem}
          alt={data.nome}
        />
        <div className={styles.attr}>
          <h2>Categoria: {data.nome_categoria ? data.nome_categoria : ''}</h2>
          <DeletarProduto id={id} />
        </div>
        <EdicaoProduto id={id} />
      </ul>
    );
  else return null;
}

export default Produto;
