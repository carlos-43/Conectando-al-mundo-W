export default function Header() {
    return (
      <header className="bg-[#46B6A5] text-white p-4">
        <div className="container mx-auto flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <img
              src= '/../multimedia/logos.png' // Agrega el logo aquí
              alt="Logo"
              className="h-12"
            />
            <h1 className="text-xl font-bold">ConectaVoluntad</h1>
          </div>
          <div className="space-x-4">
            <button className="text-white">
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
              </svg>
            </button>
          </div>
        </div>
      </header>
    );
  }
  