import { Star, Quote } from "lucide-react";
import { useState, useEffect, useCallback } from "react";

const testimonials = [
  {
    name: "Angel Bernal Estevez",
    text: "Es una empresa donde puedes hacer reproducciones de todos los tamaños hasta de gran formato, incluso imprimir libros. Trabajan bien y el trato es educado y correcto. Los precios son muy competitivos.",
    rating: 4,
    timeAgo: "Google Review",
  },
  {
    name: "Maria & Simue",
    text: "Muy profesionales, con un equipo de diseño único. Cuidan al detalle cada trabajo que les encomiendas, y sus precios son muy competitivos.",
    rating: 5,
    timeAgo: "Google Review",
  },
  {
    name: "Andres Pro",
    text: "Gente buena y trabajadora donde la haya, te resuelven las dudas a la primera y siempre te ofrecen la solución que mejor se adapte a tu presupuesto.",
    rating: 5,
    timeAgo: "Google Review",
  },
  {
    name: "José Antonio Benítez de la Rosa",
    text: "Buena calidad de impresión, y rapidez en el trabajo. Recomendable.",
    rating: 4,
    timeAgo: "Google Review",
  },
  {
    name: "Music Technoo",
    text: "La mejor imprenta de Los Santos, Zafra y alrededores. Trato muy profesional, trabajos exquisitos.",
    rating: 5,
    timeAgo: "Google Review",
  },
];

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          className={`w-4 h-4 ${
            i < rating ? "fill-yellow-400 text-yellow-400" : "text-gray-300"
          }`}
        />
      ))}
    </div>
  );
}

function getInitials(name: string) {
  return name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .toUpperCase()
    .slice(0, 2);
}

// Soft avatar colors
const avatarColors = [
  "bg-blue-500",
  "bg-emerald-500",
  "bg-violet-500",
  "bg-rose-500",
  "bg-amber-500",
  "bg-cyan-500",
];

function Testimonials() {
  const [current, setCurrent] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  // Show 1 on mobile, 2 on tablet, 3 on desktop
  const [visibleCount, setVisibleCount] = useState(1);

  useEffect(() => {
    const update = () => {
      if (window.innerWidth >= 1024) setVisibleCount(3);
      else if (window.innerWidth >= 768) setVisibleCount(2);
      else setVisibleCount(1);
    };
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  const maxIndex = Math.max(0, testimonials.length - visibleCount);

  const next = useCallback(() => {
    setCurrent((prev) => (prev >= maxIndex ? 0 : prev + 1));
  }, [maxIndex]);

  const prev = useCallback(() => {
    setCurrent((prev) => (prev <= 0 ? maxIndex : prev - 1));
  }, [maxIndex]);

  // Auto-advance every 5 seconds
  useEffect(() => {
    if (!isAutoPlaying) return;
    const interval = setInterval(next, 5000);
    return () => clearInterval(interval);
  }, [isAutoPlaying, next]);

  const handleDotClick = (index: number) => {
    setCurrent(index);
    setIsAutoPlaying(false);
  };

  const handleArrowClick = (dir: "prev" | "next") => {
    dir === "prev" ? prev() : next();
    setIsAutoPlaying(false);
  };

  const visibleTestimonials = testimonials.slice(
    current,
    current + visibleCount,
  );

  return (
    <section
      id="testimonials"
      className="py-20 bg-gradient-to-br from-gray-50 to-yellow-50"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-4">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Lo que dicen nuestros clientes
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            La confianza de nuestros clientes es nuestro mejor aval
          </p>
        </div>

        {/* Google rating summary */}
        <div className="flex items-center justify-center gap-2 mb-12">
          <img
            src="https://www.google.com/favicon.ico"
            alt="Google"
            className="w-5 h-5"
            loading="lazy"
          />
          <div className="flex items-center gap-1.5">
            <span className="font-bold text-gray-900 text-lg">4.7</span>
            <StarRating rating={5} />
            <span className="text-gray-500 text-sm ml-1">en Google</span>
          </div>
        </div>

        {/* Carousel */}
        <div className="relative">
          {/* Arrows */}
          <button
            onClick={() => handleArrowClick("prev")}
            className="absolute -left-2 sm:-left-4 top-1/2 -translate-y-1/2 z-10 w-10 h-10 bg-yellow-100 shadow-lg rounded-full flex items-center justify-center hover:bg-yellow-200 transition-colors text-gray-600 hover:text-gray-900"
            aria-label="Anterior"
          >
            <svg
              className="w-5 h-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>
          <button
            onClick={() => handleArrowClick("next")}
            className="absolute -right-2 sm:-right-4 top-1/2 -translate-y-1/2 z-10 w-10 h-10 bg-yellow-100 shadow-lg rounded-full flex items-center justify-center hover:bg-yellow-200 transition-colors text-gray-600 hover:text-gray-900"
            aria-label="Siguiente"
          >
            <svg
              className="w-5 h-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>

          {/* Cards */}
          <div className="overflow-hidden px-6">
            <div className="flex gap-6 transition-transform duration-500 ease-in-out">
              {visibleTestimonials.map((t, i) => (
                <div
                  key={current + i}
                  className={`flex-shrink-0 ${
                    visibleCount === 1
                      ? "w-full"
                      : visibleCount === 2
                        ? "w-[calc(50%-12px)]"
                        : "w-[calc(33.333%-16px)]"
                  }`}
                >
                  <div className="bg-yellow-50/80 border border-yellow-100 rounded-2xl p-6 sm:p-8 shadow-sm hover:shadow-md transition-shadow h-full flex flex-col backdrop-blur-sm">
                    {/* Quote icon */}
                    <Quote className="w-8 h-8 text-yellow-400/60 mb-4 flex-shrink-0" />

                    {/* Review text */}
                    <p className="text-gray-700 leading-relaxed mb-6 flex-grow text-sm sm:text-base">
                      "{t.text}"
                    </p>

                    {/* Author + rating */}
                    <div className="flex items-center gap-3 pt-4 border-t border-gray-200">
                      <div
                        className={`w-10 h-10 rounded-full ${
                          avatarColors[i % avatarColors.length]
                        } flex items-center justify-center text-white font-bold text-sm flex-shrink-0`}
                      >
                        {getInitials(t.name)}
                      </div>
                      <div className="min-w-0">
                        <p className="font-semibold text-gray-900 text-sm truncate">
                          {t.name}
                        </p>
                        <div className="flex items-center gap-2">
                          <StarRating rating={t.rating} />
                          <span className="text-gray-400 text-xs">
                            {t.timeAgo}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Dots */}
        <div className="flex justify-center gap-2 mt-8">
          {Array.from({ length: maxIndex + 1 }).map((_, i) => (
            <button
              key={i}
              onClick={() => handleDotClick(i)}
              className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                i === current
                  ? "bg-yellow-400 w-6"
                  : "bg-gray-300 hover:bg-gray-400"
              }`}
              aria-label={`Ir a reseña ${i + 1}`}
            />
          ))}
        </div>

        {/* CTA to Google reviews */}
        <div className="text-center mt-10">
          <a
            href="https://www.google.com/maps/place/IMGRAFIC+-+Centro+de+Impresi%C3%B3n/@38.4451239,-6.3799335,17z/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-gray-600 hover:text-gray-900 font-medium transition-colors text-sm"
          >
            Ver todas las reseñas en Google
            <svg
              className="w-4 h-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
              />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
