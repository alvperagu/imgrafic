import { ArrowRight, Check, Printer, Sparkles, Zap } from 'lucide-react';

function Hero() {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const features = [
    'Impresión digital de alta resolución',
    'Acabados profesionales a medida',
    'Entrega rápida garantizada'
  ];

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 via-white to-cyan-50 pt-16 overflow-hidden">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-0 w-96 h-96 bg-cyan-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-float"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-float" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-cyan-100 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-float" style={{ animationDelay: '4s' }}></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="animate-slide-up">
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black text-gray-900 mb-6 leading-tight">
              Impresión de <span className="text-gradient">Calidad Premium</span>
            </h1>

            <p className="text-lg sm:text-xl text-gray-600 mb-8 leading-relaxed">
              Transforma tus ideas en materiales gráficos excepcionales. Desde pegatinas personalizadas hasta carteles profesionales, utilizamos tecnología de última generación para entregar resultados que superan expectativas.
            </p>

            <div className="space-y-4 mb-8">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start gap-3 animate-fade-in-delay-3" style={{ animationDelay: `${0.2 + index * 0.1}s` }}>
                  <div className="flex-shrink-0 w-6 h-6 bg-cyan-600 rounded-full flex items-center justify-center mt-1">
                    <Check className="w-4 h-4 text-white" />
                  </div>
                  <span className="text-gray-700 font-semibold">{feature}</span>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-delay-2">
              <button
                onClick={scrollToContact}
                className="px-8 py-4 bg-gradient-to-r from-cyan-600 to-cyan-500 text-white font-bold rounded-lg hover:shadow-xl hover:shadow-cyan-600/30 transition-all duration-300 transform hover:scale-105 inline-flex items-center justify-center gap-2 group"
              >
                Solicita tu presupuesto
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button
                onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
                className="px-8 py-4 border-2 border-gray-300 text-gray-900 font-bold rounded-lg hover:border-cyan-600 hover:bg-cyan-50 transition-all duration-300"
              >
                Explorar servicios
              </button>
            </div>
          </div>

          <div className="relative animate-fade-in-delay hidden lg:block">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-600/20 to-blue-600/20 rounded-2xl blur-xl"></div>

              <div className="relative bg-white/80 backdrop-blur-sm p-8 rounded-2xl border border-white/60 shadow-2xl">
                <div className="grid grid-cols-3 gap-6 mb-8">
                  <div className="flex flex-col items-center animate-fade-in-delay-2">
                    <div className="w-16 h-16 bg-gradient-to-br from-cyan-600 to-cyan-500 rounded-xl flex items-center justify-center mb-3 shadow-lg">
                      <Printer className="w-8 h-8 text-white" />
                    </div>
                    <span className="text-sm font-bold text-gray-900 text-center">Impresión Digital</span>
                  </div>

                  <div className="flex flex-col items-center animate-fade-in-delay-2" style={{ animationDelay: '0.2s' }}>
                    <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-cyan-600 rounded-xl flex items-center justify-center mb-3 shadow-lg">
                      <Sparkles className="w-8 h-8 text-white" />
                    </div>
                    <span className="text-sm font-bold text-gray-900 text-center">Acabados Premium</span>
                  </div>

                  <div className="flex flex-col items-center animate-fade-in-delay-2" style={{ animationDelay: '0.4s' }}>
                    <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-xl flex items-center justify-center mb-3 shadow-lg">
                      <Zap className="w-8 h-8 text-white" />
                    </div>
                    <span className="text-sm font-bold text-gray-900 text-center">Entrega Rápida</span>
                  </div>
                </div>

                <div className="space-y-4 pt-8 border-t border-gray-200">
                  <div className="flex justify-between items-center animate-fade-in-delay-3">
                    <span className="text-gray-700 font-semibold">Calidad de impresión</span>
                    <div className="w-24 h-2 bg-gray-200 rounded-full overflow-hidden">
                      <div className="w-full h-full bg-gradient-to-r from-cyan-600 to-cyan-500 rounded-full"></div>
                    </div>
                  </div>

                  <div className="flex justify-between items-center animate-fade-in-delay-3" style={{ animationDelay: '0.1s' }}>
                    <span className="text-gray-700 font-semibold">Precisión de color</span>
                    <div className="w-24 h-2 bg-gray-200 rounded-full overflow-hidden">
                      <div className="w-full h-full bg-gradient-to-r from-cyan-600 to-cyan-500 rounded-full"></div>
                    </div>
                  </div>

                  <div className="flex justify-between items-center animate-fade-in-delay-3" style={{ animationDelay: '0.2s' }}>
                    <span className="text-gray-700 font-semibold">Experiencia</span>
                    <div className="text-2xl font-black text-cyan-600">15+</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
