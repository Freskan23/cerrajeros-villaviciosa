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
    subtitle: "Servicio urgente 24h",
    price: "Precio cerrado · Sin daños",
    image: "/servicio-apertura-puertas-new.webp",
  },
  {
    id: 2,
    title: "Instalación de Cerraduras",
    subtitle: "Alta seguridad",
    price: "Consultar precio",
    image: "/instalacion-cerraduras-new.webp",
  },
  {
    id: 3,
    title: "Reparación y Mantenimiento",
    subtitle: "Servicio completo",
    price: "Desde 60€",
    image: "/reparacion-mantenimiento-new.webp",
  },
  {
    id: 4,
    title: "Servicio de Emergencia",
    subtitle: "Disponible 24/7",
    price: "Desde 120€",
    image: "/servicio-emergencia-new.webp",
  },
  {
    id: 5,
    title: "Seguridad Avanzada",
    subtitle: "Última generación",
    price: "Consultar precio",
    image: "/seguridad-avanzada-new.webp",
  },
  {
    id: 6,
    title: "Duplicado de Llaves",
    subtitle: "Servicio rápido",
    price: "Desde 15€",
    image: "/duplicado-llaves-new.webp",
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
            className="relative w-full max-w-sm min-w-[90vw] snap-center h-[480px] rounded-2xl overflow-hidden flex-shrink-0"
          >
            {/* Imagen */}
            <img
              src={service.image}
              alt={service.title}
              className="absolute inset-0 w-full h-full object-cover"
            />

            {/* Degradado mejorado: más oscuro también arriba */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/20" />

            {/* Contenido */}
            <div className="relative h-full flex flex-col justify-between p-5">
              {/* Texto superior - BLANCO PURO con text-shadow */}
              <div>
                <p 
                  className="text-sm text-white font-medium"
                  style={{ textShadow: '0 2px 10px rgba(0,0,0,0.9), 0 0 20px rgba(0,0,0,0.8)' }}
                >
                  {service.subtitle}
                </p>
                <h3 
                  className="text-3xl font-semibold leading-tight mt-1 text-white"
                  style={{ textShadow: '0 2px 12px rgba(0,0,0,0.95), 0 0 25px rgba(0,0,0,0.9)' }}
                >
                  {service.title}
                </h3>
                <p 
                  className="mt-1 text-sm text-white font-medium"
                  style={{ textShadow: '0 2px 10px rgba(0,0,0,0.9), 0 0 20px rgba(0,0,0,0.8)' }}
                >
                  {service.price}
                </p>
              </div>

              {/* Botones */}
              <div className="flex gap-3">
                <Link href="tel:915270049" className="flex-1">
                  <button className="w-full bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium py-3 rounded-lg text-center transition-colors">
                    Llamar
                  </button>
                </Link>

                <Link href="#contacto" className="flex-1">
                  <button className="w-full bg-white text-black text-sm font-medium py-3 rounded-lg text-center hover:bg-gray-100 transition-colors">
                    Saber más
                  </button>
                </Link>
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
