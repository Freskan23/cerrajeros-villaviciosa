import { APP_BUSINESS_NAME, APP_LOCATION, APP_PHONE, APP_EMAIL } from "@/const";
import { Phone, Mail, MapPin } from "lucide-react";
import { Link } from "wouter";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const serviceLinks = [
    { href: "/apertura-puertas", label: "Apertura de puertas" },
    { href: "/cambio-cerraduras", label: "Cambio de cerraduras" },
    { href: "/cambio-bombin", label: "Cambio de bombín" },
    { href: "/amaestramiento", label: "Amaestramiento" },
  ];

  const zones = [
    "Centro", "El Bosque", "Campodón", "Castillo",
    "Dehesa del Sotillo", "Monte de la Villa", "Cerro de las Nieves"
  ];

  return (
    <footer className="bg-white border-t border-gray-200">
      <div className="container py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">

          {/* Columna 1: Branding */}
          <div className="space-y-6">
            <img
              src="/logo-villaviciosa24h.webp"
              alt={`Logo de ${APP_BUSINESS_NAME}`}
              width="150"
              height="40"
              className="h-10 w-auto"
            />
            <p className="text-gray-600 text-sm leading-relaxed">
              Servicio profesional de cerrajería en {APP_LOCATION}. Disponibles 24 horas.
            </p>
            <div className="flex gap-4">
              <a 
                href={`tel:${APP_PHONE}`} 
                className="inline-flex items-center justify-center w-10 h-10 rounded-full border border-gray-200 hover:border-black hover:bg-black hover:text-white transition-colors"
                aria-label="Llamar"
              >
                <Phone className="h-4 w-4" />
              </a>
              <a 
                href={`mailto:${APP_EMAIL}`} 
                className="inline-flex items-center justify-center w-10 h-10 rounded-full border border-gray-200 hover:border-black hover:bg-black hover:text-white transition-colors"
                aria-label="Email"
              >
                <Mail className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Columna 2: Servicios */}
          <div>
            <h4 className="font-semibold text-sm uppercase tracking-wider mb-6">Servicios</h4>
            <ul className="space-y-3">
              {serviceLinks.map((link) => (
                <li key={link.href}>
                  <Link 
                    to={link.href} 
                    className="text-gray-600 hover:text-black transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Columna 3: Zonas */}
          <div>
            <h4 className="font-semibold text-sm uppercase tracking-wider mb-6">Zonas</h4>
            <ul className="space-y-3">
              {zones.map((zone) => (
                <li key={zone}>
                  <span className="text-gray-600 text-sm">{zone}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Columna 4: Legal */}
          <div>
            <h4 className="font-semibold text-sm uppercase tracking-wider mb-6">Legal</h4>
            <ul className="space-y-3">
              <li>
                <Link to="/aviso-legal" className="text-gray-600 hover:text-black transition-colors text-sm">
                  Aviso Legal
                </Link>
              </li>
              <li>
                <Link to="/politica-privacidad" className="text-gray-600 hover:text-black transition-colors text-sm">
                  Privacidad
                </Link>
              </li>
              <li>
                <Link to="/politica-cookies" className="text-gray-600 hover:text-black transition-colors text-sm">
                  Cookies
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-16 pt-8 border-t border-gray-200">
          <p className="text-center text-sm text-gray-600">
            © {currentYear} {APP_BUSINESS_NAME}. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
