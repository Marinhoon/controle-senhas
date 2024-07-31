import React from "react";
import EditIcon from "@mui/icons-material/Edit";


const DataTable = ({ patients, onEdit }) => {
  return (
    <div className="containerTable">
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
              <div className="icon-container">
                <button className="edit-button" onClick={() => onEdit(patient)}>
                  <EditIcon />
                </button>
              </div>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
    </div>
  );
};

export default DataTable;
