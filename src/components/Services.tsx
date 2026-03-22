import impresionOffsetImg from "../assets/impresion_offset.jpg";
import camisetasImg from "../assets/camisetas.jpeg";
import copisteriaImg from "../assets/copisteria.jpg";
import tallerImg from "../assets/taller.jpg";
import flyerImg from "../assets/flyer.jpeg";
import designImg from "../assets/design.jpg";

const projects = [
  {
    title: "Diseño Gráfico Profesional",
    description:
      "Creamos la identidad visual que tu marca merece: logotipos, branding, material publicitario y piezas corporativas listas para impresión. Diseño orientado a resultados para empresas y autónomos.",
    type: "Diseño Gráfico",
    image: designImg,
  },
  {
    title: "Rotulación Comercial e Industrial",
    description:
      "Da visibilidad a tu negocio con rótulos interiores y exteriores de alta durabilidad: escaparates, vehículos, locales comerciales y espacios de trabajo. Instalación profesional incluida.",
    type: "Rotulación",
    image: tallerImg,
  },
  {
    title: "Copistería Profesional",
    description:
      "Copias, impresiones, escáner y encuadernación con acabado impecable. Ideal para documentación empresarial, trabajos académicos, informes y presentaciones que necesitan verse bien.",
    type: "Copistería",
    image: copisteriaImg,
  },
  {
  title: "Seriografía y Personalización",
    description:
      "Camisetas, tazas, textiles y merchandising corporativo con tu logo o diseño. Perfecto para uniformes de empresa, eventos, regalos de empresa y promociones. Pequeñas y grandes tiradas.",
    type: "Personalizaciones",
    image: camisetasImg,
  },
  {
    title: "Impresión Offset y Digital",
    description:
      "Alta fidelidad de color y acabados perfectos tanto para tiradas cortas como para grandes volúmenes. La solución más profesional y económica según tus necesidades.",
    type: "Impresión Offset",
    image: impresionOffsetImg,
  },
  {
    title: "Flyers, Folletos y Tarjetas de Visita",
    description:
      "Materiales publicitarios que abren puertas: tarjetas de visita, flyers para tu local, trípticos informativos y folletos corporativos. Diseño e impresión de calidad al mejor precio.",
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
            Nuestros Servicios de Impresión y Diseño
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Todo lo que tu negocio necesita para comunicar con impacto:
            impresión, diseño, rotulación y personalización bajo un mismo
            techo, en Badajoz.
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
                  src={project.image}
                  alt={project.title}
                  loading="lazy"
                  decoding="async"
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
