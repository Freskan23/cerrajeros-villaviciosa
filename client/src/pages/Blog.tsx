import { APP_BUSINESS_NAME, APP_PHONE, APP_PHONE_DISPLAY, APP_LOCATION } from "@/const";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Calendar, ArrowRight, Shield, Lock, Key, AlertTriangle } from "lucide-react";
import { Link } from "wouter";
import SEOHead from "@/components/SEOHead";

const blogPosts = [
  {
    id: "actualizar-seguridad-casa-villaviciosa del odón",
    title: "5 señales de que necesitas actualizar la seguridad de tu hogar hoy mismo",
    excerpt: "¿Tu llave se atasca? ¿No tienes escudo? Descubre si tu casa es un objetivo fácil para los ladrones en Villaviciosa del Odón.",
    date: "2025-11-10",
    category: "Auditoría",
    icon: <Shield className="h-6 w-6 text-[#FF6B35]" />,
    image: "/images/blog-seguridad-hogar.webp"
  },
  {
    id: "senales-robo-puerta-villaviciosa del odón",
    title: "La vulnerabilidad olvidada: Señales que los ladrones dejan en tu puerta",
    excerpt: "Hilos de pegamento, plásticos... Aprende a detectar si están vigilando tu casa en Villaviciosa del Odón antes de que entren.",
    date: "2025-11-08",
    category: "Prevención",
    icon: <AlertTriangle className="h-6 w-6 text-[#FF6B35]" />,
    image: "/images/blog-mantenimiento-cerradura.webp"
  },
  {
    id: "peligros-cerrojos-simples-villaviciosa del odón",
    title: "El peligro de los cerrojos simples: Por qué necesitas un FAC de alta seguridad",
    excerpt: "Un cerrojo barato no detiene a nadie. Te explicamos por qué necesitas un sistema antibumping y con escudo.",
    date: "2025-11-05",
    category: "Productos",
    icon: <Lock className="h-6 w-6 text-[#FF6B35]" />,
    image: "/images/blog-llaves-bombin.webp"
  },
  {
    id: "diferencia-puerta-blindada-acorazada-seguridad",
    title: "¿Tu puerta blindada es realmente segura? Diferencias con Acorazadas",
    excerpt: "No es lo mismo blindada que acorazada. Una se abre con palanca, la otra es una muralla. Descubre cuál tienes.",
    date: "2025-11-03",
    category: "Consejos",
    icon: <Shield className="h-6 w-6 text-[#FF6B35]" />,
    image: "/images/cerrajero-villaviciosa24h.webp"
  },
  {
    id: "peligro-bumping-bombines-inseguros",
    title: "Tu bombín podría ser vulnerable: Bumping e Impresioning en Villaviciosa del Odón",
    excerpt: "El 80% de las cerraduras se abren sin ruido en segundos. ¿Es tu bombín uno de ellos? Aprende a protegerte.",
    date: "2025-11-01",
    category: "Seguridad",
    icon: <Key className="h-6 w-6 text-[#FF6B35]" />,
    image: "/images/blog-cerradura-inteligente.webp"
  },
  {
    id: "robos-trasteros-villaviciosa del odón-norte",
    title: "Oleada de robos en trasteros de Villaviciosa del Odón Norte: Cómo protegerte con Cerrajeros Villaviciosa del Odón",
    excerpt: "¿Vives en la zona de la Ronda Norte? Los trasteros son el nuevo objetivo. Descubre qué cerraduras resisten a los ladrones.",
    date: "2025-10-20",
    category: "Seguridad",
    icon: <Shield className="h-6 w-6 text-[#FF6B35]" />,
    image: "/blog-robos-trasteros.webp"
  },
  {
    id: "cerraduras-antibumping-zarzaquemada",
    title: "Cerraduras Antibumping en Villaviciosa del Odón: Protege tu piso en Centro",
    excerpt: "La mayoría de bloques en Centro tienen cerraduras de hace 20 años. El bumping las abre en segundos. ¿Es tu caso?",
    date: "2025-10-18",
    category: "Prevención",
    icon: <Lock className="h-6 w-6 text-[#FF6B35]" />,
    image: "/blog-cerradura-antibumping.webp"
  },
  {
    id: "seguridad-chalets-arroyo-culebro",
    title: "Seguridad para Chalets en Villaviciosa del Odón: Guía para Río Guadarrama y La Vega",
    excerpt: "Vivir en un chalet es genial, pero requiere seguridad extra. Cerrojos, escudos y alarmas para dormir tranquilo.",
    date: "2025-10-15",
    category: "Hogar",
    icon: <Key className="h-6 w-6 text-[#FF6B35]" />,
    image: "/blog-seguridad-chalets.webp"
  },
  {
    id: "llaves-coche-parquesur",
    title: "Cerrajeros de Coches en Villaviciosa del Odón: Solución rápida si pierdes las llaves en Parquesur",
    excerpt: "Te explicamos paso a paso qué hacer si te quedas tirado en el parking del centro comercial. Soluciones rápidas.",
    date: "2025-10-12",
    category: "Emergencias",
    icon: <AlertTriangle className="h-6 w-6 text-[#FF6B35]" />,
    image: "/blog-llaves-coche.webp"
  },
  {
    id: "puertas-okupas-villaviciosa del odón",
    title: "Evita la Ocupación en Villaviciosa del Odón: Puertas Anti-Okupa en El Bosque y Centro",
    excerpt: "Si tienes un piso cerrado en la zona antigua, cuidado. Las puertas anti-okupa son tu mejor inversión.",
    date: "2025-10-10",
    category: "Seguridad",
    icon: <Shield className="h-6 w-6 text-[#FF6B35]" />,
    image: "/blog-puerta-antiokupa.webp"
  },
  {
    id: "bombines-seguridad-baratos",
    title: "¿Cerraduras Baratas en Villaviciosa del Odón? Por qué lo barato sale caro en seguridad",
    excerpt: "Analizamos las marcas que venden en ferreterías de barrio vs. lo que realmente instala un profesional.",
    date: "2025-10-08",
    category: "Consejos",
    icon: <Lock className="h-6 w-6 text-[#FF6B35]" />,
    image: "/blog-bombines-comparativa.webp"
  }
];

