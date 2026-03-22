import { ArrowDown } from "lucide-react";
import fondoDesktop from "../assets/fondo.png";
import fondoVertical from "../assets/fondovertical.png";
import { useEffect, useState, useRef } from "react";

function Hero() {
  const [isDesktop, setIsDesktop] = useState(
    typeof window !== "undefined"
      ? window.matchMedia("(min-width: 1024px)").matches
      : true,
  );
  const [imageLoaded, setImageLoaded] = useState(false);
  const imgRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    const mql = window.matchMedia("(min-width: 1024px)");
    const handler = (e: MediaQueryListEvent) => setIsDesktop(e.matches);
    mql.addEventListener("change", handler);
    return () => mql.removeEventListener("change", handler);
  }, []);

  // Check if image is already cached
  useEffect(() => {
    if (imgRef.current?.complete) {
      setImageLoaded(true);
    }
  }, [isDesktop]);

  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToServices = () => {
    const element = document.getElementById("services");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#1a1a1a]"
    >
      {/* Background image — uses <img> for better loading control */}
      <img
        ref={imgRef}
        src={isDesktop ? fondoDesktop : fondoVertical}
        alt=""
        role="presentation"
        fetchPriority="high"
        decoding="async"
        onLoad={() => setImageLoaded(true)}
        className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ${imageLoaded ? "opacity-100" : "opacity-0"}`}
      />

      {/* Gradient overlay for better readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/15 to-black/40 z-[1]"></div>

      {/* Hero content */}
      <div className="relative z-[2] max-w-6xl mx-auto px-6 text-center animate-fade-in">
        {/* Tagline */}
        <h2 className="text-white uppercase tracking-widest font-semibold text-xs sm:text-sm md:text-base mb-4 opacity-90">
          Imprenta profesional en Badajoz · Los Santos de Maimona
        </h2>

        {/* Main Title */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-white leading-tight sm:leading-snug mb-6 drop-shadow-xl">
          Impresión que eleva tu{" "}
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 to-yellow-300">
            marca
          </span>
        </h1>

        {/* Supporting text */}
        <p className="text-base sm:text-lg md:text-xl text-gray-200 max-w-2xl mx-auto mb-8 sm:mb-10 leading-relaxed px-2">
          Impresión offset y digital, diseño gráfico, rotulación, seriografía y
          papelería corporativa. Todo lo que tu negocio necesita para comunicar
          con impacto, desde Los Santos de Maimona hasta toda la comarca de
          Zafra y Badajoz.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            onClick={scrollToContact}
            aria-label="Pide presupuesto gratis"
            className="inline-flex items-center px-8 sm:px-12 py-4 bg-gradient-to-r from-yellow-400 to-yellow-300 text-gray-900 font-semibold rounded-2xl hover:scale-105 hover:shadow-2xl transition-all duration-300 w-full sm:w-auto justify-center"
          >
            Pide presupuesto gratis
          </button>
          <button
            onClick={scrollToServices}
            aria-label="Explorar servicios"
            className="inline-flex items-center px-8 sm:px-12 py-4 border-2 border-white/40 text-white font-semibold rounded-2xl hover:bg-white/10 hover:border-white/60 transition-all duration-300 w-full sm:w-auto justify-center"
          >
            Explorar servicios
            <ArrowDown className="ml-3 w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 sm:bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center space-y-2 animate-bounce z-[2]">
        <div className="w-px h-6 bg-white/40 animate-pulse"></div>
        <ArrowDown className="w-6 h-6 sm:w-7 sm:h-7 text-white/50" />
      </div>
    </section>
  );
}

export default Hero;
