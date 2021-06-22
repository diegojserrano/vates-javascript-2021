const imprimir = console.log

const cubo = function(x) {
    return x * x * x
}

const cuadrado = function(x) {
    return x * x
}

const identidad = function(x) {
    return x
}

const raiz = Math.sqrt

const entero_aleatorio = function(minimo, maximo) {
    let amplitud = maximo - minimo
    return Math.floor(Math.random()*amplitud)+minimo
}

const es_divisor = function(dividendo, divisor) {
    return dividendo % divisor == 0
}

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

const imprimir_lindo = function(x) {
    imprimir("-----" + x + "------")
}

const multiplo3 = function(x) {
    return es_divisor(x,3)
}

const es_par = function(x) {
    return es_divisor(x,2)
}

const menor_500 = function(x) {
    return x < 500
}


numeros = generar_vector_aleatorio(10, 100, 1000)
imprimir("Listado de numeros")
recorrer_vector(numeros, imprimir_lindo)
imprimir("Filtrados")
multiplos = procesar_filtrando(numeros, identidad, menor_500)
recorrer_vector(multiplos, imprimir)
imprimir("Cubos")
cubos = procesar_filtrando(numeros, cubo, menor_500)
recorrer_vector(cubos, imprimir)
imprimir("Cuadrados")
cuadrados = procesar_filtrando(numeros, cuadrado, menor_500)
recorrer_vector(cuadrados, imprimir)
imprimir("Raices")
raices = procesar_filtrando(numeros, raiz, menor_500)
recorrer_vector(raices, imprimir)
