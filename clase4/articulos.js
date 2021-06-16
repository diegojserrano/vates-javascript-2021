const prompt = require('prompt-sync')()

class Articulo {

    constructor (nombre, precio, stock, tipo) {
        this.nombre = nombre
        this.precio = precio
        this.stock = stock
        this.tipo = tipo
    }

    toString() {
        return `${this.nombre} - ${this.precio} - ${this.stock} - ${this.tipo}`
    }

    get valor_stock () {
        return this.precio * this.stock
    }
}

function cargar_arreglo(n) {
    let v = []

    for(let i = 0; i < n; i++) {
        let nombre = prompt("Ingrese el nombre: ")
        let precio = parseFloat(prompt("Ingrese el precio: "))
        let stock = parseInt(prompt("Ingrese el stock: "))
        let tipo = parseInt(prompt("Ingrese el tipo: "))

        let articulo = new Articulo(nombre, precio, stock, tipo)
        v.push(articulo) 
    }

    return v
}

function listar_arreglo(v, titulo) {
    console.log(titulo)    
    for(x of v) 
        console.log(x.toString())
}

function mas_caro(v) {
    // mayor va a ser de tipo referencia a un artículo
    let mayor
    for(art of v) {
        if (!mayor  || art.precio > mayor.precio)
            mayor = art
    }

    return mayor
}

function promedio_precios(v) {
    let suma = 0
    for(art of v)
        suma += art.precio

    return suma / v.length
}


function total_stock(v) {
    let suma = 0
    for(art of v)
        suma += art.valor_stock

    return suma
}

function cantidad_tipo(v) {
    let c = [0,0,0,0,0,0,0,0,0,0]
    for(art of v)
        c[art.tipo-1]++

    return c
}


let n = parseInt(prompt("Ingrese la cantidad de artículos: "))
let articulos = cargar_arreglo(n)
listar_arreglo(articulos, "Listado de artículo")
let caro = mas_caro(articulos)
console.log(`El artículo más caro es ${caro.toString()}`)
console.log(`Promedio de precios ${promedio_precios(articulos)}`)
console.log(`Total de inventario ${total_stock(articulos)}`)
ct = cantidad_tipo(articulos)
console.log("Artículos por tipo")
for(i in ct) 
    if (ct[i]) // El contador es distinto de 0?
        console.log(`Tipo ${parseInt(i)+1}: ${ct[i]}`)

        