import SEOHead from "@/components/SEOHead";
import {
  APP_BUSINESS_NAME,
  APP_PHONE,
  APP_PHONE_DISPLAY,
  APP_LOCATION,
} from "@/const";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BrandsSection from "@/components/BrandsSection";
import FAQSection from "@/components/FAQSection";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import {
  ShieldCheck,
  Zap,
  MapPin,
  Star,
  ChevronRight,
  Lock,
  Key,
  Home as HomeIcon,
  Store,
  Phone,
  Clock,
  Shield,
  ArrowRight
} from "lucide-react";
import React from "react";

const HERO_ITEMS = [
  {
    title: "Cerrajeros Villaviciosa del Odón 24h",
    subtitle: "Llegamos en 20 minutos · Apertura sin daños garantizada",
    image: "/cerrajero-emergencia.jpg", // Usando una imagen más real/humana si está disponible
    primaryAction: { text: `Llamar ahora: ${APP_PHONE_DISPLAY}`, href: `tel:${APP_PHONE}` },
    secondaryAction: { text: "Precios y Servicios", href: "#servicios" },
    trustBadges: [
      { icon: <Clock className="w-4 h-4" />, text: "20 min" },
      { icon: <Shield className="w-4 h-4" />, text: "Sin Daños" },
      { icon: <Zap className="w-4 h-4" />, text: "Urgente" }
    ]
  },
  {
    title: "Seguridad Antibumping Especializada",
    subtitle: "Instalación inmediata en Villaviciosa · Protege tu hogar hoy",
    image: "/cambio-bombin.jpg",
    primaryAction: { text: "Presupuesto Gratis", href: `tel:${APP_PHONE}` },
    secondaryAction: { text: "Ver Bombines", href: "/cambio-bombin" },
  }
];

const SERVICES_GRID = [
  {
    title: "Apertura de Puertas",
    desc: "Servicio ultra-rápido para aperturas de urgencia. Especialistas en acorazadas sin rotura.",
    href: "/apertura-puertas",
    icon: <Lock className="w-8 h-8" />
  },
  {
    title: "Cambio de Bombín",
    desc: "Mejora tu seguridad con bombines antibumping de alta gama. Instalación en el acto.",
    href: "/cambio-bombin",
    icon: <Key className="w-8 h-8" />
  },
  {
    title: "Cerraduras de Seguridad",
    desc: "Instalación de cerraduras multipunto y escudos protectores acorazados.",
    href: "/cambio-cerraduras",
    icon: <ShieldCheck className="w-8 h-8" />
  },
  {
    title: "Cajas Fuertes",
    desc: "Apertura técnica de cajas de caudales por olvido de clave o fallo mecánico.",
    href: "/apertura-cajas-fuertes",
    icon: <Zap className="w-8 h-8" />
  },
  {
    title: "Cierres Metálicos",
    desc: "Especialistas en persianas de comercios. Reparación y motorización 24h.",
    href: "/reparacion-cierres-metalicos",
    icon: <Store className="w-8 h-8" />
  },
  {
    title: "Cerrojos de Seguridad",
    desc: "El refuerzo que tu puerta necesita. Instalamos cerrojos FAC y Lince antibumping.",
    href: "/cerrojos-seguridad",
    icon: <HomeIcon className="w-8 h-8" />
  }
];

