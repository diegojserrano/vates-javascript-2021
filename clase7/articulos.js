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

function cargar_articulo() {
    let nombre = prompt("Ingrese el nombre: ")
    let precio = parseFloat(prompt("Ingrese el precio: "))
    let stock = parseInt(prompt("Ingrese el stock: "))
    let tipo = parseInt(prompt("Ingrese el tipo: "))

    return new Articulo(nombre, precio, stock, tipo)
}

const cargar_arreglo2 = n => Array(n).fill(null).map(() => cargar_articulo())

function listar_arreglo(v, titulo) {
    console.log(titulo)    
    v.forEach(x => console.log(x.toString()))
}

const mas_caro = v => v.reduce((x, y) => x.precio > y.precio ? x : y)

const suma = (v,f) => v.reduce((suma,articulo) => suma + f(articulo),0)

const promedio_precios = v => suma(v, x => x.precio) / v.length

const total_stock = v => suma(v, x => x.valor_stock)

const cantidad_tipo = v => {
    let c = Array(10).fill(0)
    v.forEach(x => c[x.tipo-1]++)
    return c
    //Alternativa
    //return v.reduce((c,a) => { c[a.total_stock]++; return c }, new Array(100).fill(0))
}


let n = parseInt(prompt("Ingrese la cantidad de artículos: "))
let articulos = cargar_arreglo2(n)
listar_arreglo(articulos, "Listado de artículo")
let caro = mas_caro(articulos)
console.log(`El artículo más caro es ${caro.toString()}`)
console.log(`Promedio de precios ${promedio_precios(articulos)}`)
console.log(`Total de inventario ${total_stock(articulos)}`)
ct = cantidad_tipo(articulos)
console.log("Artículos por tipo")
ct.map((x,i)=> ({indice:i,valor:x}))
  .filter(x=>x.valor > 0)
  .forEach((x,i) => console.log(`Tipo ${x.indice+1}: ${x.valor}`))
  
