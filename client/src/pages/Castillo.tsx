import ZoneLanding from "@/components/ZoneLanding";

export default function Castillo() {
  return (
    <ZoneLanding
      zoneName="El Castillo"
      zoneDescription="Cerrajeros cerca del Castillo de Villaviciosa. Atendemos a todas las viviendas de la zona con rapidez y garantía."
      zoneMapUrl="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6079.998877665544!2d-3.895!3d40.365!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd418c0000000001%3A0x0000000000000000!2sEl%20Castillo%2C%20Villaviciosa%20de%20Od%C3%B3n!5e0!3m2!1ses!2ses!4v1610000000000!5m2!1ses!2ses"
      commonProblems={[
        "Apertura de puertas bloqueadas o llaves perdidas cerca del Castillo.",
        "Instalación de cerrojos FAC para mayor seguridad.",
        "Reparación de bombines que giran mal.",
        "Atención prioritaria para vecinos de la zona del Castillo.",
      ]}
    />
  );
}
