import  { useState } from "react";
import logo from "../assets/logo.png"; // Asegúrate que la ruta sea correcta

function Encabezado() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <>
      {/* Barra Superior (Logo y acciones de usuario en desktop) */}
      <div className="bg-blue-900 text-white shadow-lg">
        <header className="container mx-auto flex justify-between items-center px-4 sm:px-6 py-3">
          {/* Logo */}
          <a href="/" aria-label="Página de inicio">
            
          </a>

          {/* Acciones de Usuario (Desktop) */}
          <div className="hidden sm:flex items-center space-x-4">
            <a
              href="/login"
              className="text-sm font-medium hover:text-green-400 transition-colors"
            >
              Iniciar Sesión
            </a>
            <a
              href="/register"
              className="bg-green-500 hover:bg-green-600 text-white text-sm font-semibold px-4 py-2 rounded-md transition-colors"
            >
              Registrarse
            </a>
          </div>

          {/* Botón de Menú para móviles */}
          <div className="sm:hidden">
            <button
              onClick={toggleMobileMenu}
              aria-label={isMobileMenuOpen ? "Cerrar menú" : "Abrir menú"}
              aria-expanded={isMobileMenuOpen}
              className="text-white focus:outline-none hover:text-green-400 p-2" // Añadido padding para mejor área de toque
            >
              {isMobileMenuOpen ? (
                // Icono "X" cuando el menú está abierto
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  ></path>
                </svg>
              ) : (
                // Icono Hamburguesa cuando el menú está cerrado
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16m-7 6h7"
                  ></path>
                </svg>
              )}
            </button>
          </div>
        </header>
      </div>

      {/* Barra de Navegación Principal (Desktop) y Menú Móvil */}
      {/* Para Desktop: se muestra siempre. Para Móvil: se controla con isMobileMenuOpen */}
      <nav
        className={`bg-white shadow-md sm:sticky sm:top-0 sm:z-40 ${
          isMobileMenuOpen ? "block" : "hidden"
        } sm:block`}
      >
        
        <div className="container mx-auto flex flex-col sm:flex-row sm:justify-center items-center sm:gap-x-8 py-3 px-4 sm:px-6 text-blue-900 font-semibold">
          <img className="h-20" src={logo} alt="" />
          <a
            href="/"
            className="py-2 px-3 block w-full sm:w-auto text-center sm:text-left hover:text-green-500 hover:bg-blue-50 rounded-md transition-all duration-200 ease-in-out"
            onClick={() => isMobileMenuOpen && toggleMobileMenu()} // Cierra el menú al hacer clic en un enlace (opcional)
          >
            Inicio
          </a>
          <a
            href="/cursos"
            className="py-2 px-3 block w-full sm:w-auto text-center sm:text-left hover:text-green-500 hover:bg-blue-50 rounded-md transition-all duration-200 ease-in-out"
            onClick={() => isMobileMenuOpen && toggleMobileMenu()}
          >
            Cursos
          </a>
          <a
            href="/categorias"
            className="py-2 px-3 block w-full sm:w-auto text-center sm:text-left hover:text-green-500 hover:bg-blue-50 rounded-md transition-all duration-200 ease-in-out"
            onClick={() => isMobileMenuOpen && toggleMobileMenu()}
          >
            Categorías
          </a>
          <a
            href="/soporte"
            className="py-2 px-3 block w-full sm:w-auto text-center sm:text-left hover:text-green-500 hover:bg-blue-50 rounded-md transition-all duration-200 ease-in-out"
            onClick={() => isMobileMenuOpen && toggleMobileMenu()}
          >
            Soporte
          </a>

          {/* Barra de Búsqueda (Desktop) */}
          <div className="mt-3 sm:mt-0 sm:ml-auto hidden sm:block">
            <input
              type="search"
              placeholder="Buscar cursos..."
              className="px-3 py-2 border border-gray-300 rounded-md text-sm focus:ring-blue-500 focus:border-blue-500 transition-colors"
            />
          </div>

          {/* Acciones de Usuario y Búsqueda (Móvil) - Dentro del menú desplegable */}
          <div className="sm:hidden flex flex-col items-center mt-4 space-y-3 w-full border-t border-gray-200 pt-4">
            <input
              type="search"
              placeholder="Buscar cursos..."
              className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm focus:ring-blue-500 focus:border-blue-500 transition-colors"
            />
            <a
              href="/login"
              className="w-full text-center py-2 px-3 block hover:text-green-500 hover:bg-blue-50 rounded-md transition-all duration-200 ease-in-out"
              onClick={() => isMobileMenuOpen && toggleMobileMenu()}
            >
              Iniciar Sesión
            </a>
            <a
              href="/register"
              className="w-full text-center bg-green-500 hover:bg-green-600 text-white font-semibold px-4 py-2 rounded-md transition-colors"
              onClick={() => isMobileMenuOpen && toggleMobileMenu()}
            >
              Registrarse
            </a>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Encabezado;
