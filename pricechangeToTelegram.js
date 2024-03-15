import TelegramBot from 'node-telegram-bot-api'
import { readFile } from './fileUtils.js'
//import { generateChart } from './generateChart.js'

const TOKEN_TELEGRAM = process.env.TOKEN_TELEGRAM
const bot = new TelegramBot(TOKEN_TELEGRAM)
const TELEGRAM_CHAT_ID = process.env.TELEGRAM_CHAT_ID;

/*
const sendToTelegram = async ({price, priceOld, type, chatId}) => {
  if(price !== priceOld){
    const diff = Math.round((price - priceOld) * 1000 ) / 1000
    const msg = `*${date}*: El precio ${type} es ${price}€, ha _${diff > 0 ? 'subido' : 'bajado'}_ *${Math.abs(diff)}€*`
    console.log(msg)
    await bot.sendMessage(chatId, msg, {parse_mode : 'Markdown'});
//    await bot.sendPhoto(chatId, image)
  }

}

const dataSaved = readFile()
const date = dataSaved.dates.at(-1)

sendToTelegram({
  price: dataSaved.gasolina.at(-1),
  priceOld: dataSaved.gasolina.at(-2),
  type: 'de la gasolina',
  chatId: TELEGRAM_CHAT_ID,
  date,
//  image: generateChart(dataSaved, 'gasolina')
}).catch(error => console.error('Error al enviar el precio de la gasolina', error))

sendToTelegram({
  price: dataSaved.diesel.at(-1),
  priceOld: dataSaved.diesel.at(-2),
  type: 'del diesel',
  chatId: TELEGRAM_CHAT_ID,
  date,
//  image: generateChart(dataSaved, 'diesel')
}).catch(error => console.error('Error al enviar el precio del gasoil', error))
*/

const dataSaved = readFile()
const date = dataSaved.dates.at(-1)
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


const msg = `*💰PRECIOS COMBUSTIBLES💰*
Actualización: ${date}

*SHELL (POL. STA LUCÍA)*
⛽️ Diesel: ${diesel_1_new}€
⛽️ Gasolina: ${gasolina_1_new}€

*COMBUSTIBLES LOS PALACIOS*
*(LAVADERO POL. EL MURO)*
⛽️ Diesel: ${diesel_2_new}€
⛽️ Gasolina: ${gasolina_2_new}€

*BALLENOIL (POL. EL MURO)*
⛽️ Diesel: ${diesel_3_new}€
⛽️ Gasolina: ${gasolina_3_new}€

*REPSOL (BURGER KING)*
⛽️ Diesel: ${diesel_4_new}€
⛽️ Gasolina: ${gasolina_4_new}€

*BP (COOPERATIVA)*
⛽️ Diesel: ${diesel_5_new}€
⛽️ Gasolina: ${gasolina_5_new}€`

console.log(msg)
await bot.sendMessage(TELEGRAM_CHAT_ID, msg, {parse_mode : 'Markdown'});
