import React, { useState } from 'react';

const groups = [
    'MASCULINO 1',
    'MASCULINO 2',
    'MASCULINO 3',
    'FEMININO 1',
    'FEMININO 2'
  ];

const DataForm = ({ addPatient }) => {
  const [ala, setAla] = useState(groups[0]);
  const [pacientes, setPacientes] = useState('');
  const [senha, setSenha] = useState('');
  const [admissao, setAdmissao] = useState('');
  const [group, setGroup] = useState(groups[0]);

  const handleSubmit = (e) => {
    e.preventDefault();
    addPatient({ ala, pacientes, senha, admissao, group });

     // Limpar os campos após envio
    setAla('');
    setPacientes('');
    setSenha('');
    setAdmissao('');
    setGroup(groups[0]); // Resetar o grupo para o padrão
  };

  return (
    <form onSubmit={handleSubmit}>
              <div className="group-select">
        <label>ALA:</label>
        <select value={group} onChange={(e) => setGroup(e.target.value)}>
          {groups.map((g, index) => (
            <option key={index} value={g}>
              {g}
            </option>
          ))}
        </select>
      </div>
      <div>
        <label>PACIENTES:</label>
        <input value={pacientes} onChange={(e) => setPacientes(e.target.value)} />
      </div>
      <div>
        <label>SENHA:</label>
        <input value={senha} onChange={(e) => setSenha(e.target.value)} />
      </div>
      <div>
        <label>ADMISSÃO:</label>
        <input value={admissao} onChange={(e) => setAdmissao(e.target.value)} />
      </div>
      <br />
      <button className="add" type="submit">Adicionar</button>
      <button className="close">Fechar</button>
    </form>
  );
};

export default DataForm;
