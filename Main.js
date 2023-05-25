//Selectores
const nombre = document.getElementById("Nombre")
const edad = document.getElementById("Edad")
const raza = document.getElementById("Carrera")

const tipoPersona = document.getElementById("tipoPersona")
const divCarrera = document.querySelector("#divCarrera")
const rta = document.querySelector(".rta")

const btnSaludar = document.getElementById("accion-1")
const btnCarrera = document.getElementById("accion-2")

//Creacion de las clases
class Animal {
    nombre
    #edad
    constructor({nombre = "NN", edad = "--"}){
        this.nombre = nombre
        this.#edad = edad
    }
    get getEdad(){
        return this.#edad
    }
    set setEdad(dato){
        this.#edad = dato
    }
    hacerSonido(){
        return `${this.nombre} esta haciendo ruido!`
    }
}


class Perro extends Animal{
    raza
    constructor({raza = "Golden Retriever"}){
        super({})
        this.raza = raza
    }
    moverCola(){
        return `El perro ${this.nombre} de raza ${this.raza} esta moviendo su cola!`
    }
}

  
let animal1 = new Animal({})
let perro1 = new Perro({})


document.getElementById("tipoPersona").addEventListener("change", ()=>{
    if(tipoPersona.value === "0"){
        btnSaludar.dataset.tipo = "persona"

        btnCarrera.style.display = "none"

        divCarrera.style.display = "none"

    }else if(tipoPersona.value === "1"){
        btnSaludar.dataset.tipo = "estudiante"
        
        btnCarrera.style.display = "block"
        
        divCarrera.style.display = "block"

    }
})

btnSaludar.addEventListener("click", (e)=>{
    if(e.target.dataset.tipo === "persona"){
        animal1.nombre = nombre.value
        animal1.setEdad = edad.value
        rta.innerHTML= animal1.hacerSonido()
        //console.log(animal1.hacerSonido())
    }else{
        perro1.nombre = nombre.value
        perro1.setEdad = edad.value

        rta.innerHTML= perro1.hacerSonido()
        //console.log(perro1.hacerSonido())
    }
})

btnCarrera.addEventListener("click", () =>{
    perro1.nombre = nombre.value
    perro1.setEdad = edad.value
    perro1.raza = raza.value
    rta.innerHTML= perro1.moverCola()
})


