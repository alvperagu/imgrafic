import Logo from "../assets/logo.png";
import { useState, useEffect, useCallback } from "react";
import { Menu, X } from "lucide-react";

const NAV_ITEMS = [
  { id: "hero", label: "Inicio" },
  { id: "services", label: "Servicios" },
  { id: "about", label: "Nosotros" },
  { id: "reviews", label: "Opiniones" },
  { id: "contact", label: "Contacto" },
];

function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMobileMenuOpen]);

  const scrollToSection = useCallback((id: string) => {
    setIsMobileMenuOpen(false);
    // Small delay so the menu closes before scrolling
    setTimeout(() => {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }, 100);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-300 ${
        isScrolled || isMobileMenuOpen
          ? "bg-gradient-to-r from-yellow-400 to-yellow-300 shadow-md"
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
              className="h-12 w-auto object-contain"
            />
          </div>

          {/* DESKTOP NAV */}
          <nav className="hidden md:flex space-x-8">
            {NAV_ITEMS.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`transition-colors font-medium ${
                  isScrolled
                    ? "text-gray-900 hover:text-white"
                    : "text-white hover:text-yellow-300"
                }`}
              >
                {item.label}
              </button>
            ))}
          </nav>

          {/* MOBILE HAMBURGER BUTTON */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={`md:hidden p-2 rounded-lg transition-colors ${
              isScrolled || isMobileMenuOpen
                ? "text-gray-900 hover:bg-yellow-500/30"
                : "text-white hover:bg-white/10"
            }`}
            aria-label={isMobileMenuOpen ? "Cerrar menú" : "Abrir menú"}
            aria-expanded={isMobileMenuOpen}
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>
      </div>

      {/* MOBILE MENU OVERLAY */}
      <div
        className={`md:hidden fixed inset-0 top-[72px] z-40 transition-all duration-300 ${
          isMobileMenuOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
      >
        {/* Backdrop */}
        <div
          className="absolute inset-0 bg-black/40 backdrop-blur-sm"
          onClick={() => setIsMobileMenuOpen(false)}
        />

        {/* Menu panel */}
        <nav
          className={`relative bg-gradient-to-b from-yellow-400 to-yellow-300 shadow-2xl transition-transform duration-300 ${
            isMobileMenuOpen ? "translate-y-0" : "-translate-y-4"
          }`}
        >
          <div className="flex flex-col px-6 py-4 space-y-1">
            {NAV_ITEMS.map((item, index) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="text-left text-gray-900 font-semibold text-lg py-3 px-4 rounded-xl hover:bg-yellow-500/30 active:bg-yellow-500/50 transition-all"
                style={{
                  animationDelay: `${index * 50}ms`,
                  animation: isMobileMenuOpen
                    ? `fadeSlideIn 0.3s ease forwards ${index * 50}ms`
                    : "none",
                }}
              >
                {item.label}
              </button>
            ))}

            {/* Mobile CTA */}
            <div className="pt-3 pb-2">
              <button
                onClick={() => scrollToSection("contact")}
                className="w-full bg-gray-900 text-yellow-300 font-semibold py-3 px-6 rounded-xl hover:bg-gray-800 active:bg-gray-700 transition-colors text-center"
              >
                Pide presupuesto
              </button>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
}

export default Header;
