function cuadrado(x) { return  x * x}

function es_impar(x) { return x % 2 == 1}

function imprimir_cuadrados_impares(min, max) {
    for(let i = min; i < max; i++)  {
        let cuad = cuadrado(i)
        if (es_impar(cuad))
            console.log(`El cuadrado de ${i} es ${cuad}`)
    }
}


imprimir_cuadrados_impares(20,50)