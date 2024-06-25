import { useState } from 'react';
import axios from 'axios';

const AgregarTransaccion = () => {
  const [cuentaID, setCuentaID] = useState('');
  const [tipoTransaccionID, setTipoTransaccionID] = useState('');
  const [criptomonedaID, setCriptomonedaID] = useState('');
  const [monto, setMonto] = useState('');
  const [mensaje, setMensaje] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:3001/api/agregar-transaccion', {
        cuentaID,
        tipoTransaccionID,
        criptomonedaID,
        monto,
      });
      setMensaje('Transacción agregada exitosamente');
    } catch (error) {
      console.error('Error agregando transacción', error);
      setMensaje('Error al agregar la transacción');
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="bg-white shadow-lg rounded-lg p-8 max-w-md w-full">
        <h1 className="text-2xl font-bold text-center mb-6 text-gray-800">Agregar Transacción</h1>
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
            <label className="block text-gray-700">Tipo de Transacción ID:</label>
            <input
              type="number"
              value={tipoTransaccionID}
              onChange={(e) => setTipoTransaccionID(e.target.value)}
              className="w-full px-4 py-2 border rounded-lg"
              required
            />
          </div>
          <div>
            <label className="block text-gray-700">Criptomoneda ID:</label>
            <input
              type="number"
              value={criptomonedaID}
              onChange={(e) => setCriptomonedaID(e.target.value)}
              className="w-full px-4 py-2 border rounded-lg"
              required
            />
          </div>
          <div>
            <label className="block text-gray-700">Monto:</label>
            <input
              type="number"
              step="0.00000001"
              value={monto}
              onChange={(e) => setMonto(e.target.value)}
              className="w-full px-4 py-2 border rounded-lg"
              required
            />
          </div>
          <button type="submit" className="w-full bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-2 px-4 rounded">
            Agregar Transacción
          </button>
        </form>
        {mensaje && <p className="mt-4 text-center text-red-500">{mensaje}</p>}
      </div>
    </div>
  );
};

export default AgregarTransaccion;
