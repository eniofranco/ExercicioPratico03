import React from 'react';

const FormularioContato = ({ adicionar }) => {
  const [nome, setNome] = React.useState('');
  const [cargo, setCargo] = React.useState('');
  const [telefone, setTelefone] = React.useState('');

  function submeterFormulario(e) {
    e.preventDefault();

    adicionar(nome, cargo, telefone);

    setNome('');
    setCargo('');
    setTelefone('');
  }

  return (
    <form onSubmit={submeterFormulario}>
      <div className="form-group">
        <label htmlFor="nome">Nome:</label>
        <input
          type="text"
          className="form-control"
          id="nome"
          name="nome"
          value={nome}
          onChange={(e) => setNome(e.target.value)}
        />
      </div>

      <div className="form-group">
        <label htmlFor="cargo">Cargo:</label>
        <input
          type="text"
          className="form-control"
          id="cargo"
          name="cargo"
          value={cargo}
          onChange={(e) => setCargo(e.target.value)}
        />
      </div>

      <div className="form-group">
        <label htmlFor="telefone">Telefone:</label>
        <input
          type="text"
          className="form-control"
          id="telefone"
          name="telefone"
          value={telefone}
          onChange={(e) => setTelefone(e.target.value)}
        />
      </div>
      <button type="submit" className="btn btn-primary">
        Salvar
      </button>
    </form>
  );
};

export default FormularioContato;
