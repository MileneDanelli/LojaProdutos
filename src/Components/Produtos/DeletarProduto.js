import React from 'react';
import { useNavigate } from 'react-router';
import { PRODUTO_DELETE } from '../../api';
import useFetch from '../../Hooks/useFetch';
import styles from './DeletarProduto.module.css';

const DeletarProduto = (id) => {
  const { loading, request } = useFetch();
  const navigate = useNavigate();

  async function handleClick() {
    const confirm = window.confirm('Tem certeza que deseja Deletar?');
    if (confirm) {
      const { url, options } = PRODUTO_DELETE(id.id);
      const { response } = await request(url, options);
      if (response.ok) navigate('/produtos');
    }
  }

  return (
    <>
      {loading ? (
        <button className={styles.delete} disabled>
          Deletar
        </button>
      ) : (
        <button onClick={handleClick} className={styles.delete}>
          Deletar
        </button>
      )}
    </>
  );
};

export default DeletarProduto;
