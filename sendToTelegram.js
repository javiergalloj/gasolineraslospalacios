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
const precio1 = dataSaved.diesel_1.at(-1)
const precio2 = dataSaved.gasolina_1.at(-1)
const precio3 = dataSaved.diesel_2.at(-1)
const precio4 = dataSaved.gasolina_2.at(-1)
const precio5 = dataSaved.diesel_3.at(-1)
const precio6 = dataSaved.gasolina_3.at(-1)
const precio7 = dataSaved.diesel_4.at(-1)
const precio8 = dataSaved.gasolina_4.at(-1)
const precio9 = dataSaved.diesel_5.at(-1)
const precio10 = dataSaved.gasolina_5.at(-1)


const msg = `*💰PRECIOS COMBUSTIBLES💰*
Actualización: ${date}

*SHELL (POL. STA LUCÍA)*
⛽️ Diesel: ${precio1}€
⛽️ Gasolina: ${precio2}€

*COMBUSTIBLES LOS PALACIOS*
*(LAVADERO POL. EL MURO)*
⛽️ Diesel: ${precio3}€
⛽️ Gasolina: ${precio4}€

*BALLENOIL (POL. EL MURO)*
⛽️ Diesel: ${precio5}€
⛽️ Gasolina: ${precio6}€

*REPSOL (BURGER KING)*
⛽️ Diesel: ${precio7}€
⛽️ Gasolina: ${precio8}€

*BP (COOPERATIVA)*
⛽️ Diesel: ${precio9}€
⛽️ Gasolina: ${precio10}€`

console.log(msg)
await bot.sendMessage(TELEGRAM_CHAT_ID, msg, {parse_mode : 'Markdown'});
