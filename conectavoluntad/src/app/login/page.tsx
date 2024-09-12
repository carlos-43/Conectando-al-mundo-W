"use client"; // Indica que es un componente de cliente

import React, { useState } from "react";
import Link from 'next/link'; // Importa Link de Next.js para navegación
import Header from '../components/Header'; // Importa Header
import Image from 'next/image';
import Logo from '@/multimedia/logo.png';

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(email, password);

    fetch("http://localhost:3000/login-user", {
      method: "POST",
      crossDomain: true,
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify({
        email,
        password,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data, "userRegister");
        if (data.status === "ok") {
          alert("Login exitoso");
          window.localStorage.setItem("token", data.data);
          window.location.href = "./userDetails";
        }
      });
  };

  return (
    <>
      {/* Header */}
      <Header />

      {/* Formulario de Inicio de Sesión */}
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

          <div className="mb-3">
            <input
              type="email"
              className="form-input text-teal-500"
              placeholder="Ingresa email"
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div className="mb-3">
            <input
              type="password"
              className="form-input"
              placeholder="Ingresa Contraseña"
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <div className="custom-control custom-checkbox mb-3">
            <input
              type="checkbox"
              className="custom-control-input"
              id="customCheck1"
            />
            <label className="custom-control-label" htmlFor="customCheck1">
              Recuérdame
            </label>
          </div>

          <div className="d-grid">
            <button type="submit" className="form-button">Log In</button>
          </div>

          <div className="flex justify-between mt-4 text-sm">
            <Link href="#" className="text-teal-500 hover:underline">
              ¿Olvidaste tu contraseña?
            </Link>
            <Link href="/registration" className="text-teal-500 hover:underline">
              Registrarse
            </Link>
          </div>
        </form>
      </div>
    </>
  );
};

export default Login;
