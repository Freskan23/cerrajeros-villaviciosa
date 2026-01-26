import { APP_PHONE, APP_PHONE_DISPLAY } from "@/const";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";

export default function CambioCerraduras() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <SEOHead
        title={`Cambio de Cerraduras Villaviciosa del Odón 🔧 Seguridad | 24h`}
        description={`🔒 Protege tu hogar hoy. Instalamos cerraduras antibumping en Villaviciosa del Odón con garantía total.`}
      />
      <Header />

      <main className="snap-y snap-mandatory h-screen overflow-y-scroll scroll-smooth">
        {/* Hero Section */}
        <section className="tesla-hero snap-start">
          <div className="tesla-hero-bg">
            <img
              src="/instalacion-cerradura.jpg"
              alt="Instalación de cerraduras"
              className="w-full h-full object-cover opacity-80"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/60" />
          </div>

          <div className="animate-tesla">
            <h1 className="text-[40px] md:text-[56px] font-medium text-white mb-2 leading-tight">
              Seguridad de Grado
            </h1>
            <p className="text-sm md:text-base text-white/90">
              Instalación de cerraduras de alta seguridad · Garantía total
            </p>
          </div>

          <div className="w-full max-w-[550px] flex flex-col md:flex-row gap-4 px-6 mb-12 animate-tesla [animation-delay:200ms]">
            <a href={`tel:${APP_PHONE}`} className="tesla-button tesla-button-primary">
              Presupuesto: {APP_PHONE_DISPLAY}
            </a>
            <a href="#proceso" className="tesla-button tesla-button-secondary">
              Proceso de instalación
            </a>
          </div>
        </section>

        {/* Content Section */}
        <section id="proceso" className="tesla-section snap-start min-h-screen flex flex-col justify-center items-center">
          <div className="tesla-container space-y-24 max-w-4xl">
            <div className="text-center">
              <h2 className="text-4xl md:text-6xl mb-8 text-balance">Blindamos su puerta con las mejores marcas</h2>
              <p className="text-gray-500 font-light text-xl leading-relaxed max-w-2xl mx-auto">
                Realizamos sustituciones completas de cajas centrales y escudos protectores para que su puerta sea un obstáculo real.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                { t: "Presupuesto previo", d: "Sabrá el precio exacto antes de empezar." },
                { t: "Expertos oficiales", d: "Técnicos formados en las últimas tecnologías." },
                { t: "Disponibilidad total", d: "Incluso festivos y fines de semana." }
              ].map((item, i) => (
                <div key={i} className="text-center">
                  <h4 className="text-xl font-bold mb-2">{item.t}</h4>
                  <p className="text-gray-500 font-light text-sm">{item.d}</p>
                </div>
              ))}
            </div>

            <div className="pt-24 text-center">
              <Footer />
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
