function cubo(x) {
    return x * x * x
}

function entero_aleatorio(minimo, maximo) {
    let amplitud = maximo - minimo
    return Math.floor(Math.random()*amplitud)+minimo
}

function es_divisor(dividendo, divisor) {
    return dividendo % divisor == 0
}

function generar_vector_aleatorio(n,min,max) {
    let v = Array()
    for(let i = 0; i < n; i++)
        v.push(entero_aleatorio(min,max))
    return v
}

function cubos_multiplos_3(v) {
    let cubos = Array()
    for(x of v) 
        if (es_divisor(x,3)) 
            cubos.push(cubo(x))
    return cubos
}

function mostrar_vector(v) {
    for (x of v)
        console.log(x)    
}


numeros = generar_vector_aleatorio(20, 100, 1000)
mostrar_vector(numeros)
cubos = cubos_multiplos_3(numeros)
mostrar_vector(cubos)
