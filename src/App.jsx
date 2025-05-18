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
    <div className="grid justify-content-center m-auto w-9 border-round">
      <div className="logo-container">
        <div className="logo">
        <img src={logo} alt="Logo" className="logo-img" />
        </div>
      </div>

      {telaAtual === 'busca' && (
  <div className="flex align-items-center justify-content-center min-h-screen">
    <div className="card-container text-center">
      <div className="col-12">
        <h1 className="titulo-busca">Qual a causa que você deseja apoiar?</h1>
      </div>
      <div className="col-12 flex justify-content-center mt-3">
        <Busca />
      </div>
      <div className="col-12 mt-4">
        <Button label="Ir para a Agenda Solidária" onClick={irParaAgenda} className="p-button-info" />
      </div>
    </div>
  </div>
)}


      {telaAtual === 'agenda' && (
        <div className="col-12">
          <AgendaSolidaria voltar={voltarParaBusca} />
        </div>
      )}
    </div>
  );
}

export default App;