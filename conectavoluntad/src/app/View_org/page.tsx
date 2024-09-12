// components/Organization.js
"use client"
import Header from "../components/Header";
import { FaPhoneAlt, FaEnvelope, FaFacebookF, FaInstagram, FaLinkedinIn, FaYoutube, FaTimes } from 'react-icons/fa';

export default function OrganizationView() {
  return (
    <>
      <Header />
    <div className="bg-gray-100 p-6 rounded-lg shadow-md">
      <div className="flex items-center">
        <div className="bg-gray-300 w-24 h-24 rounded-md flex justify-center items-center">
          {/* Placeholder para imagen o logo */}
          <span className="text-3xl font-bold">Logo</span>
        </div>
        <div className="ml-6">
        <p className="text-gray-400 mt-1">2020</p>
          <h2 className="text-gray-600 text-xl font-bold">Nombre organización</h2>
          <p className="text-gray-600">Descripción Organización</p>
          <p className="text-gray-400 mt-2">Lorem ipsum dolor sit amet...</p>
          <button className="bg-teal-600 text-white px-4 py-2 mt-4 rounded-full">Sitio web</button>
        </div>
      </div>
      <div className="flex space-x-4 mt-4">
        {/* Iconos sociales */}
        <FaPhoneAlt className="text-gray-600" />
        <FaEnvelope className="text-gray-600" />
        <FaFacebookF className="text-gray-600" />
        <FaInstagram className="text-gray-600" />
        <FaLinkedinIn className="text-gray-600" />
        <FaTimes className="text-gray-600" />
        <FaYoutube className="text-gray-600" />
      </div>
    </div>
    </>
  );
}
