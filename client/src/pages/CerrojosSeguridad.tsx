import { Button } from "@/components/ui/button";
import { APP_PHONE, APP_PHONE_DISPLAY } from "@/const";
import { Phone, Shield, Lock, CheckCircle } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import RelatedServices from "@/components/RelatedServices";
import SEOHead from "@/components/SEOHead";
import FAQSection from "@/components/FAQSection";
import BrandsSection from "@/components/BrandsSection";
import { Link } from "wouter";

export default function CerrojosSeguridad() {
    return (
        <div className="min-h-screen flex flex-col bg-white">
            <SEOHead
                title={`Instalación de Cerrojos de Seguridad en Villaviciosa del Odón 🛡️`}
                description={`Refuerza la seguridad de tu hogar con cerrojos de alta seguridad (FAC, Lince). Instalación profesional en Villaviciosa del Odón. Protección anti-bumping.`}
            />
            <Header />

            <main className="pt-16 md:pt-20">
                <section className="bg-gray-50 py-4 border-b">
                    <div className="container mx-auto px-4">
                        <nav className="text-sm text-gray-500 flex gap-2">
                            <Link href="/" className="hover:text-primary transition-colors">Inicio</Link>
                            <span>/</span>
                            <span className="text-gray-900 font-medium">Cerrojos de Seguridad</span>
                        </nav>
                    </div>
                </section>

                <section className="relative py-24 bg-[#171A20] text-white overflow-hidden">
                    <div className="absolute inset-0 opacity-20">
                        <img
                            src="/cerraduras-seguridad.jpg"
                            alt="Cerrojo de alta seguridad"
                            className="w-full h-full object-cover"
                        />
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/80 to-black"></div>

                    <div className="container relative z-10 mx-auto px-4 text-center">
                        <div className="max-w-4xl mx-auto">
                            <div className="inline-flex items-center gap-2 px-4 py-2 bg-accent rounded-full mb-8 shadow-xl shadow-accent/20">
                                <Shield className="h-4 w-4 text-white" />
                                <span className="text-xs font-bold tracking-[0.2em] uppercase text-white">Máxima Protección Anti-Bumping</span>
                            </div>
                            <h1 className="text-5xl md:text-8xl font-black mb-8 tracking-tighter leading-none">
                                Segunda <br />
                                <span className="text-accent italic">Cerradura</span>
                            </h1>
                            <p className="text-xl md:text-2xl text-gray-300 mb-12 font-light leading-relaxed max-w-2xl mx-auto">
                                Duplica la seguridad de tu puerta de forma económica y sin obras. Especialistas en cerrojos FAC y Lince.
                            </p>
                            <Button asChild size="lg" className="bg-white text-black hover:bg-gray-100 rounded-full px-12 h-16 text-xl font-bold border-0">
                                <a href={`tel:${APP_PHONE}`}>
                                    Llamar ahora: {APP_PHONE_DISPLAY}
                                </a>
                            </Button>
                        </div>
                    </div>
                </section>

                <section className="py-24 bg-white">
                    <div className="container mx-auto px-4">
                        <div className="grid md:grid-cols-2 gap-12">
                            <div className="p-10 bg-gray-50 rounded-[2.5rem] border border-gray-100 hover:shadow-2xl transition-all duration-500">
                                <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center mb-8 shadow-sm">
                                    <Shield className="h-8 w-8 text-accent" />
                                </div>
                                <h3 className="text-3xl font-black mb-6 tracking-tight">FAC Antibumping</h3>
                                <p className="text-gray-500 leading-relaxed font-light mb-8">
                                    Instalamos los últimos modelos de la marca FAC, diseñados específicamente para resistir las técnicas de robo más extendidas en Villaviciosa.
                                </p>
                                <ul className="space-y-4">
                                    {["Protección anti-taladro", "Sistema anti-ganzúa", "Llave de seguridad"].map((t, i) => (
                                        <li key={i} className="flex items-center gap-3">
                                            <CheckCircle className="text-accent h-5 w-5" />
                                            <span className="font-semibold text-gray-700">{t}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div className="p-10 bg-gray-50 rounded-[2.5rem] border border-gray-100 hover:shadow-2xl transition-all duration-500">
                                <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center mb-8 shadow-sm">
                                    <Lock className="h-8 w-8 text-accent" />
                                </div>
                                <h3 className="text-3xl font-black mb-6 tracking-tight">Instalación Rápida</h3>
                                <p className="text-gray-500 leading-relaxed font-light mb-8">
                                    Nuestros técnicos profesionales realizan la instalación en menos de 45 minutos. Sin ruidos molestos y dejando todo impecable.
                                </p>
                                <ul className="space-y-4">
                                    {["Presupuesto cerrado", "Garantía por escrito", "Técnicos locales"].map((t, i) => (
                                        <li key={i} className="flex items-center gap-3">
                                            <CheckCircle className="text-accent h-5 w-5" />
                                            <span className="font-semibold text-gray-700">{t}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>

                <BrandsSection />
                <RelatedServices currentService="Cerrojos de Seguridad" />
            </main>

            <Footer />
        </div>
    );
}
