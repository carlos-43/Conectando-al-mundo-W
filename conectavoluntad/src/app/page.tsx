// pages/index.js
import './globals.css';
import Header from '@/app/components/Header';
import About from '@/app/components/About';
import Organizations from '@/app/components/Organizations';

export default function Home() {
  return (
    <div>
      <Header />
      <div
        className="relative h-64 bg-blue-200"
        style={{ backgroundImage: '@/multimedia/background-image.png' }} // Agrega la imagen de fondo
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative z-10 text-center text-white p-8">
          <h1 className="text-4xl font-bold">ConectaVoluntad</h1>
          <p className="text-lg mt-2">Conectando voluntarios con organizaciones</p>
        </div>
      </div>
      <About />
      <Organizations />
    </div>
  );
}
