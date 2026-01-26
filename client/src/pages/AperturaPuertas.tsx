import { APP_BUSINESS_NAME, APP_PHONE, APP_PHONE_DISPLAY, APP_LOCATION } from "@/const";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import RelatedServices from "@/components/RelatedServices";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { Shield, Clock, Zap, CheckCircle, ChevronRight, Lock, Star, ShieldCheck, Phone } from "lucide-react";

export default function AperturaPuertas() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <SEOHead
        title={`Apertura de Puertas en ${APP_LOCATION} 🔓 Sin Romper | 24 Horas`}
        description={`🔑 ¿Has perdido las llaves? Abrimos tu puerta en ${APP_LOCATION} en menos de 20 min. Sin romper, sin daños y con precio cerrado. Cerrajeros locales expertos.`}
      />
      <Header />

      <main className="snap-y snap-mandatory h-screen overflow-y-scroll scroll-smooth">
        {/* Unified Hero Section */}
        <section className="tesla-hero snap-start">
          <div className="tesla-hero-bg">
            <img
              src="/apertura-puerta.jpg"
              alt="Apertura técnica de puertas"
              className="w-full h-full object-cover brightness-[0.6]"
            />
            <div className="absolute inset-0 bg-black/20" />
            <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/80 to-transparent" />
          </div>

          <div className="animate-tesla flex flex-col items-center">
            <div className="flex gap-3 mb-6">
              {[
                { icon: <Clock className="w-4 h-4" />, text: "20 min" },
                { icon: <Shield className="w-4 h-4" />, text: "Sin Daños" },
                { icon: <Zap className="w-4 h-4" />, text: "Urgente" }
              ].map((badge, i) => (
                <div key={i} className="flex items-center gap-1.5 px-3 py-1 bg-white/10 backdrop-blur-md rounded-full border border-white/20 text-white text-[10px] uppercase font-bold tracking-tighter">
                  <span className="text-primary">{badge.icon}</span>
                  {badge.text}
                </div>
              ))}
            </div>

            <h1
              className="text-[44px] md:text-[80px] font-black mb-4 leading-[0.85] tracking-tighter text-center max-w-5xl uppercase italic"
              style={{ color: '#FFFFFF', textShadow: '0 10px 30px rgba(0,0,0,0.8)' }}
            >
              Aperturas Técnicas 24h
            </h1>
            <p
              className="text-lg md:text-2xl font-medium text-center max-w-2xl px-6 opacity-100"
              style={{ color: '#FFFFFF', textShadow: '0 2px 10px rgba(0,0,0,0.5)' }}
            >
              Llegamos en 20 min · Sin romper nada garantizado
            </p>
          </div>

          <div className="w-full max-w-[600px] flex flex-col md:flex-row gap-4 px-6 mb-12 animate-tesla [animation-delay:200ms]">
            <a
              href={`tel:${APP_PHONE}`}
              className="tesla-button h-14 md:h-20 text-xl md:text-2xl font-black bg-[#E55A2B] hover:bg-[#C4461B] text-white border-none shadow-[0_20px_50px_rgba(229,90,43,0.3)] flex items-center justify-center rounded-full transition-all w-full md:w-auto flex-1"
            >
              <Phone className="w-7 h-7 mr-3 animate-pulse" fill="currentColor" />
              Llamar: {APP_PHONE_DISPLAY}
            </a>
            <a href="#detalles" className="tesla-button h-14 md:h-20 text-sm font-bold opacity-80 backdrop-blur-sm text-white border border-white/30 rounded-full flex items-center justify-center w-full md:w-auto flex-1">
              Ver Detalles Técnicos
            </a>
          </div>

          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 animate-bounce opacity-50">
            <ChevronRight className="w-6 h-6 text-white rotate-90" />
          </div>
        </section>

        {/* Content Section 1: Detailed Text */}
        <section id="detalles" className="tesla-section snap-start md:min-h-screen flex flex-col justify-center items-center py-20 px-4 md:px-0">
          <div className="tesla-container space-y-16 max-w-5xl">
            <div className="text-center space-y-6">
              <span className="text-primary font-black uppercase tracking-[0.3em] text-[10px] md:text-xs">Precisión y Garantía</span>
              <h2 className="text-3xl md:text-6xl font-black tracking-tighter uppercase italic leading-tight text-balance">Expertos en aperturas de alta gama</h2>
              <p className="text-base md:text-xl text-gray-500 font-light leading-relaxed max-w-3xl mx-auto">
                Sabemos que quedarte fuera de casa es una situación estresante. Por eso, en <strong>{APP_BUSINESS_NAME}</strong> nos especializamos en aperturas técnicas que priorizan la integridad de tu puerta y cerradura en <strong>{APP_LOCATION}</strong>.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="space-y-10">
                <div className="space-y-6">
                  <h3 className="text-2xl font-black uppercase italic tracking-tight">¿Qué abrimos en Villaviciosa?</h3>
                  <ul className="grid grid-cols-1 gap-4">
                    {[
                      "Puertas Blindadas y Acorazadas sin daños.",
                      "Puertas de interior y trasteros (llave olvidada).",
                      "Cierres metálicos de comercio y locales 24h.",
                      "Vehículos de gama alta sin rotura de cristales.",
                      "Cajas fuertes con manipulación técnica."
                    ].map((text, i) => (
                      <li key={i} className="flex items-center gap-3 text-gray-600 font-medium text-sm md:text-base">
                        <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" /> {text}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="p-8 bg-gray-50 rounded-[2rem] border border-gray-100 flex gap-6 items-center">
                  <div className="w-16 h-16 bg-white rounded-2xl shadow-sm flex items-center justify-center flex-shrink-0">
                    <ShieldCheck className="w-8 h-8 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-black uppercase text-sm tracking-widest">Seguro de Responsabilidad</h4>
                    <p className="text-xs text-gray-400 font-light">Todas nuestras intervenciones están garantizadas y aseguradas.</p>
                  </div>
                </div>
              </div>
              <div className="rounded-[2.5rem] md:rounded-[3rem] overflow-hidden shadow-2xl aspect-video md:aspect-square bg-gray-100 relative group">
                <img src="/proceso-herramientas.webp" alt="Herramientas profesionales" className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000" />
                <div className="absolute inset-0 bg-black/20" />
              </div>
            </div>
          </div>
        </section>

        {/* Content Section 2: Trust/Social Proof (Injected from Home pattern) */}
        <section className="tesla-section snap-start md:min-h-screen flex flex-col justify-center bg-gray-50 py-20 px-4 md:px-0">
          <div className="tesla-container">
            <div className="grid md:grid-cols-2 gap-12 md:gap-20 items-center">
              <div className="space-y-8 md:space-y-10 animate-tesla">
                <h2 className="text-3xl md:text-7xl font-black leading-[0.95] tracking-tighter uppercase italic">Confianza <br /><span className="text-primary">Garantizada</span></h2>
                <div className="space-y-6 md:space-y-8">
                  {[
                    { t: "Llegada en 20 minutos", d: "Técnicos locales siempre listos para atenderte en Villaviciosa." },
                    { t: "0% Daños en Aperturas", d: "Priorizamos la apertura limpia mediante ganzuado experto." },
                    { t: "Precio Cerrado", d: "Sabrás lo que vas a pagar antes de que salgamos hacia tu ubicación." },
                    { t: "Trato Profesional", d: "Somos cerrajeros de oficio, no intermediarios." }
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
                <img src="/cerrajero-emergencia.jpg" alt="Apertura urgente en Villaviciosa" className="w-full h-full object-cover" />
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
                    <p className="text-white text-lg md:text-xl font-medium italic leading-relaxed">"Me dejé las llaves puestas por dentro un domingo de madrugada. Vinieron rapidísimo y abrieron en un segundo sin dañar la puerta. Un 10."</p>
                    <p className="text-white/60 text-[10px] md:text-sm font-bold uppercase tracking-widest">— Cliente Satisfecho en Villaviciosa</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Final Section */}
        <section className="tesla-section snap-start md:min-h-screen flex flex-col justify-between py-20">
          <div className="tesla-container">
            <RelatedServices currentService="Apertura de Puertas" />
          </div>
          <div className="mt-20 border-t pt-20 border-gray-100 opacity-60">
            <Footer />
          </div>
        </section>
      </main>
    </div>
  );
}
