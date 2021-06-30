
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

function saludar () { console.log("Hola, estoy en una libreria")}

exports.Articulo = Articulo
exports.saludar = saludar


