import React from 'react';
import './App.css';

import Navbar from './componentes/Navbar/Navbar';
import Footer from './componentes/Footer/Footer';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './page/Login/Login';
import Cadastro from './page/Cadastro/Cadastro';
import Home from './page/Home/Home';
import { AuthProvider } from './Contexts/AuthContexts';


function App() {
  return (
    <>
    <AuthProvider>
        <BrowserRouter>
          <Navbar />
          <div className='min-h-[80vh]'>
            <Routes>
              <Route path="/" element={<Login />} />
              <Route path="/login" element={<Login />} />
              <Route path="/cadastro" element={<Cadastro />} />
              <Route path="/home" element={<Home />} />
            </Routes>
          </div>
          <Footer />
        </BrowserRouter>
        </AuthProvider>
    </>
  );
}
export default App;