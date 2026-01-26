import { APP_BUSINESS_NAME, APP_PHONE, APP_PHONE_DISPLAY, APP_LOCATION } from "@/const";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import RelatedServices from "@/components/RelatedServices";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { Shield, Clock, Zap, CheckCircle, ChevronDown } from "lucide-react";

export default function AperturaPuertas() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <SEOHead
        title={`Apertura de Puertas en ${APP_LOCATION} 🔓 Sin Romper | 24 Horas`}
        description={`🔑 ¿Has perdido las llaves? Abrimos tu puerta en ${APP_LOCATION} en menos de 20 min. Sin romper, sin daños y con precio cerrado desde 90€. Cerrajeros locales expertos.`}
      />
      <Header />

      <main className="snap-y snap-mandatory h-screen overflow-y-scroll scroll-smooth">
        {/* Hero Section */}
        <section className="tesla-hero snap-start">
          <div className="tesla-hero-bg">
            <img
              src="/apertura-puerta.jpg"
              alt="Apertura técnica de puertas"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/30" />
          </div>

          <div className="animate-tesla">
            <h1 className="text-[40px] md:text-[64px] font-medium text-white mb-2 leading-tight drop-shadow-2xl">
              Apertura Impecable
            </h1>
            <p className="text-sm md:text-lg text-white font-normal underline underline-offset-4 decoration-1 decoration-white/40 drop-shadow-lg">
              Llegada en 20 min · Sin daños garantizado
            </p>
          </div>

          <div className="w-full max-w-[550px] flex flex-col md:flex-row gap-4 px-6 mb-12 animate-tesla [animation-delay:200ms]">
            <a href={`tel:${APP_PHONE}`} className="tesla-button tesla-button-primary uppercase tracking-widest text-[11px] font-bold">
              Solicitar Apertura: {APP_PHONE_DISPLAY}
            </a>
            <a href="#detalles" className="tesla-button tesla-button-secondary uppercase tracking-widest text-[11px] font-bold">
              Ver Detalles Técnicos
            </a>
          </div>

          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 animate-bounce opacity-80 z-20">
            <ChevronDown className="w-6 h-6 text-white" />
          </div>
        </section>

        {/* Content Section 1: Detailed Text */}
        <section id="detalles" className="tesla-section snap-start min-h-screen flex flex-col justify-center items-center">
          <div className="tesla-container space-y-16 max-w-5xl">
            <div className="text-center space-y-6">
              <h2 className="text-3xl md:text-5xl font-medium tracking-tight">Expertos en aperturas de alta gama</h2>
              <p className="text-lg text-gray-500 font-light leading-relaxed max-w-3xl mx-auto">
                Sabemos que quedarte fuera de casa es una situación estresante. Por eso, en <strong>{APP_BUSINESS_NAME}</strong> nos especializamos en aperturas técnicas que priorizan la integridad de tu puerta y cerradura.
                Utilizamos herramientas de última generación y técnicas de ganzuado profesional para que puedas entrar en tu hogar en cuestión de segundos.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <h3 className="text-2xl font-bold">¿Qué abrimos en {APP_LOCATION}?</h3>
                <ul className="grid grid-cols-1 gap-4">
                  {[
                    "Puertas Blindadas y Acorazadas de todas las marcas.",
                    "Puertas de interior y trasteros sin daños.",
                    "Cierres metálicos de comercio y locales.",
                    "Vehículos de gama alta sin rotura de cristales.",
                    "Cajas fuertes mecánicas y digitales."
                  ].map((text, i) => (
                    <li key={i} className="flex items-center gap-3 text-gray-600 font-light">
                      <CheckCircle className="w-5 h-5 text-primary" /> {text}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="rounded-3xl overflow-hidden shadow-xl aspect-video bg-gray-100">
                <img src="/proceso-herramientas.webp" alt="Herramientas profesionales" className="w-full h-full object-cover" />
              </div>
            </div>
          </div>
        </section>

        {/* Content Section 2: Why us for Apertura */}
        <section className="tesla-section snap-start min-h-screen flex flex-col justify-center bg-gray-50">
          <div className="tesla-container space-y-16">
            <div className="grid md:grid-cols-3 gap-8">
              {[
                { t: "Garantía de No Rotura", d: "En el 98% de las aperturas no es necesario romper la cerradura ni el cilindro.", icon: <Shield className="w-10 h-10" /> },
                { t: "Urgencias Express", d: "Atendemos llamadas prioritarias en menos de 20 minutos en todo Villaviciosa.", icon: <Clock className="w-10 h-10" /> },
                { t: "Técnicos Oficiales", d: "Todos nuestros cerrajeros están acreditados y asegurados para su total tranquilidad.", icon: <Zap className="w-10 h-10" /> }
              ].map((item, i) => (
                <div key={i} className="bg-white p-10 rounded-[2.5rem] shadow-sm flex flex-col items-center text-center space-y-6 border border-gray-100">
                  <div className="text-primary">{item.icon}</div>
                  <h4 className="text-xl font-bold">{item.t}</h4>
                  <p className="text-gray-500 font-light text-sm leading-relaxed">{item.d}</p>
                </div>
              ))}
            </div>

            <div className="bg-black text-white p-12 md:p-20 rounded-[3rem] text-center space-y-8">
              <h2 className="text-3xl md:text-5xl font-medium tracking-tight">¿Estás fuera de casa ahora mismo?</h2>
              <p className="text-lg text-gray-400 font-light max-w-2xl mx-auto">No intentes forzar la puerta, podrías causar daños irreparables. Nuestro retén de urgencias está listo para salir.</p>
              <Button asChild size="lg" className="rounded-full px-12 h-16 bg-white text-black hover:bg-gray-200 transition-all font-bold text-xl shadow-2xl shadow-white/10">
                <a href={`tel:${APP_PHONE}`}>Llamar a Urgencias</a>
              </Button>
            </div>
          </div>
        </section>

        {/* Final Links & Footer */}
        <section className="tesla-section snap-start min-h-screen flex flex-col justify-between">
          <div className="tesla-container mt-20">
            <RelatedServices currentService="Apertura de Puertas" />
          </div>
          <div className="mt-20">
            <Footer />
          </div>
        </section>
      </main>
    </div>
  );
}
