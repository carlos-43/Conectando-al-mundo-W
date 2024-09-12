"use client";
import { useState, ChangeEvent, FormEvent } from "react";
import Header from "../components/Header";
import Side from "../components/Sidebar";

export default function Page() {
  const [formData, setFormData] = useState({
    organizationName: "",
    descripcion: "",
    phone: "",
    email: "",
    website: "",
    volunteers: "",
    employees: "",
    income: "",
    yearFounded: "",
    facebook: "",
    instagram: "",
    twitter: "",
    youtube: "",
    tiktok: "",
    linkedin: "",
    image: null,
  });

  const [imagePreview, setImagePreview] = useState<string | null>(null); // Para la vista previa de la imagen

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value, files } = e.target as HTMLInputElement;
    
    if (name === 'image' && files && files.length > 0) {
      const file = files[0];
      setFormData({ ...formData, [name]: file });
      setImagePreview(URL.createObjectURL(file)); // Genera la vista previa de la imagen
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <>
      <Header />
      <Side />
      <div className="bg-black text-white min-h-screen w-full flex justify-center items-start p-4 sm:p-8">
        <form
          onSubmit={handleSubmit}
          className="bg-gray-900 p-4 sm:p-8 rounded-lg w-full max-w-4xl"
        >
          <h1 className="text-2xl sm:text-3xl font-bold mb-6">Información general</h1>

          {/* Nombre de la organización */}
          <div className="mb-4 grid grid-cols-1 sm:grid-cols-2 gap-4">
            <label className="block mb-2">Nombre de la organización *</label>
            <input
              type="text"
              name="organizationName"
              value={formData.organizationName}
              onChange={handleChange}
              className="p-2 bg-gray-800 rounded w-full"
            />
          </div>

          {/* Año de fundacion */}
          <div className="mb-4 grid grid-cols-1 sm:grid-cols-2 gap-4">
            <label className="block mb-2">Año de fundacion *</label>
            <input
              type="text"
              name="yearFounded"
              value={formData.yearFounded}
              onChange={handleChange}
              className="p-2 bg-gray-800 rounded w-full"
            />
          </div>

          {/* Descripción de la organización */}
          <div className="mb-4">
            <label className="block mb-2 text-gray-300">
              Descripción de la organización
            </label>
            <textarea
              name="descripcion"
              value={formData.descripcion}
              onChange={handleChange}
              className="w-full p-3 bg-gray-700 rounded text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
              rows={4}
              placeholder="Escribe una descripción detallada aquí..."
            ></textarea>
          </div>

          {/* Imagen PNG */}
          <div className="mb-4">
            <label className="block mb-2 text-gray-300">Subir imagen (solo PNG)</label>
            <input
              type="file"
              name="image"
              accept="image/png"
              onChange={handleChange}
              className="w-full p-2 bg-gray-800 rounded text-white"
            />
          </div>

          {/* Vista previa de la imagen cargada */}
          {imagePreview && (
            <div className="mb-4">
              <label className="block mb-2 text-gray-300">Vista previa de la imagen</label>
              <img src={imagePreview} alt="Vista previa de la imagen" className="w-32 h-32 object-cover rounded" />
            </div>
          )}

          {/* Teléfono de contacto */}
          <div className="mb-4 grid grid-cols-1 sm:grid-cols-2 gap-4">
            <label className="block mb-2">Teléfono de contacto</label>
            <input
              type="text"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="p-2 bg-gray-800 rounded w-full"
            />
          </div>

          {/* Correo electrónico */}
          <div className="mb-4 grid grid-cols-1 sm:grid-cols-2 gap-4">
            <label className="block mb-2">Correo electrónico de contacto</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="p-2 bg-gray-800 rounded w-full"
            />
          </div>

          {/* Página web */}
          <div className="mb-4 grid grid-cols-1 sm:grid-cols-2 gap-4">
            <label className="block mb-2">Página web</label>
            <input
              type="text"
              name="website"
              value={formData.website}
              onChange={handleChange}
              className="p-2 bg-gray-800 rounded w-full"
            />
          </div>

          {/* Voluntarios */}
          <div className="mb-4">
            <label className="block mb-2">
              ¿Cuántos voluntarios tiene tu organización?
            </label>
            <select
              name="volunteers"
              value={formData.volunteers}
              onChange={handleChange}
              className="w-full p-2 bg-gray-800 rounded"
            >
              <option>1 a 10</option>
              <option>11 a 25</option>
              <option>26 a 50</option>
              <option>51 a 100</option>
              <option>100+</option>
            </select>
          </div>

          {/* Redes sociales */}
          <h2 className="text-xl font-bold mb-4">Redes sociales</h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {/* Facebook */}
            <div className="mb-4">
              <label className="block mb-2">Facebook</label>
              <input
                type="text"
                name="facebook"
                value={formData.facebook}
                onChange={handleChange}
                className="w-full p-2 bg-gray-800 rounded"
              />
            </div>

            {/* Instagram */}
            <div className="mb-4">
              <label className="block mb-2">Instagram</label>
              <input
                type="text"
                name="instagram"
                value={formData.instagram}
                onChange={handleChange}
                className="w-full p-2 bg-gray-800 rounded"
              />
            </div>

            {/* Twitter */}
            <div className="mb-4">
              <label className="block mb-2">X (anteriormente Twitter)</label>
              <input
                type="text"
                name="twitter"
                value={formData.twitter}
                onChange={handleChange}
                className="w-full p-2 bg-gray-800 rounded"
              />
            </div>

            {/* YouTube */}
            <div className="mb-4">
              <label className="block mb-2">YouTube</label>
              <input
                type="text"
                name="youtube"
                value={formData.youtube}
                onChange={handleChange}
                className="w-full p-2 bg-gray-800 rounded"
              />
            </div>

            {/* TikTok */}
            <div className="mb-4">
              <label className="block mb-2">TikTok</label>
              <input
                type="text"
                name="tiktok"
                value={formData.tiktok}
                onChange={handleChange}
                className="w-full p-2 bg-gray-800 rounded"
              />
            </div>

            {/* LinkedIn */}
            <div className="mb-4">
              <label className="block mb-2">LinkedIn</label>
              <input
                type="text"
                name="linkedin"
                value={formData.linkedin}
                onChange={handleChange}
                className="w-full p-2 bg-gray-800 rounded"
              />
            </div>
          </div>

          <button type="submit" className="w-full p-3 bg-blue-600 rounded mt-4">
            Guardar
          </button>
        </form>
      </div>
    </>
  );
}
