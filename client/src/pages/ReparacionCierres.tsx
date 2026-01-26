import { Button } from "@/components/ui/button";
import {
    APP_BUSINESS_NAME,
    APP_LOCATION,
    APP_PHONE,
    APP_PHONE_DISPLAY,
} from "@/const";
import { Phone, Shield, Wrench, Settings } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import RelatedServices from "@/components/RelatedServices";
import SEOHead from "@/components/SEOHead";
import FAQSection from "@/components/FAQSection";
import BrandsSection from "@/components/BrandsSection";
import { Link } from "wouter";

export default function ReparacionCierres() {
    const services = [
        { title: "Reparación Urgente", desc: "Solucionamos bloqueos de persianas en locales comerciales 24h." },
        { title: "Motorización", desc: "Instalación de motores para cierres metálicos y persianas de comercio." },
        { title: "Mantenimiento", desc: "Engrase y ajuste de lamas, ejes y muelles para evitar averías." },
        { title: "Ejes y Poleas", desc: "Sustitución de componentes desgastados para un funcionamiento suave." },
    ];

    return (
        <div className="min-h-screen flex flex-col">
            <SEOHead
                title={`Reparación de Cierres Metálicos Villaviciosa del Odón 🏪 | 24 Horas`}
                description={`Reparación urgente de cierres metálicos y persianas de comercio en Villaviciosa del Odón. Motorización, mantenimiento y seguridad para tu negocio.`}
            />
            <Header />

            <main className="pt-16 md:pt-20">
                <section className="bg-gray-50 py-4 border-b">
                    <div className="container mx-auto px-4">
                        <nav className="text-sm text-gray-500">
                            <Link href="/" className="hover:text-primary">Inicio</Link>
                            <span className="mx-2">/</span>
                            <span className="text-gray-900 font-medium">Cierres Metálicos</span>
                        </nav>
                    </div>
                </section>

                <section className="relative bg-[#171A20] text-white py-24 overflow-hidden">
                    <div className="absolute inset-0 opacity-40">
                        <img
                            src="/cierres_metalicos_modernos_1769424953010.png"
                            alt="Reparación de cierres metálicos"
                            className="w-full h-full object-cover"
                        />
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>

                    <div className="container relative z-10">
                        <div className="max-w-3xl">
                            <h1 className="text-5xl md:text-7xl font-extrabold mb-6 tracking-tighter leading-none">
                                🏪 Cierres <br className="hidden md:block" /><span className="text-accent underline decoration-4 underline-offset-8 italic">Metálicos</span>
                            </h1>
                            <p className="text-xl text-gray-300 mb-10 font-light leading-relaxed">
                                ¿Tu negocio no abre? Reparamos persianas metálicas y motores de forma urgente 24h para que no pierdas ni un minuto de venta.
                            </p>
                            <Button asChild size="lg" className="bg-accent hover:bg-accent/90 rounded-full h-14 px-10 text-lg">
                                <a href={`tel:${APP_PHONE}`}>
                                    <Phone className="mr-3 h-5 w-5" />
                                    Urgencias Locales: {APP_PHONE_DISPLAY}
                                </a>
                            </Button>
                        </div>
                    </div>
                </section>

                <section className="py-24 bg-white">
                    <div className="container mx-auto px-4">
                        <div className="max-w-6xl mx-auto">
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                                {services.map((s, i) => (
                                    <div key={i} className="group p-8 border border-gray-100 rounded-3xl hover:border-accent hover:shadow-2xl transition-all duration-500 bg-white">
                                        <div className="w-12 h-12 bg-accent/5 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-accent group-hover:text-white transition-colors">
                                            <Settings className="h-6 w-6" />
                                        </div>
                                        <h3 className="text-xl font-bold mb-4 tracking-tight">{s.title}</h3>
                                        <p className="text-gray-500 font-light leading-relaxed">{s.desc}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>

                <BrandsSection />
                <RelatedServices currentService="Reparación de Cierres Metálicos" />
            </main>

            <Footer />
        </div>
    );
}
