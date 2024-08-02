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
        <select value={group} onChange={(e) => setGroup(e.target.value)} required>
          <option disabled value="">SELECIONE A ALA DO PACIENTE</option>
          <option value="MASCULINO 01">MASCULINO 01</option>
          <option value="MASCULINO 02">MASCULINO 02</option>
          <option value="MASCULINO 03">MASCULINO 03</option>
          <option value="FEMININO 01">FEMININO 01</option>
          <option value="FEMININO 02">FEMININO 02</option>
        </select>
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
      <button className="add "type="submit">Adicionar</button>
      <button className="close" type="button" onClick={closeModal}> Fechar</button>
    </form>
  );
};

export default DataForm;


// export default DataForm;

// import React, { useState } from "react";

// const DataForm = ({ addPatient, closeModal }) => {
//   const [group, setGroup] = useState("");
//   const [name, setName] = useState("");
//   const [password, setPassword] = useState("");
//   const [admission, setAdmission] = useState("");

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     addPatient({ group, name, password, admission });
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <label>
//         Ala do Paciente:
//         <input
//           type="text"
//           value={group}
//           onChange={(e) => setGroup(e.target.value)}
//           required
//         />
//       </label>
//       <label>
//         Nome:
//         <input
//           type="text"
//           value={name}
//           onChange={(e) => setName(e.target.value)}
//           required
//         />
//       </label>
//       <label>
//         Senha:
//         <input
//           type="text"
//           value={password}
//           onChange={(e) => setPassword(e.target.value)}
//           required
//         />
//       </label>
//       <label>
//         Admissão:
//         <input
//           type="date"
//           value={admission}
//           onChange={(e) => setAdmission(e.target.value)}
//           required
//         />
//       </label>
//       <button className="add "type="submit">Adicionar</button>
//       <button className="close" type="button" onClick={closeModal}> Fechar</button>
//     </form>
//   );
// };

// export default DataForm;