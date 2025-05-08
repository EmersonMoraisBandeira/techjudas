import React, { useState } from 'react';
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';

function Busca() {
  const [valorBusca, setValorBusca] = useState('');

  const handleBuscar = () => {
    console.log("Buscando por:", valorBusca);
  };

  return (
    <div className="p-inputgroup">
      <InputText
        placeholder="Digite sua busca"
        value={valorBusca}
        onChange={(e) => setValorBusca(e.target.value)}
      />
      <Button label="Buscar" icon="pi pi-search" onClick={handleBuscar} />
    </div>
  );
}

export default Busca;

