import SEOHead from "@/components/SEOHead";
import { Button } from "@/components/ui/button";
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
  Key,
  CheckCircle2,
} from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Link } from "wouter";
import React from "react";

export default function Home() {
  const zones = [
    "Centro",
    "El Bosque",
    "Campodón",
    "Castillo",
    "Casa de Roque",
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
        {/* Hero Section - Tesla Style con nueva imagen */}
        <section className="relative h-screen flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 z-0">
            <img
              src="/hero-background-minimal.webp"
              alt="Cerrajeros Villaviciosa del Odón"
              className="w-full h-full object-cover"
              loading="eager"
            />
          </div>

          <div className="relative z-10 container text-center">
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-primary mb-8 tracking-tight">
              Cerrajeros<br />Villaviciosa del Odón
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-700 mb-12 max-w-2xl mx-auto font-light">
              Servicio profesional 24 horas. Llegamos en 20 minutos. Sin daños, sin sorpresas.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a
                href={`tel:${APP_PHONE}`}
                className="btn-tesla flex items-center gap-3 text-lg px-10 py-5"
              >
                <Phone className="h-5 w-5" />
                {APP_PHONE_DISPLAY}
              </a>
              
              <a
                href="#servicios"
                className="btn-tesla-outline text-white border-white hover:bg-white hover:text-black text-lg px-10 py-5"
              >
                Ver Servicios
              </a>
            </div>
          </div>

          {/* Scroll indicator */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
            <div className="w-6 h-10 border-2 border-white/50 rounded-full flex items-start justify-center p-2">
              <div className="w-1 h-3 bg-white/50 rounded-full" />
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-20 bg-gray-50">
          <div className="container">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center max-w-5xl mx-auto">
              <div>
                <div className="text-5xl md:text-6xl font-bold text-primary mb-2">24/7</div>
                <div className="text-gray-600 font-medium">Disponibles</div>
              </div>
              <div>
                <div className="text-5xl md:text-6xl font-bold text-primary mb-2">20min</div>
                <div className="text-gray-600 font-medium">Tiempo llegada</div>
              </div>
              <div>
                <div className="text-5xl md:text-6xl font-bold text-primary mb-2">+15</div>
                <div className="text-gray-600 font-medium">Años experiencia</div>
              </div>
              <div>
                <div className="text-5xl md:text-6xl font-bold text-primary mb-2">100%</div>
                <div className="text-gray-600 font-medium">Satisfacción</div>
              </div>
            </div>
          </div>
        </section>

        {/* Servicios Section */}
        <section id="servicios" className="section-spacing bg-white">
          <div className="container">
            <div className="text-center mb-20">
              <h2 className="text-4xl md:text-6xl font-bold mb-6">Nuestros Servicios</h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Soluciones profesionales de cerrajería para hogares y negocios en {APP_LOCATION}
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {/* Servicio 1 */}
              <div className="card-tesla p-8 group">
                <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mb-6 group-hover:bg-accent/20 transition-colors">
                  <Key className="w-8 h-8 text-accent" />
                </div>
                <h3 className="text-2xl font-semibold mb-4">Apertura de Puertas</h3>
                <p className="text-gray-600 mb-6">
                  Apertura sin daños de todo tipo de puertas. Técnicas profesionales que preservan su cerradura.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-center gap-2 text-sm">
                    <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0" />
                    <span>Sin daños en puerta o cerradura</span>
                  </li>
                  <li className="flex items-center gap-2 text-sm">
                    <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0" />
                    <span>Servicio 24 horas</span>
                  </li>
                  <li className="flex items-center gap-2 text-sm">
                    <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0" />
                    <span>Llegada en 20 minutos</span>
                  </li>
                </ul>
              </div>

              {/* Servicio 2 */}
              <div className="card-tesla p-8 group">
                <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mb-6 group-hover:bg-accent/20 transition-colors">
                  <Lock className="w-8 h-8 text-accent" />
                </div>
                <h3 className="text-2xl font-semibold mb-4">Instalación de Cerraduras</h3>
                <p className="text-gray-600 mb-6">
                  Instalación profesional de cerraduras de alta seguridad, cerraduras inteligentes y bombines.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-center gap-2 text-sm">
                    <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0" />
                    <span>Cerraduras de máxima seguridad</span>
                  </li>
                  <li className="flex items-center gap-2 text-sm">
                    <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0" />
                    <span>Cerraduras inteligentes</span>
                  </li>
                  <li className="flex items-center gap-2 text-sm">
                    <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0" />
                    <span>Garantía de instalación</span>
                  </li>
                </ul>
              </div>

              {/* Servicio 3 */}
              <div className="card-tesla p-8 group">
                <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mb-6 group-hover:bg-accent/20 transition-colors">
                  <Wrench className="w-8 h-8 text-accent" />
                </div>
                <h3 className="text-2xl font-semibold mb-4">Reparación y Mantenimiento</h3>
                <p className="text-gray-600 mb-6">
                  Reparación de cerraduras, cierres metálicos, persianas y sistemas de seguridad.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-center gap-2 text-sm">
                    <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0" />
                    <span>Reparación de cerraduras</span>
                  </li>
                  <li className="flex items-center gap-2 text-sm">
                    <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0" />
                    <span>Cierres metálicos</span>
                  </li>
                  <li className="flex items-center gap-2 text-sm">
                    <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0" />
                    <span>Mantenimiento preventivo</span>
                  </li>
                </ul>
              </div>

              {/* Servicio 4 */}
              <div className="card-tesla p-8 group">
                <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mb-6 group-hover:bg-accent/20 transition-colors">
                  <Clock className="w-8 h-8 text-accent" />
                </div>
                <h3 className="text-2xl font-semibold mb-4">Servicio de Emergencia</h3>
                <p className="text-gray-600 mb-6">
                  Disponibles 24/7 para emergencias. Llegamos rápido cuando más nos necesitas.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-center gap-2 text-sm">
                    <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0" />
                    <span>Disponible 24/7</span>
                  </li>
                  <li className="flex items-center gap-2 text-sm">
                    <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0" />
                    <span>Respuesta inmediata</span>
                  </li>
                  <li className="flex items-center gap-2 text-sm">
                    <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0" />
                    <span>Sin recargos nocturnos</span>
                  </li>
                </ul>
              </div>

              {/* Servicio 5 */}
              <div className="card-tesla p-8 group">
                <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mb-6 group-hover:bg-accent/20 transition-colors">
                  <Shield className="w-8 h-8 text-accent" />
                </div>
                <h3 className="text-2xl font-semibold mb-4">Seguridad Avanzada</h3>
                <p className="text-gray-600 mb-6">
                  Sistemas de seguridad de última generación para máxima protección de su hogar.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-center gap-2 text-sm">
                    <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0" />
                    <span>Cerraduras antibumping</span>
                  </li>
                  <li className="flex items-center gap-2 text-sm">
                    <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0" />
                    <span>Sistemas biométricos</span>
                  </li>
                  <li className="flex items-center gap-2 text-sm">
                    <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0" />
                    <span>Asesoramiento personalizado</span>
                  </li>
                </ul>
              </div>

              {/* Servicio 6 */}
              <div className="card-tesla p-8 group">
                <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mb-6 group-hover:bg-accent/20 transition-colors">
                  <HomeIcon className="w-8 h-8 text-accent" />
                </div>
                <h3 className="text-2xl font-semibold mb-4">Duplicado de Llaves</h3>
                <p className="text-gray-600 mb-6">
                  Duplicado profesional de todo tipo de llaves con maquinaria de precisión.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-center gap-2 text-sm">
                    <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0" />
                    <span>Llaves de seguridad</span>
                  </li>
                  <li className="flex items-center gap-2 text-sm">
                    <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0" />
                    <span>Llaves de coche</span>
                  </li>
                  <li className="flex items-center gap-2 text-sm">
                    <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0" />
                    <span>Servicio inmediato</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section con imagen */}
        <section className="relative py-32 overflow-hidden">
          <div className="absolute inset-0">
            <img
              src="/cerrajero-emergencia.jpg"
              alt="Servicio de emergencia 24h"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/75" />
          </div>
          <div className="relative z-10 container text-center text-white">
            <h2 className="text-4xl md:text-6xl font-bold mb-6">
              ¿Necesitas un cerrajero ahora?
            </h2>
            <p className="text-xl md:text-2xl mb-10 max-w-2xl mx-auto font-light">
              Estamos disponibles 24/7 para ayudarte. Llegamos en 20 minutos.
            </p>
            <a
              href={`tel:${APP_PHONE}`}
              className="inline-flex items-center gap-3 bg-white text-primary px-12 py-6 rounded-full text-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              <Phone className="w-6 h-6" />
              Llamar Ahora: {APP_PHONE_DISPLAY}
            </a>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="section-spacing bg-white">
          <div className="container">
            <div className="grid md:grid-cols-2 gap-16 items-center max-w-6xl mx-auto">
              <div>
                <h2 className="text-4xl md:text-5xl font-bold mb-6">
                  Por qué elegirnos
                </h2>
                <p className="text-xl text-gray-600 mb-10">
                  Somos el servicio de cerrajería de confianza en {APP_LOCATION}. Profesionalidad, rapidez y transparencia.
                </p>
                <div className="space-y-6">
                  <div className="flex gap-4">
                    <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center flex-shrink-0">
                      <CheckCircle className="w-6 h-6 text-accent" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2">Profesionales Certificados</h3>
                      <p className="text-gray-600">
                        Equipo con más de 15 años de experiencia y formación continua.
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center flex-shrink-0">
                      <CheckCircle className="w-6 h-6 text-accent" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2">Precios Transparentes</h3>
                      <p className="text-gray-600">
                        Sin sorpresas. Presupuesto claro antes de comenzar el trabajo.
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center flex-shrink-0">
                      <CheckCircle className="w-6 h-6 text-accent" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2">Garantía de Servicio</h3>
                      <p className="text-gray-600">
                        Todos nuestros trabajos están garantizados. Tu tranquilidad es nuestra prioridad.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="relative h-[500px] rounded-2xl overflow-hidden">
                <img
                  src="/instalacion-cerraduras.jpg"
                  alt="Instalación profesional de cerraduras"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Zonas */}
        <section id="zonas" className="section-spacing bg-gray-50">
          <div className="container">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Llegamos a todos los barrios
              </h2>
              <p className="text-xl text-gray-600">
                Conocemos cada rincón de Villaviciosa del Odón
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 max-w-5xl mx-auto">
              {zones.map((zone, index) => (
                <div key={index} className="card-tesla p-6 text-center group">
                  <MapPin className="h-6 w-6 mx-auto mb-3 text-accent group-hover:scale-110 transition-transform" />
                  <span className="text-sm font-medium">{zone}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="section-spacing bg-white">
          <div className="container">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Preguntas Frecuentes
              </h2>
            </div>

            <div className="max-w-3xl mx-auto space-y-6">
              {faqs.map((faq, index) => (
                <div key={index} className="card-tesla p-8">
                  <h3 className="font-semibold text-xl mb-4">{faq.question}</h3>
                  <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
