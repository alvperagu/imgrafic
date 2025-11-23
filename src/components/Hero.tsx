import { ArrowRight, Check } from 'lucide-react';

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
    <section id="hero" className="relative min-h-screen flex items-center justify-center bg-white pt-16 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
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

          <div className="relative animate-fade-in-delay">
            <div className="relative aspect-square rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="https://images.pexels.com/photos/3962285/pexels-photo-3962285.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Imprenta digital profesional"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
            </div>

            <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-xl shadow-xl border border-gray-100">
              <div className="text-3xl font-black text-cyan-600 mb-1">15+</div>
              <div className="text-sm font-semibold text-gray-600">Años de experiencia</div>
            </div>

            <div className="absolute -top-6 -left-6 bg-cyan-600 text-white p-4 rounded-xl shadow-lg">
              <div className="text-sm font-bold">Tecnología</div>
              <div className="text-xs opacity-90">Digital Premium</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
