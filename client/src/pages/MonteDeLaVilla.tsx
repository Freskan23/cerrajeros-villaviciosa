import ZoneLanding from "@/components/ZoneLanding";

export default function MonteDeLaVilla() {
  return (
    <ZoneLanding
      zoneName="Monte de la Villa"
      zoneDescription="Cerrajeros en la nueva urbanización Monte de la Villa. Conocemos las instalaciones modernas y ofrecemos soluciones compatibles con la estética de tu hogar."
      zoneMapUrl="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6079.333333333333!2d-3.910!3d40.345!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd418c0000000001%3A0x0000000000000000!2sMonte%20de%20la%20Villa%2C%20Villaviciosa%20de%20Od%C3%B3n!5e0!3m2!1ses!2ses!4v1610000000000!5m2!1ses!2ses"
      commonProblems={[
        "Cambio de bombines de obra por cilindros de alta seguridad.",
        "Apertura de puertas sin dañar en viviendas nuevas.",
        "Instalación de segundas cerraduras invisibles.",
        "Asesoramiento en seguridad para nuevos propietarios.",
      ]}
    />
  );
}
