import { useState } from 'react';
import axios from 'axios';

const EliminarCartera = () => {
  const [carteraID, setCarteraID] = useState('');
  const [mensaje, setMensaje] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.delete(`http://localhost:3001/api/eliminar-cliente/${carteraID}`);
      setMensaje('Cartera eliminada exitosamente');
    } catch (error) {
      console.error('Error eliminando cartera', error);
      setMensaje('Error al eliminar la cartera');
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="bg-white shadow-lg rounded-lg p-8 max-w-md w-full">
        <h1 className="text-2xl font-bold text-center mb-6 text-gray-800">Eliminar Cartera</h1>
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
          <button type="submit" className="w-full bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded">
            Eliminar Cartera
          </button>
        </form>
        {mensaje && <p className="mt-4 text-center text-red-500">{mensaje}</p>}
      </div>
    </div>
  );
};

export default EliminarCartera;
