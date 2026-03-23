import { SERVICES, ZONES } from './business';

export const mainNavigation = [
  { label: 'Inicio', href: '/' },
  {
    label: 'Servicios',
    href: '/servicios/apertura-puertas',
    children: SERVICES.map(s => ({
      label: s.name,
      href: `/servicios/${s.slug}`,
    })),
  },
  { label: 'Urgencias 24h', href: '/urgencias-24h' },
  {
    label: 'Zonas',
    href: '/zonas/centro',
    children: [
      {
        label: 'Barrios de Villaviciosa',
        items: ZONES.filter(z => z.type === 'barrio').map(z => ({
          label: z.name,
          href: `/zonas/${z.slug}`,
        })),
      },
      {
        label: 'Municipios cercanos',
        items: ZONES.filter(z => z.type === 'municipio').map(z => ({
          label: z.name,
          href: `/zonas/${z.slug}`,
        })),
      },
    ],
  },
  { label: 'Blog', href: '/blog' },
  { label: 'Contacto', href: '/contacto' },
];

export const footerNavigation = {
  servicios: SERVICES.map(s => ({ label: s.name, href: `/servicios/${s.slug}` })),
  zonas: ZONES.map(z => ({ label: z.name, href: `/zonas/${z.slug}` })),
  legal: [
    { label: 'Política de Privacidad', href: '/politica-privacidad' },
    { label: 'Política de Cookies', href: '/politica-cookies' },
    { label: 'Aviso Legal', href: '/aviso-legal' },
  ],
};
