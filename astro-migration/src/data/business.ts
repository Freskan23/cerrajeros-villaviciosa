export const SITE_URL = 'https://cerrajerosvillaviciosadeodon.madrid';
export const APP_TITLE = 'Cerrajeros Villaviciosa del Odón 24h | Urgencias 20 min';
export const APP_DESCRIPTION = 'Cerrajeros en Villaviciosa del Odón 24 horas. Llegamos en 20 minutos. Apertura de puertas desde 90€. Profesionales con más de 20 años de experiencia. Llama ahora.';
export const APP_LOGO = '/logo-cerrajeros-villaviciosa.webp';
export const APP_PHONE = '+34 915 27 00 49';
export const APP_PHONE_DISPLAY = '915 27 00 49';
export const APP_PHONE_SECONDARY = '+34 647 19 92 08';
export const APP_PHONE_SECONDARY_DISPLAY = '647 19 92 08';
export const APP_PHONE_HREF = 'tel:+34915270049';
export const APP_PHONE_SECONDARY_HREF = 'tel:+34647199208';
export const APP_EMAIL = 'info@cerrajeros.info';
export const APP_BUSINESS_NAME = 'Cerrajeros Villaviciosa 24h';
export const APP_BUSINESS_LEGAL_NAME = 'CERRAJEROS VILLAVICIOSA 24H, S.L.';
export const APP_NIF = 'B12345678';
export const APP_ADDRESS = 'Avenida Príncipe de Asturias, 94';
export const APP_FULL_ADDRESS = 'Avenida Príncipe de Asturias, 94, 28670 Villaviciosa del Odón, Madrid';
export const APP_POSTAL_CODE = '28670';
export const APP_LOCALITY = 'Villaviciosa del Odón';
export const APP_REGION = 'Madrid';
export const APP_COUNTRY = 'ES';
export const APP_SERVICE_AREA = 'Villaviciosa del Odón y Zona Oeste de Madrid';
export const APP_GEO_LAT = '40.35719';
export const APP_GEO_LNG = '-3.90418';

export const SERVICES = [
  { name: 'Apertura de Puertas', slug: 'apertura-puertas', icon: 'door-open', price: 'Desde 90€' },
  { name: 'Cambio de Cerraduras', slug: 'cambio-cerraduras', icon: 'lock', price: 'Desde 120€' },
  { name: 'Cambio de Bombín', slug: 'cambio-bombin', icon: 'key-round', price: 'Desde 80€' },
  { name: 'Amaestramiento', slug: 'amaestramiento', icon: 'keys', price: 'Consultar' },
  { name: 'Cajas Fuertes', slug: 'cajas-fuertes', icon: 'vault', price: 'Desde 150€' },
  { name: 'Cierres Metálicos', slug: 'cierres-metalicos', icon: 'warehouse', price: 'Desde 100€' },
  { name: 'Cerrojos de Seguridad', slug: 'cerrojos-seguridad', icon: 'shield', price: 'Desde 110€' },
  { name: 'Muelles Cierrapuertas', slug: 'muelles-cierrapuertas', icon: 'door-closed', price: 'Desde 90€' },
  { name: 'Desahucios', slug: 'desahucios', icon: 'gavel', price: 'Consultar' },
] as const;

export const ZONES = [
  { name: 'Centro', slug: 'centro', type: 'barrio' as const },
  { name: 'El Bosque', slug: 'el-bosque', type: 'barrio' as const },
  { name: 'Campodón', slug: 'campodon', type: 'barrio' as const },
  { name: 'El Castillo', slug: 'castillo', type: 'barrio' as const },
  { name: 'Monte de la Villa', slug: 'monte-de-la-villa', type: 'barrio' as const },
  { name: 'Nuevo Madrid', slug: 'nuevo-madrid', type: 'barrio' as const },
  { name: 'Polígono PINA', slug: 'poligono-pina', type: 'barrio' as const },
  { name: 'Polígono Las Nieves', slug: 'poligono-las-nieves', type: 'barrio' as const },
  { name: 'Boadilla del Monte', slug: 'boadilla-del-monte', type: 'municipio' as const },
  { name: 'Móstoles', slug: 'mostoles', type: 'municipio' as const },
  { name: 'Alcorcón', slug: 'alcorcon', type: 'municipio' as const },
  { name: 'Brunete', slug: 'brunete', type: 'municipio' as const },
  { name: 'Sevilla la Nueva', slug: 'sevilla-la-nueva', type: 'municipio' as const },
  { name: 'Villanueva de la Cañada', slug: 'villanueva-de-la-canada', type: 'municipio' as const },
  { name: 'Navalcarnero', slug: 'navalcarnero', type: 'municipio' as const },
] as const;

export type Service = typeof SERVICES[number];
export type Zone = typeof ZONES[number];
