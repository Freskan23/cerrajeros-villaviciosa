import React, { useState, useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";

interface Service {
  id: number;
  title: string;
  subtitle: string;
  price: string;
  image: string;
}

const services: Service[] = [
  {
    id: 1,
    title: "Apertura de Puertas",
    subtitle: "Sin daños en su cerradura",
    price: "Desde 90€",
    image: "/servicio-apertura-puertas.jpg",
  },
  {
    id: 2,
    title: "Instalación de Cerraduras",
    subtitle: "Alta seguridad para su hogar",
    price: "Consultar precio",
    image: "/instalacion-cerraduras.jpg",
  },
  {
    id: 3,
    title: "Reparación y Mantenimiento",
    subtitle: "Servicio completo de cerrajería",
    price: "Desde 60€",
    image: "/cerraduras-seguridad.jpg",
  },
  {
    id: 4,
    title: "Servicio de Emergencia",
    subtitle: "Disponible las 24 horas",
    price: "Desde 120€",
    image: "/cerrajero-emergencia.jpg",
  },
  {
    id: 5,
    title: "Seguridad Avanzada",
    subtitle: "Sistemas de última generación",
    price: "Consultar precio",
    image: "/cerraduras-seguridad.jpg",
  },
  {
    id: 6,
    title: "Duplicado de Llaves",
    subtitle: "Servicio rápido y preciso",
    price: "Desde 15€",
    image: "/hero-cerrajero-profesional.jpg",
  }
];

export default function ServicesCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const handleScroll = () => {
    if (scrollContainerRef.current) {
      const scrollLeft = scrollContainerRef.current.scrollLeft;
      const cardWidth = scrollContainerRef.current.offsetWidth;
      const newIndex = Math.round(scrollLeft / cardWidth);
      setCurrentIndex(newIndex);
    }
  };

  useEffect(() => {
    const container = scrollContainerRef.current;
    if (container) {
      container.addEventListener('scroll', handleScroll);
      return () => container.removeEventListener('scroll', handleScroll);
    }
  }, []);

  return (
    <div className="relative w-full">
      {/* Carousel Container */}
      <div
        ref={scrollContainerRef}
        className="flex overflow-x-auto snap-x snap-mandatory scrollbar-hide gap-3 px-4"
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      >
        {services.map((service) => (
          <div
            key={service.id}
            className="min-w-[90vw] snap-center relative flex-shrink-0 rounded-2xl overflow-hidden"
            style={{ height: '550px' }}
          >
            {/* Background Image */}
            <div className="absolute inset-0">
              <img
                src={service.image}
                alt={service.title}
                className="w-full h-full object-cover"
              />
              {/* Overlay exacto como Tesla: negro sólido abajo, transparente arriba */}
              <div 
                className="absolute inset-0" 
                style={{
                  background: 'linear-gradient(to top, rgba(0,0,0,0.95) 0%, rgba(0,0,0,0.6) 40%, rgba(0,0,0,0.2) 70%, transparent 100%)'
                }}
              />
            </div>

            {/* Content - Layout exacto Tesla */}
            <div className="relative h-full flex flex-col justify-between p-7">
              {/* Top: Subtitle */}
              <div>
                <p className="text-sm font-medium text-white">
                  {service.subtitle}
                </p>
              </div>

              {/* Bottom: Title + Price + Buttons */}
              <div>
                {/* Title gigante blanco */}
                <h3 className="text-5xl font-bold text-white mb-2 leading-[1.1] tracking-tight">
                  {service.title}
                </h3>
                
                {/* Price blanco */}
                <p className="text-base font-normal text-white mb-6">
                  {service.price}
                </p>

                {/* Buttons exactos Tesla */}
                <div className="flex gap-3">
                  <Link href="tel:915270049" className="flex-1">
                    <Button 
                      className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-6 text-base rounded-md border-0"
                    >
                      Llamar
                    </Button>
                  </Link>
                  <Link href="#contacto" className="flex-1">
                    <Button 
                      className="w-full bg-white hover:bg-gray-100 text-gray-900 font-semibold py-6 text-base rounded-md border-0"
                    >
                      Saber más
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Dot Indicators */}
      <div className="flex justify-center gap-2 mt-6">
        {services.map((_, index) => (
          <button
            key={index}
            onClick={() => {
              if (scrollContainerRef.current) {
                const cardWidth = scrollContainerRef.current.offsetWidth;
                scrollContainerRef.current.scrollTo({
                  left: cardWidth * index,
                  behavior: 'smooth'
                });
              }
            }}
            className={`h-2 rounded-full transition-all duration-300 ${
              index === currentIndex
                ? 'bg-gray-800 w-2'
                : 'bg-gray-300 w-2'
            }`}
            aria-label={`Ir al servicio ${index + 1}`}
          />
        ))}
      </div>

      <style>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </div>
  );
}
