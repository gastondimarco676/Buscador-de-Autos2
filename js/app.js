//Variables
const resultado = document.querySelector('#resultado')
const max = new Date().getFullYear()
const min = max - 10
const maximin = ` ${max} - ${min}`
console.log(maximin)
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
mostrarAutos(),
SelectAños()
)

function mostrarAutos(){
autos.forEach(auto=>{
    const autoHTML = document.createElement('p')
    const {marca,modelo, year,precio,puertas,transmision,color} = auto
    autoHTML.textContent = `${marca} ${modelo} - ${puertas} puertas - color ${color} - T. ${transmision } - Precio: $${precio}`
    resultado.appendChild(autoHTML)
})
}
function SelectAños(){
    for(let i=max;i>=min; i--){
        const opcion = document.createElement('option')
        opcion.value=i
        opcion.textContent=i
        year.appendChild(opcion)
        //console.log(opcion)
    }
}
