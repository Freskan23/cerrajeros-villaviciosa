import ZoneLanding from "@/components/ZoneLanding";

export default function ElBosque() {
  return (
    <ZoneLanding
      zoneName="El Bosque"
      zoneDescription="Servicio de cerrajería urgente en la Urbanización El Bosque. Conocemos la zona y llegamos en minutos a cualquier chalet o vivienda. Discreción y profesionalidad."
      zoneMapUrl="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6079.123456789012!2d-3.915!3d40.355!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd418c0000000001%3A0x0000000000000000!2sUrbanizaci%C3%B3n%20El%20Bosque%2C%20Villaviciosa%20de%20Od%C3%B3n!5e0!3m2!1ses!2ses!4v1610000000000!5m2!1ses!2ses"
      commonProblems={[
        "Apertura de puertas acorazadas y blindadas en chalets.",
        "Mejora de seguridad perimetral y puertas de acceso.",
        "Amaestramiento de llaves para unificar la entrada, garaje y trastero.",
        "Reparación urgente de cerraduras tras intento de robo.",
      ]}
    />
  );
}
