"use client";
import React, { useEffect, useState } from "react";
import Link from 'next/link';
import { FaPhoneAlt, FaEnvelope, FaFacebookF, FaInstagram, FaLinkedinIn, FaYoutube, FaTimes } from 'react-icons/fa';

interface Organization {
  _id: string;
  name: string;
  description: string;
  location: string;
  date: string;
  Tel: string;
  email: string;
  Web: string;
  face: string;
  xtwitter: string;
}

export default function Organizations() {
  const [organizations, setOrganizations] = useState<Organization[]>([]);
  const [searchTerm, setSearchTerm] = useState<string>("");

  useEffect(() => {
    // Obtener lista de organizaciones de una API
    fetch("http://localhost:3000/organizaciones", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setOrganizations(data.organizations);
      })
      .catch((error) => console.error("Error al obtener organizaciones:", error));
  }, []);

  const filteredOrganizations = organizations.filter((org) =>
    org.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <section className="bg-gray-100 p-8">
      <div className="flex justify-between items-center mb-4">
        <Link href="/login">
          <button className="bg-[#46B6A5] text-white px-4 py-2 rounded-lg">
            + New Organization
          </button>
        </Link>
        <input
          type="text"
          placeholder="Buscar Organización"
          className="p-2 border rounded-lg w-1/3"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredOrganizations.length > 0 ? (
          filteredOrganizations.map((org) => (
            <div key={org._id} className="bg-white p-4 rounded-lg shadow-lg">
              <div className="h-24 bg-gray-200 rounded mb-4"></div>
              <p className="text-gray-400">{org.date}</p>
              <Link href={org.Web}>
                <h3 className="text-xl font-bold text-gray-600">{org.name}</h3>
              </Link>
              <p className="text-gray-500">{org.description}</p>
              <p className="text-gray-400">{org.location}</p>
              <div className="flex items-center space-x-4">
              <FaPhoneAlt className="text-gray-600" />
              <p className="text-gray-400">{org.Tel}</p>
              </div>
              <div className="flex items-center space-x-4 mt-4">
                {/* Iconos sociales */}
                <Link href={`mailto:${org.email}`}>
                <FaEnvelope className="text-gray-600" />
                </Link>
                <Link href={org.face}>
                <FaFacebookF className="text-gray-600" />
                </Link>
                <Link href={org.xtwitter}>
                <FaTimes className="text-gray-600" />
                </Link>
              </div>
            </div>
          ))
        ) : (
          <p className="text-gray-500">Cargando organizaciones...</p>
        )}
      </div>
    </section>
  );
}
