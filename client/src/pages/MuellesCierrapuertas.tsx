import { Button } from "@/components/ui/button";
import { APP_PHONE, APP_PHONE_DISPLAY } from "@/const";
import { Phone, ArrowDownToLine, Shield, CheckCircle } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import RelatedServices from "@/components/RelatedServices";
import SEOHead from "@/components/SEOHead";
import { Link } from "wouter";

export default function MuellesCierrapuertas() {
    return (
        <div className="min-h-screen flex flex-col bg-white">
            <SEOHead
                title={`Instalación de Muelles Cierrapuertas en Villaviciosa del Odón 🚪`}
                description={`Expertos en la instalación y regulación de muelles cierrapuertas para comunidades y oficinas en Villaviciosa del Odón. Soluciones duraderas.`}
            />
            <Header />

            <main className="pt-16 md:pt-20">
                <section className="bg-gray-50 py-4 border-b">
                    <div className="container mx-auto px-4">
                        <nav className="text-sm text-gray-500 flex gap-2">
                            <Link href="/" className="hover:text-primary transition-colors">Inicio</Link>
                            <span>/</span>
                            <span className="text-gray-900 font-medium">Muelles Cierrapuertas</span>
                        </nav>
                    </div>
                </section>

                <section className="relative py-24 bg-[#171A20] text-white overflow-hidden">
                    <div className="absolute inset-0 opacity-40">
                        <img
                            src="/muelle_cierrapuertas_comunidad_1769424968072.png"
                            alt="Muelle cierrapuertas profesional"
                            className="w-full h-full object-cover"
                        />
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-r from-black via-black/40 to-transparent"></div>

                    <div className="container relative z-10 mx-auto px-4">
                        <div className="max-w-3xl">
                            <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/10 backdrop-blur-md border border-white/20 rounded-full mb-8">
                                <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-gray-300">Comunidades y Negocios</span>
                            </div>
                            <h1 className="text-5xl md:text-8xl font-black mb-8 tracking-tighter leading-none">
                                Muelles <br />
                                <span className="text-accent italic">Hidráulicos</span>
                            </h1>
                            <p className="text-xl text-gray-300 mb-12 font-light leading-relaxed">
                                Evita portazos y asegura tu inmueble. Instalamos retenedores de alta gama con regulación de velocidad para portales de Villaviciosa.
                            </p>
                            <Button asChild className="bg-accent hover:bg-accent/90 text-white rounded-full px-10 h-16 text-xl font-bold shadow-2xl shadow-accent/20 transition-all">
                                <a href={`tel:${APP_PHONE}`}>
                                    Solicitar Instalación: {APP_PHONE_DISPLAY}
                                </a>
                            </Button>
                        </div>
                    </div>
                </section>

                <section className="py-24 bg-white">
                    <div className="container mx-auto px-4">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                            <div>
                                <h2 className="text-3xl md:text-5xl font-black mb-8 tracking-tight">Silencio y Seguridad</h2>
                                <p className="text-lg text-gray-500 leading-relaxed font-light mb-8">
                                    Un muelle mal regulado no solo es molesto por el ruido, sino que puede dañar la cerradura y el marco de la puerta. Nuestros cerrajeros son expertos en hidráulica de precisión.
                                </p>
                                <div className="space-y-6">
                                    <div className="flex gap-4">
                                        <div className="w-12 h-12 rounded-2xl bg-gray-50 flex items-center justify-center shrink-0">
                                            <ArrowDownToLine className="text-accent h-6 w-6" />
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-xl">Regulación Exacta</h4>
                                            <p className="text-gray-500">Ajustamos el golpe final para que la puerta cierre siempre con suavidad.</p>
                                        </div>
                                    </div>
                                    <div className="flex gap-4">
                                        <div className="w-12 h-12 rounded-2xl bg-gray-50 flex items-center justify-center shrink-0">
                                            <Shield className="text-accent h-6 w-6" />
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-xl">Material de Alta Resistencia</h4>
                                            <p className="text-gray-500">Modelos ensayados para más de 500.000 aperturas.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="bg-gray-50 p-12 rounded-[3.5rem] border border-gray-100">
                                <h3 className="text-3xl font-black mb-8 tracking-tight">Presupuesto para Comunidades</h3>
                                <ul className="space-y-5 mb-10">
                                    {[
                                        "Descuentos por volumen",
                                        "Mantenimiento preventivo",
                                        "Primeras marcas (Dorma, Geze)",
                                        "Instalación en menos de 24h"
                                    ].map((t, i) => (
                                        <li key={i} className="flex items-center gap-3">
                                            <CheckCircle className="text-accent h-5 w-5" />
                                            <span className="font-medium text-gray-800 text-lg">{t}</span>
                                        </li>
                                    ))}
                                </ul>
                                <Button asChild className="w-full bg-primary hover:bg-black rounded-full h-14 text-lg">
                                    <a href={`tel:${APP_PHONE}`}>Llamar ahora</a>
                                </Button>
                            </div>
                        </div>
                    </div>
                </section>
                <RelatedServices currentService="Muelles Cierrapuertas" />
            </main>

            <Footer />
        </div>
    );
}
