import React, { useState } from 'react';
import Modal from 'react-modal';
import DataForm from './components/DataForm';
import DataTable from './components/DataTable';
import EditPasswordForm from './components/EditPasswordForm';
import { initialPatients } from './data';
import './index.css';
import ButtonAppBar from './components/ButtonAppBar';

// Definir o elemento root para o Modal
Modal.setAppElement('#root');

const App = () => {
  const [patients, setPatients] = useState(initialPatients);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [editModalIsOpen, setEditModalIsOpen] = useState(false);
  const [currentPatient, setCurrentPatient] = useState(null);
  const [searchValue, setSearchValue] = useState('');

  const addPatient = (patient) => {
    setPatients([...patients, { ...patient, id: patients.length + 1 }]);
    setModalIsOpen(false);
  };

  const updatePatient = (updatedPatient) => {
    setPatients(patients.map(p => (p.id === updatedPatient.id ? updatedPatient : p)));
    setEditModalIsOpen(false);
  };

  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  const openEditModal = (patient) => {
    setCurrentPatient(patient);
    setEditModalIsOpen(true);
  };

  const closeEditModal = () => {
    setEditModalIsOpen(false);
    setCurrentPatient(null);
  };

  // Filtra pacientes com base no valor de pesquisa
  const filteredPatients = patients.filter(patient =>
    patient.name.toLowerCase().includes(searchValue.toLowerCase())
  );

  return (
    <div>
      <ButtonAppBar
        searchValue={searchValue}
        onSearchChange={setSearchValue}
      />
     <br />
      <button className="add" onClick={openModal}>Adicionar Paciente</button>
      <DataTable patients={filteredPatients} onEdit={openEditModal} />
      
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Adicionar Paciente"
        className="modal-content"
        overlayClassName="modal-overlay"
      >
        <h2>Adicionar Paciente</h2>
        <DataForm addPatient={addPatient} closeModal={closeModal} />
      </Modal>

      <Modal
        isOpen={editModalIsOpen}
        onRequestClose={closeEditModal}
        contentLabel="Editar Paciente"
        className="modal-content"
        overlayClassName="modal-overlay"
      >
        <h2>Editar Paciente</h2>
        {currentPatient && (
          <EditPasswordForm
            editPatient={updatePatient}
            closeModal={closeEditModal}
            initialData={currentPatient}
          />
        )}
      </Modal>
    </div>
  );
};

export default App;
