import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import 'react-toastify/dist/ReactToastify.css';
import Login from './page/Login/Login';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { AuthProvider } from './Contexts/AuthContexts';
import { ToastContainer } from 'react-toastify';
import Cadastro from './page/Cadastro/Cadastro';
import Navbar from './componentes/Navbar/Navbar';
import Home from './page/Home/Home';
import Footer from './componentes/Footer/Footer';
import ListaTemas from './componentes/Temas/ListaTemas/ListaTemas';
import FormularioTema from './componentes/Temas/FormularioTema/FormularioTema';
import DeletarTema from './componentes/Temas/DeletarTema/DeletarTema';
import ListaPostagens from './componentes/Postagens/ListaPostagens/ListaPostagens';
import FormularioPostagem from './componentes/Postagens/FormularioPostagem/FormularioPostagem';

import Perfil from './page/Perfil/Perfil';
import DeletarPostagem from './componentes/Postagens/DeletarPostagem/DeletarPostagem';

function App() {
  
  return (
    <>
      <AuthProvider>
      <ToastContainer />
        <BrowserRouter>
        <Navbar />
          <div className='min-h-[80vh]'>
            <Routes>
              <Route path="/" element={<Login />} />
              <Route path="/login" element={<Login />} />
              <Route path="/cadastro" element={<Cadastro />} />
              <Route path="/home" element={<Home />} />
              <Route path="/temas" element={<ListaTemas />} />
              <Route path="/cadastroTema" element={<FormularioTema />} />
              <Route path="/editarTema/:id" element={<FormularioTema />} />
              <Route path="/deletarTema/:id" element={<DeletarTema />} />
              <Route path="/postagens" element={<ListaPostagens />} />
              <Route path="/cadastroPostagem" element={<FormularioPostagem />} />
              <Route path="/editarPostagem/:id" element={<FormularioPostagem />} />
              <Route path="/deletarPostagem/:id" element={<DeletarPostagem />} />
              <Route path="/perfil" element={<Perfil />} />
            </Routes>
          </div>
          <Footer />
        </BrowserRouter>
      </AuthProvider>
    </>
  );
}

export default App;