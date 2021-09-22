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
              <ProtectedRoute path="/produtos" element={<Home />} />
              <ProtectedRoute
                path="/cadastro_produtos"
                element={<CadastroProduto />}
              />
              {/* 
              <Route path="foto/:id" element={<Photo />} />
              <Route path="perfil/:user" element={<UserProfile />} />
              */}
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
