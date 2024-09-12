import Link from 'next/link';
import { FaPhoneAlt, FaEnvelope, FaFacebookF, FaInstagram, FaLinkedinIn, FaYoutube, FaTimes } from 'react-icons/fa';
const organizations = [
    { name: "Organización 1", description: "Descripción organización" },
    { name: "Organización 2", description: "Descripción organización" },
    { name: "Organización 3", description: "Descripción organización" },
    { name: "Organización 4", description: "Descripción organización" },
    { name: "Organización 5", description: "Descripción organización" },
    { name: "Organización 6", description: "Descripción organización" },
  ];
  
  export default function Organizations() {
    return (
      <section className="bg-gray-100 p-8">
        <div className="flex justify-between items-center mb-4">
          <Link href="/Organizations">
          <button className="bg-[#46B6A5] text-white px-4 py-2 rounded-lg">
            + New Organization
          </button>
          </Link>
          <input
            type="text"
            placeholder="Buscar Organización"
            className="p-2 border rounded-lg w-1/3"
          />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {organizations.map((org, index) => (
            <div key={index} className="bg-white p-4 rounded-lg shadow-lg">
              <div className="h-24 bg-gray-200 rounded mb-4"></div>
              <Link href="/View_org">
              <h3 className="text-xl font-bold text-gray-600">{org.name}</h3>
              </Link>
              <p className='text-gray-400'>{org.description}</p>
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
          ))}
        </div>
      </section>
    );
  }
  