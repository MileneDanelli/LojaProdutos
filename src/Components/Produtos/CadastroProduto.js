import React from 'react';
import styles from './CadastroProduto.module.css';
import useForm from '../../Hooks/useForm';
import useFetch from '../../Hooks/useFetch';
import Input from '../Forms/Input';
import Button from '../Forms/Button';
import Select from '../Forms/Select';
import Error from '../Helper/Error';
import { PRODUTOS_POST } from '../../api';
import { useNavigate } from 'react-router-dom';
import Head from '../Helper/Head';
import HeaderProdutos from './HeaderProdutos';

const CadastroProduto = () => {
  const nome = useForm();
  const id_categoria = useForm();
  const [imagem, setImagem] = React.useState({});
  const [selectValue, setSelectValue] = React.useState(null);
  const { data, error, loading, request } = useFetch();
  const navigate = useNavigate();

  React.useEffect(() => {
    if (data) navigate('/produtos');
  }, [data, navigate]);

  function handleSubmit(event) {
    event.preventDefault();

    const formData = new FormData();
    formData.append('imagem', imagem.raw);
    formData.append('nome', nome.value);
    formData.append('id_categoria', id_categoria.value);

    const token = window.localStorage.getItem('token');
    const { url, options } = PRODUTOS_POST(formData, token);
    request(url, options);
  }

  function handleImagemChange({ target }) {
    setImagem({
      preview: URL.createObjectURL(target.files[0]),
      raw: target.files[0],
    });
  }

  function handleSelectChange({ target }) {
    setSelectValue(target.value);
  }

  return (
    <section className="container animeLeft">
      <Head title="Cadastrar" description="Cadastrar Produtos." />
      <HeaderProdutos />
      <form onSubmit={handleSubmit}>
        <Input label="Nome" type="text" name="nome" {...nome} />

        <Select
          label="Categoria"
          name="id_categoria"
          onChange={handleSelectChange}
          value={selectValue}
          {...id_categoria}
        />

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

export default CadastroProduto;
