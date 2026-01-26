import { Link } from "wouter";
import { ArrowRight, Lock, Shield, Key, Store, Zap, Home as HomeIcon, ShieldCheck, UserCheck } from "lucide-react";
import React from "react";

interface Service {
  title: string;
  description: string;
  href: string;
  icon: React.ReactNode;
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
      icon: <Lock className="w-8 h-8" />,
    },
    {
      title: "Cambio de Cerraduras",
      description: "Instalación de cerraduras de alta seguridad",
      href: "/cambio-cerraduras",
      icon: <ShieldCheck className="w-8 h-8" />,
    },
    {
      title: "Cambio de Bombín",
      description: "Cambio rápido en 15-20 minutos",
      href: "/cambio-bombin",
      icon: <Key className="w-8 h-8" />,
    },
    {
      title: "Cierres Metálicos",
      description: "Reparación de persianas de comercio",
      href: "/reparacion-cierres-metalicos",
      icon: <Store className="w-8 h-8" />,
    },
    {
      title: "Cajas Fuertes",
      description: "Apertura técnica de cajas de caudales",
      href: "/apertura-cajas-fuertes",
      icon: <Zap className="w-8 h-8" />,
    },
    {
      title: "Cerrojos Seguridad",
      description: "Instalación de refuerzos anti-bumping",
      href: "/cerrojos-seguridad",
      icon: <HomeIcon className="w-8 h-8" />,
    },
    {
      title: "Muelles",
      description: "Cierrapuertas para comunidades",
      href: "/muelles-cierrapuertas",
      icon: <Shield className="w-8 h-8" />,
    },
    {
      title: "Desahucios",
      description: "Asistencia para lanzamientos judiciales",
      href: "/desahucios",
      icon: <UserCheck className="w-8 h-8" />,
    },
  ];

  // Filtrar el servicio actual y mostrar solo 3 servicios relacionados
  const relatedServices = allServices
    .filter((service) => service.title !== currentService)
    .sort(() => Math.random() - 0.5)
    .slice(0, 3);

  return (
    <section className="py-24 bg-gray-50 border-t border-gray-100">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 space-y-4">
          <span className="text-primary font-black uppercase tracking-[0.3em] text-[10px] md:text-xs">Seguridad Adicional</span>
          <h2 className="text-3xl md:text-5xl font-black mb-4 tracking-tighter uppercase italic leading-tight">
            TE PUEDE INTERESAR
          </h2>
          <p className="text-lg text-gray-500 font-light max-w-2xl mx-auto">
            Soluciones complementarias para reforzar la seguridad de tu inmueble en Villaviciosa del Odón.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 max-w-6xl mx-auto px-4 md:px-0">
          {relatedServices.map((service, index) => (
            <Link key={index} href={service.href}>
              <div className="bg-white p-10 rounded-[2.5rem] shadow-sm hover:shadow-2xl hover:border-[#E55A2B]/10 border border-transparent transition-all duration-700 cursor-pointer group flex flex-col h-full">
                <div className="text-primary mb-8 group-hover:scale-110 transition-transform origin-left duration-700">
                  {service.icon}
                </div>
                <h3 className="text-xl font-black mb-3 text-gray-900 tracking-tight uppercase">
                  {service.title}
                </h3>
                <p className="text-gray-500 font-light mb-8 text-sm leading-relaxed flex-grow">{service.description}</p>
                <div className="flex items-center text-[#E55A2B] font-black text-xs uppercase tracking-[0.2em] group-hover:gap-4 transition-all gap-2">
                  Explorar ahora <ArrowRight className="h-4 w-4" />
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="text-center mt-16">
          <Link
            href="/#servicios"
            className="inline-flex items-center gap-2 bg-black text-white px-10 py-4 rounded-full font-black uppercase tracking-widest text-xs hover:bg-[#E55A2B] transition-all duration-500 shadow-xl"
          >
            Ver todos los servicios
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
