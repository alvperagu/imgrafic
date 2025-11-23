import { Facebook, Instagram } from "lucide-react";

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <span className="text-2xl font-bold">Imgrafic</span>
            </div>
            <p className="text-gray-400 leading-relaxed">
              Transformamos tus ideas en productos impresos y diseños gráficos
              de alta calidad, cuidando cada detalle para que tu marca destaque.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4">Servicios</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="#services"
                  className="text-gray-400 hover:text-cyan-400 transition-colors"
                >
                  Impresión Offset
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  className="text-gray-400 hover:text-cyan-400 transition-colors"
                >
                  Impresión Digital
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  className="text-gray-400 hover:text-cyan-400 transition-colors"
                >
                  Diseño Gráfico
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  className="text-gray-400 hover:text-cyan-400 transition-colors"
                >
                  Flyers
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  className="text-gray-400 hover:text-cyan-400 transition-colors"
                >
                  Folletos
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  className="text-gray-400 hover:text-cyan-400 transition-colors"
                >
                  Tarjetas de Visita
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  className="text-gray-400 hover:text-cyan-400 transition-colors"
                >
                  Personalizaciones
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  className="text-gray-400 hover:text-cyan-400 transition-colors"
                >
                  Copistería
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  className="text-gray-400 hover:text-cyan-400 transition-colors"
                >
                  Rotulación
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4">Empresa</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="#about"
                  className="text-gray-400 hover:text-cyan-400 transition-colors"
                >
                  Sobre Nosotros
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  className="text-gray-400 hover:text-cyan-400 transition-colors"
                >
                  services
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="text-gray-400 hover:text-cyan-400 transition-colors"
                >
                  Contacto
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4">Contacto</h3>
            <ul className="space-y-2 text-gray-400">
              <li>infoimgrafic@gmail.com</li>
              <li>661 21 65 64</li>
              <li>924 57 20 78</li>
              <li>Av. Constitución, 79</li>
              <li>06230 Los Santos de Maimona</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm mb-4 md:mb-0">
            © {currentYear} Imgrafic. Todos los derechos reservados.
            Desarrollado por Álvaro Pérez Aguilar.
          </p>

          <div className="flex space-x-4">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-cyan-600 transition-colors"
            >
              <Facebook className="w-5 h-5" />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-cyan-600 transition-colors"
            >
              <Instagram className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
