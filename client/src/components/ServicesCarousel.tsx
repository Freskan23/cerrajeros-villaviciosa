import React, { useState, useRef, useEffect } from "react";
import { Key, Lock, Wrench, Clock, Shield, Home as HomeIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";

interface Service {
  id: number;
  title: string;
  subtitle: string;
  image: string;
  icon: React.ReactNode;
}

const services: Service[] = [
  {
    id: 1,
    title: "Apertura de Puertas",
    subtitle: "Desde 90€",
    image: "/servicio-apertura-puertas.jpg",
    icon: <Key className="w-6 h-6" />,
  },
  {
    id: 2,
    title: "Instalación de Cerraduras",
    subtitle: "Alta seguridad",
    image: "/instalacion-cerraduras.jpg",
    icon: <Lock className="w-6 h-6" />,
  },
  {
    id: 3,
    title: "Reparación y Mantenimiento",
    subtitle: "Servicio completo",
    image: "/cerraduras-seguridad.jpg",
    icon: <Wrench className="w-6 h-6" />,
  },
  {
    id: 4,
    title: "Servicio de Emergencia",
    subtitle: "Disponible 24/7",
    image: "/cerrajero-emergencia.jpg",
    icon: <Clock className="w-6 h-6" />,
  },
  {
    id: 5,
    title: "Seguridad Avanzada",
    subtitle: "Última generación",
    image: "/cerraduras-seguridad.jpg",
    icon: <Shield className="w-6 h-6" />,
  },
  {
    id: 6,
    title: "Duplicado de Llaves",
    subtitle: "Servicio inmediato",
    image: "/hero-cerrajero-profesional.jpg",
    icon: <HomeIcon className="w-6 h-6" />,
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
        className="flex overflow-x-auto snap-x snap-mandatory scrollbar-hide gap-3 px-5"
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      >
        {services.map((service) => (
          <div
            key={service.id}
            className="min-w-[85vw] snap-center relative flex-shrink-0 rounded-xl overflow-hidden"
            style={{ height: '480px' }}
          >
            {/* Background Image */}
            <div className="absolute inset-0">
              <img
                src={service.image}
                alt={service.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent" />
            </div>

            {/* Content */}
            <div className="relative h-full flex flex-col justify-between p-8">
              {/* Top: Subtitle */}
              <div>
                <p className="text-xs font-medium text-white/80 tracking-widest uppercase">
                  {service.subtitle}
                </p>
              </div>

              {/* Bottom: Title + Buttons */}
              <div>
                <h3 className="text-4xl font-bold text-white mb-8 leading-tight tracking-tight">
                  {service.title}
                </h3>

                {/* Buttons */}
                <div className="flex gap-3">
                  <Link href="tel:915270049" className="flex-1">
                    <Button 
                      size="lg"
                      className="w-full bg-white text-primary hover:bg-white/90 font-semibold rounded-md transition-all"
                    >
                      Llamar
                    </Button>
                  </Link>
                  <Link href="#contacto" className="flex-1">
                    <Button 
                      size="lg"
                      variant="outline" 
                      className="w-full border-2 border-white/80 bg-transparent text-white hover:bg-white/10 font-semibold rounded-md backdrop-blur-sm transition-all"
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
      <div className="flex justify-center gap-1.5 mt-6">
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
            className={`h-1.5 rounded-full transition-all duration-300 ${
              index === currentIndex
                ? 'bg-primary w-6'
                : 'bg-gray-300 w-1.5'
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
