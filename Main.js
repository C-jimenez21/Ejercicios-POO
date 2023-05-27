//Selectores
const tipoEmpleado = document.getElementById("tipoPersona")

const nombre = document.getElementById("nombre")
const edad = document.getElementById("edad")
const sueldo = document.getElementById("sueldo")
const departamento = document.getElementById("Combustible")

const rta = document.querySelector(".rta")

const divDepartamento = document.querySelector("#divCombustible")

const btnCalcular = document.getElementById("accion-1")
const btnGenerar = document.getElementById("accion-2")
const btnDatos = document.getElementById("accion-3")

//Creacion de las clases
class Empleado {
    nombre
    edad
    sueldo
    constructor({nombre = "Gustavo", edad = "21", sueldo = 500_000}){
        this.nombre = nombre
        this.edad = edad
        this.sueldo = sueldo
    }
    calcularSalarioAnual(){
        return `el sueldo anual del empleado ${this.nombre} y cuyo edad es ${this.edad} es: $ ${this.sueldo*12} Pesos` 
    }
    static generarIdEmpleado(name){
        console.log(Math.random*1000)
        return `El codigo generado del empleado ${name} es: ${Math.floor(Math.random()*1000)}`
    }
}

class Gerente extends Empleado{
    departamento
    constructor({departamento = "RH"}){
        super({})
        this.departamento = departamento
    }
    calcularSalarioAnual(){
        return `el sueldo anual del empleado ${this.nombre} y cuyo edad es ${this.edad} es: $ ${(this.sueldo * (1.1))*12} Pesos` 

    }
}

let empleado1 = new Empleado({})
let gerente1 = new Gerente({})


tipoEmpleado.addEventListener("change", ()=>{
    if(tipoEmpleado.value === "1"){
        divDepartamento.style.display = "contents"
        btnCalcular.dataset.tipo = "coche"
        btnGenerar.dataset.tipo = "coche"
        btnDatos.dataset.tipo = "coche"
        
        
    }else{
        console.log("entro vehiculo");
        btnCalcular.dataset.tipo = "vehiculo"
        btnGenerar.dataset.tipo = "vehiculo"
        btnDatos.dataset.tipo = "vehiculo"
        divDepartamento.style.display = "none"
        
        
    }
})

btnCalcular.addEventListener("click", (e)=>{
    if(e.target.dataset.tipo === "vehiculo"){  
        rta.innerHTML= empleado1.calcularSalarioAnual()
    }else if(e.target.dataset.tipo === "coche"){
        rta.innerHTML= gerente1.calcularSalarioAnual()
    }
})

btnGenerar.addEventListener("click", (e)=>{
    if(e.target.dataset.tipo === "vehiculo"){
        rta.innerHTML= Empleado.generarIdEmpleado(empleado1.nombre)
        //console.log(empleado1.hacerSonido())
    }else if(e.target.dataset.tipo === "coche"){
        rta.innerHTML= Gerente.generarIdEmpleado(gerente1.nombre)
        //console.log(gerente1.hacerSonido())
    }
})


btnDatos.addEventListener("click", (e)=>{
    if(e.target.dataset.tipo === "vehiculo"){
        empleado1.edad = edad.value
        empleado1.nombre = nombre.value
        empleado1.sueldo = Number(sueldo.value )

    }else if(e.target.dataset.tipo === "coche"){
        gerente1.edad = edad.value
        gerente1.nombre = nombre.value
        gerente1.sueldo = Number(sueldo.value)
        gerente1.departamento = departamento.value            

    }
})
