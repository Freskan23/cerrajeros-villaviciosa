import { APP_BUSINESS_NAME, APP_PHONE, APP_PHONE_DISPLAY } from "@/const";
import { Button } from "@/components/ui/button";
import { Menu, Phone, X } from "lucide-react";
import { useState } from "react";
import { Link, useLocation } from "wouter";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [location, setLocation] = useLocation();

  const navItems = [
    { href: "/", label: "Inicio" },
    { href: "/#servicios", label: "Servicios" },
    { href: "/#zonas", label: "Zonas" },
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
    <>
      {/* Header Tesla-style: Ultra minimalista */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-200/50">
        <div className="container">
          <div className="flex items-center justify-between h-16 md:h-20">

            {/* Logo minimalista */}
            <Link href="/" className="flex items-center gap-2">
              <img
                src="/logo-cerrajeros-villaviciosa.png"
                alt={APP_BUSINESS_NAME}
                width="300"
                height="80"
                className="h-10 md:h-12 w-auto"
              />
            </Link>

            {/* Navegación Desktop - Ultra limpia */}
            <nav className="hidden lg:flex items-center gap-8">
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
                  className="text-sm font-medium text-gray-700 hover:text-black transition-colors"
                >
                  {item.label}
                </Link>
              ))}
            </nav>

            {/* CTA Button - Tesla style */}
            <div className="hidden md:flex items-center gap-4">
              <Button
                asChild
                className="btn-tesla"
              >
                <a href={`tel:${APP_PHONE}`} className="flex items-center gap-2">
                  <Phone className="h-4 w-4" />
                  <span>{APP_PHONE_DISPLAY}</span>
                </a>
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 text-gray-700 hover:text-black transition-colors"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu - Minimalista */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 lg:hidden">
          <div className="fixed inset-0 bg-black/20 backdrop-blur-sm" onClick={() => setMobileMenuOpen(false)} />
          <div className="fixed top-16 md:top-20 left-0 right-0 bg-white border-b border-gray-200 shadow-lg">
            <nav className="container py-8 flex flex-col gap-6">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={(e) => {
                    if (item.href.includes("#")) {
                      e.preventDefault();
                      scrollToSection(item.href);
                    } else {
                      setMobileMenuOpen(false);
                    }
                  }}
                  className="text-lg font-medium text-gray-700 hover:text-black transition-colors"
                >
                  {item.label}
                </Link>
              ))}
              <Button
                asChild
                className="btn-tesla w-full"
              >
                <a href={`tel:${APP_PHONE}`} className="flex items-center justify-center gap-2">
                  <Phone className="h-4 w-4" />
                  <span>{APP_PHONE_DISPLAY}</span>
                </a>
              </Button>
            </nav>
          </div>
        </div>
      )}
    </>
  );
}
