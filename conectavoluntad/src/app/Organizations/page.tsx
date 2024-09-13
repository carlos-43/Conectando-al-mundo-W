"use client";
import { useState} from "react";
import Header from "../components/Header";
import Side from "../components/Sidebar";

const RegisterOrganization: React.FC = () => {
  const [organizationName, setOrganizationName] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [location, setLocation] = useState<string>("");
  const [phone, setPhone] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [website, setWebsite] = useState<string>("");
  const [volunteers, setVolunteers] = useState<string>("");
  const [yearFounded, setYearFounded] = useState<string>("");
  const [facebook, setFacebook] = useState<string>("");
  const [twitter, setTwitter] = useState<string>("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
  
    try {
      const response = await fetch("http://localhost:3000/crear-organizacion", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          name: organizationName,
          description: description,
          location: location,
          Tel: phone,
          email: email,
          Web: website,
          voluntarios: volunteers,
          date: yearFounded,
          face: facebook,
          xtwitter: twitter,
        }),
      });
  
      if (!response.ok) {
        // Si el servidor devuelve un error (4xx o 5xx)
        throw new Error(`Error en la respuesta del servidor: ${response.statusText}`);
      }
  
      const contentType = response.headers.get("content-type");
      if (contentType && contentType.includes("application/json")) {
        const data = await response.json();
        console.log(data, "organizationRegister");
  
        if (data.status === "ok") {
          alert("Organización registrada exitosamente");
        } else {
          alert("Error en el registro: " + data.error);
        }
      } else {
        throw new Error("El servidor no devolvió un JSON");
      }
    } catch (error) {
      console.error("Error al registrar la organización:", error);
      alert("Ocurrió un error al registrar la organización");
    }
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
              value={organizationName}
              onChange={(e) => setOrganizationName(e.target.value)}
              className="p-2 bg-gray-800 rounded w-full"
            />
          </div>

          {/* Año de fundacion */}
          <div className="mb-4 grid grid-cols-1 sm:grid-cols-2 gap-4">
            <label className="block mb-2">Año de fundacion *</label>
            <input
              type="text"
              name="yearFounded"
              value={yearFounded}
              onChange={(e) => setYearFounded(e.target.value)}
              className="p-2 bg-gray-800 rounded w-full"
            />
          </div>

          {/* Ubicacion de fundacion */}
          <div className="mb-4 grid grid-cols-1 sm:grid-cols-2 gap-4">
            <label className="block mb-2">Ubicacion de organización *</label>
            <input
              type="text"
              name="location"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              className="p-2 bg-gray-800 rounded w-full"
            />
          </div>

          {/* Descripción de la organización */}
          <div className="mb-4">
            <label className="block mb-2 text-gray-300">
              Descripción de la organización
            </label>
            <textarea
              name="description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="w-full p-3 bg-gray-800 rounded text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
              rows={4}
              placeholder="Escribe una descripción detallada aquí..."
            ></textarea>
          </div>

          {/* Teléfono de contacto */}
          <div className="mb-4 grid grid-cols-1 sm:grid-cols-2 gap-4">
            <label className="block mb-2">Teléfono de contacto</label>
            <input
              type="text"
              name="phone"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="p-2 bg-gray-800 rounded w-full"
            />
          </div>

          {/* Correo electrónico */}
          <div className="mb-4 grid grid-cols-1 sm:grid-cols-2 gap-4">
            <label className="block mb-2">Correo electrónico de contacto</label>
            <input
              type="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="p-2 bg-gray-800 rounded w-full"
            />
          </div>

          {/* Página web */}
          <div className="mb-4 grid grid-cols-1 sm:grid-cols-2 gap-4">
            <label className="block mb-2">Página web</label>
            <input
              type="text"
              name="website"
              value={website}
              onChange={(e) => setWebsite(e.target.value)}
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
              value={volunteers}
              onChange={(e) => setVolunteers(e.target.value)}
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
                value={facebook}
                onChange={(e) => setFacebook(e.target.value)}
                className="w-full p-2 bg-gray-800 rounded"
              />
            </div>

            {/* Twitter */}
            <div className="mb-4">
              <label className="block mb-2">X (anteriormente Twitter)</label>
              <input
                type="text"
                name="twitter"
                value={twitter}
                onChange={(e) => setTwitter(e.target.value)}
                className="w-full p-2 bg-gray-800 rounded"
              />
            </div>
          </div>

          <button type="submit" 
          className="w-full p-3 bg-blue-600 rounded mt-4">
            Guardar
          </button>
        </form>
      </div>
    </>
  );
};

export default RegisterOrganization;
