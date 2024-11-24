module.exports = {
    name: "menu", // Nombre del comando
    description: "Muestra el menú principal.",
    execute: (msg, client) => {
        // Respuesta al comando /menu
        msg.reply("Aquí está el menú");
    },
};
