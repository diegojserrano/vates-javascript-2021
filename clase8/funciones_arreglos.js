
function listar_arreglo(v, titulo) {
    console.log(titulo)    
    v.forEach(x => console.log(x.toString()))
}

const suma = (v,f) => v.reduce((suma,obj) => suma + f(obj),0)

exports.listar_arreglo = listar_arreglo
exports.suma = suma