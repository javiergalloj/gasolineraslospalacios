import TelegramBot from 'node-telegram-bot-api'
import { readFile } from './fileUtils.js'
import { generateChart } from './generateChart.js'

const TOKEN_TELEGRAM = process.env.TOKEN_TELEGRAM
const bot = new TelegramBot(TOKEN_TELEGRAM)
const TELEGRAM_CHAT_ID = process.env.TELEGRAM_CHAT_ID;

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
  
