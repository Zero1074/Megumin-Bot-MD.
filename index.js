import makeWASocket, { DisconnectReason, useMultiFileAuthState } from '@whiskeysockets/baileys';
import qrcode from 'qrcode-terminal';
import chalk from 'chalk';

(async () => {
  // Autenticación usando múltiples archivos
  const { state, saveCreds } = await useMultiFileAuthState('./auth_info'); // Carpeta para guardar las credenciales

  // Crear el socket
  const sock = makeWASocket({
    auth: state,
    printQRInTerminal: true, // Esta opción muestra el QR directamente en la terminal
  });

  // Evento para manejar la reconexión o desconexión
  sock.ev.on('connection.update', (update) => {
    const { connection, qr } = update;

    if (qr) {
      // Mostrar el QR en la consola
      console.log(chalk.green('Escanea este código QR con tu WhatsApp:'));
      qrcode.generate(qr, { small: true }); // Código QR en formato pequeño
    }

    if (connection === 'close') {
      const reason = new DisconnectReason(update.lastDisconnect?.error)?.output?.statusCode || 'unknown';
      console.log(chalk.redBright(`Conexión cerrada: ${reason}`));

      if (reason !== 401) {
        console.log(chalk.yellow('Intentando reconectar...'));
        sock.ev.emit('restart');
      }
    } else if (connection === 'open') {
      console.log(chalk.blueBright('¡Conexión exitosa a WhatsApp!'));
    }
  });

  // Guardar las credenciales
  sock.ev.on('creds.update', saveCreds);
})();
