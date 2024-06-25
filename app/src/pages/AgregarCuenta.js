import { useState } from 'react';
import axios from 'axios';

const AgregarCuenta = () => {
  const [clienteID, setClienteID] = useState('');
  const [tipoCuentaID, setTipoCuentaID] = useState('');
  const [numeroCuenta, setNumeroCuenta] = useState('');
  const [mensaje, setMensaje] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:3001/api/agregar-cuenta', {
        clienteID,
        tipoCuentaID,
        numeroCuenta,
      });
      setMensaje('Cuenta agregada exitosamente');
    } catch (error) {
      console.error('Error agregando cuenta', error);
      setMensaje('Error al agregar la cuenta');
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="bg-white shadow-lg rounded-lg p-8 max-w-md w-full">
        <h1 className="text-2xl font-bold text-center mb-6 text-gray-800">Agregar Cuenta</h1>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-gray-700">Cliente ID:</label>
            <input
              type="number"
              value={clienteID}
              onChange={(e) => setClienteID(e.target.value)}
              className="w-full px-4 py-2 border rounded-lg"
              required
            />
          </div>
          <div>
            <label className="block text-gray-700">Tipo de Cuenta ID:</label>
            <input
              type="number"
              value={tipoCuentaID}
              onChange={(e) => setTipoCuentaID(e.target.value)}
              className="w-full px-4 py-2 border rounded-lg"
              required
            />
          </div>
          <div>
            <label className="block text-gray-700">Número de Cuenta:</label>
            <input
              type="text"
              value={numeroCuenta}
              onChange={(e) => setNumeroCuenta(e.target.value)}
              className="w-full px-4 py-2 border rounded-lg"
              required
            />
          </div>
          <button type="submit" className="w-full bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-2 px-4 rounded">
            Agregar Cuenta
          </button>
        </form>
        {mensaje && <p className="mt-4 text-center text-red-500">{mensaje}</p>}
      </div>
    </div>
  );
};

export default AgregarCuenta;
