function larga() {
    setTimeout(()=>console.log("Termine"),6000)
}

function azar(cb) {
    let x = Math.ceil(Math.random()*100)
    console.log("te prometo que va a ser un " + x)
    setTimeout(()=>cb(x),6000)
}


console.log("Inicio")
azar((nro) => console.log("Se obtuvo el número: " + nro))
console.log("Final")