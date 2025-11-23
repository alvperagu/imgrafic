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
      "Rotulación interior y exterior con vinilo de alta durabilidad, señalética personalizada y aplicaciones gráficas para escaparates, vehículos y espacios comerciales.",
    type: "Rotulación",
    image: tallerImg,
  },
  {
    title: "Copistería Profesional",
    description:
      "Servicio de copias, escaneo y encuadernación para documentos empresariales.",
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
      className="py-20 bg-gradient-to-br from-gray-50 to-cyan-50"
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
              className="group relative overflow-hidden rounded-xl shadow-lg bg-white hover:shadow-2xl transition-all duration-500"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-6 group-hover:translate-y-0 transition-transform duration-300">
                  <span className="inline-block px-3 py-1 bg-cyan-600 text-xs font-semibold rounded-full mb-3">
                    {project.type}
                  </span>
                  <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                  <p className="text-gray-200 text-sm">{project.description}</p>
                </div>
              </div>
              <div className="p-6">
                <span className="inline-block px-3 py-1 bg-cyan-100 text-cyan-700 text-xs font-semibold rounded-full mb-3">
                  {project.type}
                </span>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-600 text-sm">{project.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;
