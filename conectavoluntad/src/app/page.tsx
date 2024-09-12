// pages/index.js
import './globals.css';
import Header from '@/app/components/Header';
import About from '@/app/components/About';
import Organizations from '@/app/components/Organizations';
import bck_image from '@/multimedia/Background-Image.png';
import Logo from '@/multimedia/logo.png'


export default function Home() {
  return (
    <div>
      <Header />
      <div
        className="relative h-64 bg-blue-200"
        style={{ 
          backgroundImage: `url(${bck_image.src})`, // Imagen de fondo
          backgroundSize: 'cover', // Ajusta para cubrir todo el contenedor
          backgroundPosition: 'center', // Centra la imagen
          backgroundRepeat: 'no-repeat' // Evita que se repita
        }}
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative z-10 text-center text-white p-8 flex flex-col justify-center items-center">
        <img
            src={Logo.src} // Logo
            alt="Logo"
            className="h-20 w-20 mb-2" // Ajusta el tamaño del logo
          />
          <h1 className="text-4xl font-bold">ConectaVoluntad</h1>
          <p className="text-lg mt-2">Conectando voluntarios con organizaciones</p>
        </div>
      </div>
      <About />
      <Organizations />
    </div>
  );
}
