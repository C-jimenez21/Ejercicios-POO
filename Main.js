//Selectores
const tipoVehiculo = document.getElementById("tipoPersona")

const marca = document.getElementById("Marca")
const modelo = document.getElementById("Modelo")
const velocidad = document.getElementById("Velocidad")
const combustible = document.getElementById("Combustible")

const rta = document.querySelector(".rta")

const divCombustible = document.querySelector("#divCombustible")

const btnCalcular = document.getElementById("accion-1")
const btnConvertir = document.getElementById("accion-2")
const btnDatos = document.getElementById("accion-3")

//Creacion de las clases
class Vehiculo {
    marca
    modelo
    velocidad
    constructor({marca = "Avion", modelo = "2003", velocidad = 300}){
        this.marca = marca
        this.modelo = modelo
        this.velocidad = velocidad
    }
    acelerar(){
        this.velocidad += 10
        return `La velocidad actual del vehiculo de ${this.marca} y cuyo modelo es ${this.modelo} es: ${this.velocidad} KmH` 
    }
    static convertirKmHEnMph(km){
        return `${km}[KmH] son equivalentes a ${km/1.60934} [MpH]`
    }
}

class Coche extends Vehiculo{
    combustible
    constructor({combustible = "0"}){
        super({})
        this.combustible = combustible
    }
    acelerar(){
        this.velocidad += 20
        return `La velocidad actual del vehiculo de ${this.marca} y cuyo modelo es ${this.modelo} es: ${this.velocidad} KmH debido a su combustible llamado ${this.combustible}` 
    }
}

let vehiculo1 = new Vehiculo({})
let coche1 = new Coche({})


tipoVehiculo.addEventListener("change", ()=>{
    if(tipoVehiculo.value === "1"){
        console.log("entro coche");
        divCombustible.style.display = "contents"
        btnCalcular.dataset.tipo = "coche"
        btnConvertir.dataset.tipo = "coche"
        btnDatos.dataset.tipo = "coche"
        
        
    }else{
        console.log("entro vehiculo");
        btnCalcular.dataset.tipo = "vehiculo"
        btnConvertir.dataset.tipo = "vehiculo"
        btnDatos.dataset.tipo = "vehiculo"
        divCombustible.style.display = "none"   
        
        
    }
})

btnCalcular.addEventListener("click", (e)=>{
    if(e.target.dataset.tipo === "vehiculo"){  
        rta.innerHTML= vehiculo1.acelerar()
    }else if(e.target.dataset.tipo === "coche"){
        rta.innerHTML= coche1.acelerar()
    }
})

btnConvertir.addEventListener("click", (e)=>{
    if(e.target.dataset.tipo === "vehiculo"){
        rta.innerHTML= Vehiculo.convertirKmHEnMph(vehiculo1.velocidad)
        //console.log(vehiculo1.hacerSonido())
    }else if(e.target.dataset.tipo === "coche"){
        rta.innerHTML= Coche.convertirKmHEnMph(coche1.velocidad)
        //console.log(coche1.hacerSonido())
    }
})


btnDatos.addEventListener("click", (e)=>{
    if(e.target.dataset.tipo === "vehiculo"){
        vehiculo1.modelo = modelo.value
        vehiculo1.marca = marca.value
        vehiculo1.velocidad = Number(velocidad.value )

    }else if(e.target.dataset.tipo === "coche"){
        coche1.modelo = modelo.value
        coche1.marca = marca.value
        coche1.velocidad = Number(velocidad.value)
        coche1.combustible = combustible.value            

    }
})
