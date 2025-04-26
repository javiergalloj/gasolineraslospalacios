import TelegramBot from 'node-telegram-bot-api'
import { readFile } from './fileUtils.js'

const TOKEN_TELEGRAM = process.env.TOKEN_TELEGRAM
const bot = new TelegramBot(TOKEN_TELEGRAM)
const TELEGRAM_CHAT_ID = process.env.TELEGRAM_CHAT_ID;

const dataSaved = readFile()
const date = dataSaved.dates.at(-1)

// ESTACIONES DE SERVICIO
const estaciones = [
  { nombre: 'SHELL (POL. STA LUCÍA)', diesel_old: dataSaved.diesel_1.at(-2), gasolina_old: dataSaved.gasolina_1.at(-2), diesel_new: dataSaved.diesel_1.at(-1), gasolina_new: dataSaved.gasolina_1.at(-1) },
  { nombre: 'COMBUSTIBLES LOS PALACIOS\n(LAVADERO POL. EL MURO)', diesel_old: dataSaved.diesel_2.at(-2), gasolina_old: dataSaved.gasolina_2.at(-2), diesel_new: dataSaved.diesel_2.at(-1), gasolina_new: dataSaved.gasolina_2.at(-1) },
  { nombre: 'BALLENOIL (POL. EL MURO)', diesel_old: dataSaved.diesel_3.at(-2), gasolina_old: dataSaved.gasolina_3.at(-2), diesel_new: dataSaved.diesel_3.at(-1), gasolina_new: dataSaved.gasolina_3.at(-1) },
//  { nombre: 'REPSOL (BURGER KING)', diesel_old: dataSaved.diesel_4.at(-2), gasolina_old: dataSaved.gasolina_4.at(-2), diesel_new: dataSaved.diesel_4.at(-1), gasolina_new: dataSaved.gasolina_4.at(-1) },
  { nombre: 'BP (COOPERATIVA)', diesel_old: dataSaved.diesel_5.at(-2), gasolina_old: dataSaved.gasolina_5.at(-2), diesel_new: dataSaved.diesel_5.at(-1), gasolina_new: dataSaved.gasolina_5.at(-1) }
];

const getVariation = (newValue, oldValue) => {
  if (newValue > oldValue) {
    return '🔺';
  } else if (newValue < oldValue) {
    return '🔻';
  }
  else {
    return '';
  }
};

let mensaje = `*💰PRECIOS COMBUSTIBLES💰*\nActualización: ${date}\n\n`;

estaciones.forEach(estacion => {
  mensaje += `*${estacion.nombre}*\n`;
  if (estacion.diesel_old !== estacion.diesel_new) {
    mensaje += `⛽️ Diesel: ${estacion.diesel_old}€ → ${estacion.diesel_new}€${getVariation(estacion.diesel_new, estacion.diesel_old)}\n`;
  } else {
    mensaje += `⛽️ Diesel: ${estacion.diesel_new}€\n`
  }
  if (estacion.gasolina_old !== estacion.gasolina_new) {
    mensaje += `⛽️ Gasolina: ${estacion.gasolina_old}€ → ${estacion.gasolina_new}€${getVariation(estacion.gasolina_new, estacion.gasolina_old)}\n`;
  } else {
    mensaje += `⛽️ Gasolina: ${estacion.gasolina_new}€\n`
  }
  mensaje += '\n';
  }
);

console.log(mensaje);
await bot.sendMessage(TELEGRAM_CHAT_ID, mensaje, { parse_mode: 'Markdown' });
