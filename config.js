const config = require("./config.js");

// Ejemplo: Usar configuraciones desde config.js
console.log(`Iniciando ${config.botName}...`);
console.log(config.messages.botReady);

// Usar el prefijo para manejar comandos
if (msg.body.startsWith(config.prefix)) {
    const command = msg.body.slice(config.prefix.length).trim();
    if (command === "menu") {
        msg.reply(config.messages.menu);
    } else {
        msg.reply(config.defaultCommandResponse);
    }
}
