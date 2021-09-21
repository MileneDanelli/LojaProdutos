import React from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './Components/Header';
import { UserStorage } from './UserContext';
import Home from './Components/Home';
import Login from './Components/Login/Login';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <UserStorage>
          <Header />
          <main className="AppBody">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="login/*" element={<Login />} />
              {/* <ProtectedRoute path="conta/*" element={<User />} />
              <Route path="foto/:id" element={<Photo />} />
              <Route path="perfil/:user" element={<UserProfile />} />
              <Route path="*" element={<NotFound />} /> */}
            </Routes>
          </main>
          {/* <Footer /> */}
        </UserStorage>
      </BrowserRouter>
    </div>
  );
}

export default App;
