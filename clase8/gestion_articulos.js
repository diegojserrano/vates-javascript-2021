const prompt = require('prompt-sync')()
const f = require('./funciones_articulos')
const { listar_arreglo } = require('./funciones_arreglos')

console.log("con las 2 librerias")


let n = parseInt(prompt("Ingrese la cantidad de artículos: "))
let articulos = f.cargar_arreglo2(n)
listar_arreglo(articulos, "Listado de artículo")
let caro = f.mas_caro(articulos)
console.log(`El artículo más caro es ${caro.toString()}`)
console.log(`Promedio de precios ${f.promedio_precios(articulos)}`)
console.log(`Total de inventario ${f.total_stock(articulos)}`)
ct = f.cantidad_tipo(articulos)
console.log("Artículos por tipo")
ct.map((x,i)=> ({indice:i,valor:x}))
  .filter(x=>x.valor > 0)
  .forEach((x,i) => console.log(`Tipo ${x.indice+1}: ${x.valor}`))
  
