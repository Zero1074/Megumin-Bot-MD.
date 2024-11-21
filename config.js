import { watchFile, unwatchFile } from 'fs';
import chalk from 'chalk';
import { fileURLToPath } from 'url';
import fs from 'fs';
import moment from 'moment-timezone';

// Configuración global del bot
global.botnumber = '5211234567890'; // Reemplaza con el número del bot
global.defaultLanguage = 'es';
global.botName = 'Megumin-Bot-MD';
global.owner = [
  ['5219876543210', '👑 Creador 👑', true] // Número del creador del bot
];
global.prefix = '!';
global.packname = 'Megumin-Bot';
global.author = 'Zero1074';
global.welcomeMessage = '¡Bienvenido/a! Soy Megumin-Bot-MD. ¿En qué puedo ayudarte?';
global.goodbyeMessage = '¡Adiós! Espero verte pronto.';
global.moment = moment.tz('America/Mexico_City');
global.apiKeys = {
  ytDlExec: 'yt-dl-exec'
};

// Multimedia o recursos estáticos
global.menuImage = fs.readFileSync('./src/assets/images/menu.png'); // Cambia la ruta si es necesario

// Información del bot
global.botDate = `*[ 📅 ] Fecha:* ${global.moment.format('DD/MM/YY')}`;
global.botTime = `*[ ⏳ ] Hora:* ${global.moment.format('HH:mm:ss')}`;

// Configuración de texto
global.waitMessage = '*[ ⏳ ] Procesando tu solicitud...*';

// Observación de cambios en el archivo
const file = fileURLToPath(import.meta.url);
watchFile(file, () => {
  unwatchFile(file);
  console.log(chalk.greenBright('Configuración actualizada: \'config.js\''));
  import(`${file}?update=${Date.now()}`);
});
