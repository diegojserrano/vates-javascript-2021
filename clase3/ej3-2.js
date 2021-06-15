const teclado = require('prompt-sync')()

function entero_aleatorio(minimo, maximo) {
    let amplitud = maximo - minimo
    return Math.floor(Math.random()*amplitud)+minimo
}

// devuelve true si divisor divide en forma 
// entera al dividendo y false en caso contrario
function es_divisor(dividendo, divisor) {
    return dividendo % divisor == 0
}

function imprimir_divisiores_de(n) {
    console.log(`Divisores de ${n}`)
    for (d = 1; d < n/2; d++)
        if (es_divisor(n, d))
            console.log(d)
}

let n = parseInt(teclado("Ingrese un número: "))
imprimir_divisiores_de(n)

