import React, { useState } from 'react';
import './Home.css';
import homeLogo from '../../assets/home.jpg'

function Home(){
    const [loggedIn, setLoggedIn] = useState(false);

    return (
        
      <div>
        {loggedIn ? (
          <h1>Bem-vindo de volta!</h1>
          
          ) : (
          <button onClick={() => setLoggedIn(true)}>Entrar</button>
          
        )}
      </div>
    );
}

export default Home;