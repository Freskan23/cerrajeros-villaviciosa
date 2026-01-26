import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import { Route, Switch, useLocation } from "wouter";
import { lazy, Suspense, useEffect } from "react";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import { HelmetProvider } from "react-helmet-async";
import SchemaMarkup from "./components/SchemaMarkup";
import Home from "./pages/Home";
import { WeatherProvider } from "@/context/WeatherContext";

// Lazy loading for other pages
// Servicios
const Urgencias24h = lazy(() => import("./pages/Urgencias24h"));
const AperturaPuertas = lazy(() => import("./pages/AperturaPuertas"));
const CambioCerraduras = lazy(() => import("./pages/CambioCerraduras"));
const CambioBombin = lazy(() => import("./pages/CambioBombin"));
const Amaestramiento = lazy(() => import("./pages/Amaestramiento"));
const AperturaCajasFuertes = lazy(() => import("./pages/AperturaCajasFuertes"));
const ReparacionCierres = lazy(() => import("./pages/ReparacionCierres"));
const CerrojosSeguridad = lazy(() => import("./pages/CerrojosSeguridad"));
const MuellesCierrapuertas = lazy(() => import("./pages/MuellesCierrapuertas"));
const Desahucios = lazy(() => import("./pages/Desahucios"));

// Barrios y Ubicaciones
const Centro = lazy(() => import("./pages/Centro"));
const ElBosque = lazy(() => import("./pages/SanNicasio"));
const Campodon = lazy(() => import("./pages/ElCarrascal"));
const Castillo = lazy(() => import("./pages/LaFortuna"));
const CasaDeRoque = lazy(() => import("./pages/LeganesNorte"));
const RioGuadarrama = lazy(() => import("./pages/ArroyoCulebro"));
const LaVega = lazy(() => import("./pages/Valdepelayo"));
const Monreal = lazy(() => import("./pages/VeredaEstudiantes"));
const Sacedon = lazy(() => import("./pages/LosSantos"));
const DehesaDelSotillo = lazy(() => import("./pages/Solagua"));
const PozaDelAgua = lazy(() => import("./pages/PozaDelAgua"));
const ElBosqueAlto = lazy(() => import("./pages/ElBosqueAlto"));
const MonteDeLaVilla = lazy(() => import("./pages/MonteDeLaVilla"));
const CerroDeLasNieves = lazy(() => import("./pages/CerroDeLasNieves"));

// Otros
const Blog = lazy(() => import("./pages/Blog"));
const BlogPost = lazy(() => import("./pages/BlogPost"));
const PoliticaPrivacidad = lazy(() => import("./pages/PoliticaPrivacidad"));
const PoliticaCookies = lazy(() => import("./pages/PoliticaCookies"));
const AvisoLegal = lazy(() => import("./pages/AvisoLegal"));
const Contacto = lazy(() => import("./pages/Contacto"));
const Testimonios = lazy(() => import("./pages/Testimonios"));

const CookieBanner = lazy(() => import("./components/CookieBanner"));
const FloatingActionButtons = lazy(() => import("./components/FloatingActionButtons"));

const PageLoader = () => (
  <div className="min-h-screen flex items-center justify-center bg-white">
    <div className="h-12 w-12 border-4 border-[#1B4965] border-t-transparent rounded-full animate-spin"></div>
  </div>
);

function Router() {
  const [location] = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [location]);

  return (
    <>
      <Suspense fallback={null}>
        <CookieBanner />
        <FloatingActionButtons />
      </Suspense>
      <Suspense fallback={<PageLoader />}>
        <Switch>
          <Route path="/" component={Home} />

          {/* Rutas de Servicios */}
          <Route path="/urgencias-24h" component={Urgencias24h} />
          <Route path="/apertura-puertas" component={AperturaPuertas} />
          <Route path="/cambio-cerraduras" component={CambioCerraduras} />
          <Route path="/cambio-bombin" component={CambioBombin} />
          <Route path="/amaestramiento" component={Amaestramiento} />
          <Route path="/apertura-cajas-fuertes" component={AperturaCajasFuertes} />
          <Route path="/reparacion-cierres-metalicos" component={ReparacionCierres} />
          <Route path="/cerrojos-seguridad" component={CerrojosSeguridad} />
          <Route path="/muelles-cierrapuertas" component={MuellesCierrapuertas} />
          <Route path="/desahucios" component={Desahucios} />

          {/* Rutas de Ubicaciones */}
          <Route path="/cerrajeros-centro" component={Centro} />
          <Route path="/cerrajeros-el-bosque" component={ElBosque} />
          <Route path="/cerrajeros-campodon" component={Campodon} />
          <Route path="/cerrajeros-castillo" component={Castillo} />
          <Route path="/cerrajeros-casa-de-roque" component={CasaDeRoque} />
          <Route path="/cerrajeros-rio-guadarrama" component={RioGuadarrama} />
          <Route path="/cerrajeros-la-vega" component={LaVega} />
          <Route path="/cerrajeros-monreal" component={Monreal} />
          <Route path="/cerrajeros-sacedon" component={Sacedon} />
          <Route path="/cerrajeros-dehesa-del-sotillo" component={DehesaDelSotillo} />
          <Route path="/cerrajeros-poza-del-agua" component={PozaDelAgua} />
          <Route path="/cerrajeros-el-bosque-alto" component={ElBosqueAlto} />
          <Route path="/cerrajeros-monte-de-la-villa" component={MonteDeLaVilla} />
          <Route path="/cerrajeros-cerro-de-las-nieves" component={CerroDeLasNieves} />

          {/* Rutas Generales */}
          <Route path="/blog" component={Blog} />
          <Route path="/blog/:id" component={BlogPost} />
          <Route path="/testimonios" component={Testimonios} />
          <Route path="/politica-privacidad" component={PoliticaPrivacidad} />
          <Route path="/politica-cookies" component={PoliticaCookies} />
          <Route path="/cookies" component={PoliticaCookies} />
          <Route path="/aviso-legal" component={AvisoLegal} />
          <Route path="/contacto" component={Contacto} />
          <Route path="/404" component={NotFound} />
          <Route component={NotFound} />
        </Switch>
      </Suspense>
    </>
  );
}

function App() {
  return (
    <ErrorBoundary>
      <HelmetProvider>
        <ThemeProvider defaultTheme="light">
          <TooltipProvider>
            <Toaster />
            <SchemaMarkup />
            <WeatherProvider>
              <Router />
            </WeatherProvider>
          </TooltipProvider>
        </ThemeProvider>
      </HelmetProvider>
    </ErrorBoundary>
  );
}

export default App;
