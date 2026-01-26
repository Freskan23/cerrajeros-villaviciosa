import ZoneLanding from "@/components/ZoneLanding";

export default function MonteDeLaVilla() {
    return (
        <ZoneLanding
            zoneName="Monte de la Villa"
            zoneDescription="Cerrajería profesional para la nueva zona residencial de Monte de la Villa en Villaviciosa del Odón. Soluciones modernas para viviendas de obra nueva."
            zoneMapUrl="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3039.5!2d-3.91!3d40.39!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDDCsDIzJzI0LjAiTiAzwrA1NCc0MC4wIlc!5e0!3m2!1ses!2ses!4v1610000000000"
            commonProblems={[
                "Ajuste de cerraduras en puertas de nueva construcción.",
                "Ampliación de sistemas de seguridad en viviendas unifamiliares.",
                "Asesoramiento en cerraduras invisibles y alarmas.",
                "Servicio técnico para comunidades de propietarios.",
            ]}
        />
    );
}
