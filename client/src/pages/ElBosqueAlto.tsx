import ZoneLanding from "@/components/ZoneLanding";

export default function ElBosqueAlto() {
    return (
        <ZoneLanding
            zoneName="El Bosque Alto (Villaviciosa)"
            zoneDescription="Servicio de cerrajería urgente en la zona alta de la urbanización El Bosque. Especialistas en chalets y viviendas unifamiliares. Seguridad de alta gama."
            zoneMapUrl="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3039.5!2d-3.9!3d40.4!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDDCsDI0JzAwLjAiTiAzwrA1NCc0MC4wIlc!5e0!3m2!1ses!2ses!4v1610000000000"
            commonProblems={[
                "Mantenimiento de cerraduras en puertas de acceso exteriores.",
                "Cambio de bombines por mudanza a nueva vivienda.",
                "Instalación de cerraduras inteligentes y control de accesos.",
                "Apertura de puertas por pérdida de llaves en la zona.",
            ]}
        />
    );
}
