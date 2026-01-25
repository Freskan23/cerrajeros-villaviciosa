export { COOKIE_NAME, ONE_YEAR_MS } from "@shared/const";

export const APP_TITLE = "Cerrajeros Villaviciosa del Odón 24h | Urgencias 20 min";
export const APP_DESCRIPTION = "Cerrajeros en Villaviciosa del Odón 24 horas. Llegamos en 20 minutos. Apertura de puertas desde 90€. Profesionales con más de 20 años de experiencia. Llama ahora.";

export const APP_LOGO = "/logo-villaviciosa.webp";

// Cerrajeros Villaviciosa 24h - Business Information
export const APP_PHONE = "+34 915 27 00 49";
export const APP_PHONE_DISPLAY = "915 27 00 49";
export const APP_PHONE_SECONDARY = "+34 647 19 92 08";
export const APP_PHONE_SECONDARY_DISPLAY = "647 19 92 08";
export const APP_EMAIL = "info@cerrajeros.info";
export const APP_BUSINESS_NAME = "Cerrajeros Villaviciosa 24h";
export const APP_BUSINESS_LEGAL_NAME = "CERRAJEROS VILLAVICIOSA 24H, S.L.";
export const APP_NIF = "B12345678";
export const APP_ADDRESS = "Avenida Príncipe de Asturias, 94, 28670 Villaviciosa del Odón, Madrid";
export const APP_LEGAL_ADDRESS = "Avenida Príncipe de Asturias, 94, 28670 Villaviciosa del Odón, Madrid";
export const APP_LOCATION = "Villaviciosa del Odón";
export const APP_SERVICE_AREA = "Villaviciosa del Odón y Zona Oeste de Madrid";

// Generate login URL at runtime so redirect URI reflects the current origin.
export const getLoginUrl = () => {
  const oauthPortalUrl = import.meta.env.VITE_OAUTH_PORTAL_URL;
  const appId = import.meta.env.VITE_APP_ID;
  const redirectUri = `${window.location.origin}/api/oauth/callback`;
  const state = btoa(redirectUri);

  const url = new URL(`${oauthPortalUrl}/app-auth`);
  url.searchParams.set("appId", appId);
  url.searchParams.set("redirectUri", redirectUri);
  url.searchParams.set("state", state);
  url.searchParams.set("type", "signIn");

  return url.toString();
};
