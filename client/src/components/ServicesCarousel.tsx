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
              {/* Overlay MÁS oscuro para mejor contraste */}
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-black/20" />
            </div>

            {/* Content */}
            <div className="relative h-full flex flex-col justify-between p-7">
              {/* Top: Subtitle pequeño */}
              <div>
                <p 
                  className="text-sm font-medium text-gray-200"
                  style={{ textShadow: '0 2px 8px rgba(0,0,0,0.8)' }}
                >
                  {service.subtitle}
                </p>
              </div>

              {/* Bottom: Title GRANDE + Price + Buttons */}
              <div>
                {/* Title muy grande como Tesla con shadow fuerte */}
                <h3 
                  className="text-5xl font-bold text-white mb-2 leading-tight tracking-tight"
                  style={{ textShadow: '0 4px 12px rgba(0,0,0,0.9)' }}
                >
                  {service.title}
                </h3>
                
                {/* Price con shadow */}
                <p 
                  className="text-base font-medium text-gray-100 mb-6"
                  style={{ textShadow: '0 2px 8px rgba(0,0,0,0.8)' }}
                >
                  {service.price}
                </p>

                {/* Buttons */}
                <div className="flex gap-3">
                  <Link href="tel:915270049" className="flex-1">
                    <Button 
                      className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-6 text-base rounded-md shadow-xl"
                    >
                      Llamar
                    </Button>
                  </Link>
                  <Link href="#contacto" className="flex-1">
                    <Button 
                      variant="outline" 
                      className="w-full border-2 border-white bg-white text-gray-900 hover:bg-gray-100 font-semibold py-6 text-base rounded-md shadow-xl"
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
