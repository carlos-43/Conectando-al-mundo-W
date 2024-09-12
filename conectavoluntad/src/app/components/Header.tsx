"use client"
import Link from 'next/link';
import Image from 'next/image';
import Logo from '@/multimedia/logo.png';
import profile from '@/multimedia/perfil.png';
import { useState } from 'react';

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="bg-[#46B6A5] text-white p-4">
      <div className="container mx-auto flex items-center justify-between">
        {/* Logo y título */}
        <Link href="/">
          <div className="flex items-center space-x-4">
            <Image
              src={Logo}
              alt="Logo"
              className="h-12 w-12 sm:h-16 sm:w-16" // Ajuste para diferentes tamaños de pantalla
            />
            <h1 className="text-lg font-bold sm:text-xl">ConectaVoluntad</h1>
          </div>
        </Link>

        {/* Menú y perfil */}
        <div className="hidden md:flex items-center space-x-4">
          <Link href="/login">
            <Image
              src={profile}
              alt="Perfil"
              className="h-8 w-8 sm:h-10 sm:w-10 rounded-full"
            />
          </Link>
        </div>

        {/* Botón del menú hamburguesa para pantallas pequeñas */}
        <button
          className="text-white md:hidden"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <svg
            className="w-8 h-8"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16m-7 6h7"
            />
          </svg>
        </button>
      </div>

      {/* Menú desplegable para pantallas pequeñas */}
      {menuOpen && (
        <div className="md:hidden mt-4">
          <ul className="flex flex-col items-center space-y-2">
            <li>
              <Link href="/" className="block text-white">Inicio</Link>
            </li>
            <li>
              <Link href="/login" className="block text-white">Mi Cuenta</Link>
            </li>
            {/* Puedes agregar más enlaces según sea necesario */}
          </ul>
        </div>
      )}
    </header>
  );
}
