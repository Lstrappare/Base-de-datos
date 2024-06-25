import { useState } from 'react';
import axios from 'axios';

const ModificarCuenta = () => {
  const [cuentaID, setCuentaID] = useState('');
  const [numeroCuenta, setNumeroCuenta] = useState('');
  const [saldo, setSaldo] = useState('');
  const [mensaje, setMensaje] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`http://localhost:3001/api/modificar-cuenta`, { cuentaID, numeroCuenta, saldo });
      setMensaje('Cuenta modificada exitosamente');
    } catch (error) {
      console.error('Error modificando cuenta', error);
      setMensaje('Error al modificar la cuenta');
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="bg-white shadow-lg rounded-lg p-8 max-w-md w-full">
        <h1 className="text-2xl font-bold text-center mb-6 text-gray-800">Modificar Cuenta</h1>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-gray-700">Cuenta ID:</label>
            <input
              type="number"
              value={cuentaID}
              onChange={(e) => setCuentaID(e.target.value)}
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
          <div>
            <label className="block text-gray-700">Saldo:</label>
            <input
              type="number"
              step="0.01"
              value={saldo}
              onChange={(e) => setSaldo(e.target.value)}
              className="w-full px-4 py-2 border rounded-lg"
              required
            />
          </div>
          <button type="submit" className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
            Modificar Cuenta
          </button>
        </form>
        {mensaje && <p className="mt-4 text-center text-red-500">{mensaje}</p>}
      </div>
    </div>
  );
};

export default ModificarCuenta;

