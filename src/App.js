import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import MainContent from './components/MainContent';
import Footer from './components/Footer'

function App() {
  return (
     <div className='App'>
        <Header /> {/* Renderizando o componente Header */}
        <MainContent /> {/* Renderizando o componente MainContent */}
        <Footer /> {/* Renderizando o componente Footer */}
     </div>
  );
}

export default App;
