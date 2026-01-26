import { APP_BUSINESS_NAME, APP_PHONE, APP_PHONE_DISPLAY, APP_LOCATION } from "@/const";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import RelatedServices from "@/components/RelatedServices";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { ShieldAlert, CheckCircle, ChevronRight, Award, Package, Lock, Star, ShieldCheck, Phone, Zap } from "lucide-react";

export default function CambioBombin() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <SEOHead
        title={`Cambio de Bombín en ${APP_LOCATION} 🔑 Seguridad Antibumping`}
        description={`🛡️ Protege tu hogar hoy mismo. Instalamos bombines de alta seguridad en ${APP_LOCATION} en menos de 20 min. Anti-bumping, anti-extracción y anti-ganzúa.`}
      />
      <Header />

      <main className="snap-y snap-mandatory h-screen overflow-y-scroll scroll-smooth">
        {/* Unified Hero Section */}
        <section className="tesla-hero snap-start">
          <div className="tesla-hero-bg">
            <img
              src="/cambio-bombin.jpg"
              alt="Bombín de alta seguridad"
              className="w-full h-full object-cover brightness-[0.6]"
            />
            <div className="absolute inset-0 bg-black/20" />
            <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/80 to-transparent" />
          </div>

          <div className="animate-tesla flex flex-col items-center text-center">
            <div className="flex gap-3 mb-6">
              <div className="flex items-center gap-1.5 px-3 py-1 bg-white/10 backdrop-blur-md rounded-full border border-white/20 text-white text-[10px] uppercase font-bold tracking-tighter">
                <span className="text-primary"><ShieldCheck className="w-4 h-4" /></span>
                Grado 5
              </div>
              <div className="flex items-center gap-1.5 px-3 py-1 bg-white/10 backdrop-blur-md rounded-full border border-white/20 text-white text-[10px] uppercase font-bold tracking-tighter">
                <span className="text-primary"><Zap className="w-4 h-4" /></span>
                Antibumping
              </div>
            </div>

            <h1
              className="text-[44px] md:text-[80px] font-black mb-4 leading-[0.85] tracking-tighter uppercase italic"
              style={{ color: '#FFFFFF', textShadow: '0 10px 30px rgba(0,0,0,0.8)' }}
            >
              Seguridad <br /> Invisible
            </h1>
            <p
              className="text-lg md:text-2xl font-medium max-w-2xl px-6 opacity-100"
              style={{ color: '#FFFFFF', textShadow: '0 2px 10px rgba(0,0,0,0.5)' }}
            >
              Bombines de Alta Gama · Instalación inmediata
            </p>
          </div>

          <div className="w-full max-w-[600px] flex flex-col md:flex-row gap-4 px-6 mb-12 animate-tesla [animation-delay:200ms]">
            <a
              href={`tel:${APP_PHONE}`}
              className="tesla-button h-14 md:h-20 text-xl font-black bg-[#E55A2B] hover:bg-[#C4461B] text-white border-none shadow-[0_20px_50px_rgba(229,90,43,0.3)] flex items-center justify-center rounded-full transition-all flex-1"
            >
              <Phone className="w-7 h-7 mr-3 animate-pulse" fill="currentColor" />
              Presupuesto Gratis
            </a>
            <a href="#ventajas" className="tesla-button h-14 md:h-20 text-sm font-bold opacity-80 backdrop-blur-sm text-white border border-white/30 rounded-full flex items-center justify-center flex-1">
              Ventajas Técnicas
            </a>
          </div>

          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 animate-bounce opacity-50">
            <ChevronRight className="w-6 h-6 text-white rotate-90" />
          </div>
        </section>

        {/* Content Section 1: Detailed SEO Text */}
        <section id="ventajas" className="tesla-section snap-start md:min-h-screen flex flex-col justify-center items-center py-20 px-4">
          <div className="tesla-container space-y-16 max-w-5xl">
            <div className="text-center space-y-6">
              <span className="text-primary font-black uppercase tracking-[0.3em] text-[10px] md:text-xs">Blindaje Premium</span>
              <h2 className="text-3xl md:text-6xl font-black tracking-tighter uppercase italic leading-tight text-balance">Protección de núcleo avanzado</h2>
              <p className="text-base md:text-xl text-gray-500 font-light leading-relaxed max-w-3xl mx-auto">
                El bombín es el corazón de tu cerradura. En <strong>{APP_BUSINESS_NAME}</strong> sustituimos cilindros antiguos por modelos de <strong>Alta Seguridad</strong> resistentes a Bumping e Impresioning en todo <strong>{APP_LOCATION}</strong>.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="rounded-[2.5rem] md:rounded-[3rem] overflow-hidden shadow-2xl aspect-square bg-gray-100 group">
                <img src="/cilindro-seguridad.jpg" alt="Cilindro de seguridad de precisión" className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000" />
              </div>
              <div className="space-y-10">
                {[
                  { icon: <ShieldAlert className="text-primary w-8 h-8" />, t: "Protección Total", d: "Pasadores de acero reforzado que impiden el taladrado y la extracción de núcleo." },
                  { icon: <Award className="text-primary w-8 h-8" />, t: "Marcas Oficiales", d: "Instalamos Kaba, Mauer y Tesa con garantía oficial del fabricante." },
                  { icon: <Package className="text-primary w-8 h-8" />, t: "Llaves Incopiables", d: "Sistemas protegidos con tarjeta de propiedad para mayor control." }
                ].map((item, i) => (
                  <div key={i} className="flex gap-6">
                    <div className="flex-shrink-0">{item.icon}</div>
                    <div>
                      <h3 className="text-xl font-black uppercase italic tracking-tight mb-2">{item.t}</h3>
                      <p className="text-gray-500 font-light text-sm md:text-base leading-relaxed">{item.d}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Content Section 2: Trust/Social Proof */}
        <section className="tesla-section snap-start md:min-h-screen flex flex-col justify-center bg-gray-50 py-20 px-4">
          <div className="tesla-container">
            <div className="grid md:grid-cols-2 gap-12 items-center text-left">
              <div className="space-y-10">
                <h2 className="text-3xl md:text-7xl font-black leading-[0.95] tracking-tighter uppercase italic">Seguridad <br /><span className="text-primary">Certificada</span></h2>
                <div className="space-y-8">
                  {[
                    { t: "KABA Expert", d: "Precisión suiza y máxima resistencia al ganzuado." },
                    { t: "MAUER NW5", d: "El estándar más alto de seguridad física en España." },
                    { t: "Tarifas Cerradas", d: "Presupuesto real telefónico. Sin sorpresas al pagar." },
                    { t: "Instalación 24h", d: "Cambiamos tu bombín hoy mismo, sin esperas." }
                  ].map((item, i) => (
                    <div key={i} className="flex gap-6">
                      <div className="mt-1 flex-shrink-0 w-10 h-10 md:w-12 md:h-12 bg-white rounded-full shadow-sm flex items-center justify-center">
                        <Star className="w-5 h-5 text-primary" fill="currentColor" />
                      </div>
                      <div>
                        <h4 className="text-lg md:text-xl font-black uppercase tracking-tight">{item.t}</h4>
                        <p className="text-gray-500 font-light text-sm md:text-base">{item.d}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="relative rounded-[3rem] overflow-hidden shadow-3xl aspect-[4/5] md:aspect-square">
                <img src="/hero-cerrajero-profesional.jpg" alt="Instalación de bombín" className="w-full h-full object-cover grayscale" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex items-end p-12">
                  <div className="space-y-4 text-left">
                    <div className="flex gap-1.5">
                      {[1, 2, 3, 4, 5].map(s => (
                        <Star key={s} className="w-8 h-8 text-[#FFD700]" fill="currentColor" style={{ filter: 'drop-shadow(0 0 8px rgba(255, 165, 0, 0.6))' }} />
                      ))}
                    </div>
                    <p className="text-white text-xl font-medium italic leading-relaxed">"Cambié el bombín por uno antibumping tras ver que habían robado en el bloque. Muy rápido y limpio."</p>
                    <p className="text-white/60 text-sm font-bold uppercase tracking-widest">— Vecino de Villaviciosa</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Final Section */}
        <section className="tesla-section snap-start md:min-h-screen flex flex-col justify-between py-20">
          <div className="tesla-container">
            <RelatedServices currentService="Cambio de Bombín" />
          </div>
          <div className="mt-20 border-t pt-20 border-gray-100 opacity-60">
            <Footer />
          </div>
        </section>
      </main>
    </div>
  );
}
