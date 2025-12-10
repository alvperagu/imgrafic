import impresionOffsetImg from "../assets/impresion_offset.jpg";
import camisetasImg from "../assets/camisetas.jpeg";
import copisteriaImg from "../assets/copisteria.jpg";
import tallerImg from "../assets/taller.jpg";
import flyerImg from "../assets/flyer.jpeg";
import designImg from "../assets/design.jpg";

const projects = [
  {
    title: "Diseño Gráfico",
    description:
      "Soluciones creativas y profesionales para identidad visual, branding, material publicitario y diseño de piezas corporativas listas para impresión.",
    type: "Diseño Gráfico",
    image: designImg,
  },
  {
    title: "Rotulación",
    description:
      "Rotulación interior y exterior con vinilo de alta durabilidad, aplicaciones gráficas para escaparates, vehículos y espacios comerciales.",
    type: "Rotulación",
    image: tallerImg,
  },
  {
    title: "Copistería Profesional",
    description:
      "Servicio integral de copiado, escaneo y encuadernación, garantizando precisión y presentación profesional.",
    type: "Copistería",
    image: copisteriaImg,
  },
  {
    title: "Serigrafía y Personalizaciones",
    description:
      "Personalización de tazas, camisetas, textiles, artículos corporativos y merchandising con serigrafía, impresión digital y otras técnicas de alta durabilidad.",
    type: "Personalizaciones",
    image: camisetasImg,
  },
  {
    title: "Impresión Offset y Digital",
    description:
      "Impresión profesional para grandes y pequeñas tiradas, con acabados precisos, máxima fidelidad de color y equipos de última generación.",
    type: "Impresión Offset",
    image: impresionOffsetImg,
  },
  {
    title: "Flyers, Folletos y Tarjetas",
    description:
      "Diseño e impresión de flyers, folletos y tarjetas corporativas personalizadas para mejorar la presencia y comunicación de tu marca.",
    type: "Impresión Digital",
    image: flyerImg,
  },
];

function Services() {
  return (
    <section
      id="services"
      className="py-20 bg-gradient-to-br from-gray-50 to-yellow-50"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Nuestros Servicos
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Ofrecemos una amplia gama de servicios de impresión y diseño.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-xl bg-white shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
            >
              <div className="aspect-[4/3] overflow-hidden relative">
                <img
                  src={`${project.image}?auto=compress&cs=tinysrgb&w=800`}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>

              {/* Full-card dark overlay (covers image + content on hover) */}
              <div className="absolute inset-0 bg-transparent group-hover:bg-black/30 transition-colors duration-300 pointer-events-none z-10"></div>

              <div className="relative z-20 p-6 bg-gradient-to-br from-white to-gray-50 group-hover:from-yellow-50 group-hover:to-white transition-colors duration-300">
                <span className="inline-block px-3 py-1 bg-yellow-100 text-yellow-700 text-xs font-semibold rounded-full mb-3 group-hover:bg-yellow-200 transition-colors duration-300">
                  {project.type}
                </span>
                <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-yellow-700 transition-colors duration-300">
                  {project.title}
                </h3>
                <p className="text-gray-600 text-sm group-hover:text-gray-700 transition-colors duration-300">
                  {project.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;
