import React from 'react';
import uuid from 'react-uuid';
import Contato from '../../componentes/contato';
import FormularioContato from '../../componentes/formularioFuncionario';

const Contatos = () => {
  const [contatos, setContatos] = React.useState([]);

  React.useEffect(() => {
    localStorage.setItem('Contatos', JSON.stringify(contatos));
  }, [contatos]);

  function adicionarContato(nome, cargo, telefone) {
    const id = uuid();
    setContatos([...contatos, { id, nome, cargo, telefone }]);
  }

  function removerContato(id) {
    setContatos(contatos.filter((contato) => contato.id !== id));
  }

  return (
    <div>
      <h1>Lista de Funcionários</h1>

      <ul className="list-group">
        {contatos.map((contato) => (
          <Contato
            key={contato.id}
            contato={contato}
            removerContato={removerContato}
          />
        ))}
      </ul>

      <hr />
      <h2>Formulário de Funcionários</h2>

      <FormularioContato adicionar={adicionarContato} />
    </div>
  );
};

export default Contatos;
