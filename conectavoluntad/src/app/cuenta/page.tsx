"use client"
import Image from 'next/image';
import Header from "../components/Header";
import Side from "../components/Sidebar";
import logo from "@/multimedia/perfil.png";

export default function Home() {
  return (
    <>
      <Header />
      <Side />
    <div className="min-h-screen flex items-center justify-center bg-black">
      <div className="bg-white rounded-lg shadow-lg p-6 max-w-md w-full">

        {/* Sección del perfil del usuario */}
        <div className="text-center mt-6">
          <div className="mb-4 flex justify-center">
            <Image 
              src={logo} 
              alt="Usuario" 
              width={50} 
              height={50} 
            />
          </div>
          <div>
            <h2 className="text-xl font-semibold text-teal-600 mt-2">USUARIO</h2>
            </div>

          {/* Información del usuario */}
          <div className="text-left">
            <p className="text-sm font-bold text-gray-600">Nombre</p>
            <p className="text-lg font-semibold text-gray-400">Sergio Ricardo</p>

            <p className="text-sm font-bold text-gray-600 mt-3">Apellido</p>
            <p className="text-lg font-semibold text-gray-400">Tellez Loaiza</p>

            <p className="text-sm font-bold text-gray-600 mt-3">Correo</p>
            <p className="text-lg font-semibold text-gray-400">rikytellez04@gmail.com</p>

            <p className="text-sm font-bold text-gray-600 mt-3">Organizaciones</p>
            <p className="text-lg font-semibold text-gray-400">• Sure_Chamba</p>
          </div>
        </div>
      </div>
    </div>
    </>
  );
}
