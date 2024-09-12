"use client";

import React, { useState } from "react";
import Link from 'next/link';
import Header from '../components/Header';
import Image from 'next/image';
import Logo from '@/multimedia/logo.png';

const SignUp = () => {
  const [formData, setFormData] = useState({
    fname: "",
    lname: "",
    mname: "",
    email: "",
    password: "",
    termsAccepted: false,
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    const { fname, lname, mname, email, password, termsAccepted } = formData;
    if (!termsAccepted) {
      alert("Por favor acepta los términos y condiciones.");
      return;
    }

    console.log(fname, lname, mname, email, password);
    fetch("http://localhost:3000/register", {
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
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data, "userRegister");
      });
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === "checkbox" ? checked : value,
    }));
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

          <div className="input-group">
            <input
              type="text"
              name="fname"
              value={formData.fname}
              onChange={handleChange}
              placeholder="Nombre"
              className="form-input"
              required
            />
            <input
              type="text"
              name="lname"
              value={formData.lname}
              onChange={handleChange}
              placeholder="Apellido Paterno"
              className="form-input"
              required
            />
          </div>

          <input
            type="text"
            name="mname"
            value={formData.mname}
            onChange={handleChange}
            placeholder="Apellido Materno"
            className="form-input"
            required
          />

          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Correo Electrónico"
            className="form-input"
            required
          />

          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            placeholder="Contraseña"
            className="form-input"
            required
          />

          <div className="terms-container">
            <input
              type="checkbox"
              name="termsAccepted"
              checked={formData.termsAccepted}
              onChange={handleChange}
              required
            />
            <label className="ml-2">Acepto Términos y Condiciones</label>
          </div>

          <button type="submit" className="form-button">Registrarse</button>

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
