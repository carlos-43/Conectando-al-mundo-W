"use client"
import React, { useState } from "react";
import Header from "../components/Header";
import Image from 'next/image';
import Logo from '@/multimedia/logo.png';

const Login: React.FC = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:3000/login-user", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          email,
          password,
        }),
      });

      const data = await response.json();
      console.log(data, "userRegister");

      if (data.status === "ok") {
        alert("Login successful");
        window.localStorage.setItem("token", data.data);
        window.location.href = "/Organizations";
      } else {
        alert("Login failed");
      }
    } catch (error) {
      console.error("Error during login:", error);
    }
  };

  return (
    <>
    <Header />
    <div className="login-container">
        <form onSubmit={handleSubmit} className="login-form">
          <div className="flex justify-center mb-3">
            <Image
              src={Logo} // Reemplaza con el logo real
              alt="Logo"
              className="w-24"
            />
          </div>
          <h2 className="form-title">Conecta Voluntad</h2>
          <p className="form-link">Login</p>

        <div className="mb-4">
          <label className="block text-gray-700">Email</label>
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
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-200"
            placeholder="Ingresa Contraseña"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <div className="mb-4 flex items-center">
          <input
            type="checkbox"
            id="customCheck1"
            className="mr-2"
          />
          <label htmlFor="customCheck1" className="text-gray-700">
            Recuerdame
          </label>
        </div>

        <div className="mb-4">
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600"
          >
            Enviar
          </button>
        </div>

        <p className="text-right text-blue-500">
          <a href="/registration">Registrarse</a>
        </p>
      </form>
    </div>
    </>
  );
};

export default Login;
