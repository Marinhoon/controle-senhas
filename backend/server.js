const express = require('express');
const cors = require('cors');
const { sql, poolPromise } = require('./db');

const app = express();
const port = 5000;

app.use(cors());
app.use(express.json());

// Rota para obter pacientes
app.get('/patients', async (req, res) => {
  try {
    const pool = await poolPromise;
    const result = await pool.request().query('SELECT * FROM patients');
    res.json(result.recordset);
  } catch (err) {
    res.status(500).send(err.message);
  }
});

// Rota para adicionar paciente
app.post('/patients', async (req, res) => {
  try {
    const { ala, pacientes, senha, admissao, group } = req.body;
    const pool = await poolPromise;
    await pool.request()
      .input('ala', sql.VarChar, ala)
      .input('pacientes', sql.VarChar, pacientes)
      .input('senha', sql.VarChar, senha)
      .input('admissao', sql.Date, admissao)
      .input('group', sql.VarChar, group)
      .query('INSERT INTO patients (ala, pacientes, senha, admissao, [group]) VALUES (@ala, @pacientes, @senha, @admissao, @group)');
    res.status(201).send('Patient added');
  } catch (err) {
    res.status(500).send(err.message);
  }
});

// Rota para atualizar senha do paciente
app.put('/patients/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const { senha } = req.body;
    const pool = await poolPromise;
    await pool.request()
      .input('id', sql.Int, id)
      .input('senha', sql.VarChar, senha)
      .query('UPDATE patients SET senha = @senha WHERE id = @id');
    res.send('Password updated');
  } catch (err) {
    res.status(500).send(err.message);
  }
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
