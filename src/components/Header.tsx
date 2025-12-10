import { Menu, X } from "lucide-react";
import Logo from "../assets/logo.png";
import { useState, useEffect, useRef } from "react";

interface HeaderProps {
  isMenuOpen: boolean;
  setIsMenuOpen: (value: boolean) => void;
}

function Header({ isMenuOpen, setIsMenuOpen }: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMenuOpen]);

  // Refs and focus-trap for mobile menu
  const panelRef = useRef<HTMLDivElement | null>(null);
  const prevActiveRef = useRef<Element | null>(null);

  useEffect(() => {
    if (!isMenuOpen) return;

    prevActiveRef.current = document.activeElement;

    // Slide-in: remove translate-x-full in next frame to trigger transition
    const panel = panelRef.current;
    if (panel) {
      // ensure starting position
      panel.classList.add("translate-x-full");
      requestAnimationFrame(() => {
        panel.classList.remove("translate-x-full");
        panel.classList.add("translate-x-0");
      });

      // focus close button when opened
      const closeBtn = panel.querySelector<HTMLButtonElement>(
        "button[aria-label='Cerrar menú']"
      );
      closeBtn?.focus();
    }

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setIsMenuOpen(false);
        return;
      }

      if (e.key === "Tab") {
        // focus trap
        const focusable = panel?.querySelectorAll<HTMLElement>(
          'a[href], button:not([disabled]), textarea, input, select, [tabindex]:not([tabindex="-1"])'
        );
        if (!focusable || focusable.length === 0) return;
        const first = focusable[0];
        const last = focusable[focusable.length - 1];

        if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault();
          last.focus();
        }
      }
    };

    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      // restore focus
      (prevActiveRef.current as HTMLElement | null)?.focus?.();
    };
  }, [isMenuOpen]);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMenuOpen(false);
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
                  ? "text-gray-900 hover:text-yellow-500"
                  : "text-white hover:text-yellow-300"
              }`}
            >
              Inicio
            </button>
            <button
              onClick={() => scrollToSection("services")}
              className={`transition-colors font-medium ${
                isScrolled
                  ? "text-gray-900 hover:text-yellow-500"
                  : "text-white hover:text-yellow-300"
              }`}
            >
              Servicios
            </button>
            <button
              onClick={() => scrollToSection("about")}
              className={`transition-colors font-medium ${
                isScrolled
                  ? "text-gray-900 hover:text-yellow-500"
                  : "text-white hover:text-yellow-300"
              }`}
            >
              Nosotros
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className={`transition-colors font-medium ${
                isScrolled
                  ? "text-gray-900 hover:text-yellow-500"
                  : "text-white hover:text-yellow-300"
              }`}
            >
              Contacto
            </button>
          </nav>

          {/* MOBILE MENU BUTTON */}
          <button
            className={`hidden md:block transition-colors ${
              isScrolled ? "text-gray-900" : "text-white"
            }`}
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
