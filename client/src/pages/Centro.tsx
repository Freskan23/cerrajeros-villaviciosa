import ZoneLanding from "@/components/ZoneLanding";

export default function Centro() {
  return (
    <ZoneLanding
      zoneName="Centro"
      zoneDescription="¿Vives en el Casco Urbano? Llegamos rápidamente a la Plaza de la Constitución, Calle Carretas o cualquier punto del centro de Villaviciosa. Servicio 24h real."
      zoneMapUrl="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6079.876543210987!2d-3.897!3d40.358!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd418c0000000001%3A0x0000000000000000!2sCentro%2C%20Villaviciosa%20de%20Od%C3%B3n%2C%20Madrid!5e0!3m2!1ses!2ses!4v1610000000000!5m2!1ses!2ses"
      commonProblems={[
        "Abrimos puertas en edificios antiguos del casco histórico sin daños.",
        "Reparación de cierres metálicos en comercios de la Calle Mayor.",
        "Cambio de bombines por pérdida de llaves en comunidades.",
        "Instalación de cerrojos de alta seguridad en pisos del centro.",
      ]}
    />
  );
}
