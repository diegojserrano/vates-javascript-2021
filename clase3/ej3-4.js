class Persona {

    constructor(nombre, apellido) {
        this._nombre = nombre;
        this._apellido = apellido;
    }

    get nombre_completo() {
        return this._nombre + ", " + this._apellido
    }

    get nombre() {
        return this._nombre.toUpperCase()
    }

    set nombre(valor) {
        if (valor != "")
            this._nombre = valor
        else
            this._nombre = "vacio"
    }


}

Persona.prototype.domicilio = function() { 
    for (let index =0; index <10; index++) {
        console.log(index)
    }    
 }

let per1 = new Persona("Juan","Perez")
let per2 = new Persona("Juana","Pereza")

let per3 = per1

per2.edad = 34 

per3.nombre = "xlkjalkdfasdf"
console.log(per3.nombre)

per3.nombre = ""
console.log(per3.nombre)

 per1.nombre += "......"
console.log(per3.nombre_completo)
//console.log(per4.nombre_completo())


