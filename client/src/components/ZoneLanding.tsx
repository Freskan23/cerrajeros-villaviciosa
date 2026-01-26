import { useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Phone, MapPin, Shield, CheckCircle, ChevronRight, Clock, Star, ShieldCheck, Zap } from "lucide-react";
import { APP_PHONE, APP_PHONE_DISPLAY, APP_BUSINESS_NAME, APP_LOCATION } from "@/const";
import SEOHead from "@/components/SEOHead";
import RelatedServices from "@/components/RelatedServices";

interface ZoneLandingProps {
  zoneName: string;
  zoneDescription: string;
  zoneMapUrl: string;
  commonProblems: string[];
}

export default function ZoneLanding({
  zoneName,
  zoneDescription,
  zoneMapUrl,
  commonProblems,
}: ZoneLandingProps) {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <SEOHead
        title={`Cerrajeros ${zoneName} 24h ⚡ Llegamos en 20 min | ${APP_LOCATION}`}
        description={`☎️ Llama ahora: Cerrajeros urgentes en ${zoneName}, ${APP_LOCATION}. Expertos en apertura sin daños y cambio de cerraduras en el barrio. Disponibles ahora.`}
      />

      <Header />

      <main className="snap-y snap-mandatory h-screen overflow-y-scroll scroll-smooth">
        {/* Unified Hero Local - Tesla Style */}
        <section className="tesla-hero snap-start">
          <div className="tesla-hero-bg">
            <img
              src="/hero-background-minimal.webp"
              alt={`Cerrajero profesional en ${zoneName}`}
              className="w-full h-full object-cover brightness-[0.6]"
            />
            <div className="absolute inset-0 bg-black/30" />
            <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/80 to-transparent" />
          </div>

          <div className="animate-tesla flex flex-col items-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-md rounded-full border border-white/20 text-white text-[10px] font-black uppercase tracking-widest mb-6">
              <MapPin className="h-4 w-4 text-primary" />
              Barrio: {zoneName}
            </div>
            <h1
              className="text-[44px] md:text-[80px] font-black mb-4 leading-[0.85] tracking-tighter text-center max-w-5xl uppercase italic"
              style={{ color: '#FFFFFF', textShadow: '0 10px 30px rgba(0,0,0,0.8)' }}
            >
              Cerrajeros <br /> {zoneName}
            </h1>
            <p
              className="text-lg md:text-2xl font-medium text-center max-w-2xl px-6 opacity-100"
              style={{ color: '#FFFFFF', textShadow: '0 2px 10px rgba(0,0,0,0.5)' }}
            >
              Servicio de urgencia 24h en todo el barrio
            </p>
          </div>

          <div className="w-full max-w-[600px] flex flex-col md:flex-row gap-4 px-6 mb-12 animate-tesla [animation-delay:200ms]">
            <a
              href={`tel:${APP_PHONE}`}
              className="tesla-button h-14 md:h-20 text-xl font-black bg-[#E55A2B] hover:bg-[#C4461B] text-white border-none shadow-[0_20px_50px_rgba(229,90,43,0.3)] flex items-center justify-center rounded-full transition-all flex-1"
            >
              <Phone className="w-7 h-7 mr-3 animate-pulse" fill="currentColor" />
              {APP_PHONE_DISPLAY}
            </a>
            <a href="#detalles" className="tesla-button h-14 md:h-20 text-sm font-bold opacity-80 backdrop-blur-sm text-white border border-white/30 rounded-full flex items-center justify-center flex-1">
              Detalles del Servicio
            </a>
          </div>

          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 animate-bounce opacity-50">
            <ChevronRight className="w-6 h-6 text-white rotate-90" />
          </div>
        </section>

        {/* Content Section 1: Local Context */}
        <section id="detalles" className="tesla-section snap-start md:min-h-screen flex flex-col justify-center bg-white py-20 px-4 md:px-0">
          <div className="tesla-container space-y-16">
            <div className="grid md:grid-cols-2 gap-12 md:gap-20 items-center">
              <div className="space-y-8 text-left">
                <span className="text-primary font-black uppercase tracking-[0.3em] text-[10px] md:text-xs">Urgencias Locales</span>
                <h2 className="text-3xl md:text-6xl font-black tracking-tighter uppercase italic leading-tight">Atención inmediata en {zoneName}</h2>
                <p className="text-base md:text-lg text-gray-500 font-light leading-relaxed">
                  En <strong>{APP_BUSINESS_NAME}</strong> conocemos cada calle de {zoneName}.
                  Ya sea que vivas cerca de la plaza central o en las zonas residenciales, nuestro equipo garantiza una respuesta en <strong>menos de 20 minutos</strong>.
                </p>
                <p className="text-base md:text-lg text-gray-500 font-light leading-relaxed bg-gray-50 p-6 rounded-2xl border-l-4 border-primary italic">
                  "{zoneDescription}"
                </p>
                <div className="grid grid-cols-2 gap-4">
                  <div className="p-6 bg-gray-50 rounded-3xl border border-gray-100 group hover:bg-white hover:shadow-xl transition-all duration-500 flex flex-col items-center text-center">
                    <Clock className="w-8 h-8 text-primary mb-4" />
                    <h4 className="font-black uppercase text-xs tracking-widest">20 Minutos</h4>
                    <p className="text-[10px] text-gray-400 uppercase mt-1">Llegada Media</p>
                  </div>
                  <div className="p-6 bg-gray-50 rounded-3xl border border-gray-100 group hover:bg-white hover:shadow-xl transition-all duration-500 flex flex-col items-center text-center">
                    <ShieldCheck className="w-8 h-8 text-primary mb-4" />
                    <h4 className="font-black uppercase text-xs tracking-widest">Sin Daños</h4>
                    <p className="text-[10px] text-gray-400 uppercase mt-1">Garantizado</p>
                  </div>
                </div>
              </div>
              <div className="h-[400px] md:h-[600px] rounded-[2.5rem] md:rounded-[4rem] overflow-hidden shadow-2xl border border-gray-100 grayscale hover:grayscale-0 transition-all duration-1000">
                <iframe
                  src={zoneMapUrl}
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title={`Mapa de cerrajeros en ${zoneName}`}
                ></iframe>
              </div>
            </div>
          </div>
        </section>

        {/* Content Section 2: Specific Problems */}
        <section className="tesla-section snap-start md:min-h-screen flex flex-col justify-center bg-gray-50 py-20 px-4 md:px-0">
          <div className="tesla-container space-y-16">
            <div className="max-w-3xl mx-auto text-center space-y-4 md:space-y-6">
              <span className="text-primary font-black uppercase tracking-[0.3em] text-[10px] md:text-xs">Casuística del Barrio</span>
              <h2 className="text-3xl md:text-6xl font-black uppercase tracking-tighter italic leading-tight">Problemas comunes en {zoneName}</h2>
              <p className="text-base md:text-lg text-gray-500 font-light">Especialistas en la infraestructura técnica residencial del barrio.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
              {commonProblems.map((problem, index) => (
                <div key={index} className="bg-white p-8 rounded-[2rem] shadow-sm border border-gray-100 flex flex-col gap-6 group hover:shadow-2xl transition-all duration-700">
                  <div className="w-12 h-12 bg-gray-50 rounded-full flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
                    <Zap className="h-6 w-6" />
                  </div>
                  <p className="text-sm md:text-base font-medium text-gray-700 leading-relaxed italic">"{problem}"</p>
                </div>
              ))}
            </div>

            <div className="bg-black text-white p-12 md:p-24 rounded-[3rem] md:rounded-[5rem] text-center space-y-8 md:space-y-10 relative overflow-hidden mt-20">
              <div className="absolute top-0 right-0 w-96 h-96 bg-primary/20 rounded-full blur-[120px]"></div>
              <div className="flex justify-center gap-1.5 mb-2">
                {[1, 2, 3, 4, 5].map(s => <Star key={s} className="w-5 h-5 md:w-8 md:h-8 text-[#FFD700]" fill="currentColor" style={{ filter: 'drop-shadow(0 0 8px rgba(255, 165, 0, 0.6))' }} />)}
              </div>
              <h3 className="text-3xl md:text-6xl font-black tracking-tighter uppercase italic leading-none">¿Tienes una emergencia <br /> ahora en {zoneName}?</h3>
              <p className="text-base md:text-xl text-gray-400 max-w-2xl mx-auto font-light leading-relaxed">No cobramos desplazamiento en todo {APP_LOCATION}. Técnicos locales de guardia 24/7.</p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center relative z-10">
                <Button asChild size="lg" className="rounded-full px-12 h-16 md:h-20 bg-[#E55A2B] text-white hover:bg-[#C4461B] border-none shadow-2xl transition-all font-black text-base md:text-xl uppercase tracking-tighter scale-105">
                  <a href={`tel:${APP_PHONE}`} className="flex items-center">
                    <Phone className="w-6 h-6 mr-3" /> Llamar ahora
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Footer & Final Services */}
        <section className="tesla-section snap-start md:min-h-screen flex flex-col justify-between py-20">
          <div className="tesla-container">
            <RelatedServices currentService={`Cerrajeros ${zoneName}`} />
          </div>
          <div className="mt-20 border-t pt-20 border-gray-100 opacity-60">
            <Footer />
          </div>
        </section>
      </main>
    </div>
  );
}
