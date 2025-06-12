// src/components/Header.jsx
import React from "react";

const Hero = () => {
  return (
    <>
      {/* Logos CHM */}
      {/*<div className="w-full flex justify-between items-center bg-white">

      </div>

      {/* Encabezado principal */}
      <header className="bg-blue-900 text-white shadow-md" id="main-header">
        <div className="container mx-auto px-4 py-3 flex justify-between items-center">
          {/* Logo y título */}
          <h1 className="flex items-center gap-2 text-lg font-semibold">
            <a href="#" className="flex items-center gap-2">
              <img src="/logo75.png" alt="Logo MARC PALAS" className="h-15" loading="lazy" />
              Work Management PALAS CHM Cerrejón
            </a>
          </h1>
        <img src="/logochm.png" alt="Logo CHM" className="fixed left-2 top-2 h-20 object-contain" loading="lazy" />
        <img src="/banderachm.png" alt="Bandera CHM" className="fixed right-2 top-2 h-20 object-contain" loading="lazy" />
         
          {/* Menú hamburguesa */}
          <button
            className="text-2xl md:hidden"
            id="menu-toggle"
            aria-label="Abrir menú"
          >
            &#9776;
          </button>

        
          {/* Navegación */}
          <nav className="hidden md:flex space-x-6" id="nav">
            <ul className="flex space-x-4" id="menu">
              <li><a href="#indicadores" className="hover:text-yellow-400 hover:underline decoration-sky-500">Indicadores</a></li>
              <li><a href="#nosotros" className="hover:text-yellow-400 hover:underline decoration-sky-500">Nosotros</a></li>
              <li><a href="#status" className="hover:text-yellow-400 hover:underline decoration-sky-500">Estatus</a></li>
              <li><a href="#programacion" className="hover:text-yellow-400 hover:underline decoration-sky-500">Programación</a></li>
              <li><a href="#re" className="hover:text-yellow-400 hover:underline decoration-sky-500">RE</a></li>
              <li><a href="#backlog" className="hover:text-yellow-400 hover:underline decoration-sky-500">BACKLOG</a></li>
              <li><a href="#inspecciones" className="hover:text-yellow-400 hover:underline decoration-sky-500">Inspecciones</a></li>
            </ul>
          </nav>
        </div>
      </header>
    </>
  );
};

export default Hero;
