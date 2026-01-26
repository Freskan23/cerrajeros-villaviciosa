import { Button } from "@/components/ui/button";
import { APP_BUSINESS_NAME, APP_PHONE, APP_PHONE_DISPLAY } from "@/const";
import { Phone, Users, Shield, CheckCircle } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import { Link } from "wouter";

export default function Desahucios() {
    return (
        <div className="min-h-screen flex flex-col bg-white">
            <SEOHead
                title={`Cerrajería para Desahucios y Lanzamientos en Villaviciosa del Odón 👮`}
                description={`Colaboramos con procuradores y fuerzas de seguridad para lanzamientos judiciales y desahucios en Villaviciosa del Odón. Puntualidad y profesionalidad garantizada.`}
            />
            <Header />

            <main className="pt-16 md:pt-20">
                <section className="bg-gray-50 py-4 border-b">
                    <div className="container mx-auto px-4">
                        <nav className="text-sm text-gray-500 flex gap-2">
                            <Link href="/" className="hover:text-primary transition-colors">Inicio</Link>
                            <span>/</span>
                            <span className="text-gray-900 font-medium">Asistencia en Desahucios</span>
                        </nav>
                    </div>
                </section>

                <section className="relative py-24 bg-[#171A20] text-white overflow-hidden">
                    <div className="absolute inset-0 opacity-30">
                        <img
                            src="/desahucios_profesionales_1769424982476.png"
                            alt="Cerrajería forense y desahucios"
                            className="w-full h-full object-cover"
                        />
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-r from-black via-black/60 to-transparent"></div>

                    <div className="container relative z-10 mx-auto px-4">
                        <div className="max-w-3xl">
                            <div className="inline-flex items-center gap-2 px-3 py-1 bg-red-600/20 backdrop-blur-md border border-red-500/30 rounded-full mb-8">
                                <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-red-400">Servicio Judicial Especializado</span>
                            </div>
                            <h1 className="text-5xl md:text-7xl font-black mb-8 tracking-tighter leading-none">
                                Lanzamientos <br />
                                <span className="text-accent italic">Judiciales</span>
                            </h1>
                            <p className="text-xl text-gray-300 mb-12 font-light leading-relaxed">
                                Garantizamos puntualidad absoluta y discreción en procesos de desahucio. Colaboramos con procuradores y fuerzas de seguridad en {APP_BUSINESS_NAME}.
                            </p>
                            <Button asChild className="bg-white text-black hover:bg-gray-200 rounded-full px-10 h-16 text-xl font-bold transition-all">
                                <a href={`tel:${APP_PHONE}`}>
                                    <Phone className="mr-3 h-6 w-6" /> {APP_PHONE_DISPLAY}
                                </a>
                            </Button>
                        </div>
                    </div>
                </section>

                <section className="py-24 bg-white">
                    <div className="container mx-auto px-4">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
                            <div className="space-y-8">
                                <h2 className="text-3xl md:text-5xl font-black tracking-tight text-gray-900">Profesionalidad en cada proceso</h2>
                                <p className="text-lg text-gray-500 leading-relaxed font-light">
                                    Entendemos la tensión de estos procesos. Nuestro equipo está formado para actuar con la máxima rapidez, asegurando la propiedad y cambiando los bombines de inmediato para evitar re-ocupaciones.
                                </p>
                                <div className="space-y-4">
                                    {[
                                        "Puntualidad en la cita judicial",
                                        "Apertura técnica sin daños estructurales",
                                        "Cambio de llaves en el acto",
                                        "Asesoramiento en cierres anti-okupa"
                                    ].map((t, i) => (
                                        <div key={i} className="flex items-center gap-3">
                                            <CheckCircle className="text-accent h-5 w-5" />
                                            <span className="font-medium text-gray-700">{t}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <div className="grid grid-cols-2 gap-4">
                                <div className="h-64 bg-gray-100 rounded-3xl overflow-hidden shadow-2xl translate-y-8">
                                    <img src="/proceso-llegada.webp" alt="Llegada" className="w-full h-full object-cover" />
                                </div>
                                <div className="h-64 bg-gray-100 rounded-3xl overflow-hidden shadow-2xl">
                                    <img src="/proceso-herramientas.webp" alt="Herramientas" className="w-full h-full object-cover" />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>

            <Footer />
        </div>
    );
}
