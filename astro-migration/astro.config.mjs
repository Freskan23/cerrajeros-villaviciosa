import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://cerrajerosvillaviciosadeodon.madrid',
  output: 'static',
  integrations: [
    react(),
    sitemap({
      changefreq: 'weekly',
      priority: 0.7,
      lastmod: new Date(),
      i18n: {
        defaultLocale: 'es',
        locales: { es: 'es-ES' }
      }
    }),
  ],
  vite: {
    plugins: [tailwindcss()],
  },
  redirects: {
    '/apertura-puertas': '/servicios/apertura-puertas',
    '/cambio-cerraduras': '/servicios/cambio-cerraduras',
    '/cambio-bombin': '/servicios/cambio-bombin',
    '/amaestramiento': '/servicios/amaestramiento',
    '/apertura-cajas-fuertes': '/servicios/cajas-fuertes',
    '/reparacion-cierres-metalicos': '/servicios/cierres-metalicos',
    '/cerrojos-seguridad': '/servicios/cerrojos-seguridad',
    '/muelles-cierrapuertas': '/servicios/muelles-cierrapuertas',
    '/desahucios': '/servicios/desahucios',
    '/cerrajeros-centro': '/zonas/centro',
    '/cerrajeros-el-bosque': '/zonas/el-bosque',
    '/cerrajeros-campodon': '/zonas/campodon',
    '/cerrajeros-castillo': '/zonas/castillo',
    '/cerrajeros-casa-de-roque': '/zonas/boadilla-del-monte',
    '/cerrajeros-rio-guadarrama': '/zonas/nuevo-madrid',
    '/cerrajeros-la-vega': '/zonas/mostoles',
    '/cerrajeros-monreal': '/zonas/brunete',
    '/cerrajeros-sacedon': '/zonas/sevilla-la-nueva',
    '/cerrajeros-dehesa-del-sotillo': '/zonas/villanueva-de-la-canada',
    '/cerrajeros-poza-del-agua': '/zonas/navalcarnero',
    '/cerrajeros-el-bosque-alto': '/zonas/el-bosque',
    '/cerrajeros-monte-de-la-villa': '/zonas/monte-de-la-villa',
    '/cerrajeros-cerro-de-las-nieves': '/zonas/poligono-las-nieves',
    '/cookies': '/politica-cookies',
  },
  build: {
    inlineStylesheets: 'auto',
  },
  compressHTML: true,
});
