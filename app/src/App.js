import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Inicio } from './pages/Inicio';
import AgregarCartera from './pages/AgregarCartera';
import AgregarCliente from './pages/AgregarCliente';
import AgregarCriptomoneda from './pages/AgregarCriptomoneda';
import AgregarCuenta from './pages/AgregarCuenta';
import AgregarHistorialPrecio from './pages/AgregarHistorialPrecio';
import AgregarSaldoCartera from './pages/AgregarSaldoCartera';
import AgregarTransaccion from './pages/AgregarTransaccion';
import EliminarCartera from './pages/EliminarCartera';
import EliminarCliente from './pages/EliminarCliente';
import EliminarCriptomoneda from './pages/EliminarCriptomoneda';
import EliminarCuenta from './pages/EliminarCuenta';
import ModificarCartera from './pages/ModificarCartera';
import ModificarCliente from './pages/ModificarCliente';
import ModificarCriptomoneda from './pages/ModificarCriptomoneda';
import ModificarCuenta from './pages/ModificarCuenta';
import ModificarSaldoCartera from './pages/ModificarSaldoCartera';

const App = () => {
  return (

      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/agregar-cartera" element={<AgregarCartera />} />
        <Route path="/agregar-cliente" element={<AgregarCliente />} />
        <Route path="/agregar-criptomoneda" element={<AgregarCriptomoneda />} />
        <Route path="/agregar-cuenta" element={<AgregarCuenta />} />
        <Route path="/agregar-historial-precio" element={<AgregarHistorialPrecio />} />
        <Route path="/agregar-saldo-cartera" element={<AgregarSaldoCartera />} />
        <Route path="/agregar-transaccion" element={<AgregarTransaccion />} />
        <Route path="/eliminar-cartera" element={<EliminarCartera />} />
        <Route path="/eliminar-cliente" element={<EliminarCliente />} />
        <Route path="/eliminar-criptomoneda" element={<EliminarCriptomoneda />} />
        <Route path="/eliminar-cuenta" element={<EliminarCuenta />} />
        <Route path="/modificar-cartera" element={<ModificarCartera />} />
        <Route path="/modificar-cliente" element={<ModificarCliente />} />
        <Route path="/modificar-criptomoneda" element={<ModificarCriptomoneda />} />
        <Route path="/modificar-cuenta" element={<ModificarCuenta />} />
        <Route path="/modificar-saldo-cartera" element={<ModificarSaldoCartera />} />
      </Routes>

  );
};

export default App;

