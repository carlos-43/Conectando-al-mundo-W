"use client"; // Add this to indicate the component is a Client Component

import Link from 'next/link'; // Import Link from Next.js for navigation
import Header from '../components/Header'; // Import Header
import Image from 'next/image';
import { useState, useEffect } from 'react';
import Logo from '@/multimedia/logo.png'


export default function Registration() {
  const [formData, setFormData] = useState({
    nombre: '',
    apellidoPaterno: '',
    apellidoMaterno: '',
    email: '',
    password: '',
    termsAccepted: false,
  });

  // Handle input changes
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  // Handle checkbox change for terms
  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData((prevState) => ({
      ...prevState,
      termsAccepted: e.target.checked,
    }));
  };

  // Handle form submission
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(formData);
    // Perform the registration logic here (e.g., send data to API)
  };

  return (
    <>
      {/* Header */}
      <Header />

      {/* Registration Form */}
      <div className="login-container">
        <form onSubmit={handleSubmit} className="login-form">
          <div className="flex justify-center mb-3">
            <Image
              src={Logo} // Ensure the logo is in the public folder
              alt="Logo"
              className="w-24"
            />
          </div>
          <h2 className="form-title">ConectaVoluntad</h2>
          <text className="form-link">Registro</text>

          <div className="input-group">
            <input
              type="text"
              name="nombre"
              value={formData.nombre}
              onChange={handleInputChange}
              placeholder="Nombre"
              className="form-input"
              required
            />
            <input
              type="text"
              name="apellidoPaterno"
              value={formData.apellidoPaterno}
              onChange={handleInputChange}
              placeholder="Apellido Paterno"
              className="form-input"
              required
            />
          </div>

          <input
            type="text"
            name="apellidoMaterno"
            value={formData.apellidoMaterno}
            onChange={handleInputChange}
            placeholder="Apellido Materno"
            className="form-input"
            required
          />

          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            placeholder="Email"
            className="form-input"
            required
          />

          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleInputChange}
            placeholder="Password"
            className="form-input"
            required
          />

          <div className="terms-container">
            <input
              type="checkbox"
              name="termsAccepted"
              checked={formData.termsAccepted}
              onChange={handleCheckboxChange}
              required
            />
            <label>Acepto Terminos y Condiciones</label>
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
}