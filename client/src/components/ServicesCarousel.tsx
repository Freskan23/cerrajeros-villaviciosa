import React, { useState, useRef, useEffect } from "react";
import { Key, Lock, Wrench, Clock, Shield, Home as HomeIcon, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";

interface Service {
  id: number;
  title: string;
  subtitle: string;
  description: string;
  image: string;
  icon: React.ReactNode;
  features: string[];
}

const services: Service[] = [
  {
    id: 1,
    title: "Apertura de Puertas",
    subtitle: "Desde 90€",
    description: "Apertura sin daños de todo tipo de puertas. Técnicas profesionales que preservan su cerradura.",
    image: "/servicio-apertura-puertas.jpg",
    icon: <Key className="w-8 h-8" />,
    features: ["Sin daños", "Servicio 24h", "Llegada 20min"]
  },
  {
    id: 2,
    title: "Instalación de Cerraduras",
    subtitle: "Alta seguridad",
    description: "Instalación profesional de cerraduras de alta seguridad, cerraduras inteligentes y bombines.",
    image: "/instalacion-cerraduras.jpg",
    icon: <Lock className="w-8 h-8" />,
    features: ["Máxima seguridad", "Cerraduras inteligentes", "Garantía incluida"]
  },
  {
    id: 3,
    title: "Reparación y Mantenimiento",
    subtitle: "Servicio completo",
    description: "Reparación de cerraduras, cierres metálicos, persianas y sistemas de seguridad.",
    image: "/cerraduras-seguridad.jpg",
    icon: <Wrench className="w-8 h-8" />,
    features: ["Reparación experta", "Cierres metálicos", "Mantenimiento preventivo"]
  },
  {
    id: 4,
    title: "Servicio de Emergencia",
    subtitle: "Disponible 24/7",
    description: "Disponibles 24/7 para emergencias. Llegamos rápido cuando más nos necesitas.",
    image: "/cerrajero-emergencia.jpg",
    icon: <Clock className="w-8 h-8" />,
    features: ["Disponible 24/7", "Respuesta inmediata", "Sin recargos nocturnos"]
  },
  {
    id: 5,
    title: "Seguridad Avanzada",
    subtitle: "Última generación",
    description: "Sistemas de seguridad de última generación para máxima protección de su hogar.",
    image: "/cerraduras-seguridad.jpg",
    icon: <Shield className="w-8 h-8" />,
    features: ["Antibumping", "Sistemas biométricos", "Asesoramiento"]
  },
  {
    id: 6,
    title: "Duplicado de Llaves",
    subtitle: "Servicio inmediato",
    description: "Duplicado profesional de todo tipo de llaves con maquinaria de precisión.",
    image: "/hero-cerrajero-profesional.jpg",
    icon: <HomeIcon className="w-8 h-8" />,
    features: ["Llaves de seguridad", "Llaves de coche", "Precisión garantizada"]
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
        className="flex overflow-x-auto snap-x snap-mandatory scrollbar-hide"
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      >
        {services.map((service) => (
          <div
            key={service.id}
            className="min-w-full snap-center relative h-[600px] flex-shrink-0"
          >
            {/* Background Image */}
            <div className="absolute inset-0">
              <img
                src={service.image}
                alt={service.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-black/30" />
            </div>

            {/* Content */}
            <div className="relative h-full flex flex-col justify-end p-6 pb-8 text-white">
              <div className="mb-4">
                <p className="text-sm font-medium text-gray-300 mb-2">{service.subtitle}</p>
                <h3 className="text-4xl font-bold mb-4 leading-tight">{service.title}</h3>
                <p className="text-base text-gray-200 mb-6 leading-relaxed">
                  {service.description}
                </p>

                {/* Features */}
                <ul className="space-y-2 mb-8">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-sm">
                      <CheckCircle2 className="w-4 h-4 text-accent flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Buttons */}
              <div className="flex gap-3">
                <Link href={`tel:915270049`} className="flex-1">
                  <Button className="w-full bg-accent hover:bg-accent/90 text-white font-semibold py-6 text-base">
                    Llamar
                  </Button>
                </Link>
                <Link href="#contacto" className="flex-1">
                  <Button variant="outline" className="w-full border-2 border-white text-white hover:bg-white hover:text-primary font-semibold py-6 text-base">
                    Saber más
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Dot Indicators */}
      <div className="absolute bottom-32 left-0 right-0 flex justify-center gap-2 z-20">
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
            className={`w-2 h-2 rounded-full transition-all ${
              index === currentIndex
                ? 'bg-white w-8'
                : 'bg-white/50'
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
