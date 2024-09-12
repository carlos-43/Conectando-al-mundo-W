"use client"; // Add this to indicate the component is a Client Component

import Link from 'next/link'; // Import Link from Next.js for navigation
import Header from '../components/Header'; // Import Header
import Image from 'next/image';
import { useState, useEffect } from 'react';
import Logo from '@/multimedia/logo.png'


export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log({ email, password });
    // Perform your login logic here, e.g., sending data to the API
  };

  return (
    <>
      {/* Header */}
      <Header />

      {/* Login Form */}
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
          <text className="form-link">Login</text>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
            className="form-input text-teal-500"
            required
          />

          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
            className="form-input"
            required
          />

          <button type="submit" className="form-button">Log In</button>
          <div className="flex justify-between mt-4 text-sm">
          <a href="#" className="text-teal-500 hover:underline">
            ¿Olvidaste tu contraseña?
          </a>
            <Link href="/registration" className="text-teal-500 hover:underline">
              Registrarse
            </Link>
            </div>
        </form>
      </div>
    </>
  );
}

