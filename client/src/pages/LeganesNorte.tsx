import ZoneLanding from "@/components/ZoneLanding";

export default function CasaDeRoque() {
  return (
    <ZoneLanding
      zoneName="Casa de Roque"
      zoneDescription="¿Vives en Casa de Roque, Villaviciosa del Odón? Estamos cerca y llegamos rápido para cualquier urgencia de cerrajería."
      zoneMapUrl="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6082.839450617284!2d-3.750!3d40.350!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd418a0000000001%3A0x0000000000000000!2sCasa%20de%20Roque%2C%20Villaviciosa%20del%20Od%C3%B3n%2C%20Madrid!5e0!3m2!1ses!2ses!4v1610000000000!5m2!1ses!2ses"
      commonProblems={[
        "Expertos en las puertas de seguridad de los pisos nuevos de Casa de Roque.",
        "Instalamos mirillas digitales y cerrojos invisibles.",
        "Arreglamos cerraduras de trasteros y zonas comunes.",
        "Servicio rápido en toda la zona de Casa de Roque.",
      ]}
    />
  );
}
