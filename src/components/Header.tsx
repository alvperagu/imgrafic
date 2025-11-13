import { Printer, Menu, X } from 'lucide-react';

interface HeaderProps {
  isMenuOpen: boolean;
  setIsMenuOpen: (value: boolean) => void;
}

function Header({ isMenuOpen, setIsMenuOpen }: HeaderProps) {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 bg-white shadow-md z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center space-x-2 cursor-pointer" onClick={() => scrollToSection('hero')}>
            <Printer className="w-8 h-8 text-cyan-600" />
            <span className="text-2xl font-bold text-gray-900">Imgrafic</span>
          </div>

          <nav className="hidden md:flex space-x-8">
            <button onClick={() => scrollToSection('hero')} className="text-gray-700 hover:text-cyan-600 transition-colors font-medium">
              Inicio
            </button>
            <button onClick={() => scrollToSection('services')} className="text-gray-700 hover:text-cyan-600 transition-colors font-medium">
              Servicios
            </button>
            <button onClick={() => scrollToSection('portfolio')} className="text-gray-700 hover:text-cyan-600 transition-colors font-medium">
              Portfolio
            </button>
            <button onClick={() => scrollToSection('about')} className="text-gray-700 hover:text-cyan-600 transition-colors font-medium">
              Nosotros
            </button>
            <button onClick={() => scrollToSection('contact')} className="text-gray-700 hover:text-cyan-600 transition-colors font-medium">
              Contacto
            </button>
          </nav>

          <button
            className="md:hidden text-gray-700"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200">
          <nav className="flex flex-col space-y-4 px-4 py-4">
            <button onClick={() => scrollToSection('hero')} className="text-left text-gray-700 hover:text-cyan-600 transition-colors font-medium">
              Inicio
            </button>
            <button onClick={() => scrollToSection('services')} className="text-left text-gray-700 hover:text-cyan-600 transition-colors font-medium">
              Servicios
            </button>
            <button onClick={() => scrollToSection('portfolio')} className="text-left text-gray-700 hover:text-cyan-600 transition-colors font-medium">
              Portfolio
            </button>
            <button onClick={() => scrollToSection('about')} className="text-left text-gray-700 hover:text-cyan-600 transition-colors font-medium">
              Nosotros
            </button>
            <button onClick={() => scrollToSection('contact')} className="text-left text-gray-700 hover:text-cyan-600 transition-colors font-medium">
              Contacto
            </button>
          </nav>
        </div>
      )}
    </header>
  );
}

export default Header;
