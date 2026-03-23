const ftp = require("basic-ftp");
const path = require("path");

async function deploy() {
    const client = new ftp.Client();
    client.ftp.verbose = true;

    try {
        console.log("🔌 Conectando al servidor FTP...");
        await client.access({
            host: "178.211.133.8",
            user: "nacho@cerrajerosvillaviciosadeodon.madrid",
            password: "rw]Nc+!rDNHNyIvt",
            secure: false
        });

        console.log("✅ Conectado. Listando directorio raíz:");
        const list = await client.list();
        console.log(list.map(f => `${f.type === 2 ? '📁' : '📄'} ${f.name} (${f.size})`).join('\n'));

        const distPath = path.join(__dirname, "dist");
        console.log(`\n📤 Subiendo ${distPath}...`);
        console.log("Esto puede tardar unos minutos...\n");

        await client.uploadFromDir(distPath);

        console.log("\n🎉 ¡Deploy completado!");
        console.log("🌐 https://cerrajerosvillaviciosadeodon.madrid");
    } catch(err) {
        console.error("❌ Error:", err.message);
    }
    client.close();
}

deploy();
