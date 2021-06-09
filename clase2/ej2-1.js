function entero_aleatorio(minimo, maximo) {
    let amplitud = maximo - minimo
    return Math.floor(Math.random()*amplitud)+minimo
}

// devuelve true si divisor divide en forma 
// entera al dividendo y false en caso contrario
function es_divisor(dividendo, divisor) {
    return dividendo % divisor == 0
}

let n = entero_aleatorio(1,1000)

console.log(`Divisores de ${n}`)
for (d = 1; d < 100; d++)
    if (es_divisor(n, d))
        console.log(d)