const ZONES = [
  { name: "Centro", href: "/cerrajeros-centro" },
  { name: "El Bosque", href: "/cerrajeros-el-bosque" },
  { name: "Campodón", href: "/cerrajeros-campodon" },
  { name: "Castillo", href: "/cerrajeros-castillo" },
  { name: "Monte de la Villa", href: "/cerrajeros-monte-de-la-villa" },
  { name: "El Bosque Alto", href: "/cerrajeros-el-bosque-alto" },
  { name: "Cerro de las Nieves", href: "/cerrajeros-cerro-de-las-nieves" },
  { name: "La Vega", href: "/cerrajeros-la-vega" },
];

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <SEOHead
        title={`Cerrajeros Villaviciosa del Odón 24h ⚡ Llegamos en 20 min | ${APP_BUSINESS_NAME}`}
        description="👉 Cerrajeros en Villaviciosa del Odón 24h. Apertura de puertas sin daños, cambio de cerraduras y urgencias. ¡Llegamos en 20 minutos! Presupuesto cerrado."
      />
      <Header />

      <main className="snap-y snap-mandatory h-screen overflow-y-scroll scroll-smooth">
        {/* Optimized Hero Section */}
        {HERO_ITEMS.map((item, idx) => (
          <section key={idx} className="tesla-hero snap-start relative">
            <div className="tesla-hero-bg">
              <img
                src={item.image}
                alt={item.title}
                loading={idx === 0 ? "eager" : "lazy"}
                className="brightness-[0.65]"
              />
              <div className="absolute inset-0 bg-black/10" />
              <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/80 to-transparent" />
            </div>

            <div className="animate-tesla flex flex-col items-center">
              {idx === 0 && (
                <div className="flex gap-3 mb-6">
                  {item.trustBadges?.map((badge, i) => (
                    <div key={i} className="flex items-center gap-1.5 px-3 py-1 bg-white/10 backdrop-blur-md rounded-full border border-white/20 text-white text-[10px] uppercase font-bold tracking-tighter">
                      <span className="text-primary">{badge.icon}</span>
                      {badge.text}
                    </div>
                  ))}
                </div>
              )}

              <h1
                className="text-[44px] md:text-[80px] font-black mb-4 leading-[0.85] tracking-tighter text-center max-w-5xl uppercase italic"
                style={{ color: '#FFFFFF', textShadow: '0 10px 30px rgba(0,0,0,0.8)' }}
              >
                {item.title}
              </h1>
              <p
                className="text-lg md:text-2xl font-medium text-center max-w-2xl px-6 opacity-100"
                style={{ color: '#FFFFFF', textShadow: '0 2px 10px rgba(0,0,0,0.5)' }}
              >
                {item.subtitle}
              </p>
            </div>

            <div className="w-full max-w-[600px] flex flex-col md:flex-row gap-4 px-6 mb-12 animate-tesla [animation-delay:200ms]">
              <a
                href={item.primaryAction.href}
                className="tesla-button h-14 md:h-20 text-xl md:text-2xl font-black bg-[#E55A2B] hover:bg-[#C4461B] text-white border-none shadow-[0_20px_50px_rgba(229,90,43,0.3)] scale-105 flex items-center justify-center rounded-full transition-all"
              >
                <Phone className="w-7 h-7 mr-3 animate-pulse" fill="currentColor" />
                {item.primaryAction.text}
              </a>
              <Link href={item.secondaryAction.href} className="tesla-button tesla-button-secondary h-14 md:h-16 text-sm font-bold opacity-80 backdrop-blur-sm">
                {item.secondaryAction.text}
              </Link>
            </div>

            {idx === 0 && (
              <div className="absolute bottom-6 left-1/2 -translate-x-1/2 animate-bounce opacity-50">
                <ChevronRight className="w-6 h-6 text-white rotate-90" />
              </div>
            )}
          </section>
        ))}

        {/* Rich Content Section 1: Intro SEO */}
        <section id="servicios" className="tesla-section snap-start md:min-h-screen flex flex-col justify-center bg-white py-20 px-4 md:px-0">
          <div className="tesla-container space-y-12 md:space-y-16">
            <div className="max-w-4xl mx-auto text-center space-y-4 md:space-y-6">
              <span className="text-primary font-black uppercase tracking-[0.3em] text-[10px] md:text-xs">Servicios 24 Horas</span>
              <h2 className="text-3xl md:text-6xl font-black tracking-tighter uppercase italic leading-tight">Cerrajería de Vanguardia</h2>
              <p className="text-base md:text-xl text-gray-500 font-light leading-relaxed">
                No somos solo cerrajeros, somos especialistas en seguridad. Atendemos cualquier incidencia técnica en <strong>Villaviciosa del Odón</strong> con una precisión milimétrica.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
              {SERVICES_GRID.map((service, i) => (
                <Link key={i} href={service.href}>
                  <div className="group p-10 rounded-3xl border border-gray-100 bg-gray-50 hover:bg-white hover:shadow-3xl transition-all duration-700 cursor-pointer h-full flex flex-col justify-between overflow-hidden relative">
                    <div className="absolute -top-10 -right-10 w-32 h-32 bg-primary/5 rounded-full group-hover:scale-150 transition-transform duration-700"></div>
                    <div className="relative">
                      <div className="text-primary mb-8 group-hover:scale-110 transition-transform origin-left">{service.icon}</div>
                      <h3 className="text-2xl font-black mb-4 uppercase tracking-tight">{service.title}</h3>
                      <p className="text-gray-500 text-sm font-light leading-relaxed">{service.desc}</p>
                    </div>
                    <div className="mt-8 flex items-center text-primary font-black text-xs gap-2 uppercase tracking-widest">
                      Explorar <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform" />
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Trust Section */}
        <section className="tesla-section snap-start md:min-h-screen flex flex-col justify-center bg-gray-50 py-20 px-4 md:px-0">
          <div className="tesla-container">
            <div className="grid md:grid-cols-2 gap-12 md:gap-20 items-center">
              <div className="space-y-8 md:space-y-10 animate-tesla">
                <h2 className="text-3xl md:text-7xl font-black leading-[0.95] tracking-tighter uppercase italic">Confianza Local <br /><span className="text-primary">Sin Tratos</span></h2>
                <div className="space-y-6 md:space-y-8">
                  {[
                    { t: "Llegada en 20 minutos", d: "Un técnico de guardia siempre estará cerca de ti en Villaviciosa." },
                    { t: "0% Daños en Aperturas", d: "Técnicas de ganzuado que respetan tu cerradura original." },
                    { t: "Precio Cerrado Gratis", d: "Te damos el precio real por teléfono. Sin sorpresas al llegar." },
                    { t: "Garantía de 2 Años", d: "Todas nuestras piezas e instalaciones están protegidas legalmente." }
                  ].map((item, i) => (
                    <div key={i} className="flex gap-4 md:gap-6">
                      <div className="mt-1 flex-shrink-0 w-10 h-10 md:w-12 md:h-12 bg-white rounded-full shadow-sm flex items-center justify-center">
                        <Star className="w-4 h-4 md:w-5 md:h-5 text-primary" fill="currentColor" />
                      </div>
                      <div>
                        <h4 className="text-lg md:text-xl font-black uppercase tracking-tight">{item.t}</h4>
                        <p className="text-gray-500 font-light text-sm md:text-base">{item.d}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="relative rounded-2xl md:rounded-[3rem] overflow-hidden shadow-2xl md:shadow-3xl aspect-[4/5] md:aspect-square">
                <img src="/cerrajero-trabajando.webp" alt="Cerrajero profesional en Villaviciosa" className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex items-end p-6 md:p-12">
                  <div className="space-y-3 md:space-y-4">
                    <div className="flex gap-1 md:gap-1.5">
                      {[1, 2, 3, 4, 5].map(s => (
                        <Star
                          key={s}
                          className="w-6 h-6 md:w-8 md:h-8 text-[#FFD700]"
                          fill="currentColor"
                          style={{ filter: 'drop-shadow(0 0 8px rgba(255, 165, 0, 0.6))' }}
                        />
                      ))}
                    </div>
                    <p className="text-white text-lg md:text-xl font-medium italic leading-relaxed">"Me abrieron la puerta de noche en 15 minutos y sin romper nada. El precio fue el pactado. Muy profesionales."</p>
                    <p className="text-white/60 text-[10px] md:text-sm font-bold uppercase tracking-widest">— Cliente en el Centro de Villaviciosa</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Zones Section (Interlinking) */}
        <section className="tesla-section snap-start md:min-h-screen flex flex-col justify-center bg-white border-t relative overflow-hidden py-20 px-4 md:px-6">
          <div className="tesla-container space-y-12 md:space-y-16 relative z-10">
            <div className="text-center space-y-4 relative">
              <h2
                className="text-4xl md:text-[120px] font-black uppercase tracking-tighter italic leading-none select-none absolute left-1/2 -translate-x-1/2 -top-6 md:-top-20 z-0 opacity-[0.03] whitespace-nowrap"
                style={{ color: '#000000' }}
              >
                Cobertura
              </h2>
              <h2 className="text-2xl md:text-5xl font-black mb-4 uppercase tracking-tight relative z-10">Servicio en todo el municipio</h2>
              <p className="text-base md:text-lg text-gray-500 font-light relative z-10">Atendemos de forma inmediata en todos los barrios de Villaviciosa del Odón.</p>
            </div>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4 relative z-10">
              {ZONES.map((zone, i) => (
                <Link key={i} href={zone.href}>
                  <div className="p-4 md:p-8 text-center border-2 border-gray-50 rounded-xl md:rounded-2xl hover:border-primary hover:bg-primary hover:text-white transition-all duration-500 font-black uppercase tracking-widest text-[9px] md:text-[11px] cursor-pointer shadow-sm hover:shadow-xl hover:-translate-y-1">
                    {zone.name}
                  </div>
                </Link>
              ))}
            </div>
            <div className="bg-black text-white p-8 md:p-16 rounded-[2rem] md:rounded-[4rem] text-center space-y-8 md:space-y-10 relative z-10 overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-primary/20 rounded-full blur-[100px]"></div>
              <MapPin className="w-10 h-10 md:w-16 md:h-16 mx-auto text-primary" />
              <div className="space-y-4">
                <h4 className="text-xl md:text-3xl font-black uppercase italic">¿No encuentras tu urbanización?</h4>
                <p className="text-sm md:text-gray-400 max-w-xl mx-auto font-light">Cubrimos todas las urbanizaciones del casco urbano y zonas rurales de Villaviciosa del Odón.</p>
              </div>
              <Button asChild size="lg" className="rounded-full px-8 md:px-16 h-16 md:h-20 bg-white text-black hover:bg-gray-200 transition-all font-black text-base md:text-xl uppercase tracking-tighter shadow-2xl w-full md:w-auto">
                <a href={`tel:${APP_PHONE}`}>Confirmar disponibilidad</a>
              </Button>
            </div>
          </div>
        </section>

        {/* Footer & Brands */}
        <section className="tesla-section snap-start min-h-screen flex flex-col justify-center">
          <div className="tesla-container">
            <BrandsSection />
            <div className="mt-24">
              <FAQSection items={[
                { question: "¿Cuánto tardáis en llegar a Villaviciosa?", answer: "Nuestra media real es de 20 minutos. Tenemos técnicos residentes en Villaviciosa del Odón para asegurar la máxima rapidez." },
                { question: "¿Dáis el precio por teléfono?", answer: "Sí, creemos en la transparencia total. Descríbenos tu problema y te daremos un presupuesto cerrado sin compromiso." },
                { question: "¿Es posible abrir mi puerta sin romper el bombín?", answer: "En la gran mayoría de casos (llaves puestas por dentro o pérdida), abrimos mediante técnicas de no-destrucción." }
              ]} />
            </div>
            <div className="mt-24 pt-24 border-t opacity-50">
              <Footer />
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
