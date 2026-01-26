import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  APP_BUSINESS_NAME,
  APP_LOCATION,
  APP_PHONE,
  APP_PHONE_DISPLAY,
} from "@/const";
import {
  Phone,
  Shield,
  CheckCircle,
  AlertCircle,
  Lock,
} from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import RelatedServices from "@/components/RelatedServices";
import SEOHead from "@/components/SEOHead";
import FAQSection from "@/components/FAQSection";
import BrandsSection from "@/components/BrandsSection";
import { Link } from "wouter";

export default function AperturaCajasFuertes() {
  const benefits = [
    "✅ Apertura sin daños estructurales",
    "✅ Técnicos expertos en alta seguridad",
    "✅ Absoluta discreción y confidencialidad",
    "✅ Recuperación de combinaciones",
    "✅ Cambio de cerraduras de cajas fuertes",
    "✅ Servicio para todas las marcas",
  ];

  const faqItems = [
    {
      question: "¿Se puede abrir una caja fuerte sin romperla?",
      answer: "Sí, en la mayoría de los casos utilizamos técnicas de manipulación técnica o herramientas de precisión que permiten abrir la caja fuerte preservando su integridad y la de su contenido."
    },
    {
      question: "¿Qué marcas de cajas fuertes abrís?",
      answer: "Trabajamos con todas las marcas del mercado: Arfe, BTV, Fichet, Ferrimax, Fac, Olle, Infac, entre otras, tanto mecánicas como electrónicas."
    },
    {
      question: "¿Es necesario acreditar la propiedad?",
      answer: "Por seguridad y cumplimiento legal, requerimos que el cliente acredite de forma fehaciente la propiedad o autorización legal para la apertura de la caja fuerte."
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <SEOHead
        title={`Apertura de Cajas Fuertes Villaviciosa del Odón 🔐 | Especialistas 24h`}
        description={`Especialistas en apertura de cajas fuertes en Villaviciosa del Odón. Apertura técnica sin daños, recuperación de claves y mantenimiento. Presupuesto sin compromiso.`}
      />
      <Header />

      <main className="pt-16 md:pt-20">
        <section className="bg-gray-50 py-4 border-b">
          <div className="container mx-auto px-4">
            <nav className="text-sm text-gray-500">
              <Link href="/" className="hover:text-primary">Inicio</Link>
              <span className="mx-2">/</span>
              <span className="text-gray-900 font-medium">Apertura de Cajas Fuertes</span>
            </nav>
          </div>
        </section>

        <section className="relative bg-[#171A20] text-white py-24 overflow-hidden">
          {/* Fondo con imagen generada */}
          <div className="absolute inset-0 opacity-40">
            <img
              src="/cajas_fuertes_premium_1769424937717.png"
              alt="Apertura técnica de cajas fuertes"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-transparent"></div>

          <div className="container relative z-10">
            <div className="max-w-2xl">
              <h1 className="text-5xl md:text-7xl font-extrabold mb-6 tracking-tighter leading-none">
                🔐 Cajas Fuertes:<br />Apertura <span className="text-accent italic">Técnica</span>
              </h1>
              <p className="text-xl text-gray-300 mb-10 font-light leading-relaxed">
                Expertos en apertura de alta seguridad sin daños. Servicio confidencial para empresas y particulares en Villaviciosa.
              </p>
              <Button asChild size="lg" className="bg-accent hover:bg-accent/90 rounded-full h-14 px-10 text-lg">
                <a href={`tel:${APP_PHONE}`}>
                  <Phone className="mr-3 h-5 w-5" />
                  Contactar Especialista: {APP_PHONE_DISPLAY}
                </a>
              </Button>
            </div>
          </div>
        </section>

        <section className="py-24 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto space-y-12">
              <div className="text-center">
                <h2 className="text-3xl md:text-5xl font-bold mb-4 tracking-tight">Alta Precisión en Seguridad</h2>
                <div className="h-1.5 w-20 bg-accent mx-auto rounded-full"></div>
              </div>
              <p className="text-xl text-gray-600 leading-relaxed font-light text-center">
                La apertura de una caja fuerte requiere conocimientos técnicos específicos y herramientas de alta precisión. En <strong>{APP_BUSINESS_NAME}</strong>, contamos con cerrajeros especializados en sistemas de seguridad física.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {benefits.map((b, i) => (
                  <div key={i} className="flex items-center gap-4 p-5 bg-gray-50 rounded-2xl border border-gray-100 hover:shadow-md transition-shadow">
                    <CheckCircle className="text-accent h-6 w-6 flex-shrink-0" />
                    <span className="font-medium text-gray-700">{b}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <BrandsSection />
        <FAQSection items={faqItems} title="Preguntas sobre Cajas Fuertes" />
        <RelatedServices currentService="Apertura de Cajas Fuertes" />
      </main>

      <Footer />
    </div>
  );
}
