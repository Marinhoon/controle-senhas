import React, { useState } from "react";

const DataForm = ({ addPatient, closeModal }) => {
  const [group, setGroup] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [admission, setAdmission] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    addPatient({ group, name, password, admission });
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Ala do Paciente:
        <input
          type="text"
          value={group}
          onChange={(e) => setGroup(e.target.value)}
          required
        />
      </label>
      <label>
        Nome:
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
      </label>
      <label>
        Senha:
        <input
          type="text"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
      </label>
      <label>
        Admissão:
        <input
          type="date"
          value={admission}
          onChange={(e) => setAdmission(e.target.value)}
          required
        />
      </label>
      <button type="submit">Adicionar</button>
      <button type="button" onClick={closeModal}>
        Cancelar
      </button>
    </form>
  );
};

export default DataForm;

// import React, { useState } from 'react';

// const groups = [
//     'MASCULINO 1',
//     'MASCULINO 2',
//     'MASCULINO 3',
//     'FEMININO 1',
//     'FEMININO 2'
//   ];

// const DataForm = ({ addPatient }) => {
//   const [ala, setAla] = useState(groups[0]);
//   const [pacientes, setPacientes] = useState('');
//   const [senha, setSenha] = useState('');
//   const [admissao, setAdmissao] = useState('');
//   const [group, setGroup] = useState(groups[0]);

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     addPatient({ ala, pacientes, senha, admissao, group });

//      // Limpar os campos após envio
//     setAla('');
//     setPacientes('');
//     setSenha('');
//     setAdmissao('');
//     setGroup(groups[0]); // Resetar o grupo para o padrão
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//               <div className="group-select">
//         <label>ALA:</label>
//         <select value={group} onChange={(e) => setGroup(e.target.value)}>
//           {groups.map((g, index) => (
//             <option key={index} value={g}>
//               {g}
//             </option>
//           ))}
//         </select>
//       </div>
//       <div>
//         <label>PACIENTES:</label>
//         <input value={pacientes} onChange={(e) => setPacientes(e.target.value)} />
//       </div>
//       <div>
//         <label>SENHA:</label>
//         <input value={senha} onChange={(e) => setSenha(e.target.value)} />
//       </div>
//       <div>
//         <label>ADMISSÃO:</label>
//         <input value={admissao} onChange={(e) => setAdmissao(e.target.value)} />
//       </div>
//       <br />
//       <button className="add" type="submit">Adicionar</button>
//       <button className="close">Fechar</button>
//     </form>
//   );
// };

// export default DataForm;
