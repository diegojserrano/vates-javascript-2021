const prompt = require('prompt-sync')()

console.log("Ingrese dos numeros")

var a = parseInt(prompt(""))
var b = parseInt(prompt(""))

suma = a + b

console.log(`La suma de ${a} y ${b} es ${suma}`)
