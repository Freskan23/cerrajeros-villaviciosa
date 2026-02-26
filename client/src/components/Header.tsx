import React, { useState, useEffect } from "react";
import { APP_BUSINESS_NAME, APP_PHONE, APP_PHONE_DISPLAY } from "@/const";
import { X, ChevronDown, MapPin, Shield, Lock, Store, Key, ArrowRight, Clock, Award } from "lucide-react";
import { Link, useLocation } from "wouter";
import { motion, AnimatePresence } from "framer-motion";

const services = [
  {
    href: "/apertura-puertas",
    label: "Apertura de Puertas",
    desc: "Urgencias 24h sin daños",
    icon: Lock,
    color: "text-blue-500"
  },
  {
    href: "/cambio-cerraduras",
    label: "Cambio de Cerraduras",
    desc: "Alta seguridad y antibumping",
    icon: Shield,
    color: "text-orange-500"
  },
  {
    href: "/cambio-bombin",
    label: "Cambio de Bombín",
    desc: "Actualización inmediata",
    icon: Key,
    color: "text-green-500"
  },
  {
    href: "/reparacion-cierres-metalicos",
    label: "Cierres Metálicos",
    desc: "Mantenimiento de comercios",
    icon: Store,
    color: "text-purple-500"
  },
  {
    href: "/apertura-cajas-fuertes",
    label: "Cajas Fuertes",
    desc: "Apertura técnica profesional",
    icon: Award,
    color: "text-indigo-500"
  },
  {
    href: "/urgencias-24h",
    label: "Servicio Urgente",
    desc: "Llegamos en 20 minutos",
    icon: Clock,
    color: "text-red-500"
  },
];

