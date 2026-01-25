import { APP_LOGO, APP_BUSINESS_NAME, APP_PHONE, APP_PHONE_DISPLAY, APP_LOCATION } from "@/const";
import { Button } from "@/components/ui/button";
import { Menu, Phone, X, Shield } from "lucide-react";
import { useState } from "react";
import { Link, useLocation } from "wouter";
import { useDynamicPricing, getPricingText } from "@/hooks/useDynamicPricing";
import PricingWarningBanner from "@/components/PricingWarningBanner";
import WeatherWarningBanner from "@/components/WeatherWarningBanner";
import WeatherTopBar from "@/components/WeatherTopBar";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [location, setLocation] = useLocation();
  const { currentPrice, isNormalHours } = useDynamicPricing();

  const navItems = [
    { href: "/", label: "Inicio" },
    { href: "/#servicios", label: "Servicios" },
    { href: "/#zonas", label: "Zonas" },
    { href: "/#ventajas", label: "Ventajas" },
    { href: "/blog", label: "Blog" },
    { href: "/contacto", label: "Contacto" },
  ];

  const scrollToSection = (href: string) => {
    const sectionId = href.includes("#") ? href.split("#")[1] : null;
    if (sectionId) {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
        setMobileMenuOpen(false);
      } else if (location !== "/") {
        setLocation("/");
      }
    }
  };

  return (
    <div className="contents">
      {/* Top bar minimalista */}
      <WeatherTopBar />

      {/* Banners de aviso */}
      <WeatherWarningBanner />
      <PricingWarningBanner />

      {/* Header Principal Premium */}
      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-xl border-b border-gray-200/50 shadow-sm transition-all duration-300">
        <div className="container">
          <div className="flex items-center justify-between h-18 md:h-24 py-3">

            {/* Logo y Branding Premium */}
            <Link href="/" className="flex items-center gap-4 shrink-0">
              <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-[#D4AF37] to-[#F0C75E] rounded-lg blur opacity-20 group-hover:opacity-30 transition duration-300"></div>
                <img
                  src="/logo-villaviciosa24h.webp"
                  alt={APP_BUSINESS_NAME}
                  width="180"
                  height="45"
                  className="relative h-11 md:h-14 w-auto"
                />
              </div>
              <div className="hidden sm:flex flex-col border-l border-gray-200 pl-4">
                <span className="text-sm md:text-base font-bold text-[#0A2540] leading-tight tracking-tight">
                  Cerrajeros Villaviciosa
                </span>
                <div className="flex items-center gap-1.5 mt-0.5">
                  <Shield className="h-3 w-3 text-[#D4AF37]" />
                  <span className="text-[10px] text-gray-600 uppercase tracking-wider font-medium">
                    Servicio Premium 24h
                  </span>
                </div>
              </div>
            </Link>

            {/* Navegación Desktop */}
            <nav className="hidden lg:flex items-center gap-8 xl:gap-10">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={(e) => {
                    if (item.href.includes("#")) {
                      const [path, hash] = item.href.split("#");
                      const isOnTargetPath = location === (path || "/");
                      if (isOnTargetPath) {
                        e.preventDefault();
                        scrollToSection(item.href);
                      }
                    }
                  }}
                  className="text-sm font-semibold text-gray-700 hover:text-[#D4AF37] transition-all relative group"
                >
                  {item.label}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-[#D4AF37] to-[#F0C75E] transition-all group-hover:w-full"></span>
                </Link>
              ))}
            </nav>

            {/* Acciones Right Side: Precio + Call Button */}
            <div className="flex items-center gap-4 md:gap-5">
              {/* Badge de Precio Premium */}
              <div className="hidden md:flex flex-col items-end pr-5 border-r border-gray-200">
                <div className="flex items-center gap-2 text-[#D4AF37] font-bold text-xl leading-none">
                  <span className="text-xs font-medium text-gray-500">Desde</span>
                  {currentPrice}€
                </div>
                <span className="text-[10px] text-gray-500 font-medium uppercase tracking-wider mt-0.5">
                  {isNormalHours ? "Tarifa Estándar" : "Tarifa Urgente"}
                </span>
              </div>

              <Button
                asChild
                className="premium-gradient hover:opacity-90 text-white font-bold h-12 px-7 rounded-lg shadow-lg shadow-[#0A2540]/20 active:scale-95 transition-all text-sm md:text-base"
              >
                <a href={`tel:${APP_PHONE}`} className="flex items-center gap-2.5" aria-label={`Llamar a Cerrajeros Villaviciosa al ${APP_PHONE_DISPLAY}`}>
                  <Phone className="h-4 w-4 md:h-5 md:w-5 animate-pulse text-white" />
                  <span className="whitespace-nowrap text-white font-semibold">{APP_PHONE_DISPLAY}</span>
                </a>
              </Button>

              {/* Mobile Toggle */}
              <button
                className="lg:hidden p-2 text-[#0A2540] hover:text-[#D4AF37] transition-colors"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                aria-label={mobileMenuOpen ? "Cerrar menú de navegación" : "Abrir menú de navegación"}
                aria-expanded={mobileMenuOpen}
              >
                {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-7 w-7" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu Premium */}
        <div className={`lg:hidden bg-white/98 backdrop-blur-xl border-t border-gray-200/50 transition-all duration-300 overflow-hidden ${mobileMenuOpen ? 'max-h-[600px] py-8' : 'max-h-0'}`}>
          <nav className="container flex flex-col gap-6">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={(e) => {
                  if (item.href.includes("#")) {
                    const [path, hash] = item.href.split("#");
                    const isOnTargetPath = location === (path || "/");
                    if (isOnTargetPath) {
                      e.preventDefault();
                      scrollToSection(item.href);
                    } else {
                      setMobileMenuOpen(false);
                    }
                  } else {
                    setMobileMenuOpen(false);
                  }
                }}
                className="text-lg font-bold text-[#0A2540] hover:text-[#D4AF37] flex items-center justify-between transition-colors"
              >
                {item.label}
                <div className="h-1.5 w-1.5 rounded-full bg-[#D4AF37]/30"></div>
              </Link>
            ))}
            <div className="mt-4 p-5 premium-gradient rounded-xl flex items-center justify-between shadow-lg">
              <div>
                <p className="text-xs text-[#D4AF37] font-bold uppercase tracking-wider">Servicio Ahora</p>
                <p className="text-2xl font-bold text-white mt-1">{currentPrice}€</p>
              </div>
              <p className="text-[10px] text-white/80 max-w-[120px] text-right leading-tight">
                {getPricingText(isNormalHours)}
              </p>
            </div>
          </nav>
        </div>
      </header>
    </div>
  );
}
