"use client"
import React, { useState } from "react";
import Header from "../components/Header";
import Image from 'next/image';
import Logo from '@/multimedia/logo.png';
import Link from 'next/link';

const SignUp: React.FC = () => {
  const [fname, setFname] = useState<string>("");
  const [lname, setLname] = useState<string>("");
  const [mname, setMname] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    console.log(fname, lname, mname, email, password);

    try {
      const response = await fetch("http://localhost:3000/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          fname,
          lname,
          mname,
          email,
          password,
        }),
      });

      const data = await response.json();
      console.log(data, "userRegister");

      if (data.status === "ok") {
        alert("Registro exitoso");
        window.location.href = "/login";
      } else {
        alert("Error en el registro");
      }
    } catch (error) {
      console.error("Error during registration:", error);
    }
  };

  return (
    <>
    <Header />
      <div className="login-container">
        <form onSubmit={handleSubmit} className="login-form">
          <div className="flex justify-center mb-3">
            <Image
              src={Logo}
              alt="Logo"
              className="w-24"
            />
          </div>
          <h2 className="form-title">Conecta Voluntad</h2>
          <text className="form-link">Registro</text>

        <div className="mb-4">
          <label className="block text-gray-700">Nombre</label>
          <input
            type="text"
            className="text-gray-700 w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-200"
            placeholder="Nombre"
            value={fname}
            onChange={(e) => setFname(e.target.value)}
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700">Apellido Paterno</label>
          <input
            type="text"
            className="text-gray-700 w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-200"
            placeholder="Apellido Paterno"
            value={lname}
            onChange={(e) => setLname(e.target.value)}
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700">Apellido Materno</label>
          <input
            type="text"
            className="text-gray-700 w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-200"
            placeholder="Apellido Materno"
            value={mname}
            onChange={(e) => setMname(e.target.value)}
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700">Correo</label>
          <input
            type="email"
            className="text-gray-700 w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-200"
            placeholder="Ingresa email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700">Contraseña</label>
          <input
            type="password"
            className="text-gray-700 w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-200"
            placeholder="Ingresa Contraseña"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <div className="mb-4">
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600"
          >
            Registrarse
          </button>
        </div>

        <div className="flex justify-between mt-4 text-sm">
            <p>¿Ya tienes una cuenta?</p>
            <Link href="/login" className="text-teal-500 hover:underline">
              Iniciar sesión
            </Link>
          </div>
      </form>
    </div>
    </>
  );
};

export default SignUp;
