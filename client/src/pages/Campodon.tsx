import ZoneLanding from "@/components/ZoneLanding";

export default function Campodon() {
  return (
    <ZoneLanding
      zoneName="Campodón"
      zoneDescription="¿Vives en Campodón? Atendemos urgencias en toda la urbanización, tanto la zona de Villaviciosa como la limítrofe. Llegamos antes de que te des cuenta."
      zoneMapUrl="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6080.567890123456!2d-3.885!3d40.337!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd418c0000000001%3A0x0000000000000000!2sCampod%C3%B3n%2C%20Villaviciosa%20de%20Od%C3%B3n!5e0!3m2!1ses!2ses!4v1610000000000!5m2!1ses!2ses"
      commonProblems={[
        "Apertura de puertas sin romper en chalets independientes y adosados.",
        "Instalación de sistemas antibumping de última generación.",
        "Reparación de cerraduras de cancelas exteriores.",
        "Servicio urgente 24 horas en toda la urbanización.",
      ]}
    />
  );
}
