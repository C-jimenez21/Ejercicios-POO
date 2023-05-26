//Selectores
const color = document.getElementById("Color")
const area = document.getElementById("Area")

const tipoFigura = document.getElementById("tipoPersona")

const radio = document.getElementById("Radio")
const base = document.getElementById("Base")
const altura = document.getElementById("Altura")

const divRadio = document.querySelector("#divRadio")
const divBase = document.querySelector("#divBase")
const divAltura = document.querySelector("#divAltura")

const rta = document.querySelector(".rta")

const btnCalcular = document.getElementById("accion-1")

//Creacion de las clases
class Figura {
    color
    area
    constructor({color = "blue", area = "0"}){
        this.color = color
        this.area = area
    }
    calcularArea(){
        return `El area es: ${this.area} m^2` 
    }
}

class Circulo extends Figura{
    radio
    constructor({radio = "0"}){
        super({})
        this.radio = radio
    }
    calcularArea(){
        let area = Math.PI*this.radio*this.radio
        return `El area del ${Circulo.name} es de ${area} m^2`
    }
}

class Rectangulo extends Figura{
    base
    altura
    constructor({base = "0", altura = "0"}){
        super({})
        this.base = base
        this.altura = altura
    }
    calcularArea(){
        let area = this.base*this.altura
        return `El area del ${Rectangulo.name} es de ${area} m^2`
    }
}
let figura1 = new Figura({})
let circulo1 = new Circulo({})
let rectangulo1 = new Rectangulo({})


tipoFigura.addEventListener("change", ()=>{
    if(tipoFigura.value === "1"){
        divRadio.style.display = "contents"
        divAltura.style.display = "none"
        divBase.style.display = "none"
        
        btnCalcular.dataset.tipo = "circulo"

    }else if(tipoFigura.value === "2"){
        divRadio.style.display = "none"
        divAltura.style.display = "contents"
        divBase.style.display = "contents"

        btnCalcular.dataset.tipo = "rectangulo"

    }else{
        btnCalcular.dataset.tipo = "figura"
        divRadio.style.display = "none"
        divAltura.style.display = "none"
        divBase.style.display = "none"
    }
})

btnCalcular.addEventListener("click", (e)=>{
    if(e.target.dataset.tipo === "figura"){
        figura1.area = area.value
        figura1.color = color.value
        rta.innerHTML= figura1.calcularArea()

        rta.style.color = figura1.color
        //console.log(figura1.hacerSonido())
    }else if(e.target.dataset.tipo === "circulo"){
        circulo1.radio = radio.value
        rta.innerHTML= circulo1.calcularArea()
        circulo1.color = color.value
        rta.style.color = circulo1.color

        //console.log(circulo1.hacerSonido())
    }else if(e.target.dataset.tipo === "rectangulo"){
        rectangulo1.base = base.value
        rectangulo1.altura = altura.value
        rta.innerHTML= rectangulo1.calcularArea()
        rectangulo1.color = color.value
        rta.style.color = rectangulo1.color

    }
})


