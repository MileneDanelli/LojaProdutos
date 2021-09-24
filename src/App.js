import React from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './Components/Header';
import { UserStorage } from './UserContext';
import Home from './Components/Home';
import NotFound from './Components/NotFound';
import Login from './Components/Login/Login';
import ProtectedRoute from './Components/Helper/ProtectedRoute';
import CadastroProduto from './Components/Produtos/CadastroProduto';
import Produto from './Components/Produtos/Produto';
import HomeCategorias from './Components/Categorias/HomeCategorias';
import CadastroCategoria from './Components/Categorias/CadastroCategoria';
import Categoria from './Components/Categorias/Categoria';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <UserStorage>
          <Header />
          <main className="AppBody">
            <Routes>
              <Route path="/" element={<Login />} />
              <Route path="/login/*" element={<Login />} />
              <ProtectedRoute path="/produtos/*" element={<Home />} />
              <ProtectedRoute
                path="/cadastro_produtos"
                element={<CadastroProduto />}
              />
              <ProtectedRoute path="/produto/:id" element={<Produto />} />
              <ProtectedRoute
                path="/categorias/*"
                element={<HomeCategorias />}
              />
              <ProtectedRoute
                path="/cadastro_categorias"
                element={<CadastroCategoria />}
              />
              <ProtectedRoute path="/categoria/:id" element={<Categoria />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </main>
          {/* <Footer /> */}
        </UserStorage>
      </BrowserRouter>
    </div>
  );
}

export default App;
