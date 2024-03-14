import fetch from 'node-fetch'
import { readFile, writeFile } from './fileUtils.js'

const FUEL_STATION_ID_1 = process.env.FUEL_STATION_ID_1
const FUEL_STATION_ID_2 = process.env.FUEL_STATION_ID_2
const FUEL_STATION_ID_3 = process.env.FUEL_STATION_ID_3
const FUEL_STATION_ID_4 = process.env.FUEL_STATION_ID_4
const FUEL_STATION_ID_5 = process.env.FUEL_STATION_ID_5
const GEOPORTAL_URL_1 = `https://geoportalgasolineras.es/rest/${FUEL_STATION_ID_1}/busquedaEstacionPrecio`
const GEOPORTAL_URL_2 = `https://geoportalgasolineras.es/rest/${FUEL_STATION_ID_2}/busquedaEstacionPrecio`
const GEOPORTAL_URL_3 = `https://geoportalgasolineras.es/rest/${FUEL_STATION_ID_3}/busquedaEstacionPrecio`
const GEOPORTAL_URL_4 = `https://geoportalgasolineras.es/rest/${FUEL_STATION_ID_4}/busquedaEstacionPrecio`
const GEOPORTAL_URL_5 = `https://geoportalgasolineras.es/rest/${FUEL_STATION_ID_5}/busquedaEstacionPrecio`



let options = {
  day: "2-digit",
  month: "2-digit",
  year: "numeric",
  hour: "2-digit",
  minute: "2-digit",
  hour12: false,
  timeZone: "Europe/Madrid",
};

const date = new Intl.DateTimeFormat('es-ES', options).format(Date.now())

const download = (var1, var2, url) => {
    fetch(url, {headers: { 'Accept': ' application/json' }})
    .then(res => res.json())
    .then((stationData) => {
        let dataSaved = readFile()

        if(dataSaved.dates.at(-1) === date){
          const numElments = dataSaved.dates.length - 1
          dataSaved[var1][numElments] = stationData.precioGasoleoA
          dataSaved[var2][numElments] = stationData.precioGasolina95E5
          dataSaved.dates.shift()
          dataSaved[var1].shift()
          dataSaved[var2].shift()
        } else {
          dataSaved.dates.push(date)
          dataSaved[var1].push(stationData.precioGasoleoA)
          dataSaved[var2].push(stationData.precioGasolina95E5)
        }

        writeFile(dataSaved)

        console.log(`Guardado con fecha ${date}: gasoil: ${stationData.precioGasoleoA} y gasolina: ${stationData.precioGasolina95E5}`)

    })
      .catch(err => {
        console.error(err)
      })
}


download('diesel_1','gasolina_1', GEOPORTAL_URL_1)
download('diesel_2','gasolina_2', GEOPORTAL_URL_2)
download('diesel_3','gasolina_3', GEOPORTAL_URL_3)
download('diesel_4','gasolina_4', GEOPORTAL_URL_4)
download('diesel_5','gasolina_5', GEOPORTAL_URL_5)
