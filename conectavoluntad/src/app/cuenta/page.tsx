"use client"
import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import Side from "../components/Sidebar";
import logo from "@/multimedia/perfil.png";
import Image from 'next/image';

interface UserData {
  fname: string;
  email: string;
  lname:String;
  mname:String;
}

const UserDetails: React.FC = () => {
  const [userData, setUserData] = useState<UserData | null>(null);

  useEffect(() => {
    // Obtener datos del usuario
    fetch("http://localhost:3000/userData", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        token: window.localStorage.getItem("token"),
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        setUserData(data.data);
      })
      .catch((error) => console.error("Error al obtener los datos del usuario:", error));
  }, []);

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
            {userData ? (
              <div className="text-left">
                <p className="text-sm font-bold text-gray-600">Nombre</p>
                <p className="text-lg font-semibold text-gray-400">{userData.fname}</p>

                <p className="text-sm font-bold text-gray-600 mt-3">Apellido</p>
                <p className="text-lg font-semibold text-gray-400">{`${userData.lname} ${userData.mname}`}</p>

                <p className="text-sm font-bold text-gray-600 mt-3">Correo</p>
                <p className="text-lg font-semibold text-gray-400">{userData.email}</p>
              </div>
            ) : (
              <p className="text-gray-500 text-center">Cargando datos del usuario...</p>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default UserDetails;
