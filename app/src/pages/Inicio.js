import { Link } from "react-router-dom";

export const Inicio = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="bg-white shadow-lg rounded-lg p-8 max-w-md w-full">
        <h1 className="text-2xl font-bold text-center mb-6 text-gray-800">Gestión de Clientes y Cuentas</h1>

        <div className="space-y-4">
          {/* Clientes */}
          <section>
            <h2 className="text-xl font-semibold text-gray-700 mb-2">Clientes</h2>
            <Link to="/agregar-cliente" className="block bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-2 px-4 rounded mb-2">
              Agregar Cliente
            </Link>
            <Link to="/modificar-cliente" className="block bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-2 px-4 rounded mb-2">
              Modificar Cliente
            </Link>
            <Link to="/eliminar-cliente" className="block bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-2 px-4 rounded">
              Eliminar Cliente
            </Link>
          </section>

          {/* Cuentas */}
          <section>
            <h2 className="text-xl font-semibold text-gray-700 mb-2">Cuentas</h2>
            <Link to="/agregar-cuenta" className="block bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-2 px-4 rounded mb-2">
              Agregar Cuenta
            </Link>
            <Link to="/modificar-cuenta" className="block bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-2 px-4 rounded mb-2">
              Modificar Cuenta
            </Link>
            <Link to="/eliminar-cuenta" className="block bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-2 px-4 rounded">
              Eliminar Cuenta
            </Link>
          </section>

          {/* Criptomonedas */}
          <section>
            <h2 className="text-xl font-semibold text-gray-700 mb-2">Criptomonedas</h2>
            <Link to="/agregar-criptomoneda" className="block bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-2 px-4 rounded mb-2">
              Agregar Criptomoneda
            </Link>
            <Link to="/modificar-criptomoneda" className="block bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-2 px-4 rounded mb-2">
              Modificar Criptomoneda
            </Link>
            <Link to="/eliminar-criptomoneda" className="block bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-2 px-4 rounded">
              Eliminar Criptomoneda
            </Link>
          </section>

          {/* Transacciones */}
          <section>
            <h2 className="text-xl font-semibold text-gray-700 mb-2">Transacciones</h2>
            <Link to="/agregar-transaccion" className="block bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-2 px-4 rounded">
              Agregar Transacción
            </Link>
          </section>

          {/* Carteras */}
          <section>
            <h2 className="text-xl font-semibold text-gray-700 mb-2">Carteras</h2>
            <Link to="/agregar-cartera" className="block bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-2 px-4 rounded mb-2">
              Agregar Cartera
            </Link>
            <Link to="/modificar-cartera" className="block bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-2 px-4 rounded mb-2">
              Modificar Cartera
            </Link>
            <Link to="/eliminar-cartera" className="block bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-2 px-4 rounded">
              Eliminar Cartera
            </Link>
          </section>

          {/* Saldos Carteras */}
          <section>
            <h2 className="text-xl font-semibold text-gray-700 mb-2">Saldos Carteras</h2>
            <Link to="/agregar-saldo-cartera" className="block bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-2 px-4 rounded mb-2">
              Agregar Saldo a Cartera
            </Link>
            <Link to="/modificar-saldo-cartera" className="block bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-2 px-4 rounded mb-2">
              Modificar Saldo de Cartera
            </Link>
            <Link to="/eliminar-saldo-cartera" className="block bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-2 px-4 rounded">
              Eliminar Saldo de Cartera
            </Link>
          </section>

          {/* Historial Precios */}
          <section>
            <h2 className="text-xl font-semibold text-gray-700 mb-2">Historial Precios</h2>
            <Link to="/agregar-historial-precio" className="block bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-2 px-4 rounded">
              Agregar Historial Precio
            </Link>
          </section>
        </div>
      </div>
    </div>
  );
};
