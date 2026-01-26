import ZoneLanding from "@/components/ZoneLanding";

export default function CerroDeLasNieves() {
    return (
        <ZoneLanding
            zoneName="Cerro de las Nieves"
            zoneDescription="Servicio técnico de cerrajería en el barrio de Cerro de las Nieves. Atención inmediata para comunidades, comercios y particulares. Profesionales 24h."
            zoneMapUrl="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3039.5!2d-3.92!3d40.38!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDDCsDIyJzQ4LjAiTiAzwrA1NScxMi4wIlc!5e0!3m2!1ses!2ses!4v1610000000000"
            commonProblems={[
                "Sustitución de bombines en viviendas antiguas.",
                "Reparación de cerraduras de portales comunitarios.",
                "Apertura de puertas por robo o extravío de llaves.",
                "Instalación de medidas de seguridad adicionales.",
            ]}
        />
    );
}
