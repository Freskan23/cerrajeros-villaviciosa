import { APP_BUSINESS_NAME, APP_PHONE, APP_PHONE_DISPLAY, APP_LOCATION } from "@/const";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import RelatedServices from "@/components/RelatedServices";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { ShieldAlert, CheckCircle, ChevronDown, Award, Package, Lock } from "lucide-react";

export default function CambioBombin() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <SEOHead
        title={`Cambio de Bombín en ${APP_LOCATION} 🔑 Seguridad Antibumping`}
        description={`🛡️ Protege tu hogar hoy mismo. Instalamos bombines de alta seguridad en ${APP_LOCATION} en menos de 20 min. Anti-bumping, anti-extracción y anti-ganzúa.`}
      />
      <Header />

      <main className="snap-y snap-mandatory h-screen overflow-y-scroll scroll-smooth">
        {/* Hero Section */}
        <section className="tesla-hero snap-start">
          <div className="tesla-hero-bg">
            <img
              src="/cambio-bombin.jpg"
              alt="Bombín de alta seguridad"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/40" />
          </div>

          <div className="animate-tesla">
            <h1 className="text-[40px] md:text-[64px] font-medium text-white mb-2 leading-tight drop-shadow-2xl">
              Seguridad Invisible
            </h1>
            <p className="text-sm md:text-lg text-white font-normal underline underline-offset-4 decoration-1 decoration-white/40 drop-shadow-lg">
              Bombines antibumping grado 5 · Instalación Express
            </p>
          </div>

          <div className="w-full max-w-[550px] flex flex-col md:flex-row gap-4 px-6 mb-12 animate-tesla [animation-delay:200ms]">
            <a href={`tel:${APP_PHONE}`} className="tesla-button tesla-button-primary uppercase tracking-widest text-[11px] font-bold">
              Pedir Presupuesto: {APP_PHONE_DISPLAY}
            </a>
            <a href="#ventajas" className="tesla-button tesla-button-secondary uppercase tracking-widest text-[11px] font-bold">
              Ventajas Técnicas
            </a>
          </div>

          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 animate-bounce opacity-80 z-20">
            <ChevronDown className="w-6 h-6 text-white" />
          </div>
        </section>

        {/* Content Section 1: Detailed SEO Text */}
        <section id="ventajas" className="tesla-section snap-start min-h-screen flex flex-col justify-center items-center bg-white">
          <div className="tesla-container space-y-16 max-w-5xl">
            <div className="text-center space-y-6">
              <h2 className="text-3xl md:text-5xl font-medium tracking-tight uppercase">Blindaje técnico para tu puerta</h2>
              <p className="text-lg text-gray-500 font-light leading-relaxed max-w-3xl mx-auto">
                El bombín es el corazón de tu cerradura. En <strong>{APP_BUSINESS_NAME}</strong> recomendamos siempre el cambio de cilindros antiguos por modelos de <strong>Alta Seguridad</strong> que resistan las técnicas de robo más frecuentes en {APP_LOCATION}, como el Bumping, el Impresioning o la extracción de núcleo.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="rounded-[3rem] overflow-hidden shadow-2xl aspect-square bg-gray-100">
                <img src="/cilindro-seguridad.jpg" alt="Cilindro de seguridad de precisión" className="w-full h-full object-cover" />
              </div>
              <div className="space-y-10">
                <div className="space-y-4">
                  <h3 className="text-2xl font-bold flex items-center gap-3"><ShieldAlert className="text-primary" /> Protección Total</h3>
                  <p className="text-gray-500 font-light leading-relaxed">Nuestros bombines cuentan con pasadores de acero reforzado que impiden el taladrado y puentes de refuerzo que evitan la rotura del cuerpo.</p>
                </div>
                <div className="space-y-4">
                  <h3 className="text-2xl font-bold flex items-center gap-3"><Award className="text-primary" /> Marcas Líderes</h3>
                  <p className="text-gray-500 font-light leading-relaxed">Trabajamos exclusivamente con fabricantes certificados: Kaba, Mauer, Amig, Tesa e ISEO. Calidad garantizada.</p>
                </div>
                <div className="space-y-4">
                  <h3 className="text-2xl font-bold flex items-center gap-3"><Package className="text-primary" /> Llaves Incopiables</h3>
                  <p className="text-gray-500 font-light leading-relaxed">Sistemas con tarjeta de propiedad. Solo tú puedes solicitar duplicados de llaves bajo estricto control de seguridad.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Content Section 2: Brands & CTA */}
        <section className="tesla-section snap-start min-h-screen flex flex-col justify-center bg-gray-50">
          <div className="tesla-container space-y-20">
            <div className="grid md:grid-cols-4 gap-8">
              {[
                { t: "KABA Expert", d: "Tecnología suiza de alta precisión." },
                { t: "MAUER NW5", d: "El bombín más resistente del mercado." },
                { t: "TESA TK100", d: "Seguridad avanzada fabricada en España." },
                { t: "EVVA MCS", d: "Sistema magnético imposible de ganzuar." }
              ].map((item, i) => (
                <div key={i} className="bg-white p-8 rounded-2xl shadow-sm text-center space-y-4">
                  <h4 className="font-bold text-gray-900">{item.t}</h4>
                  <p className="text-xs text-gray-500 font-light">{item.d}</p>
                </div>
              ))}
            </div>

            <div className="grid md:grid-cols-2 bg-white rounded-[3rem] overflow-hidden shadow-xl">
              <div className="p-12 md:p-20 space-y-6">
                <h2 className="text-3xl md:text-5xl font-medium tracking-tighter">¿Cuándo cambiar tu bombín?</h2>
                <ul className="space-y-4">
                  {[
                    "Al mudarte a una nueva vivienda o local.",
                    "Si has perdido las llaves o te las han robado.",
                    "Si tu bombín tiene más de 5 años y no es antibumping.",
                    "Si la llave empieza a atascarse o gira mal."
                  ].map((text, i) => (
                    <li key={i} className="flex gap-3 items-start text-gray-600 font-light">
                      <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" /> {text}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-black text-white p-12 md:p-20 flex flex-col justify-center items-center text-center space-y-8">
                <Lock className="w-16 h-16 text-primary" />
                <h4 className="text-2xl font-bold">Consigue tu presupuesto en 1 minuto</h4>
                <Button asChild size="lg" className="rounded-full px-12 h-16 bg-white text-black hover:bg-gray-200 transition-all font-bold">
                  <a href={`tel:${APP_PHONE}`}>Llamar ahora</a>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Final Section */}
        <section className="tesla-section snap-start min-h-screen flex flex-col justify-between">
          <div className="tesla-container mt-20">
            <RelatedServices currentService="Cambio de Bombín" />
          </div>
          <div className="mt-20">
            <Footer />
          </div>
        </section>
      </main>
    </div>
  );
}
