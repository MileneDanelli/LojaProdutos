import { NotFound } from 'http-errors';
import React from 'react';
import { Route, Routes } from 'react-router';
import Feed from './Feed/Feed';
import Head from './Helper/Head';
import CadastroProduto from './Produtos/CadastroProduto';
import HeaderProdutos from './Produtos/HeaderProdutos';

const Home = () => {
  return (
    <section className="container">
      <Head title="Produtos" description="Página Home." />
      <HeaderProdutos />
      <Routes>
        <Route path="/" element={<Feed />} />
        <Route path="cadastro_produtos" element={<CadastroProduto />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </section>
  );
};

export default Home;
