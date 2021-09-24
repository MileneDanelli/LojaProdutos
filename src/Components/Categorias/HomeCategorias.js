import { NotFound } from 'http-errors';
import React from 'react';
import { Route, Routes } from 'react-router';
import Head from '../Helper/Head';
import HeaderCategorias from './HeaderCategorias';
import CadastroCategoria from './CadastroCategoria';
import FeedCategorias from './FeedCategorias';

const Home = () => {
  return (
    <section className="container">
      <Head title="Categorias" description="Página Categorias." />
      <HeaderCategorias />
      <Routes>
        <Route path="/" element={<FeedCategorias />} />
        <Route path="cadastro_categorias/*" element={<CadastroCategoria />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </section>
  );
};

export default Home;
