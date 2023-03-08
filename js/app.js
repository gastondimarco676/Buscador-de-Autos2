//Variables
const resultado = document.querySelector('#resultado')
const marca = document.querySelector('#marca')
const modelo = document.querySelector('#modelo')
const year = document.querySelector('#year')
const minimo = document.querySelector('#minimo')
const maximo = document.querySelector('#maximo')
const puertas = document.querySelector('#puertas')
const transmision = document.querySelector('#transmision')
const color = document.querySelector('#color')

//Eventos
document.addEventListener('DOMContentLoaded', ()=>
mostrarAutos())

function mostrarAutos(){
autos.forEach(auto=>{
    const autoHTML = document.createElement('p')
    const {marca,modelo, year,precio,puertas,transmision,color} = auto
    autoHTML.textContent = `${marca} ${modelo} - ${puertas} puertas - color ${color} - T. ${transmision } - Precio: $${precio}`
    resultado.appendChild(autoHTML)
})
}
