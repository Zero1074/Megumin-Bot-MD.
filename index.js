const { Client } = require("whatsapp-web.js");
const qrcode = require("qrcode-terminal");
const inquirer = require("inquirer");
const fs = require("fs");
require("dotenv").config();

// Archivo para guardar la sesión
const SESSION_FILE = "./session.json";
let sessionData;

// Cargar sesión si existe
if (fs.existsSync(SESSION_FILE)) {
    sessionData = require(SESSION_FILE);
}

const client = new Client({
    session: sessionData,
});

client.on("qr", (qr) => {
    qrcode.generate(qr, { small: true });
    console.log("Escanea este código QR para conectarte.");
});

client.on("authenticated", (session) => {
    fs.writeFileSync(SESSION_FILE, JSON.stringify(session));
    console.log("Sesión autenticada y guardada.");
});

client.on("ready", () => {
    console.log("Bot conectado y listo para usarse.");
});

client.on("message", (msg) => {
    if (msg.body === "/menu") {
        msg.reply("Aquí está el menú");
    }
});

async function startBot() {
    const { option } = await inquirer.prompt([
        {
            type: "list",
            name: "option",
            message: "¿Cómo quieres conectarte?",
            choices: [
                { name: "Código QR", value: 1 },
                { name: "Código de 8 dígitos", value: 2 },
            ],
        },
    ]);

    if (option === 1) {
        console.log("Conexión usando código QR...");
        client.initialize();
    } else if (option === 2) {
        console.log("Conexión usando código de 8 dígitos...");
        console.log("Por ahora, esta función no está implementada.");
        // Implementación futura aquí.
    }
}

startBot();
