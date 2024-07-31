import React from 'react';

const DataTable = ({ patients, onEdit }) => {
  return (
    <table>
      <thead>
        <tr>
          <th>ALA</th>
          <th>NOME COMPLETO</th>
          <th>SENHA</th>
          <th>DATA ADMINISSÃO</th>
          <th>EDITAR</th>
        </tr>
      </thead>
      <tbody>
        {patients.map((patient) => (
          <tr key={patient.id}>
            <td>{patient.group}</td>
            <td>{patient.name}</td>
            <td>{patient.password}</td>
            <td>{patient.admission}</td>
            <td>
              <button onClick={() => onEdit(patient)}>Editar</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default DataTable;


// import React from 'react';
// import { faEdit } from '@fortawesome/free-solid-svg-icons';

// const DataTable = ({ patients, onEdit }) => {
//   return (
//     <div>
//          <table>
//         <thead>
//           <tr>
//             <th>PACIENTE</th>
//             <th>SENHA</th>
//             <th>ADMISSÃO</th>
//             <th>ALA</th>
//             <th>EDITAR</th>
//           </tr>
//         </thead>
//         <tbody>
//           {patients.map((patient, index) => (
//             <tr key={index}>
//               <td>{patient.pacientes}</td>
//               <td>{patient.senha}</td>
//               <td>{patient.admissao}</td>
//               <td>{patient.group}</td>
//               <td>
//                 <button onClick={() => onEdit(patient)}>Editar</button>
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// };

// export default DataTable;
