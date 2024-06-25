import { useState } from 'react';
import axios from 'axios';

const EliminarCliente = () => {
  const [clienteID, setClienteID] = useState('');
  const [mensaje, setMensaje] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.delete(`http://localhost:3001/api/eliminar-cliente/${clienteID}`);
      setMensaje('Cliente eliminado exitosamente');
    } catch (error) {
      console.error('Error eliminando cliente', error);
      setMensaje('Error al eliminar el cliente');
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="bg-white shadow-lg rounded-lg p-8 max-w-md w-full">
        <h1 className="text-2xl font-bold text-center mb-6 text-gray-800">Eliminar Cliente</h1>
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
          <button type="submit" className="w-full bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded">
            Eliminar Cliente
          </button>
        </form>
        {mensaje && <p className="mt-4 text-center text-red-500">{mensaje}</p>}
      </div>
    </div>
  );
};

export default EliminarCliente;
