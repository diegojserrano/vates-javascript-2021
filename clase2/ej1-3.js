let n = Math.ceil(Math.random()*1000)

console.log(n)
console.log(`divisores de ${n}`)
for(let divisor = 1; divisor <= 100; divisor++)
    if (n % divisor == 0)
        console.log(divisor)
