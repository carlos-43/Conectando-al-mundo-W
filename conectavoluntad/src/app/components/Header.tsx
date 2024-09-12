import Link from 'next/link';
import Image from 'next/image';
import Logo from '@/multimedia/logo.png'
import profile from '@/multimedia/perfil.png';

export default function Header() {
  return (
    <header className="bg-[#46B6A5] text-white p-4">
      <div className="container mx-auto flex items-center justify-between">
        <Link href="/">
        <div className="flex items-center space-x-4">
          {/* Logo */}
          <Image
            src={Logo} // The image path in the public folder
            alt="Logo"
            className='h-16 w-16'
          />
          <h1 className="text-xl font-bold">ConectaVoluntad</h1>
        </div>
        </Link>

        <div className="flex items-center space-x-4">
          {/* Icon that links to the login page */}
          <Link href="/login">
            <Image
              src={profile} 
              alt="perfil"
              className='h-10 w-10'
            />
          </Link>

          {/* Existing menu button */}
          <button className="text-white">
            <svg
              className="w-10 h-10"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
}
