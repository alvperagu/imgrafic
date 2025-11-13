const projects = [
  {
    title: 'Catálogo Corporativo',
    description: 'Catálogo de 120 páginas con encuadernación en tapa dura',
    type: 'Impresión Offset',
    image: 'https://images.pexels.com/photos/3184398/pexels-photo-3184398.jpeg?auto=compress&cs=tinysrgb&w=800'
  },
  {
    title: 'Packaging Premium',
    description: 'Diseño de cajas personalizadas para productos de lujo',
    type: 'Packaging Personalizado',
    image: 'https://images.pexels.com/photos/4226876/pexels-photo-4226876.jpeg?auto=compress&cs=tinysrgb&w=800'
  },
  {
    title: 'Tarjetas Corporativas',
    description: 'Tarjetas con acabado mate y relieve UV selectivo',
    type: 'Impresión Digital',
    image: 'https://images.pexels.com/photos/6953842/pexels-photo-6953842.jpeg?auto=compress&cs=tinysrgb&w=800'
  },
  {
    title: 'Material Publicitario',
    description: 'Flyers y folletos para campaña de marketing',
    type: 'Impresión Digital',
    image: 'https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg?auto=compress&cs=tinysrgb&w=800'
  },
  {
    title: 'Revista Institucional',
    description: 'Revista trimestral de 60 páginas a todo color',
    type: 'Impresión Offset',
    image: 'https://images.pexels.com/photos/1164674/pexels-photo-1164674.jpeg?auto=compress&cs=tinysrgb&w=800'
  },
  {
    title: 'Libro de Arte',
    description: 'Impresión de libro con papel couché de alta gramatura',
    type: 'Impresión Offset',
    image: 'https://images.pexels.com/photos/159866/books-book-pages-read-literature-159866.jpeg?auto=compress&cs=tinysrgb&w=800'
  }
];

function Portfolio() {
  return (
    <section id="portfolio" className="py-20 bg-gradient-to-br from-gray-50 to-cyan-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Nuestros Proyectos</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Conoce algunos de los trabajos que hemos realizado para nuestros clientes
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-xl shadow-lg bg-white hover:shadow-2xl transition-all duration-300"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
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
                <h3 className="text-xl font-bold text-gray-900 mb-2">{project.title}</h3>
                <p className="text-gray-600 text-sm">{project.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Portfolio;
