import ZoneLanding from "@/components/ZoneLanding";

export default function CerroDeLasNieves() {
  return (
    <ZoneLanding
      zoneName="Cerro de las Nieves"
      zoneDescription="¿Vives en Cerro de las Nieves? Ofrecemos servicio de cerrajería urgente y concertado. Protege tu hogar con los mejores profesionales de Villaviciosa."
      zoneMapUrl="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6079.777777777777!2d-3.905!3d40.360!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd418c0000000001%3A0x0000000000000000!2sCerro%20de%20las%20Nieves%2C%20Villaviciosa%20de%20Od%C3%B3n!5e0!3m2!1ses!2ses!4v1610000000000!5m2!1ses!2ses"
      commonProblems={[
        "Reparación de cerraduras forzadas o averiadas.",
        "Instalación de rejas y cierres de seguridad.",
        "Apertura de cajas fuertes domésticas.",
        "Mantenimiento de cerraduras en chalets y unifamiliares.",
      ]}
    />
  );
}
