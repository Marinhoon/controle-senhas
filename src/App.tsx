import React, { useState, useEffect, useCallback } from "react";
import Modal from "react-modal";
import DataForm from "./components/DataForm";
import DataTable from "./components/DataTable";
import EditPasswordForm from "./components/EditPasswordForm";
import { initialPatients } from "./data";
import "./index.css";
import ButtonAppBar from "./components/ButtonAppBar";
import { debounce } from "./utils";
import { useControleDeSenhaService } from "./services/controleSenha.service";
import { ListaSenhaPacienteModel } from "./model/listaSenhaPaciente.model";
import {
  addDoc,
  collection,
  DocumentData,
  QuerySnapshot,
} from "firebase/firestore";

// Definir o elemento root para o Modal
Modal.setAppElement("#root");

const App = () => {
  const [patients, setPatients] = useState(initialPatients);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [editModalIsOpen, setEditModalIsOpen] = useState(false);
  const [currentPatient, setCurrentPatient] = useState(null);
  const [searchValue, setSearchValue] = useState("");
  const [listPassword, setListPassword] = useState<ListaSenhaPacienteModel[]>(
    []
  );

  const service = useControleDeSenhaService();

  const addPatient = (patient) => {
    setPatients([...patients, { ...patient, id: patients.length + 1 }]);
    setModalIsOpen(false);
  };

  const listaDeSenha = useCallback(async () => {
    try {
      const response = await service.obterListaDeSenha();
      const pattientList: ListaSenhaPacienteModel[] = [];

      response?.forEach((doc) => {
        pattientList.push({
          id: doc.id,
          ...doc.data(),
        } as ListaSenhaPacienteModel);
      });

      setListPassword(pattientList);
    } catch (error) {
      console.error("Erro ao obter a lista de senhas:", error);
    }
  }, [service]);

  const updatePatient = (updatedPatient) => {
    setPatients(
      patients.map((p) => (p.id === updatedPatient.id ? updatedPatient : p))
    );
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

  // FILTRO PACIENTE COM BASE PESQUISA (nome e senha)
  const filteredPatients = patients.filter(
    (patient) =>
      patient.name.toLowerCase().includes(searchValue.toLowerCase()) ||
      patient.password.toString().includes(searchValue)
  );

  const handleSearchChange = (value) => {
    setSearchValue(value);
  };

  useEffect(() => {
    listaDeSenha();
  }, [listaDeSenha]);

  return (
    <div>
      <ButtonAppBar
        searchValue={searchValue}
        onSearchChange={handleSearchChange}
        onOpenModal={openModal}
      />
      <br />
      <DataTable patients={listPassword} onEdit={openEditModal} />

      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Adicionar Paciente"
        className="modal-content"
        overlayClassName="modal-overlay"
      >
        <h2>ADICIONAR PACIENTE</h2>
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

// import React, { useState, useEffect, useCallback } from "react";
// import Modal from "react-modal";
// import DataForm from "./components/DataForm";
// import DataTable from "./components/DataTable";
// import EditPasswordForm from "./components/EditPasswordForm";
// import { initialPatients } from "./data";
// import "./index.css";
// import ButtonAppBar from "./components/ButtonAppBar";
// import { debounce } from "./utils";
// import { useControleDeSenhaService } from "./controleSenha.service";
// import { ListaSenhaPacienteModel } from "./model/listaSenhaPaciente.model";
// import { DocumentData, QuerySnapshot } from "firebase/firestore";

// // Definir o elemento root para o Modal
// Modal.setAppElement("#root");

// const App = () => {
//   const [patients, setPatients] = useState(initialPatients);
//   const [modalIsOpen, setModalIsOpen] = useState(false);
//   const [editModalIsOpen, setEditModalIsOpen] = useState(false);
//   const [currentPatient, setCurrentPatient] = useState(null);
//   const [searchValue, setSearchValue] = useState("");
//   const [listPassword, setListPassword] = useState<ListaSenhaPacienteModel[]>([]);
//   const [snapshot, setSnapshot] = useState<QuerySnapshot<DocumentData, DocumentData> | undefined>({} as QuerySnapshot<DocumentData, DocumentData>);

//   const service = useControleDeSenhaService();

//   const addPatient = (patient) => {
//     setPatients([...patients, { ...patient, id: patients.length + 1 }]);
//     setModalIsOpen(false);
//   };

//   const listaDeSenha = useCallback(async () => {
//     const response = await service.obterListaDeSenha();
//     setSnapshot(response);

//     const pattientList: ListaSenhaPacienteModel[] = [];
//     snapshot?.forEach((doc) => {
//       pattientList.push({
//         id: doc.id,
//         ...doc.data(),
//       } as ListaSenhaPacienteModel);
//     });

//     setListPassword(pattientList);
//   }, []);

//   const updatePatient = (updatedPatient) => {
//     setPatients(
//       patients.map((p) => (p.id === updatedPatient.id ? updatedPatient : p))
//     );
//     setEditModalIsOpen(false);
//   };

//   const openModal = () => {
//     setModalIsOpen(true);
//   };

//   const closeModal = () => {
//     setModalIsOpen(false);
//   };

//   const openEditModal = (patient) => {
//     setCurrentPatient(patient);
//     setEditModalIsOpen(true);
//   };

//   const closeEditModal = () => {
//     setEditModalIsOpen(false);
//     setCurrentPatient(null);
//   };

//   //FILTRO PACIENTE COM BASE PESQUISA (nome e senha)
//   const filteredPatients = patients.filter(
//     (patient) =>
//       patient.name.toLowerCase().includes(searchValue.toLowerCase()) ||
//       patient.password.toString().includes(searchValue)
//   );

//   const handleSearchChange = (value) => {
//     setSearchValue(value);
//   };

//   useEffect(() => {
//     listaDeSenha();
//   }, [listaDeSenha]);

//   return (
//     <div>
//       <ButtonAppBar
//         searchValue={searchValue}
//         onSearchChange={handleSearchChange}
//         onOpenModal={openModal}
//       />
//       <br />
//       <DataTable patients={listPassword} onEdit={openEditModal} />

//       <Modal
//         isOpen={modalIsOpen}
//         onRequestClose={closeModal}
//         contentLabel="Adicionar Paciente"
//         className="modal-content"
//         overlayClassName="modal-overlay"
//       >
//         <h2>ADICIONAR PACIENTE</h2>
//         <DataForm addPatient={addPatient} closeModal={closeModal} />
//       </Modal>

//       <Modal
//         isOpen={editModalIsOpen}
//         onRequestClose={closeEditModal}
//         contentLabel="Editar Paciente"
//         className="modal-content"
//         overlayClassName="modal-overlay"
//       >
//         <h2>Editar Paciente</h2>
//         {currentPatient && (
//           <EditPasswordForm
//             editPatient={updatePatient}
//             closeModal={closeEditModal}
//             initialData={currentPatient}
//           />
//         )}
//       </Modal>
//     </div>
//   );
// };

// export default App;
