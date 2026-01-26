import { Card, CardContent } from "@/components/ui/card";
import { Link } from "wouter";
import { ArrowRight } from "lucide-react";

interface Service {
  title: string;
  description: string;
  href: string;
  icon: string;
}

interface RelatedServicesProps {
  currentService: string;
}

export default function RelatedServices({ currentService }: RelatedServicesProps) {
  const allServices: Service[] = [
    {
      title: "Apertura de Puertas",
      description: "Servicio urgente sin daños desde 90€",
      href: "/apertura-puertas",
      icon: "🔓",
    },
    {
      title: "Cambio de Cerraduras",
      description: "Instalación de cerraduras de alta seguridad",
      href: "/cambio-cerraduras",
      icon: "🔧",
    },
    {
      title: "Cambio de Bombín",
      description: "Cambio rápido en 15-20 minutos",
      href: "/cambio-bombin",
      icon: "🔑",
    },
    {
      title: "Cierres Metálicos",
      description: "Reparación de persianas de comercio",
      href: "/reparacion-cierres-metalicos",
      icon: "🏪",
    },
    {
      title: "Cajas Fuertes",
      description: "Apertura técnica de cajas de caudales",
      href: "/apertura-cajas-fuertes",
      icon: "🔐",
    },
    {
      title: "Cerrojos Seguridad",
      description: "Instalación de refuerzos anti-bumping",
      href: "/cerrojos-seguridad",
      icon: "🛡️",
    },
    {
      title: "Muelles",
      description: "Cierrapuertas para comunidades",
      href: "/muelles-cierrapuertas",
      icon: "🚪",
    },
    {
      title: "Desahucios",
      description: "Asistencia para lanzamientos judiciales",
      href: "/desahucios",
      icon: "👮",
    },
  ];

  // Filtrar el servicio actual y mostrar solo 3 servicios relacionados
  const relatedServices = allServices
    .filter((service) => service.title !== currentService)
    .sort(() => Math.random() - 0.5) // Aleatorizar un poco
    .slice(0, 3);

  return (
    <section className="py-24 bg-gray-50 border-t border-gray-100">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-black mb-4 tracking-tight">
            TE PUEDE INTERESAR
          </h2>
          <p className="text-lg text-gray-500 font-light max-w-2xl mx-auto">
            Soluciones complementarias para reforzar la seguridad de tu inmueble.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {relatedServices.map((service, index) => (
            <Link key={index} href={service.href}>
              <div className="bg-white p-8 rounded-[2rem] shadow-sm hover:shadow-2xl hover:border-accent border border-white transition-all duration-500 cursor-pointer group">
                <div className="text-5xl mb-6 grayscale group-hover:grayscale-0 transition-all duration-500">{service.icon}</div>
                <h3 className="text-xl font-bold mb-3 text-gray-900 tracking-tight">
                  {service.title}
                </h3>
                <p className="text-gray-500 font-light mb-6 text-sm">{service.description}</p>
                <div className="flex items-center text-accent font-bold group-hover:gap-3 transition-all gap-2">
                  Ver más <ArrowRight className="h-4 w-4" />
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            href="/#servicios"
            className="inline-flex items-center gap-2 bg-gray-200 hover:bg-black hover:text-white px-8 py-3 rounded-full font-bold transition-all"
          >
            Todos los servicios
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
