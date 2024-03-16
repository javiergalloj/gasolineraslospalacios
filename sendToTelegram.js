import TelegramBot from 'node-telegram-bot-api'
import { readFile } from './fileUtils.js'
//import { generateChart } from './generateChart.js'

const TOKEN_TELEGRAM = process.env.TOKEN_TELEGRAM
const bot = new TelegramBot(TOKEN_TELEGRAM)
const TELEGRAM_CHAT_ID = process.env.TELEGRAM_CHAT_ID;

const dataSaved = readFile()
const date = dataSaved.dates.at(-1)

//PRECIOS NUEVOS
const diesel_1_new = dataSaved.diesel_1.at(-1)
const gasolina_1_new = dataSaved.gasolina_1.at(-1)
const diesel_2_new = dataSaved.diesel_2.at(-1)
const gasolina_2_new = dataSaved.gasolina_2.at(-1)
const diesel_3_new = dataSaved.diesel_3.at(-1)
const gasolina_3_new = dataSaved.gasolina_3.at(-1)
const diesel_4_new = dataSaved.diesel_4.at(-1)
const gasolina_4_new = dataSaved.gasolina_4.at(-1)
const diesel_5_new = dataSaved.diesel_5.at(-1)
const gasolina_5_new = dataSaved.gasolina_5.at(-1)

//PRECIOS ANTERIORES
const diesel_1_old = dataSaved.diesel_1.at(-2)
const gasolina_1_old = dataSaved.gasolina_1.at(-2)
const diesel_2_old = dataSaved.diesel_2.at(-2)
const gasolina_2_old = dataSaved.gasolina_2.at(-2)
const diesel_3_old = dataSaved.diesel_3.at(-2)
const gasolina_3_old = dataSaved.gasolina_3.at(-2)
const diesel_4_old = dataSaved.diesel_4.at(-2)
const gasolina_4_old = dataSaved.gasolina_4.at(-2)
const diesel_5_old = dataSaved.diesel_5.at(-2)
const gasolina_5_old = dataSaved.gasolina_5.at(-2)

const getVariation = (oldValue, newValue) => {
  if (oldValue < newValue) {
    return '🔺';
  } else if (oldValue > newValue) {
    return '🔻';
  }
  else {
    return '';
  }
};

const msg = `*💰PRECIOS COMBUSTIBLES💰*
Actualización: ${date}

*SHELL (POL. STA LUCÍA)*
⛽️ Diesel: ${diesel_1_new}€${getVariation(diesel_1_old, diesel_1_new)}
⛽️ Gasolina: ${gasolina_1_new}€${getVariation(gasolina_1_old, gasolina_1_new)}

*COMBUSTIBLES LOS PALACIOS*
*(LAVADERO POL. EL MURO)*
⛽️ Diesel: ${diesel_2_new}€${getVariation(diesel_2_old, diesel_2_new)}
⛽️ Gasolina: ${gasolina_2_new}€${getVariation(gasolina_2_old, gasolina_2_new)}

*BALLENOIL (POL. EL MURO)*
⛽️ Diesel: ${diesel_3_new}€${getVariation(diesel_3_old, diesel_3_new)}
⛽️ Gasolina: ${gasolina_3_new}€${getVariation(gasolina_3_old, gasolina_3_new)}

*REPSOL (BURGER KING)*
⛽️ Diesel: ${diesel_4_new}€${getVariation(diesel_4_old, diesel_4_new)}
⛽️ Gasolina: ${gasolina_4_new}€${getVariation(gasolina_4_old, gasolina_4_new)}

*BP (COOPERATIVA)*
⛽️ Diesel: ${diesel_5_new}€${getVariation(diesel_5_old, diesel_5_new)}
⛽️ Gasolina: ${gasolina_5_new}€${getVariation(gasolina_5_old, gasolina_5_new)}`

console.log(msg)
await bot.sendMessage(TELEGRAM_CHAT_ID, msg, {parse_mode : 'Markdown'});
