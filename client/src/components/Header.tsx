import { APP_BUSINESS_NAME, APP_PHONE, APP_PHONE_DISPLAY } from "@/const";
import { X, ChevronDown, MapPin, Shield, Lock, Store, Key } from "lucide-react";
import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [location] = useLocation();

  const services = [
    { href: "/apertura-puertas", label: "Apertura", icon: <Lock className="w-4 h-4" /> },
    { href: "/cambio-cerraduras", label: "Cerraduras", icon: <Shield className="w-4 h-4" /> },
    { href: "/cambio-bombin", label: "Bombín", icon: <Key className="w-4 h-4" /> },
    { href: "/reparacion-cierres-metalicos", label: "Cierres", icon: <Store className="w-4 h-4" /> },
    { href: "/apertura-cajas-fuertes", label: "Cajas Fuertes", icon: <Lock className="w-4 h-4" /> },
  ];

  const zones = [
    { href: "/cerrajeros-centro", label: "Centro" },
    { href: "/cerrajeros-el-bosque", label: "El Bosque" },
    { href: "/cerrajeros-campodon", label: "Campodón" },
    { href: "/cerrajeros-monte-de-la-villa", label: "Monte de la Villa" },
  ];

  // Cerrar menús al cambiar de ruta
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location]);

  return (
    <>
      <header className="header-tesla bg-transparent hover:bg-white/95 transition-all duration-500">
        <div className="flex items-center justify-between w-full">
          {/* Logo */}
          <Link href="/" className="z-50 relative group">
            <img
              src="/logo-cerrajeros-villaviciosa.webp"
              alt={APP_BUSINESS_NAME}
              className="h-6 w-auto transition-all duration-300"
            />
          </Link>

          {/* Desktop Navigation - Tesla Style */}
          <nav className="hidden lg:flex items-center absolute left-1/2 -translate-x-1/2 gap-2">

            {/* Servicios Dropdown */}
            <div className="relative group/menu">
              <button className="px-4 py-2 text-[13px] font-bold uppercase tracking-widest text-white hover:bg-black/10 rounded-md transition-all flex items-center gap-1">
                Servicios <ChevronDown className="w-3 h-3 opacity-50" />
              </button>
              <div className="absolute top-full left-0 w-64 pt-4 hidden group-hover/menu:block">
                <div className="bg-white rounded-2xl shadow-2xl border border-gray-100 p-4 space-y-1">
                  {services.map(s => (
                    <Link key={s.href} href={s.href} className="flex items-center gap-3 px-4 py-3 text-sm text-gray-600 hover:bg-gray-50 hover:text-black rounded-xl transition-all font-medium">
                      {s.icon} {s.label}
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            {/* Zonas Dropdown */}
            <div className="relative group/menu">
              <button className="px-4 py-2 text-[13px] font-bold uppercase tracking-widest text-white hover:bg-black/10 rounded-md transition-all flex items-center gap-1">
                Zonas <ChevronDown className="w-3 h-3 opacity-50" />
              </button>
              <div className="absolute top-full left-0 w-56 pt-4 hidden group-hover/menu:block">
                <div className="bg-white rounded-2xl shadow-2xl border border-gray-100 p-4 space-y-1">
                  {zones.map(z => (
                    <Link key={z.href} href={z.href} className="flex items-center gap-3 px-4 py-3 text-sm text-gray-600 hover:bg-gray-50 hover:text-black rounded-xl transition-all font-medium">
                      <MapPin className="w-4 h-4 opacity-30" /> {z.label}
                    </Link>
                  ))}
                  <div className="border-t mt-2 pt-2">
                    <Link href="/#servicios" className="block px-4 py-2 text-[10px] uppercase tracking-widest text-[#1B4965] font-black hover:underline text-center">Ver todos los barrios</Link>
                  </div>
                </div>
              </div>
            </div>

            <Link href="/blog" className="px-4 py-2 text-[13px] font-bold uppercase tracking-widest text-white hover:bg-black/10 rounded-md transition-all">
              Blog
            </Link>
          </nav>

          {/* Right Actions */}
          <div className="flex items-center gap-2">
            <a
              href={`tel:${APP_PHONE}`}
              className="hidden md:block px-4 py-2 text-[11px] font-black uppercase tracking-widest text-white bg-white/10 hover:bg-white hover:text-black rounded-md transition-all"
            >
              {APP_PHONE_DISPLAY}
            </a>
            <button
              onClick={() => setMobileMenuOpen(true)}
              className="px-4 py-2 text-[13px] font-bold uppercase tracking-widest text-white hover:bg-black/10 rounded-md transition-all"
            >
              Menú
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Sidebar - Tesla Style */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-[100] animate-in fade-in duration-300">
          <div
            className="absolute inset-0 bg-black/40 backdrop-blur-sm"
            onClick={() => setMobileMenuOpen(false)}
          />
          <div className="absolute inset-y-0 right-0 w-full max-w-[320px] bg-white p-8 flex flex-col animate-in slide-in-from-right duration-500 overflow-y-auto">
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
              <span className="text-[9px] uppercase tracking-widest font-black text-gray-300 mb-2 mt-4 ml-4">Servicios Principales</span>
              {services.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="px-4 py-3 text-lg font-medium hover:bg-gray-50 rounded-xl transition-all"
                >
                  {link.label}
                </Link>
              ))}

              <span className="text-[9px] uppercase tracking-widest font-black text-gray-300 mb-2 mt-8 ml-4">Nuestras Zonas</span>
              {zones.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="px-4 py-3 text-lg font-medium hover:bg-gray-50 rounded-xl transition-all"
                >
                  {link.label}
                </Link>
              ))}

              <div className="pt-12 mt-12 border-t border-gray-100 space-y-4">
                <a
                  href={`tel:${APP_PHONE}`}
                  className="flex items-center justify-center w-full py-5 bg-black text-white font-black rounded-2xl hover:bg-gray-900 shadow-xl transition-all tracking-widest uppercase text-sm"
                >
                  Llamar Urgencia
                </a>
                <Link href="/blog" className="flex items-center justify-center w-full py-5 bg-gray-100 font-bold rounded-2xl text-gray-600">
                  Artículos de Seguridad
                </Link>
              </div>
            </nav>
          </div>
        </div>
      )}
    </>
  );
}
