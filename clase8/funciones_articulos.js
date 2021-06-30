const prompt = require('prompt-sync')()
const { Articulo } = require('./articulo')
const { suma } = require('./funciones_arreglos')

function cargar_articulo() {
    let nombre = prompt("Ingrese el nombre: ")
    let precio = parseFloat(prompt("Ingrese el precio: "))
    let stock = parseInt(prompt("Ingrese el stock: "))
    let tipo = parseInt(prompt("Ingrese el tipo: "))

    return new  Articulo(nombre, precio, stock, tipo)
}

const cargar_arreglo2 = n => Array(n).fill(null).map(() => cargar_articulo())

const mas_caro = v => v.reduce((x, y) => x.precio > y.precio ? x : y)


const promedio_precios = v => suma(v, x => x.precio) / v.length

const total_stock = v => suma(v, x => x.valor_stock)

const cantidad_tipo = v => {
    let c = Array(10).fill(0)
    v.forEach(x => c[x.tipo-1]++)
    return c
    //Alternativa
    //return v.reduce((c,a) => { c[a.total_stock]++; return c }, new Array(100).fill(0))
}

exports.cargar_articulo = cargar_articulo
exports.cargar_arreglo2 = cargar_arreglo2
exports.mas_caro = mas_caro
exports.promedio_precios = promedio_precios
exports.total_stock = total_stock
exports.cantidad_tipo = cantidad_tipo
