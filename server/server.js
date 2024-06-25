const express = require('express');
const mysql = require('mysql');
const app = express();
const port = 3001;
const cors = require('cors');

app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '5673',
  database: 'BancoCriptomonedas'
});

db.connect((err) => {
  if (err) {
    console.error('Error connecting to the database:', err);
    return;
  }
  console.log('Connected to the MySQL database.');
});
/* 
Agregar 
*/

// Agregar Cliente
app.post('/api/agregar-cliente', (req, res) => {
  const { nombre, apellido, email, telefono } = req.body;
  const query = 'CALL AgregarCliente(?, ?, ?, ?)';

  db.query(query, [nombre, apellido, email, telefono], (err, result) => {
    if (err) {
      console.error('Error executing query:', err);
      res.status(500).json({ error: 'Error al agregar el cliente' });
      return;
    }
    res.status(200).json({ message: 'Cliente agregado exitosamente' });
  });
});

// Agregar Cartera
app.post('/api/agregar-cartera', (req, res) => {
  const { clienteID, nombre } = req.body;
  const query = 'CALL AgregarCartera(?, ?)';

  db.query(query, [clienteID, nombre], (err, result) => {
    if (err) {
      console.error('Error executing query:', err);
      res.status(500).json({ error: 'Error al agregar la cartera' });
      return;
    }
    res.status(200).json({ message: 'Cartera agregada exitosamente' });
  });
});

// Agregar Criptomoneda
app.post('/api/agregar-criptomoneda', (req, res) => {
  const { nombre, simbolo, descripcion } = req.body;
  const query = 'CALL AgregarCriptomoneda(?, ?, ?)';

  db.query(query, [nombre, simbolo, descripcion], (err, result) => {
    if (err) {
      console.error('Error executing query:', err);
      res.status(500).json({ error: 'Error al agregar la criptomoneda' });
      return;
    }
    res.status(200).json({ message: 'Criptomoneda agregada exitosamente' });
  });
});

// Agregar Cuenta
app.post('/api/agregar-cuenta', (req, res) => {
  const { clienteID, tipoCuentaID, numeroCuenta } = req.body;
  const query = 'CALL AgregarCuenta(?, ?, ?)';

  db.query(query, [clienteID, tipoCuentaID, numeroCuenta], (err, result) => {
    if (err) {
      console.error('Error executing query:', err);
      res.status(500).json({ error: 'Error al agregar la cuenta' });
      return;
    }
    res.status(200).json({ message: 'Cuenta agregada exitosamente' });
  });
});

// Agregar Historial Precio
app.post('/api/agregar-historial-precio', (req, res) => {
  const { criptomonedaID, fecha, precio } = req.body;
  const query = 'CALL AgregarHistorialPrecio(?, ?, ?)';

  db.query(query, [criptomonedaID, fecha, precio], (err, result) => {
    if (err) {
      console.error('Error executing query:', err);
      res.status(500).json({ error: 'Error al agregar el historial de precio' });
      return;
    }
    res.status(200).json({ message: 'Historial de precio agregado exitosamente' });
  });
});

// Agregar Saldo a Cartera
app.post('/api/agregar-saldo-cartera', (req, res) => {
  const { carteraID, criptomonedaID, saldo } = req.body;
  const query = 'CALL AgregarSaldoCartera(?, ?, ?)';

  db.query(query, [carteraID, criptomonedaID, saldo], (err, result) => {
    if (err) {
      console.error('Error executing query:', err);
      res.status(500).json({ error: 'Error al agregar el saldo a cartera' });
      return;
    }
    res.status(200).json({ message: 'Saldo de cartera agregado exitosamente' });
  });
});

// Agregar Transaccion
app.post('/api/agregar-transaccion', (req, res) => {
  const { cuentaID, tipoTransaccionID, criptomonedaID, monto } = req.body;
  const query = 'CALL AgregarTransaccion(?, ?, ?, ?)';

  db.query(query, [cuentaID, tipoTransaccionID, criptomonedaID, monto], (err, result) => {
    if (err) {
      console.error('Error executing query:', err);
      res.status(500).json({ error: 'Error al agregar la transacción' });
      return;
    }
    res.status(200).json({ message: 'Transacción agregada exitosamente' });
  });
});

/*
Eliminar
*/
// Eliminar Cartera
app.delete('/api/eliminar-cartera/:id', (req, res) => {
  const { id } = req.params;
  const query = 'CALL EliminarCartera(?)';

  db.query(query, [id], (err, result) => {
    if (err) {
      console.error('Error executing query:', err);
      res.status(500).json({ error: 'Error al eliminar la cartera' });
      return;
    }
    res.status(200).json({ message: 'Cartera eliminada exitosamente' });
  });
});

