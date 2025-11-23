import { ArrowDown, Zap, Check } from 'lucide-react';

function Hero() {
  const scrollToServices = () => {
    const element = document.getElementById('services');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const features = [
    'Tecnología Digital de última generación',
    'Acabados profesionales garantizados',
    'Entrega rápida y puntual'
  ];

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-cyan-900 to-gray-900"></div>

      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-20 right-10 w-96 h-96 bg-cyan-600 rounded-full mix-blend-screen filter blur-3xl opacity-20 animate-float"></div>
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-blue-600 rounded-full mix-blend-screen filter blur-3xl opacity-20 animate-float" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center py-20">
        <div className="mb-6 animate-fade-in">
          <span className="inline-flex items-center px-4 py-2 bg-cyan-600/20 border border-cyan-500/50 rounded-full text-cyan-300 text-sm font-semibold backdrop-blur-sm">
            <Zap className="w-4 h-4 mr-2" />
            Impresión profesional de excelencia
          </span>
        </div>

        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black text-white mb-6 animate-fade-in-delay leading-tight">
          Transforma tus ideas en <span className="text-gradient">impresiones perfectas</span>
        </h1>

        <p className="text-lg sm:text-xl text-gray-300 mb-8 max-w-2xl mx-auto animate-fade-in-delay-2 leading-relaxed">
          Desde pegatinas personalizadas hasta carteles profesionales. Con más de 15 años de experiencia, creamos materiales gráficos de calidad excepcional que marcan la diferencia.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12 animate-fade-in-delay-2">
          <button
            onClick={scrollToContact}
            className="px-8 py-4 bg-gradient-to-r from-cyan-600 to-cyan-500 text-white font-bold rounded-lg hover:shadow-lg hover:shadow-cyan-600/50 transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2 group"
          >
            Solicita tu presupuesto
            <ArrowDown className="w-5 h-5 group-hover:translate-y-1 transition-transform" />
          </button>
          <button
            onClick={scrollToServices}
            className="px-8 py-4 border-2 border-cyan-500 text-cyan-300 font-bold rounded-lg hover:bg-cyan-600/10 transition-all duration-300 flex items-center justify-center gap-2"
          >
            Ver servicios
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-3xl mx-auto animate-fade-in-delay-3">
          {features.map((feature, index) => (
            <div key={index} className="flex items-center justify-center gap-2 text-gray-300 p-4 bg-white/5 backdrop-blur-sm rounded-lg border border-white/10 hover:border-cyan-500/50 transition-colors">
              <Check className="w-5 h-5 text-cyan-400 flex-shrink-0" />
              <span className="text-sm font-semibold">{feature}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce cursor-pointer" onClick={scrollToServices}>
        <ArrowDown className="w-6 h-6 text-cyan-400" />
      </div>
    </section>
  );
}

export default Hero;
