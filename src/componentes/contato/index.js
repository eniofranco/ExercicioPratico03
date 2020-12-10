import React from 'react';

const Contato = ({ contato, removerContato }) => {
  return (
    <li className="list-group-item">
      {contato.nome} - {contato.cargo} - {contato.telefone}
      <button
        className="btn btn-primary"
        onClick={() => removerContato(contato.id)}
      >
        Excluir
      </button>
    </li>
  );
};

export default Contato;
