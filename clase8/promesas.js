function azar() {
    return new Promise((resolve, reject) => {
        let x = Math.ceil(Math.random()*100)
        if (x % 3 != 0)
            setTimeout(() => resolve(x),6000)
        else
            setTimeout(() => reject("Es múltiplo de 3!!"),3000)
    });
}


console.log("Inicio")
azar()
    .then(nro => console.log("Salio el " + nro))
    .catch(error => console.log("Error: " + error));

console.log("Final")