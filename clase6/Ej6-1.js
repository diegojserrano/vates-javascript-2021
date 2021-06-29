/**
- Llenar un vector con 100 numeros al azar entre -500 y 500.
- Usando únicamente funciones flecha informar:
  - Cantidad de positivos
  - Promedio de todos
  - Cubo de los que tengan un sólo dígito
  - Posición del primero que sea par y negativo
  - Raiz cuadrada de todos los impares mayores que 100
  
 */

let v = new Array(100)
v.fill(0)
const aleatorio = () => Math.ceil(Math.random()*1000)-500
v.forEach((x,i) => v[i] = aleatorio())
let cant_positivos = v.filter(x => x > 0).length
let suma = 0
v.forEach(x => suma += x)
let promedio = suma / v.length
let cubos = v.filter(x => Math.abs(x) < 10).map(x => x ** 3)
let indice = v.findIndex(x => x % 2 == 0 && x < 0)
let raices = v.filter(x => x % 2 == 1 && x > 100).map(Math.sqrt)
console.log(v)
console.log(`Cantidad de positivos ${cant_positivos}`)
console.log(`Promedio de todos ${promedio}`)
console.log(`Cubo de los de 1 dígito ${cubos}`)
console.log(`Índice del primer par negativo ${indice}`)
console.log(`Raices de los impares mayores que 100 ${raices}`)
