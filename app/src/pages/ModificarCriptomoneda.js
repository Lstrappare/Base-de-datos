import { useState } from 'react';
import axios from 'axios';

const ModificarCriptomoneda = () => {
  const [criptomonedaID, setCriptomonedaID] = useState('');
  const [nombre, setNombre] = useState('');
  const [simbolo, setSimbolo] = useState('');
  const [descripcion, setDescripcion] = useState('');
  const [mensaje, setMensaje] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`http://localhost:3001/api/modificar-criptomoneda`, { criptomonedaID, nombre, simbolo, descripcion });
      setMensaje('Criptomoneda modificada exitosamente');
    } catch (error) {
      console.error('Error modificando criptomoneda', error);
      setMensaje('Error al modificar la criptomoneda');
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="bg-white shadow-lg rounded-lg p-8 max-w-md w-full">
        <h1 className="text-2xl font-bold text-center mb-6 text-gray-800">Modificar Criptomoneda</h1>
        <form onSubmit={handleSubmit} className="space-y-4">
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
            <label className="block text-gray-700">Nombre:</label>
            <input
              type="text"
              value={nombre}
              onChange={(e) => setNombre(e.target.value)}
              className="w-full px-4 py-2 border rounded-lg"
              required
            />
          </div>
          <div>
            <label className="block text-gray-700">Símbolo:</label>
            <input
              type="text"
              value={simbolo}
              onChange={(e) => setSimbolo(e.target.value)}
              className="w-full px-4 py-2 border rounded-lg"
              required
            />
          </div>
          <div>
            <label className="block text-gray-700">Descripción:</label>
            <textarea
              value={descripcion}
              onChange={(e) => setDescripcion(e.target.value)}
              className="w-full px-4 py-2 border rounded-lg"
              required
            />
          </div>
          <button type="submit" className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
            Modificar Criptomoneda
          </button>
        </form>
        {mensaje && <p className="mt-4 text-center text-red-500">{mensaje}</p>}
      </div>
    </div>
  );
};

export default ModificarCriptomoneda;

