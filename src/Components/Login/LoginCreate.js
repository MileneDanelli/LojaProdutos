import React from 'react';
import Input from '../Forms/Input';
import Button from '../Forms/Button';
import Error from '../Helper/Error';
import useForm from '../../Hooks/useForm';
import { REGISTRO } from '../../api';
import useFetch from '../../Hooks/useFetch';
import Head from '../Helper/Head';
import { useNavigate } from 'react-router';

const LoginCreate = () => {
  const name = useForm();
  const email = useForm('email');
  const password = useForm('password');
  const password_confirmation = useForm('password');
  const { loading, error, request } = useFetch();
  const navigate = useNavigate();

  async function handleSubmit(event) {
    event.preventDefault();
    const { url, options } = REGISTRO({
      name: name.value,
      email: email.value,
      password: password.value,
      password_confirmation: password_confirmation.value,
    });
    const { response } = await request(url, options);
    if (response.ok) navigate('/login');
  }

  return (
    <section className="animeLeft">
      <Head title="Cadastro" description="Página Cadastro." />
      <h1 className="title">Cadastre-se</h1>
      <form onSubmit={handleSubmit}>
        <Input label="Usuário" type="text" name="name" {...name} />
        <Input label="Email" type="email" name="email" {...email} />
        <Input label="Senha" type="password" name="password" {...password} />
        <Input
          label="Confirme a Senha"
          type="password"
          name="password_confirmation"
          {...password_confirmation}
        />
        {loading ? (
          <Button disabled>Cadastrando...</Button>
        ) : (
          <Button>Cadastrar</Button>
        )}
        <Error error={error} />
      </form>
    </section>
  );
};

export default LoginCreate;
