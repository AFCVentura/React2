import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header';

function App() {
  return (
     <div className='App'>
        <Header /> {/* Renderizando o componente Header */}
        <main>
            <p>Conteúdo da minha aplicação...</p>
        </main>
     </div>
  );
}

export default App;
