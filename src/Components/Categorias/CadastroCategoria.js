import React from 'react';
import styles from './CadastroCategoria.module.css';
import useForm from '../../Hooks/useForm';
import useFetch from '../../Hooks/useFetch';
import Input from '../Forms/Input';
import Button from '../Forms/Button';
import Error from '../Helper/Error';
import { CATEGORIAS_POST } from '../../api';
import { useNavigate } from 'react-router-dom';
import Head from '../Helper/Head';
import HeaderCategorias from './HeaderCategorias';

const CadastroCategoria = () => {
  const nome = useForm();
  const [imagem, setImagem] = React.useState({});
  const { data, error, loading, request } = useFetch();
  const navigate = useNavigate();

  React.useEffect(() => {
    if (data) navigate('/categorias');
  }, [data, navigate]);

  function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData();
    formData.append('imagem', imagem.raw);
    formData.append('nome', nome.value);

    const token = window.localStorage.getItem('token');
    const { url, options } = CATEGORIAS_POST(formData, token);
    request(url, options);
  }

  function handleImagemChange({ target }) {
    setImagem({
      preview: URL.createObjectURL(target.files[0]),
      raw: target.files[0],
    });
  }

  return (
    <section className="container animeLeft">
      <Head title="Cadastrar" description="Cadastrar Categorias." />
      <HeaderCategorias />
      <form onSubmit={handleSubmit}>
        <Input label="Nome" type="text" name="nome" {...nome} />
        <input
          className={styles.file}
          type="file"
          name="imagem"
          id="imagem"
          onChange={handleImagemChange}
        />
        {loading ? (
          <Button disabled>Enviando...</Button>
        ) : (
          <Button>Enviar</Button>
        )}
        <Error error={error} />
      </form>
      <div>
        {imagem.preview && (
          <div
            className={styles.preview}
            style={{ backgroundImage: `url('${imagem.preview}')` }}
          ></div>
        )}
      </div>
    </section>
  );
};

export default CadastroCategoria;
