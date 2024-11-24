// Configuración principal del bot
module.exports = {
    botName: "Megumin-Bot-MD",       // Nombre del bot
    prefix: "/",                     // Prefijo para los comandos
    sessionFile: "./session.json",   // Archivo donde se guarda la sesión
    pluginsFolder: "./plugins",      // Carpeta para comandos
    defaultCommandResponse: "Comando no reconocido. Usa /menu para ver las opciones disponibles.",

    // Configuración de mensajes
    messages: {
        menu: "Aquí está el menú",   // Respuesta al comando /menu
        qrInstruction: "Escanea este código QR para conectarte.",
        digitCodeInstruction: "Conexión con código de 8 dígitos no implementada aún.",
        botReady: "Bot conectado y listo para usarse.",
    },
};
