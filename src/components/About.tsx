import { Award, Users, Zap } from "lucide-react";

function About() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Quiénes somos
            </h2>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              Con más de 20 años trabajando en el sector gráfico de Extremadura,
              en Imgrafic hemos ayudado a cientos de empresas, autónomos y
              particulares de Los Santos de Maimona, Zafra y toda la comarca a
              comunicar mejor a través de la impresión profesional y el diseño
              gráfico.
            </p>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Somos mucho más que una imprenta: somos tu aliado visual. Desde el
              diseño hasta el producto acabado, nos implicamos en cada proyecto
              para que lo que recibas refleje exactamente la imagen que quieres
              transmitir con la calidad, el precio justo y el plazo que
              necesitas.
            </p>

            <div className="space-y-4">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-yellow-400 rounded-lg flex items-center justify-center">
                  <Award className="w-6 h-6 text-cyan-600" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-1">
                    Calidad que puede tocarse
                  </h3>
                  <p className="text-gray-600">
                    Impresión offset y digital con tecnología de última
                    generación y materiales cuidadosamente seleccionados. El
                    resultado final te sorprenderá y sorprenderá a tus clientes.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-yellow-400 rounded-lg flex items-center justify-center">
                  <Users className="w-6 h-6 text-cyan-600" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-1">
                    Asesoramiento personalizado
                  </h3>
                  <p className="text-gray-600">
                    No trabajamos con plantillas genéricas. Te dedicamos el
                    tiempo que mereces para entender tu negocio y ofrecerte
                    exactamente la solución que necesitas, desde la primera
                    consulta hasta la entrega.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-yellow-400 rounded-lg flex items-center justify-center">
                  <Zap className="w-6 h-6 text-cyan-600" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-1">
                    Plazos que se cumplen
                  </h3>
                  <p className="text-gray-600">
                    En los negocios, los tiempos importan. Organizamos nuestra
                    producción para entregarte siempre en los plazos acordados
                    sin excusas y sin sorpresas de última hora.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="https://images.pexels.com/photos/6469/red-hands-woman-creative.jpg?auto=compress&cs=tinysrgb&w=800"
                alt="Equipo de Imgrafic trabajando en impresión profesional en Los Santos de Maimona"
                loading="lazy"
                decoding="async"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 bg-yellow-400 text-black p-8 rounded-xl shadow-xl">
              <div className="text-4xl font-bold mb-1">20+</div>
              <div className="text-sm">Años imprimiendo calidad</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
