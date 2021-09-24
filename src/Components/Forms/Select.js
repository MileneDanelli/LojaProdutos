import React from 'react';
import { CATEGORIAS_GET } from '../../api';
import useFetch from '../../Hooks/useFetch';
import Error from '../Helper/Error';
import styles from './Select.module.css';

const Select = ({ label, name, onChange, value }) => {
  const { data, error, request } = useFetch();
  React.useEffect(() => {
    async function fetchCategorias() {
      const token = window.localStorage.getItem('token');
      const { url, options } = CATEGORIAS_GET(token);
      await request(url, options);
    }
    fetchCategorias();
  }, [request]);

  if (error) return <Error error={error} />;
  if (data)
    return (
      <div className={styles.wrapper}>
        <label htmlFor={name} className={styles.label}>
          {label}
        </label>

        <select
          name={name}
          className={styles.select}
          onChange={onChange}
          value={value}
        >
          <option defaultValue>...</option>
          {data.map((categoria) => (
            <option key={categoria.id} value={categoria.id}>
              {categoria.nome}
            </option>
          ))}
        </select>
      </div>
    );
  else return null;
};

export default Select;
