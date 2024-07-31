import React, { useState } from 'react';


const EditPasswordForm = ({ editPatient, closeModal, initialData }) => {
  const [group, setGroup] = useState(initialData.group);
  const [name, setName] = useState(initialData.name);
  const [password, setPassword] = useState(initialData.password);
  const [admission, setAdmission] = useState(initialData.admission);

  const handleSubmit = (e) => {
    e.preventDefault();
    editPatient({ id: initialData.id, group, name, password, admission });
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Ala do Paciente:
        <input type="text" value={group} onChange={(e) => setGroup(e.target.value)} required />
      </label>
      <label>
        Nome:
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} required />
      </label>
      <label>
        Senha:
        <input type="text" value={password} onChange={(e) => setPassword(e.target.value)} required />
      </label>
      <label>
        Admissão:
        <input type="date" value={admission} onChange={(e) => setAdmission(e.target.value)} required />
      </label>

      <button className="add" type="submit">Atualizar</button>
      <button className="close" type="button" onClick={closeModal}>Fechar</button>
    </form>
  );
};

export default EditPasswordForm;
