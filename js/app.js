//VARIABLES
//contenedor para los resultados
const resultado = document.querySelector('#resultado')
//max y min para el select de años
const max = new Date().getFullYear()
const min = max - 10
//los distintos select
const marca = document.querySelector('#marca')
const modelo = document.querySelector('#modelo')
const year = document.querySelector('#year')
const minimo = document.querySelector('#minimo')
const maximo = document.querySelector('#maximo')
const puertas = document.querySelector('#puertas')
const transmision = document.querySelector('#transmision')
const color = document.querySelector('#color')

//creando objeto de busqueda
const datosBusqueda = {
    marca: '',
    modelo: '',
    year: '',
    minimo: '',
    maximo: '',
    puertas: '',
    transmision: '',
    color: ''
}

//Eventos
document.addEventListener('DOMContentLoaded', () =>
    mostrarAutos(),
    SelectAños(),
    marca.addEventListener('change', e => {
        datosBusqueda.marca = e.target.value
        console.log(datosBusqueda)
        filtrarAutos()
    }),
    /*modelo.addEventListener('change', e => {
        datosBusqueda.modelo = e.target.value
        console.log(datosBusqueda)
    }),*/
    year.addEventListener('change', e => {
        datosBusqueda.year = e.target.value
        console.log(datosBusqueda)
    }),
    minimo.addEventListener('change', e => {
        datosBusqueda.minimo = e.target.value
        console.log(datosBusqueda)
    }),
    maximo.addEventListener('change', e => {
        datosBusqueda.maximo = e.target.value
        console.log(datosBusqueda)
    }),
    puertas.addEventListener('change', e => {
        datosBusqueda.puertas = e.target.value
        console.log(datosBusqueda)
    }),
    transmision.addEventListener('change', e => {
        datosBusqueda.transmision = e.target.value
        console.log(datosBusqueda)
    }),
    color.addEventListener('change', e => {
        datosBusqueda.color = e.target.value
        console.log(datosBusqueda)
    })
)

function mostrarAutos() {

    autos.forEach(auto => {
        const autoHTML = document.createElement('p')
        const { marca, modelo, year, precio, puertas, transmision, color } = auto
        autoHTML.textContent = `${marca} ${modelo} ${year} - ${puertas} puertas - color ${color} - Transimisión: ${transmision} - Precio: $${precio}`
        resultado.appendChild(autoHTML)
    })
}
function SelectAños() {
    for (let i = max; i >= min; i--) {
        const opcion = document.createElement('option')
        opcion.value = i
        opcion.textContent = i
        year.appendChild(opcion)
        
        
    }
}

function filtrarAutos(){
//console.log(resultado)
const resultado = autos.filter(filtrarMarca)
console.log(resultado)
mostrarAutos()
}

function filtrarMarca(auto){
    const {marca} = datosBusqueda
    if(marca){
        return marca===auto.marca
    }
    return auto
 }