// Eliminar Cliente
app.delete('/api/eliminar-cliente/:id', (req, res) => {
  const { id } = req.params;
  const query = 'CALL EliminarCliente(?)';

  db.query(query, [id], (err, result) => {
    if (err) {
      console.error('Error executing query:', err);
      res.status(500).json({ error: 'Error al eliminar el cliente' });
      return;
    }
    res.status(200).json({ message: 'Cliente eliminado exitosamente' });
  });
});

// Eliminar Criptomoneda
app.delete('/api/eliminar-criptomoneda/:id', (req, res) => {
  const { id } = req.params;
  const query = 'CALL EliminarCriptomoneda(?)';

  db.query(query, [id], (err, result) => {
    if (err) {
      console.error('Error executing query:', err);
      res.status(500).json({ error: 'Error al eliminar la criptomoneda' });
      return;
    }
    res.status(200).json({ message: 'Criptomoneda eliminada exitosamente' });
  });
});

// Eliminar Cuenta
app.delete('/api/eliminar-cuenta/:id', (req, res) => {
  const { id } = req.params;
  const query = 'CALL EliminarCuenta(?)';

  db.query(query, [id], (err, result) => {
    if (err) {
      console.error('Error executing query:', err);
      res.status(500).json({ error: 'Error al eliminar la cuenta' });
      return;
    }
    res.status(200).json({ message: 'Cuenta eliminada exitosamente' });
  });
});

// Eliminar saldo cartera
app.delete('/api/eliminar-saldo-cartera', (req, res) => {
  const { carteraID, criptomonedaID } = req.body;
  const query = 'CALL EliminarSaldoCartera(?, ?)';

  db.query(query, [carteraID, criptomonedaID], (err, result) => {
    if (err) {
      console.error('Error executing query:', err);
      res.status(500).json({ error: 'Error al eliminar el saldo de la cartera' });
      return;
    }
    res.status(200).json({ message: 'Saldo de la cartera eliminado exitosamente' });
  });
});

/* 
Modificar
*/
// Modificar Cartera
app.put('/api/modificar-cartera', (req, res) => {
  const { carteraID, nombre } = req.body;
  const query = 'CALL ModificarCartera(?, ?)';

  db.query(query, [carteraID, nombre], (err, result) => {
    if (err) {
      console.error('Error executing query:', err);
      res.status(500).json({ error: 'Error al modificar la cartera' });
      return;
    }
    res.status(200).json({ message: 'Cartera modificada exitosamente' });
  });
});

// Modificar Cliente
app.put('/api/modificar-cliente', (req, res) => {
  const { clienteID, nombre, apellido, email, telefono } = req.body;
  const query = 'CALL ModificarCliente(?, ?, ?, ?, ?)';

  db.query(query, [clienteID, nombre, apellido, email, telefono], (err, result) => {
    if (err) {
      console.error('Error executing query:', err);
      res.status(500).json({ error: 'Error al modificar el cliente' });
      return;
    }
    res.status(200).json({ message: 'Cliente modificado exitosamente' });
  });
});

// Modificar Criptomoneda
app.put('/api/modificar-criptomoneda', (req, res) => {
  const { criptomonedaID, nombre, simbolo, descripcion } = req.body;
  const query = 'CALL ModificarCriptomoneda(?, ?, ?, ?)';

  db.query(query, [criptomonedaID, nombre, simbolo, descripcion], (err, result) => {
    if (err) {
      console.error('Error executing query:', err);
      res.status(500).json({ error: 'Error al modificar la criptomoneda' });
      return;
    }
    res.status(200).json({ message: 'Criptomoneda modificada exitosamente' });
  });
});

// Modificar Cuenta
app.put('/api/modificar-cuenta', (req, res) => {
  const { cuentaID, numeroCuenta, saldo } = req.body;
  const query = 'CALL ModificarCuenta(?, ?, ?)';

  db.query(query, [cuentaID, numeroCuenta, saldo], (err, result) => {
    if (err) {
      console.error('Error executing query:', err);
      res.status(500).json({ error: 'Error al modificar la cuenta' });
      return;
    }
    res.status(200).json({ message: 'Cuenta modificada exitosamente' });
  });
});

// Modificar saldo cartera
app.put('/api/modificar-saldo-cartera', (req, res) => {
  const { carteraID, criptomonedaID, saldo } = req.body;
  const query = 'CALL ModificarSaldoCartera(?, ?, ?)';

  db.query(query, [carteraID, criptomonedaID, saldo], (err, result) => {
    if (err) {
      console.error('Error executing query:', err);
      res.status(500).json({ error: 'Error al modificar el saldo de la cartera' });
      return;
    }
    res.status(200).json({ message: 'Saldo de cartera modificado exitosamente' });
  });
});


app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});
