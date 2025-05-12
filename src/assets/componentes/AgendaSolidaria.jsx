import React, { useState } from 'react';
import { Button } from 'primereact/button';
import { Card } from 'primereact/card';



function AgendaSolidaria({ voltar }) {
  const [acoes, setAcoes] = useState([
    { id: 1, titulo: 'Doação de alimentos', descricao: 'Dia 01 - Campanha para arrecadação de cestas básicas.' },
    { id: 2, titulo: 'Mutirão de limpeza', descricao: 'Dia 02 - Limpeza de praça pública no bairro central.' },
    { id: 3, titulo: 'Roupas para o inverno', descricao: 'Dia 03 - Coleta de agasalhos e cobertores.' },
  ]);

  const adicionarAcao = () => {
    const novaAcao = {
      id: acoes.length + 1,
      titulo: `Nova ação ${acoes.length + 1}`,
      descricao: 'Descrição da nova ação solidária.',
    };
    setAcoes([...acoes, novaAcao]);
  };

  return (
    <div className="card">
      <h2>Agenda Solidária</h2>
      <p>Visualize ou cadastre ações solidárias aqui.</p>

      <div className="my-3">
        <Button label="Nova Ação" icon="pi pi-plus" className="p-button-success" onClick={adicionarAcao} />
      </div>

      <div className="grid">
        {acoes.map((acao) => (
          <div className="col-12 md:col-6 lg:col-4" key={acao.id}>
            <Card title={acao.titulo} className="card-acao mb-3">
              <p>{acao.descricao}</p>
            </Card>
          </div>
        ))}
      </div>

      <div className="my-4">
        <Button label="Voltar" icon="pi pi-arrow-left" onClick={voltar} className="p-button-secondary" />
      </div>
    </div>
  );
}

export default AgendaSolidaria;
