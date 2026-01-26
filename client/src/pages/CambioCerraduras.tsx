import { APP_PHONE, APP_PHONE_DISPLAY, APP_LOCATION, APP_BUSINESS_NAME } from "@/const";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import RelatedServices from "@/components/RelatedServices";
import { Shield, Clock, Zap, CheckCircle, ChevronRight, Phone, Star, ShieldCheck } from "lucide-react";

export default function CambioCerraduras() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <SEOHead
        title={`Cambio de Cerraduras Villaviciosa del Odón 🔧 Seguridad | 24h`}
        description={`🔒 Protege tu hogar hoy. Instalamos cerraduras antibumping en Villaviciosa del Odón con garantía total.`}
      />
      <Header />

      <main className="snap-y snap-mandatory h-screen overflow-y-scroll scroll-smooth">
        {/* Unified Hero Section */}
        <section className="tesla-hero snap-start">
          <div className="tesla-hero-bg">
            <img
              src="/instalacion-cerradura.jpg"
              alt="Instalación de cerraduras"
              className="w-full h-full object-cover brightness-[0.7]"
            />
            <div className="absolute inset-0 bg-black/30" />
            <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/80 to-transparent" />
          </div>

          <div className="animate-tesla flex flex-col items-center">
            <div className="flex gap-2 mb-6">
              <div className="px-3 py-1 bg-white/10 backdrop-blur-md rounded-full border border-white/20 text-white text-[10px] uppercase font-black tracking-tighter">
                Cerraduras de Grado
              </div>
            </div>
            <h1
              className="text-[44px] md:text-[80px] font-black mb-4 leading-[0.85] tracking-tighter text-center max-w-5xl uppercase italic"
              style={{ color: '#FFFFFF', textShadow: '0 10px 30px rgba(0,0,0,0.8)' }}
            >
              Seguridad <br /> Extrema
            </h1>
            <p
              className="text-lg md:text-2xl font-medium text-center max-w-2xl px-6 opacity-100"
              style={{ color: '#FFFFFF', textShadow: '0 2px 10px rgba(0,0,0,0.5)' }}
            >
              Instalación de cerraduras antibumping en {APP_LOCATION}
            </p>
          </div>

          <div className="w-full max-w-[600px] flex flex-col md:flex-row gap-4 px-6 mb-12 animate-tesla [animation-delay:200ms]">
            <a
              href={`tel:${APP_PHONE}`}
              className="tesla-button h-14 md:h-20 text-xl font-black bg-[#E55A2B] hover:bg-[#C4461B] text-white border-none shadow-[0_20px_50px_rgba(229,90,43,0.3)] flex items-center justify-center rounded-full transition-all flex-1"
            >
              <Phone className="w-7 h-7 mr-3 animate-pulse" fill="currentColor" />
              Llamar: {APP_PHONE_DISPLAY}
            </a>
            <a href="#proceso" className="tesla-button h-14 md:h-20 text-sm font-bold opacity-80 backdrop-blur-sm text-white border border-white/30 rounded-full flex items-center justify-center flex-1">
              Ver Proceso
            </a>
          </div>

          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 animate-bounce opacity-50">
            <ChevronRight className="w-6 h-6 text-white rotate-90" />
          </div>
        </section>

        {/* Content Section */}
        <section id="proceso" className="tesla-section snap-start md:min-h-screen flex flex-col justify-center items-center py-20 px-4">
          <div className="tesla-container space-y-24 max-w-5xl">
            <div className="text-center space-y-6">
              <span className="text-primary font-black uppercase tracking-[0.3em] text-[10px] md:text-xs">Blindaje Completo</span>
              <h2 className="text-3xl md:text-6xl font-black uppercase tracking-tighter italic leading-tight text-balance">Blindamos su puerta con el mejor acero</h2>
              <p className="text-base md:text-xl text-gray-500 font-light leading-relaxed max-w-3xl mx-auto">
                Realizamos sustituciones completas de cajas centrales y escudos acorazados en <strong>{APP_LOCATION}</strong>. No solo cambiamos la llave, reforzamos todo el sistema de cierre.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                { t: "Presupuesto previo", d: "Sin sorpresas. Sabrá el precio final antes de que la herramienta toque su puerta.", icon: <Star className="text-primary w-8 h-8" /> },
                { t: "Cerraduras Oficiales", d: "Instalamos cerraduras Fichet, Ezcurra y Mottura de alta resistencia.", icon: <ShieldCheck className="text-primary w-8 h-8" /> },
                { t: "Urgencia 24h", d: "Si han forzado su puerta, la reparamos o sustituimos de inmediato.", icon: <Zap className="text-primary w-8 h-8" /> }
              ].map((item, i) => (
                <div key={i} className="text-center space-y-6 p-8 bg-gray-50 rounded-[2.5rem] border border-gray-100 flex flex-col items-center">
                  <div className="bg-white p-4 rounded-2xl shadow-sm">{item.icon}</div>
                  <h4 className="text-xl font-black uppercase italic tracking-tight">{item.t}</h4>
                  <p className="text-gray-500 font-light text-sm leading-relaxed">{item.d}</p>
                </div>
              ))}
            </div>

            <div className="bg-black text-white p-12 md:p-20 rounded-[3rem] text-center space-y-8 relative overflow-hidden">
              <div className="absolute top-0 left-0 w-64 h-64 bg-primary/20 rounded-full blur-[100px]"></div>
              <h3 className="text-3xl md:text-5xl font-black uppercase italic tracking-tight">¿Necesitas seguridad hoy?</h3>
              <p className="text-gray-400 max-w-xl mx-auto font-light leading-relaxed">Nuestros técnicos están de guardia 24/7 en Villaviciosa del Odón.</p>
              <div className="flex flex-col md:flex-row gap-4 justify-center">
                <Button asChild size="lg" className="rounded-full px-12 h-16 bg-white text-black hover:bg-gray-200 transition-all font-black uppercase tracking-widest text-sm">
                  <a href={`tel:${APP_PHONE}`}>Llamar ahora</a>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Final Links & Footer */}
        <section className="tesla-section snap-start md:min-h-screen flex flex-col justify-between py-20">
          <div className="tesla-container">
            <RelatedServices currentService="Cambio de Cerraduras" />
          </div>
          <div className="mt-20 border-t pt-20 border-gray-100 opacity-60">
            <Footer />
          </div>
        </section>
      </main>
    </div>
  );
}
