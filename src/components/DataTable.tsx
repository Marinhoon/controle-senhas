import EditIcon from "@mui/icons-material/Edit";
import React from "react";
import { ListaSenhaPacienteModel } from "../model/listaSenhaPaciente.model";


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
        {patients.map((patient: ListaSenhaPacienteModel) => (
          <tr key={patient.id}>
            <td>{patient.ala}</td>
            <td>{patient.nomeCompleto}</td>
            <td>{patient.senha}</td>
            <td>{patient.dataAdmissao as string}</td>
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
