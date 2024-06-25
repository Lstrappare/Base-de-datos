import { useState } from 'react';
import axios from 'axios';

const AgregarHistorialPrecio = () => {
  const [criptomonedaID, setCriptomonedaID] = useState('');
  const [fecha, setFecha] = useState('');
  const [precio, setPrecio] = useState('');
  const [mensaje, setMensaje] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:3001/api/agregar-historial-precio', {
        criptomonedaID,
        fecha,
        precio,
      });
      setMensaje('Historial de precio agregado exitosamente');
    } catch (error) {
      console.error('Error agregando historial de precio', error);
      setMensaje('Error al agregar el historial de precio');
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="bg-white shadow-lg rounded-lg p-8 max-w-md w-full">
        <h1 className="text-2xl font-bold text-center mb-6 text-gray-800">Agregar Historial de Precio</h1>
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
            <label className="block text-gray-700">Fecha:</label>
            <input
              type="date"
              value={fecha}
              onChange={(e) => setFecha(e.target.value)}
              className="w-full px-4 py-2 border rounded-lg"
              required
            />
          </div>
          <div>
            <label className="block text-gray-700">Precio:</label>
            <input
              type="number"
              step="0.00000001"
              value={precio}
              onChange={(e) => setPrecio(e.target.value)}
              className="w-full px-4 py-2 border rounded-lg"
              required
            />
          </div>
          <button type="submit" className="w-full bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-2 px-4 rounded">
            Agregar Historial de Precio
          </button>
        </form>
        {mensaje && <p className="mt-4 text-center text-red-500">{mensaje}</p>}
      </div>
    </div>
  );
};

export default AgregarHistorialPrecio;
