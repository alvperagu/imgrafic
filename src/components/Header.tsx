import Logo from "../assets/logo.png";
import { useState, useEffect } from "react";

function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-300 ${
        isScrolled
          ? "bg-gradient-to-r from-yellow-400 to-yellow-300"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-50">
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
              className={`transition-colors font-medium ${
                isScrolled
                  ? "text-gray-900 hover:text-white"
                  : "text-white hover:text-yellow-300"
              }`}
            >
              Inicio
            </button>
            <button
              onClick={() => scrollToSection("services")}
              className={`transition-colors font-medium ${
                isScrolled
                  ? "text-gray-900 hover:text-white"
                  : "text-white hover:text-yellow-300"
              }`}
            >
              Servicios
            </button>
            <button
              onClick={() => scrollToSection("about")}
              className={`transition-colors font-medium ${
                isScrolled
                  ? "text-gray-900 hover:text-white"
                  : "text-white hover:text-yellow-300"
              }`}
            >
              Nosotros
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className={`transition-colors font-medium ${
                isScrolled
                  ? "text-gray-900 hover:text-white"
                  : "text-white hover:text-yellow-300"
              }`}
            >
              Contacto
            </button>
          </nav>
        </div>
      </div>
    </header>
  );
}

export default Header;