const zones = [
  { href: "/cerrajeros-centro", label: "Centro" },
  { href: "/cerrajeros-el-bosque", label: "El Bosque" },
  { href: "/cerrajeros-campodon", label: "Campodón" },
  { href: "/cerrajeros-monte-de-la-villa", label: "Monte de la Villa" },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const [location] = useLocation();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
    setActiveMenu(null);
  }, [location]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 w-full z-[100] transition-all duration-500 px-6 md:px-12 py-4 ${scrolled || activeMenu ? "bg-white text-black shadow-sm" : "bg-transparent text-white"
          }`}
        onMouseLeave={() => setActiveMenu(null)}
      >
        <div className="max-w-[1400px] mx-auto flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="z-50 relative">
            <img
              src="/logo-cerrajeros-villaviciosa.webp"
              alt={APP_BUSINESS_NAME}
              className={`h-6 w-auto transition-all duration-300 ${!scrolled && !activeMenu ? "brightness-0 invert" : ""
                }`}
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-2">
            <button
              onMouseEnter={() => setActiveMenu('servicios')}
              className="px-4 py-2 text-[13px] font-bold uppercase tracking-widest hover:bg-black/5 rounded-md transition-all"
            >
              Servicios
            </button>
            <button
              onMouseEnter={() => setActiveMenu('zonas')}
              className="px-4 py-2 text-[13px] font-bold uppercase tracking-widest hover:bg-black/5 rounded-md transition-all"
            >
              Zonas
            </button>
            <Link
              href="/blog"
              className="px-4 py-2 text-[13px] font-bold uppercase tracking-widest hover:bg-black/5 rounded-md transition-all"
            >
              Blog
            </Link>
          </nav>

          {/* Right Actions */}
          <div className="flex items-center gap-4">
            <a
              href={`tel:${APP_PHONE}`}
              className={`hidden md:flex items-center gap-2 px-5 py-2 text-[11px] font-black uppercase tracking-widest rounded-full transition-all ${scrolled || activeMenu
                ? "bg-black text-white hover:bg-gray-800"
                : "bg-white text-black hover:bg-gray-200"
                }`}
            >
              <Clock className="w-3 h-3" />
              {APP_PHONE_DISPLAY}
            </a>
            <button
              onClick={() => setMobileMenuOpen(true)}
              className="px-3 py-2 text-[13px] font-bold uppercase tracking-widest hover:bg-black/5 rounded-md transition-all"
            >
              Menú
            </button>
          </div>
        </div>

        {/* Mega Menu Content */}
        <AnimatePresence>
          {activeMenu === 'servicios' && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="absolute top-full left-0 w-full bg-white border-t border-gray-100 overflow-hidden shadow-2xl"
            >
              <div className="max-w-[1200px] mx-auto py-16 px-12">
                <div className="grid grid-cols-3 md:grid-cols-6 gap-8">
                  {services.map((item, idx) => (
                    <Link key={idx} href={item.href} className="group flex flex-col items-center text-center">
                      <motion.div
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: idx * 0.05 }}
                        className={`w-24 h-24 flex items-center justify-center mb-6 transition-all duration-500 group-hover:scale-110 group-hover:${item.color}`}
                      >
                        <item.icon className="w-12 h-12" />
                      </motion.div>
                      <motion.span
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: idx * 0.05 + 0.2 }}
                        className="text-[13px] font-bold text-gray-900 mb-2 uppercase tracking-widest"
                      >
                        {item.label}
                      </motion.span>
                      <motion.span
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: idx * 0.05 + 0.3 }}
                        className="text-[10px] text-gray-400 font-medium uppercase tracking-[2px] opacity-0 group-hover:opacity-100 transition-opacity"
                      >
                        Saber más
                      </motion.span>
                    </Link>
                  ))}
                </div>

                <div className="mt-16 flex justify-center gap-12 pt-8 border-t border-gray-50">
                  <Link href="/testimonios" className="text-[11px] font-black uppercase tracking-[2px] text-gray-400 hover:text-black transition-colors">Testimonios</Link>
                  <Link href="/blog" className="text-[11px] font-black uppercase tracking-[2px] text-gray-400 hover:text-black transition-colors">Seguridad Hogar</Link>
                  <Link href="/#servicios" className="text-[11px] font-black uppercase tracking-[2px] text-gray-400 hover:text-black transition-colors">Ver todos los servicios</Link>
                </div>
              </div>
            </motion.div>
          )}

          {activeMenu === 'zonas' && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="absolute top-full left-0 w-full bg-white border-t border-gray-100 overflow-hidden shadow-2xl"
            >
              <div className="max-w-[1000px] mx-auto py-12 px-12 grid grid-cols-4 gap-4">
                {zones.map((z, i) => (
                  <Link
                    key={i}
                    href={z.href}
                    className="flex items-center gap-3 p-4 hover:bg-gray-50 rounded-2xl transition-all group"
                  >
                    <div className="w-10 h-10 rounded-xl bg-orange-50 flex items-center justify-center text-orange-500 group-hover:bg-orange-500 group-hover:text-white transition-all">
                      <MapPin className="w-5 h-5" />
                    </div>
                    <span className="text-sm font-bold text-gray-800">{z.label}</span>
                  </Link>
                ))}
                <div className="col-span-4 mt-6 pt-6 border-t border-gray-50 flex justify-center">
                  <Link href="/#servicios" className="flex items-center gap-2 text-[11px] font-black uppercase tracking-widest text-primary hover:underline">
                    Explorar todos los barrios <ArrowRight className="w-3 h-3" />
                  </Link>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* Mobile Sidebar - Tesla Style */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <div className="fixed inset-0 z-[200]">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 bg-black/40 backdrop-blur-sm"
              onClick={() => setMobileMenuOpen(false)}
            />
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="absolute inset-y-0 right-0 w-full max-w-[320px] bg-white p-8 flex flex-col overflow-y-auto"
            >
              <div className="flex justify-between items-center mb-10">
                <span className="text-[10px] uppercase tracking-[0.3em] font-black text-gray-400">Navegación</span>
                <button
                  onClick={() => setMobileMenuOpen(false)}
                  className="p-2 hover:bg-black/5 rounded-full transition-colors"
                >
                  <X className="h-6 w-6" />
                </button>
              </div>

              <nav className="flex flex-col gap-1">
                <span className="text-[9px] uppercase tracking-widest font-black text-gray-300 mb-2 mt-4 ml-4">Servicios</span>
                {services.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="px-4 py-3 text-lg font-medium hover:bg-gray-50 rounded-xl transition-all flex items-center gap-4"
                  >
                    <span className={`${link.color}`}><link.icon className="w-6 h-6" /></span>
                    {link.label}
                  </Link>
                ))}


                <span className="text-[9px] uppercase tracking-widest font-black text-gray-300 mb-2 mt-8 ml-4">Zonas</span>
                {zones.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="px-4 py-3 text-lg font-medium hover:bg-gray-50 rounded-xl transition-all flex items-center gap-4"
                  >
                    <div className="p-2 rounded-lg bg-gray-50 text-gray-400"><MapPin className="w-5 h-5" /></div>
                    {link.label}
                  </Link>
                ))}

                <div className="pt-12 mt-12 border-t border-gray-100 space-y-4">
                  <a
                    href={`tel:${APP_PHONE}`}
                    className="flex items-center justify-center w-full py-5 bg-black text-white font-black rounded-2xl hover:bg-gray-900 shadow-xl transition-all tracking-widest uppercase text-sm gap-3"
                  >
                    <Clock className="w-5 h-5" />
                    {APP_PHONE_DISPLAY}
                  </a>
                </div>
              </nav>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}

