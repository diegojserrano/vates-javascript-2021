const imprimir = console.log

const entero_aleatorio = function(minimo, maximo) {
    let amplitud = maximo - minimo
    return Math.floor(Math.random()*amplitud)+minimo
}

const es_divisor = (dividendo, divisor) => dividendo % divisor == 0

const generar_vector_aleatorio = function(n,min,max) {
    let v = Array()
    for(let i = 0; i < n; i++)
        v.push(entero_aleatorio(min,max))
    return v
}

// Funcion de orden superior
const procesar_filtrando = function(v, f, c) {
    let resultados = Array()
    for(x of v) 
        if (c(x)) 
            resultados.push(f(x))
    return resultados
}

const filtrar = function(v, c) {
    let resultados = Array()
    for(x of v) 
        if (c(x)) 
            resultados.push(x)
    return resultados
}

const recorrer_vector = function(v, f) {
    for (x of v)
        f(x)
}
const mostrar_vector = function(v) { recorrer_vector(v, console.log) }

const imprimir_lindo = function(x) {
    imprimir("-----" + x + "------")
}

numeros = generar_vector_aleatorio(10, 100, 1000)
imprimir("Listado de numeros")
recorrer_vector(numeros, imprimir_lindo)
imprimir("Filtrados")
multiplos = procesar_filtrando(numeros, x => x, x => x < 500)
mostrar_vector(multiplos)
imprimir("Cubos")
cubos = procesar_filtrando(numeros, x => x ** 3, x => x < 500)
mostrar_vector(cubos)
imprimir("Cuadrados")
cuadrados = procesar_filtrando(numeros, x => x * x, x => x < 500)
mostrar_vector(cuadrados)
imprimir("Raices")
raices = procesar_filtrando(numeros, Math.sqrt, x => x < 500)
mostrar_vector(raices)