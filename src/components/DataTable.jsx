import React from 'react';
import { faEdit } from '@fortawesome/free-solid-svg-icons';

const DataTable = ({ patients, onEdit }) => {
  return (
    <div>
         <table>
        <thead>
          <tr>
            <th>PACIENTE</th>
            <th>SENHA</th>
            <th>ADMISSÃO</th>
            <th>ALA</th>
            <th>EDITAR</th>
          </tr>
        </thead>
        <tbody>
          {patients.map((patient, index) => (
            <tr key={index}>
              <td>{patient.pacientes}</td>
              <td>{patient.senha}</td>
              <td>{patient.admissao}</td>
              <td>{patient.group}</td>
              <td>
                <button onClick={() => onEdit(patient)}>Editar</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DataTable;
