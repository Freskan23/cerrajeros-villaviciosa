import { useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Phone, MapPin, Shield, CheckCircle, ChevronDown, Clock } from "lucide-react";
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
        {/* Hero Local - Tesla Style */}
        <section className="tesla-hero snap-start">
          <div className="tesla-hero-bg">
            <img
              src="/hero-background-minimal.webp"
              alt={`Cerrajero profesional en ${zoneName}`}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/40" />
          </div>

          <div className="animate-tesla">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-md rounded-full border border-white/20 text-white text-xs font-bold uppercase tracking-widest mb-6">
              <MapPin className="h-4 w-4 text-primary" />
              Zona: {zoneName}
            </div>
            <h1 className="text-[40px] md:text-[64px] font-medium text-white mb-2 leading-tight drop-shadow-2xl">
              Cerrajeros {zoneName}
            </h1>
            <p className="text-sm md:text-lg text-white font-normal underline underline-offset-4 decoration-1 decoration-white/40 drop-shadow-lg">
              Servicio de urgencia disponible en todo el barrio
            </p>
          </div>

          <div className="w-full max-w-[550px] flex flex-col md:flex-row gap-4 px-6 mb-12 animate-tesla [animation-delay:200ms]">
            <a href={`tel:${APP_PHONE}`} className="tesla-button tesla-button-primary uppercase tracking-widest text-[11px] font-bold">
              Llamar ahora: {APP_PHONE_DISPLAY}
            </a>
            <a href="#detalles" className="tesla-button tesla-button-secondary uppercase tracking-widest text-[11px] font-bold">
              Detalles del Servicio
            </a>
          </div>

          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 animate-bounce opacity-80 z-20">
            <ChevronDown className="w-6 h-6 text-white" />
          </div>
        </section>

        {/* Content Section 1: Local Context */}
        <section id="detalles" className="tesla-section snap-start min-h-screen flex flex-col justify-center bg-white">
          <div className="tesla-container space-y-16">
            <div className="grid md:grid-cols-2 gap-20 items-center">
              <div className="space-y-8 text-left">
                <h2 className="text-3xl md:text-5xl font-medium tracking-tight">Atención inmediata en {zoneName}</h2>
                <p className="text-lg text-gray-500 font-light leading-relaxed">
                  En <strong>{APP_BUSINESS_NAME}</strong> conocemos cada calle de {zoneName}.
                  Ya sea que vivas cerca de la plaza central o en las zonas residenciales más alejadas, nuestro equipo de guardia se encuentra patrullando el barrio para garantizar una respuesta en menos de 20 minutos.
                </p>
                <p className="text-lg text-gray-500 font-light leading-relaxed">
                  {zoneDescription}
                </p>
                <div className="grid grid-cols-2 gap-4">
                  <div className="p-6 bg-gray-50 rounded-2xl border border-gray-100">
                    <Clock className="w-8 h-8 text-primary mb-4" />
                    <h4 className="font-bold">20 Minutos</h4>
                    <p className="text-xs text-gray-400">Media de llegada</p>
                  </div>
                  <div className="p-6 bg-gray-50 rounded-2xl border border-gray-100">
                    <Shield className="w-8 h-8 text-primary mb-4" />
                    <h4 className="font-bold">Garantía</h4>
                    <p className="text-xs text-gray-400">Certificada por escrito</p>
                  </div>
                </div>
              </div>
              <div className="h-[500px] rounded-[3rem] overflow-hidden shadow-2xl border border-gray-100">
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
        <section className="tesla-section snap-start min-h-screen flex flex-col justify-center bg-gray-50">
          <div className="tesla-container space-y-16">
            <div className="max-w-3xl mx-auto text-center space-y-6">
              <h2 className="text-3xl md:text-5xl font-medium uppercase tracking-widest text-gray-400">Problemas comunes</h2>
              <p className="text-lg text-gray-500 font-light">Especialistas en la infraestructura de {zoneName}</p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {commonProblems.map((problem, index) => (
                <div key={index} className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 flex flex-col gap-4">
                  <CheckCircle className="h-8 w-8 text-primary" />
                  <p className="text-sm font-medium text-gray-700 leading-relaxed">{problem}</p>
                </div>
              ))}
            </div>

            <div className="bg-black text-white p-12 md:p-20 rounded-[4rem] text-center space-y-8 mt-20">
              <h3 className="text-3xl font-medium tracking-tight">¿Tienes una emergencia ahora en {zoneName}?</h3>
              <p className="text-gray-400 max-w-xl mx-auto font-light leading-relaxed">Estamos a solo una llamada de distancia. No cobramos desplazamiento en todo {APP_LOCATION}.</p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild size="lg" className="rounded-full px-12 h-16 bg-white text-black hover:bg-gray-200 transition-all font-bold text-lg">
                  <a href={`tel:${APP_PHONE}`}>Llamar a Urgencias</a>
                </Button>
                <Button asChild size="lg" className="rounded-full px-12 h-16 bg-transparent border border-white/30 text-white hover:bg-white/10 transition-all font-bold text-lg">
                  <a href={`tel:${APP_PHONE}`}>WhatsApp</a>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Footer & Final Services */}
        <section className="tesla-section snap-start min-h-screen flex flex-col justify-between">
          <div className="tesla-container mt-20">
            <RelatedServices currentService={`Cerrajeros ${zoneName}`} />
          </div>
          <div className="mt-20">
            <Footer />
          </div>
        </section>
      </main>
    </div>
  );
}
