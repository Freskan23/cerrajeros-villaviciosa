import { motion } from "framer-motion";

const brands = [
    { name: "TESA", position: "0% 0%" },
    { name: "MOTTURA", position: "100% 0%" },
    { name: "CISA", position: "0% 50%" },
    { name: "FICHET", position: "100% 50%" },
    { name: "MUL-T-LOCK", position: "0% 100%" },
    { name: "ASSA ABLOY", position: "100% 100%" }
];

// Duplicamos el array para el efecto de scroll infinito suave
const allBrands = [...brands, ...brands, ...brands];

export default function BrandsSection() {
    return (
        <section className="py-20 bg-white overflow-hidden">
            <div className="container px-4 mb-16">
                <div className="flex flex-col items-center text-center">
                    <span className="text-[10px] font-black uppercase tracking-[0.4em] text-gray-300 mb-4">
                        Trust & Security
                    </span>
                    <h2 className="text-2xl md:text-3xl font-bold text-[#1B4965] tracking-tight">
                        Servicio Oficial Multimarca
                    </h2>
                </div>
            </div>

            <div className="relative flex overflow-x-hidden group">
                {/* Gradientes laterales para suavizar la entrada/salida */}
                <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none"></div>
                <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none"></div>

                <motion.div
                    className="flex whitespace-nowrap py-4"
                    animate={{
                        x: [0, -1920], // Ajustable según el ancho total
                    }}
                    transition={{
                        x: {
                            repeat: Infinity,
                            repeatType: "loop",
                            duration: 30,
                            ease: "linear",
                        },
                    }}
                >
                    {allBrands.map((brand, index) => (
                        <div
                            key={`${brand.name}-${index}`}
                            className="inline-flex items-center justify-center w-64 h-24 px-12"
                        >
                            <div
                                className="w-full h-full bg-no-repeat bg-contain filter grayscale opacity-40 hover:opacity-100 hover:grayscale-0 transition-all duration-700"
                                style={{
                                    backgroundImage: `url('/images/marcas-cerrajeria.webp')`,
                                    backgroundPosition: brand.position,
                                    backgroundSize: '200% 300%'
                                }}
                                aria-label={brand.name}
                            />
                        </div>
                    ))}
                </motion.div>
            </div>

            <div className="container mt-16">
                <div className="flex justify-center flex-wrap gap-x-12 gap-y-6">
                    <div className="flex items-center gap-2 text-[10px] uppercase tracking-widest font-bold text-gray-400">
                        <span className="w-1 h-1 bg-orange-400 rounded-full"></span>
                        Repuestos Originales
                    </div>
                    <div className="flex items-center gap-2 text-[10px] uppercase tracking-widest font-bold text-gray-400">
                        <span className="w-1 h-1 bg-orange-400 rounded-full"></span>
                        Garantía por Escrito
                    </div>
                    <div className="flex items-center gap-2 text-[10px] uppercase tracking-widest font-bold text-gray-400">
                        <span className="w-1 h-1 bg-orange-400 rounded-full"></span>
                        Instalación Certificada
                    </div>
                </div>
            </div>
        </section>
    );
}
