import { Menu, X } from "lucide-react";
import Logo from "../assets/logo.png";
interface HeaderProps {
  isMenuOpen: boolean;
  setIsMenuOpen: (value: boolean) => void;
}

function Header({ isMenuOpen, setIsMenuOpen }: HeaderProps) {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMenuOpen(false);
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 bg-white shadow-md z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-3">
          {/* LOGO */}
          <div
            className="flex items-center cursor-pointer select-none"
            onClick={() => scrollToSection("hero")}
          >
            <img
              src={Logo}
              alt="Imgrafic logo"
              className="h-12 w-auto object-contain" // 👈 perfect size & alignment
            />
          </div>

          {/* DESKTOP NAV */}
          <nav className="hidden md:flex space-x-8">
            <button
              onClick={() => scrollToSection("hero")}
              className="text-gray-700 hover:text-cyan-600 transition-colors font-medium"
            >
              Inicio
            </button>
            <button
              onClick={() => scrollToSection("services")}
              className="text-gray-700 hover:text-cyan-600 transition-colors font-medium"
            >
              Servicios
            </button>
            <button
              onClick={() => scrollToSection("about")}
              className="text-gray-700 hover:text-cyan-600 transition-colors font-medium"
            >
              Nosotros
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="text-gray-700 hover:text-cyan-600 transition-colors font-medium"
            >
              Contacto
            </button>
          </nav>

          {/* MOBILE MENU BUTTON */}
          <button
            className="md:hidden text-gray-700"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>
      </div>
    </header>
  );
}

export default Header;