export default function Blog() {
  return (
    <div className="min-h-screen flex flex-col bg-[#001529]">
      <SEOHead
        title={`Blog de Seguridad y Cerrajería en ${APP_LOCATION} | ${APP_BUSINESS_NAME}`}
        description={`📰 Consejos de seguridad, avisos de robos y guías de cerrajería para los vecinos de ${APP_LOCATION}. Protege tu hogar con los mejores trucos profesionales.`}
        canonicalUrl="https://cerrajerosdevillaviciosa del odón.madrid/blog"
      />
      <Header />

      {/* Hero del Blog */}
      <section className="relative py-24 overflow-hidden">
        {/* Fondo con efectos de luz */}
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#FF6B35]/20 rounded-full blur-3xl -translate-y-1/2"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#004E89]/20 rounded-full blur-3xl translate-y-1/2"></div>

        <div className="container relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <span className="inline-block px-4 py-1 rounded-full bg-[#FF6B35]/10 text-[#FF6B35] font-bold text-sm mb-6 border border-[#FF6B35]/20">
              BLOG DE SEGURIDAD
            </span>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white leading-tight">
              Consejos de seguridad para <span className="text-[#FF6B35]">vecinos de Villaviciosa del Odón</span>
            </h1>
            <p className="text-xl text-blue-100/80 leading-relaxed">
              Guías prácticas, alertas de robos en la zona y trucos de cerrajero para proteger tu casa en Centro, El Bosque o Río Guadarrama.
            </p>
          </div>
        </div>
      </section>

      {/* Listado de Posts */}
      <section className="py-12 pb-24">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <Card key={post.id} className="bg-white/5 border-white/10 hover:bg-white/10 transition-all duration-300 group overflow-hidden backdrop-blur-sm">
                <div className="aspect-video overflow-hidden relative">
                  <div className="absolute inset-0 bg-gradient-to-t from-[#001529] to-transparent opacity-60 z-10"></div>
                  <img
                    src={post.image}
                    alt={post.title}
                    width="400"
                    height="250"
                    loading="lazy"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-4 right-4 z-20 bg-[#001529]/80 backdrop-blur-md p-2 rounded-lg border border-white/10">
                    {post.icon}
                  </div>
                </div>
                <CardHeader>
                  <div className="flex items-center gap-2 text-sm text-blue-200/60 mb-3">
                    <Calendar className="h-4 w-4" />
                    <span>{new Date(post.date).toLocaleDateString('es-ES', { year: 'numeric', month: 'long', day: 'numeric' })}</span>
                    <span className="ml-auto text-[#FF6B35] font-semibold px-2 py-0.5 rounded bg-[#FF6B35]/10 border border-[#FF6B35]/20">
                      {post.category}
                    </span>
                  </div>
                  <CardTitle className="text-xl text-white group-hover:text-[#FF6B35] transition-colors leading-tight">
                    <Link href={`/blog/${post.id}`}>
                      <span className="cursor-pointer">{post.title}</span>
                    </Link>
                  </CardTitle>
                  <CardDescription className="text-blue-100/70 text-base mt-2 line-clamp-3">
                    {post.excerpt}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Link href={`/blog/${post.id}`}>
                    <div className="w-full">
                      <Button variant="ghost" className="w-full group/btn text-white hover:text-[#FF6B35] hover:bg-white/5 justify-between border border-white/10 hover:border-[#FF6B35]/30 cursor-pointer">
                        Leer artículo completo
                        <ArrowRight className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                      </Button>
                    </div>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-[#FF6B35]/5"></div>
        <div className="container text-center relative z-10">
          <div className="max-w-2xl mx-auto bg-[#001529] p-8 md:p-12 rounded-3xl border border-white/10 shadow-2xl shadow-black/50">
            <h2 className="text-3xl font-bold mb-4 text-white">¿Te preocupa la seguridad de tu barrio?</h2>
            <p className="text-xl text-blue-100/80 mb-8">
              Hacemos estudios de seguridad gratuitos en Villaviciosa del Odón. Llámanos y te decimos cómo mejorar tu puerta.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-[#FF6B35] hover:bg-[#E55A2B] text-white text-lg px-8 shadow-lg shadow-orange-900/20">
                <a href={`tel:${APP_PHONE}`} className="flex items-center gap-2">
                  📞 Llamar ahora
                </a>
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-8 border-white/20 text-white hover:bg-white/10">
                <Link href="/#contacto">
                  <span className="cursor-pointer">Pedir presupuesto</span>
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
