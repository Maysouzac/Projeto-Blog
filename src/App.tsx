import React from 'react';
import Home from './page/home/Home';
import './App.css';
import Card from './componentes/Card/card';


function App() {
  return (
    <div>
      <Card 
   titulo="Componente Home"
   descricao="Este é um componente Home que recebe props."/>
    </div>

  );
}

export default App;