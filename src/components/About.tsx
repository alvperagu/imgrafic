import { Award, Users, Zap } from 'lucide-react';

function About() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Sobre Nosotros</h2>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              Con más de 15 años de experiencia en la industria gráfica, nos hemos consolidado como
              una de las imprentas más confiables y profesionales del sector.
            </p>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Nuestro compromiso es ofrecer productos de la más alta calidad, utilizando tecnología
              de última generación y un equipo de profesionales altamente capacitados que trabajan
              para superar las expectativas de cada cliente.
            </p>

            <div className="space-y-4">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-cyan-100 rounded-lg flex items-center justify-center">
                  <Award className="w-6 h-6 text-cyan-600" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-1">Calidad Garantizada</h3>
                  <p className="text-gray-600">
                    Utilizamos los mejores materiales y procesos para asegurar resultados excepcionales
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-cyan-100 rounded-lg flex items-center justify-center">
                  <Users className="w-6 h-6 text-cyan-600" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-1">Equipo Profesional</h3>
                  <p className="text-gray-600">
                    Nuestro equipo está formado por expertos con años de experiencia en el sector
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-cyan-100 rounded-lg flex items-center justify-center">
                  <Zap className="w-6 h-6 text-cyan-600" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-1">Entregas Rápidas</h3>
                  <p className="text-gray-600">
                    Optimizamos nuestros procesos para garantizar entregas en los plazos acordados
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="https://images.pexels.com/photos/3807517/pexels-photo-3807517.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Nuestro equipo trabajando"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 bg-cyan-600 text-white p-8 rounded-xl shadow-xl">
              <div className="text-4xl font-bold mb-1">15+</div>
              <div className="text-sm">Años de experiencia</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
