function azar() {
    return new Promise((resolve, reject) => {
        let x = Math.ceil(Math.random()*100)
        if (x % 3 != 0)
            setTimeout(() => resolve(x),2000)
        else
            setTimeout(() => reject("Es múltiplo de 3!!"),1500)
    });
}


async function main() {
    console.log("Inicio")
    try {
        let nro = await azar()
        console.log("Salio el " + nro)
        nro = await azar()
        console.log("Salio el " + nro)
        nro = await azar()
        console.log("Salio el " + nro)
    }
    catch(e) {
        console.log("Error: " + e)
    }
    console.log("Final")
}
main()
