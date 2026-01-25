import SEOHead from "@/components/SEOHead";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  APP_BUSINESS_NAME,
  APP_LOCATION,
  APP_PHONE,
  APP_PHONE_DISPLAY,
} from "@/const";
import {
  Phone,
  Clock,
  Shield,
  MapPin,
  Lock,
  Home as HomeIcon,
  CheckCircle,
  Wrench,
  ArrowRight,
} from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Link } from "wouter";
import React, { Suspense, lazy } from "react";

const ServicesCarousel = lazy(() => import("@/components/home/ServicesCarousel"));
const LocationSection = lazy(() => import("@/components/home/LocationSection"));
const BrandsSection = lazy(() => import("@/components/BrandsSection"));

const SectionLoader = () => <div className="h-60 w-full bg-gray-50 flex items-center justify-center text-gray-400">Cargando...</div>;

export default function Home() {
  const services = [
    {
      icon: <HomeIcon className="h-8 w-8" />,
      title: "Apertura de Puertas",
      description: "Sin daños • Llegada en 20 min",
    },
    {
      icon: <Lock className="h-8 w-8" />,
      title: "Cambio de Cerraduras",
      description: "Alta seguridad • Antibumping",
    },
    {
      icon: <Clock className="h-8 w-8" />,
      title: "Urgencias 24 Horas",
      description: "Noches • Festivos • Fines de semana",
    },
  ];

  const whyChooseUs = [
    {
      icon: <Clock className="h-6 w-6" />,
      title: "Atención rápida",
      description: "Llegamos en 20 minutos a cualquier punto de Villaviciosa del Odón.",
    },
    {
      icon: <Wrench className="h-6 w-6" />,
      title: "Profesionales",
      description: "Cerrajeros con experiencia y herramientas profesionales.",
    },
    {
      icon: <Shield className="h-6 w-6" />,
      title: "Soluciones a medida",
      description: "Adaptamos nuestro servicio a tus necesidades específicas.",
    },
    {
      icon: <CheckCircle className="h-6 w-6" />,
      title: "Transparencia",
      description: "Precio cerrado por teléfono. Sin sorpresas en la factura.",
    },
  ];

  const zones = [
    "Centro",
    "El Bosque",
    "Campodón",
    "Castillo",
    "Villaviciosa del Odón Norte",
    "Río Guadarrama",
    "La Vega",
    "Monreal",
    "Sacedón",
    "Dehesa del Sotillo",
  ];

  const faqs = [
    {
      question: "¿Cuánto cobra un cerrajero por abrir una puerta en Villaviciosa del Odón?",
      answer: `En ${APP_BUSINESS_NAME}, el servicio de apertura de puertas cuesta 90€ en horario normal (lunes a viernes de 08:00 a 19:00h) y 120€ fuera de este horario (noches, fines de semana y festivos). No cobramos desplazamiento.`,
    },
    {
      question: "¿Qué marcas de cerraduras instaláis?",
      answer: "Trabajamos con todas las marcas de confianza: Tesa, Mottura, Ezcurra, FAC, Mul-T-Lock, Cisa, Fichet, Corbin, Lince y Mauer. Tenemos repuestos originales.",
    },
    {
      question: "¿Cuánto tardáis en llegar a mi barrio?",
      answer: "Garantizamos una llegada en 20 minutos a cualquier zona de Villaviciosa del Odón. Nuestras unidades móviles están siempre operativas.",
    },
    {
      question: "¿Hacéis cambios de bombín antibumping?",
      answer: "Sí, instalamos cilindros de alta seguridad que protegen contra el bumping, el ganzuado y la extracción técnica.",
    },
    {
      question: "¿Se puede pagar con tarjeta?",
      answer: "Sí, todos nuestros cerrajeros llevan datáfono móvil para pagar con tarjeta de crédito o débito.",
    },
    {
      question: "¿Abrís puertas sin romper la cerradura?",
      answer: "Nuestra prioridad es la apertura limpia. Abrimos la mayoría de puertas sin causar daños.",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <SEOHead />
      <Header />

      <main className="pt-16 md:pt-20">
        {/* Hero Section - Tesla Style */}
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
          {/* Imagen de fondo */}
          <div className="absolute inset-0 z-0">
            <img
              src="/images/hero-moderno-villaviciosa24h.webp"
              alt="Cerrajería profesional"
              width="1920"
              height="1080"
              loading="eager"
              fetchPriority="high"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-white"></div>
          </div>

          {/* Contenido centrado */}
          <div className="relative z-10 container text-center py-32">
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-8 tracking-tight">
              Cerrajeros en<br />Villaviciosa del Odón
            </h1>
            
            <p className="text-xl md:text-2xl text-white/90 mb-12 max-w-2xl mx-auto font-light">
              Servicio profesional 24 horas. Llegamos en 20 minutos.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button
                asChild
                size="lg"
                className="btn-tesla text-base px-12 py-6"
              >
                <a href={`tel:${APP_PHONE}`} className="flex items-center gap-3">
                  <Phone className="h-5 w-5" />
                  <span>Llamar {APP_PHONE_DISPLAY}</span>
                </a>
              </Button>
              
              <Button
                asChild
                size="lg"
                className="btn-tesla-outline text-base px-12 py-6 bg-white/10 backdrop-blur-sm text-white border-white hover:bg-white hover:text-black"
              >
                <Link href="/#servicios">
                  <span>Ver servicios</span>
                </Link>
              </Button>
            </div>

            {/* Quick services */}
            <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              {services.map((service, index) => (
                <div key={index} className="card-tesla p-6 bg-white/95 backdrop-blur-sm">
                  <div className="flex flex-col items-center text-center gap-3">
                    <div className="text-primary">{service.icon}</div>
                    <h3 className="font-semibold text-lg">{service.title}</h3>
                    <p className="text-sm text-gray-600">{service.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Servicios Section */}
        <section id="servicios" className="section-spacing bg-white">
          <div className="container">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Servicios de Cerrajería
              </h2>
              <p className="text-xl text-gray-600">
                Soluciones profesionales para tu hogar o negocio en {APP_LOCATION}.
              </p>
            </div>

            <Suspense fallback={<SectionLoader />}>
              <ServicesCarousel />
            </Suspense>
          </div>
        </section>

        {/* Por qué elegirnos */}
        <section className="section-spacing bg-gray-50">
          <div className="container">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                ¿Por qué elegirnos?
              </h2>
              <p className="text-xl text-gray-600">
                Somos cerrajeros locales comprometidos con nuestros vecinos.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
              {whyChooseUs.map((item, index) => (
                <div key={index} className="text-center">
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary text-white mb-4">
                    {item.icon}
                  </div>
                  <h3 className="font-semibold text-lg mb-2">{item.title}</h3>
                  <p className="text-gray-600 text-sm">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Zonas */}
        <section id="zonas" className="section-spacing bg-white">
          <div className="container">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Llegamos a todos los barrios
              </h2>
              <p className="text-xl text-gray-600">
                Conocemos cada rincón de Villaviciosa del Odón.
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 max-w-5xl mx-auto">
              {zones.map((zone, index) => (
                <div key={index} className="card-tesla p-4 text-center hover:shadow-lg transition-shadow">
                  <MapPin className="h-5 w-5 mx-auto mb-2 text-gray-400" />
                  <span className="text-sm font-medium">{zone}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Ubicación */}
        <Suspense fallback={<SectionLoader />}>
          <LocationSection />
        </Suspense>

        {/* Marcas */}
        <Suspense fallback={<SectionLoader />}>
          <BrandsSection />
        </Suspense>

        {/* FAQ */}
        <section className="section-spacing bg-gray-50">
          <div className="container">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Preguntas Frecuentes
              </h2>
            </div>

            <div className="max-w-3xl mx-auto space-y-6">
              {faqs.map((faq, index) => (
                <div key={index} className="card-tesla p-6">
                  <h3 className="font-semibold text-lg mb-3">{faq.question}</h3>
                  <p className="text-gray-600">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Final */}
        <section className="section-spacing bg-primary text-white">
          <div className="container text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              ¿Necesitas un cerrajero urgente?
            </h2>
            <p className="text-xl mb-8 text-white/90">
              Estaremos en tu puerta en menos de 20 minutos.
            </p>
            <Button
              asChild
              size="lg"
              className="bg-white text-primary hover:bg-gray-100 text-base px-12 py-6 rounded-full font-medium uppercase tracking-wide"
            >
              <a href={`tel:${APP_PHONE}`} className="flex items-center gap-3">
                <Phone className="h-5 w-5" />
                <span>Llamar {APP_PHONE_DISPLAY}</span>
              </a>
            </Button>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
