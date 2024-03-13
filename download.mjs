import fetch from 'node-fetch'
import { readFile, writeFile } from './fileUtils.js'

const FUEL_STATION_ID = process.env.FUEL_STATION_ID
const GEOPORTAL_URL = `https://geoportalgasolineras.es/rest/${FUEL_STATION_ID}/busquedaEstacionPrecio`

let options = {
  day: "numeric",
  month: "numeric",
  year: "numeric",
  hour: "numeric",
  minute: "numeric",
  hour12: true,
  timeZone: "Europe/Madrid",
};

const date = new Intl.DateTimeFormat('es-ES', options).format(Date.now())

fetch(GEOPORTAL_URL, {headers: { 'Accept': ' application/json' }})
.then(res => res.json())
.then((stationData) => {
    let dataSaved = readFile()
    
    if(dataSaved.dates.at(-1) === date){
      const numElments = dataSaved.dates.length - 1
      dataSaved.gasolina[numElments] = stationData.precioGasolina95E5
      dataSaved.diesel[numElments] = stationData.precioGasoleoA
    } else {
      dataSaved.dates.push(date)
      dataSaved.gasolina.push(stationData.precioGasolina95E5)
      dataSaved.diesel.push(stationData.precioGasoleoA)
    }
    
    writeFile(dataSaved)

    console.log(`Guardado con fecha ${date}: gasolina: ${stationData.precioGasolina95E5} y gasoil: ${stationData.precioGasoleoA}`)
    
})
  .catch(err => {
    console.error(err)
  })
