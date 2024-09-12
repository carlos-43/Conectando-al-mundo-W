"use client"; // Add this to indicate the component is a Client Component

import Link from 'next/link'; // Import Link from Next.js for navigation
import Header from '../components/Header'; // Import Header
import Image from 'next/image';
import { useState, useEffect } from 'react';


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
        <img
            src="/multimedia/logos.png" // The image path in the public folder
            alt="Logo"
          />
          <h2 className="form-title">Conecta Voluntad</h2>
          <text className="form-link">Login</text>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
            className="form-input"
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

          <button type="submit" className="form-button">Sign In</button>

          <p className="login-text">Olvide mi contraseña</p>

          <p className="login-text">
            No tienes cuenta?{" "}
            <Link href="/registration" className="form-link">
              Registrarme
            </Link>
          </p>
        </form>
      </div>
    </>
  );
}

