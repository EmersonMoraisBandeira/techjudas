import React, { useState } from 'react';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import 'primeflex/primeflex.css';
import 'primereact/resources/themes/bootstrap4-light-purple/theme.css';
import { Button } from 'primereact/button';

import './App.css';
import logo from './assets/componentes/logo.png';

import Busca from './assets/componentes/busca';
import AgendaSolidaria from './assets/componentes/AgendaSolidaria';

function App() {
  const [telaAtual, setTelaAtual] = useState('busca');

  const irParaAgenda = () => setTelaAtual('agenda');
  const voltarParaBusca = () => setTelaAtual('busca');

  return (
    <div
      style={{
        display: 'flex',
        height: '100vh',
        width: '100vw',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'black',
        color: 'white',
        padding: '20px',
      }}
    >
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          backgroundColor: '#222',
          padding: '30px 40px',
          borderRadius: '10px',
          maxWidth: '700px',  // aumentado aqui
          width: '100%',
          boxSizing: 'border-box',
          textAlign: 'center',
        }}
      >
        <img
          src={logo}
          alt="Logo"
          style={{
            maxWidth: '150px',
            marginBottom: '25px',
            objectFit: 'contain',
            userSelect: 'none',
          }}
        />

        {telaAtual === 'busca' && (
          <>
            <h2 className="titulo-busca">Qual a causa que você deseja apoiar?</h2>

            <div style={{ marginTop: '25px', width: '100%' }}>
              <Busca style={{ width: '100%', fontSize: '1.1rem' }} />
            </div>

            <div style={{ marginTop: '30px', width: '100%' }}>
              <Button
                label="Ir para a Agenda Solidária"
                onClick={irParaAgenda}
                className="p-button-info"
                style={{ width: '100%', fontSize: '1.1rem' }}
              />
            </div>
          </>
        )}

        {telaAtual === 'agenda' && (
          <AgendaSolidaria voltar={voltarParaBusca} />
        )}
      </div>
    </div>
  );
}

export default App;
