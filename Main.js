//Selectores
const nombre = document.getElementById("Nombre")
const edad = document.getElementById("Edad")
const sexo = document.getElementById("Sexo")
const carrera = document.getElementById("Carrera")

const tipoPersona = document.getElementById("tipoPersona")
const divCarrera = document.querySelector("#divCarrera")
const rta = document.querySelector(".rta")

const btnSaludar = document.getElementById("accion-1")
const btnCarrera = document.getElementById("accion-2")
const btnMayorEdad = document.getElementById("accion-3")

//Creacion de las clases
class Persona {
    nombre
    sexo
    #edad
    constructor({nombre = "NN", edad = "--", sexo = "helicoptero"}){
        this.nombre = nombre
        this.sexo = sexo
        this.#edad = edad
    }
    get getEdad(){
        return this.#edad
    }
    set setEdad(dato){
        this.#edad = dato
    }
    saludar(){
        return `Hola ${this.nombre} que tengas buen dia, recuerda que tienes ${this.#edad}!`
    }
    static esMayorDeEdad(edad){
        if (edad>= 18)
            //return `Es MAYOR de edad tiene ${edad}`
            return true
        else
            //return `Es MENOR de edad tiene ${edad}`
            return false
        }
}


class Estudiante extends Persona{
    carrera
    constructor({carrera = "Web Developer"}){
        super({})
        this.carrera = carrera
    }
    estudiar(){
        return `Estoy estudiando ${this.carrera}`
    }
}

  








let persona1 = new Persona({})
let estudiante1 = new Estudiante({})


document.getElementById("tipoPersona").addEventListener("change", ()=>{
    if(tipoPersona.value === "0"){
        btnSaludar.dataset.tipo = "persona"

        btnCarrera.style.display = "none"
        btnMayorEdad.style.display = "block"

        divCarrera.style.display = "none"
    }else if(tipoPersona.value === "1"){
        btnSaludar.dataset.tipo = "estudiante"
        
        btnCarrera.style.display = "block"
        btnMayorEdad.style.display = "none"
        
        divCarrera.style.display = "block"

    }
})

btnSaludar.addEventListener("click", (e)=>{
    if(e.target.dataset.tipo === "persona"){
        persona1.nombre = nombre.value
        persona1.setEdad = edad.value
        persona1.sexo = sexo.value
        rta.innerHTML= persona1.saludar()
        console.log(persona1.saludar())
    }else{
        estudiante1.nombre = nombre.value
        estudiante1.setEdad = edad.value
        estudiante1.sexo = sexo.value

        rta.innerHTML= estudiante1.saludar()
        console.log(estudiante1.saludar())
    }
})

btnCarrera.addEventListener("click", () =>{
    estudiante1.nombre = nombre.value
    estudiante1.setEdad = edad.value
    estudiante1.sexo = sexo.value
    estudiante1.carrera = carrera.value
    rta.innerHTML= estudiante1.estudiar()
})

btnMayorEdad.addEventListener("click", ()=>{
    persona1.nombre = nombre.value
    persona1.setEdad = edad.value
    persona1.sexo = sexo.value

    rta.innerHTML = Persona.esMayorDeEdad(persona1.getEdad)
    console.log(Persona.esMayorDeEdad(persona1.getEdad))
})
