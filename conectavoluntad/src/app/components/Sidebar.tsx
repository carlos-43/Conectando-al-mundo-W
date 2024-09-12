import { FaHome, FaUserAlt, FaInfo, FaFileAlt, FaMapMarkerAlt, FaUsers } from 'react-icons/fa';
import Link from 'next/link';

export default function Sidebar() {
  return (
    <aside className="w-64 bg-gray-900 h-screen p-5 fixed lg:w-64 sm:w-full transition-all duration-300">
      <nav>
        <ul className="space-y-4">
        <Link href="/">
          <li>
            <a href="#" className="flex items-center p-2 text-white hover:bg-gray-700 rounded transition-all duration-300">
              <FaHome className="mr-2" /> Inicio
            </a>
          </li>
          </Link>
          <Link href="/Organizations">
          <li>
            <a href="#" className="flex items-center p-2 text-white hover:bg-gray-700 rounded transition-all duration-300">
              <FaInfo className="mr-2" /> Información general
            </a>
          </li>
          </Link>
          <Link href="/Organizations">
          <li>
            <a href="#" className="flex items-center p-2 text-white hover:bg-gray-700 rounded transition-all duration-300">
              <FaUserAlt className="mr-2" /> Mi cuenta
            </a>
          </li>
          </Link>
        </ul>
      </nav>
    </aside>
  );
}
