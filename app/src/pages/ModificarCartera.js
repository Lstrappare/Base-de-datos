import { useState } from 'react';
import axios from 'axios';

const ModificarCartera = () => {
  const [carteraID, setCarteraID] = useState('');
  const [nombre, setNombre] = useState('');
  const [mensaje, setMensaje] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`http://localhost:3001/api/modificar-cartera`, { carteraID, nombre });
      setMensaje('Cartera modificada exitosamente');
    } catch (error) {
      console.error('Error modificando cartera', error);
      setMensaje('Error al modificar la cartera');
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="bg-white shadow-lg rounded-lg p-8 max-w-md w-full">
        <h1 className="text-2xl font-bold text-center mb-6 text-gray-800">Modificar Cartera</h1>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-gray-700">Cartera ID:</label>
            <input
              type="number"
              value={carteraID}
              onChange={(e) => setCarteraID(e.target.value)}
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
          <button type="submit" className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
            Modificar Cartera
          </button>
        </form>
        {mensaje && <p className="mt-4 text-center text-red-500">{mensaje}</p>}
      </div>
    </div>
  );
};

export default ModificarCartera;
