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

fetch(GEOPORTAL_URL_1, {headers: { 'Accept': ' application/json' }})
.then(res => res.json())
.then((stationData) => {
    let dataSaved = readFile()
    
    if(dataSaved.dates.at(-1) === date){
      const numElments = dataSaved.dates.length - 1
      dataSaved.diesel_1[numElments] = stationData.precioGasoleoA
      dataSaved.gasolina_1[numElments] = stationData.precioGasolina95E5
    } else {
      dataSaved.dates.push(date)
      dataSaved.diesel_1.push(stationData.precioGasoleoA)
      dataSaved.gasolina_1.push(stationData.precioGasolina95E5)
    }
    
    writeFile(dataSaved)

    console.log(`Guardado para ESTACION 1 con fecha ${date}: gasolina: ${stationData.precioGasolina95E5} y gasoil: ${stationData.precioGasoleoA}`)
    
})
  .catch(err => {
    console.error(err)
  })

fetch(GEOPORTAL_URL_2, {headers: { 'Accept': ' application/json' }})
.then(res => res.json())
.then((stationData) => {
    let dataSaved = readFile()
    
    if(dataSaved.dates.at(-1) === date){
      const numElments = dataSaved.dates.length - 1
      dataSaved.diesel_2[numElments] = stationData.precioGasoleoA
      dataSaved.gasolina_2[numElments] = stationData.precioGasolina95E5
    } else {
      dataSaved.dates.push(date)
      dataSaved.diesel_2.push(stationData.precioGasoleoA)
      dataSaved.gasolina_2.push(stationData.precioGasolina95E5)
    }
    
    writeFile(dataSaved)

    console.log(`Guardado para ESTACION 2 con fecha ${date}: gasolina: ${stationData.precioGasolina95E5} y gasoil: ${stationData.precioGasoleoA}`)
    
})
  .catch(err => {
    console.error(err)
  })

fetch(GEOPORTAL_URL_3, {headers: { 'Accept': ' application/json' }})
.then(res => res.json())
.then((stationData) => {
    let dataSaved = readFile()
    
    if(dataSaved.dates.at(-1) === date){
      const numElments = dataSaved.dates.length - 1
      dataSaved.diesel_3[numElments] = stationData.precioGasoleoA
      dataSaved.gasolina_3[numElments] = stationData.precioGasolina95E5
    } else {
      dataSaved.dates.push(date)
      dataSaved.diesel_3.push(stationData.precioGasoleoA)
      dataSaved.gasolina_3.push(stationData.precioGasolina95E5)
    }
    
    writeFile(dataSaved)

    console.log(`Guardado para ESTACION 3 con fecha ${date}: gasolina: ${stationData.precioGasolina95E5} y gasoil: ${stationData.precioGasoleoA}`)
    
})
  .catch(err => {
    console.error(err)
  })


fetch(GEOPORTAL_URL_4, {headers: { 'Accept': ' application/json' }})
.then(res => res.json())
.then((stationData) => {
    let dataSaved = readFile()
    
    if(dataSaved.dates.at(-1) === date){
      const numElments = dataSaved.dates.length - 1
      dataSaved.diesel_4[numElments] = stationData.precioGasoleoA
      dataSaved.gasolina_4[numElments] = stationData.precioGasolina95E5
    } else {
      dataSaved.dates.push(date)
      dataSaved.diesel_4.push(stationData.precioGasoleoA)
      dataSaved.gasolina_4.push(stationData.precioGasolina95E5)
    }
    
    writeFile(dataSaved)

    console.log(`Guardado para ESTACION 4 con fecha ${date}: gasolina: ${stationData.precioGasolina95E5} y gasoil: ${stationData.precioGasoleoA}`)
    
})
  .catch(err => {
    console.error(err)
  })


fetch(GEOPORTAL_URL_5, {headers: { 'Accept': ' application/json' }})
.then(res => res.json())
.then((stationData) => {
    let dataSaved = readFile()
    
    if(dataSaved.dates.at(-1) === date){
      const numElments = dataSaved.dates.length - 1
      dataSaved.diesel_5[numElments] = stationData.precioGasoleoA
      dataSaved.gasolina_5[numElments] = stationData.precioGasolina95E5
    } else {
      dataSaved.dates.push(date)
      dataSaved.diesel_5.push(stationData.precioGasoleoA)
      dataSaved.gasolina_5.push(stationData.precioGasolina95E5)
    }
    
    writeFile(dataSaved)

    console.log(`Guardado para ESTACION 5 con fecha ${date}: gasolina: ${stationData.precioGasolina95E5} y gasoil: ${stationData.precioGasoleoA}`)
    
})
  .catch(err => {
    console.error(err)
  })
