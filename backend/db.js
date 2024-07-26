const sql = require('mssql');

const config = {
  user: 'YOUR_USERNAME',
  password: 'YOUR_PASSWORD',
  server: 'YOUR_SERVER',
  database: 'YOUR_DATABASE',
  options: {
    encrypt: true, // Use this if you're on Windows Azure
    trustServerCertificate: true // Change to false for production
  }
};

const poolPromise = new sql.ConnectionPool(config)
  .connect()
  .then(pool => {
    console.log('Connected to SQL Server');
    return pool;
  })
  .catch(err => console.log('Database Connection Failed! Bad Config: ', err));

module.exports = {
  sql, poolPromise
};
