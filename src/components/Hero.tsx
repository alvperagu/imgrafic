import { ArrowDown } from "lucide-react";
import fondo from "../assets/fondo.png";

function Hero() {
  const scrollToServices = () => {
    const element = document.getElementById("services");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center bg-center overflow-hidden hero-bg"
      style={{
        backgroundImage: `url(${fondo})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
      }}
    >
      {/* Gradient overlay for better readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/10 to-black/20"></div>

      {/* Hero content */}
      <div className="relative max-w-6xl mx-auto px-6 text-center animate-fade-up">
        {/* Tagline */}
        <h2 className="text-white uppercase tracking-widest font-semibold text-sm sm:text-base mb-4 opacity-90">
          Centro profesional de impresión
        </h2>

        {/* Main Title */}
        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold text-white leading-snug mb-6 drop-shadow-xl">
          Impresión que eleva tu{" "}
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 to-yellow-300">
            marca
          </span>
        </h1>

        {/* Supporting text */}
        <p className="text-lg sm:text-xl text-gray-200 max-w-2xl mx-auto mb-10 leading-relaxed">
          Soluciones gráficas de nivel corporativo: tarjetas, papelería,
          rotulación, diseño, cartelería y material publicitario. Somos tu
          aliado visual para proyectar calidad y profesionalismo.
        </p>

        {/* CTA Button */}
        <button
          onClick={scrollToServices}
          aria-label="Explorar servicios"
          className="inline-flex items-center px-12 py-4 bg-gradient-to-r from-yellow-400 to-yellow-300 text-gray-900 font-semibold rounded-2xl hover:scale-105 hover:shadow-2xl transition-all duration-300"
        >
          Explorar servicios
          <ArrowDown className="ml-3 w-5 h-5" />
        </button>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center space-y-2 animate-bounce">
        <div className="w-px h-6 bg-white/40 animate-pulse"></div>
        <ArrowDown className="w-7 h-7 text-white/50" />
      </div>
    </section>
  );
}

export default Hero;
