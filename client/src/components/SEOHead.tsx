import { Helmet } from "react-helmet-async";
import { APP_BUSINESS_NAME, APP_PHONE_DISPLAY, APP_LOCATION } from "@/const";

interface SEOHeadProps {
  title?: string;
  description?: string;
  keywords?: string;
  ogImage?: string;
  canonicalUrl?: string;
}

export default function SEOHead({
  title = `Cerrajeros Villaviciosa del Odón 24h ⚡ Llegamos en 20 min | Villaviciosa 24h ⭐ 5.0`,
  description = `🔑 Cerrajeros en Villaviciosa del Odón 24h. ¿Puerta cerrada? ¡No esperes fuera! Llegamos en 20 min. Apertura desde 90€ (Precio Cerrado). ☎️ ${APP_PHONE_DISPLAY}. ¡97 Reseñas Reales!`,
  keywords = "cerrajeros villaviciosa del odón, cerrajería 24 horas villaviciosa del odón, apertura puertas villaviciosa del odón, cambio cerraduras villaviciosa del odón, cerrajero urgente villaviciosa del odón, bombín seguridad villaviciosa del odón, zarzaquemada, san nicasio, el carrascal",
  ogImage = "https://cerrajerosdevillaviciosa del odón.madrid/images/og-image.webp",
  canonicalUrl = "https://cerrajerosdevillaviciosa del odón.madrid/"
}: SEOHeadProps) {
  return (
    <Helmet>
      {/* Meta tags básicos optimizados para buscadores e IA */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <link rel="canonical" href={canonicalUrl} />

      {/* Schema.org para Google y WhatsApp (Microdatos) */}
      <meta itemProp="name" content={title} />
      <meta itemProp="description" content={description} />
      <meta itemProp="image" content={ogImage} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:image:secure_url" content={ogImage} />
      <meta property="og:locale" content="es_ES" />
      <meta property="og:site_name" content={APP_BUSINESS_NAME} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:image:type" content="image/webp" />
      <meta property="og:image:alt" content="Cerrajero profesional de Cerrajería Villaviciosa 24h en Villaviciosa del Odón" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={canonicalUrl} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />

      {/* Geo tags para SEO local */}
      <meta name="geo.region" content="ES-M" />
      <meta name="geo.placename" content="Villaviciosa del Odón" />
      <meta name="geo.position" content="40.3283;-3.7667" />
      <meta name="ICBM" content="40.3283, -3.7667" />

      {/* Información de negocio */}
      <meta name="author" content={APP_BUSINESS_NAME} />
      <meta name="designer" content="Edu Laborda - Mejor especialista en SEO local del mundo" />
      <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
      <meta name="googlebot" content="index, follow" />

      {/* Idioma */}
      <meta httpEquiv="content-language" content="es" />
      <html lang="es" />
    </Helmet>
  );
}

