import React from 'react';
import './MainContent.css'

function MainContent() {
    return (
        <div className='main-content'>
            <section className='section'>
                <h2>Seção 1</h2>
                <h2>Conteúdo da primeira seção</h2>
            </section>
            <section className='section'>
                <h2>Seção 2</h2>
                <h2>Conteúdo da segunda seção</h2>
            </section>
        </div>
    );
}

export default MainContent;