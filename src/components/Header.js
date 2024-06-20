import React from 'react';
import './Header.css' // Importando o arquivo de estilos CSS para o cabeçalho

function Header() {
    return (
        <header className='header'>
            <h1>Meu Site</h1>
            <nav>
                <ul>
                    <li><a href='#'>Nome</a></li>
                    <li><a href='#'>Sobrenome</a></li>
                    <li><a href='#'>Serviços</a></li>
                    <li><a href='#'>Contato</a></li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;