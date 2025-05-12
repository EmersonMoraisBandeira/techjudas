import React from 'react';
import { Button } from 'primereact/button';

function Busca() {
  return (
    <div className="flex align-items-center gap-2 w-full">
      <input type="text" placeholder="Digite sua busca" />
      <Button icon="pi pi-search" label="Buscar" className="p-button" />
    </div>
  );
}

export default Busca;


