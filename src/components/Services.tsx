import { FileText, Printer, CreditCard, BookOpen, Package, Palette } from 'lucide-react';

const services = [
  {
    icon: Printer,
    title: 'Impresión Offset',
    description: 'Impresión de alta calidad para grandes volúmenes. Ideal para libros, revistas y catálogos.'
  },
  {
    icon: FileText,
    title: 'Impresión Digital',
    description: 'Impresión rápida y versátil para tiradas cortas y medianas con acabados profesionales.'
  },
  {
    icon: CreditCard,
    title: 'Tarjetas de Presentación',
    description: 'Tarjetas personales y corporativas con diversos acabados: mate, brillo, relieve y más.'
  },
  {
    icon: FileText,
    title: 'Flyers y Folletos',
    description: 'Material promocional impactante para tus campañas publicitarias y eventos.'
  },
  {
    icon: BookOpen,
    title: 'Catálogos',
    description: 'Catálogos de productos con encuadernación profesional y acabados premium.'
  },
  {
    icon: Package,
    title: 'Packaging Personalizado',
    description: 'Diseño y producción de empaques únicos que destacan tu marca.'
  }
];

function Services() {
  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Nuestros Servicios</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Ofrecemos una amplia gama de servicios de impresión para satisfacer todas tus necesidades
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group p-8 bg-gradient-to-br from-gray-50 to-cyan-50 rounded-xl hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className="w-16 h-16 bg-cyan-600 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <service.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
              <p className="text-gray-600 leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;
