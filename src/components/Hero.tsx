import { ArrowDown } from 'lucide-react';

function Hero() {
  const scrollToServices = () => {
    const element = document.getElementById('services');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-cyan-50 via-blue-50 to-gray-100 pt-16">
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-gray-900 mb-6 animate-fade-in">
          Impresión de <span className="text-cyan-600">Alta Calidad</span>
        </h1>
        <p className="text-xl sm:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto animate-fade-in-delay">
          Somos una imprenta especializada en diseño y producción de materiales gráficos de alta calidad.
          Transformamos tus ideas en realidad con tecnología de última generación.
        </p>
        <button
          onClick={scrollToServices}
          className="inline-flex items-center px-8 py-4 bg-cyan-600 text-white font-semibold rounded-lg hover:bg-cyan-700 transition-all transform hover:scale-105 shadow-lg animate-fade-in-delay-2"
        >
          Descubre nuestros servicios
          <ArrowDown className="ml-2 w-5 h-5" />
        </button>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ArrowDown className="w-6 h-6 text-gray-400" />
      </div>
    </section>
  );
}

export default Hero;
