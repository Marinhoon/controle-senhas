import React, { useState } from 'react';
import { supabase } from '../supabaseClient';

const EditPasswordForm = ({ editPatient, closeModal, initialData }) => {
  const [senha, setSenha] = useState(initialData.senha);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const updatedPatient = { ...initialData, senha };

    await supabase
      .from('patients')
      .update({ senha })
      .eq('id', initialData.id);

    editPatient(updatedPatient);

    // Limpar o campo após envio
    setSenha('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>SENHA:</label>
        <input value={senha} onChange={(e) => setSenha(e.target.value)} />
      </div>
      <br />
      <button className="add" type="submit">Atualizar</button>
      <button className="close" type="button" onClick={closeModal}>Fechar</button>
    </form>
  );
};

export default EditPasswordForm;
