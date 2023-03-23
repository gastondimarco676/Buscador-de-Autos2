//VARIABLES
//contenedor para los res ultados
const resultadoHTML = document.querySelector('#resultadoHTML')
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
    precio:'',
    puertas: '',
    transmision: '',
    color: ''
}

//Eventos
document.addEventListener('DOMContentLoaded', () =>
    mostrarAutos(autos),
    SelectAños(),
    marca.addEventListener('change', e => {
        datosBusqueda.marca = e.target.value
        
        filtrarAutos()
    }),
    /*modelo.addEventListener('change', e => {
        datosBusqueda.modelo = e.target.value
        
    }),*/
    year.addEventListener('change', e => {
        datosBusqueda.year = parseInt(e.target.value)
        
        filtrarAutos()
    }),
    minimo.addEventListener('change', e => {
        datosBusqueda.minimo = e.target.value
        
        filtrarAutos()
    }),
    maximo.addEventListener('change', e => {
        datosBusqueda.maximo = e.target.value
        
        filtrarAutos()
    }),
    puertas.addEventListener('change', e => {
        datosBusqueda.puertas = parseInt(e.target.value)
        filtrarAutos()
    }),
    transmision.addEventListener('change', e => {
        datosBusqueda.transmision = e.target.value
        filtrarAutos()

    }),
    color.addEventListener('change', e => {
        datosBusqueda.color = e.target.value
        filtrarAutos()

    })
)

function filtrarAutos(){
    //console.log(resultado)
    const resultado = autos.filter(filtrarMarca).filter(filtrarYear).filter(filtrarMinimo).filter(filtrarMaximo).filter(filtrarPuertas).filter(filtrarTransmision).filter(filtrarColor)
    resultadoHTML.innerHTML =''
    console.log(resultado)
    mostrarAutos(resultado)
    }

function mostrarAutos(resultado) {
    //const resultado = autos.filter(filtrarMarca).filter(filtrarYear).filter(filtrarMinimo).filter(filtrarMaximo).filter(filtrarPuertas).filter(filtrarTransmision).filter(filtrarColor)

    if(resultado.length===0){
        noResultado()
    }else{
        resultado.forEach(auto => {
            const autoHTML = document.createElement('p')
            const { marca, modelo, year, precio, puertas, transmision, color } = auto
            autoHTML.textContent = `${marca} ${modelo} ${year} - ${puertas} puertas - color ${color} - Transimisión: ${transmision} - Precio: $${precio}`
            resultadoHTML.appendChild(autoHTML)
        })
    }  
}

function SelectAños() {
    for (let i = max; i >= min; i--) {
        const opcion = document.createElement('option')
        opcion.value = i
        opcion.textContent = i
        year.appendChild(opcion)
        
        
    }
}



//filtros por item

function filtrarMarca(auto){
    const {marca} = datosBusqueda
    if(marca){
        return marca===auto.marca
    }
    return auto
 }

 function filtrarYear(auto){
    const {year} = datosBusqueda
    //console.log(typeof year)
    //console.log(typeof auto.year)
    if(year){
        return year===auto.year
    }
    return auto
    
 }

 
 function filtrarMinimo(auto){
    const {minimo} = datosBusqueda
    if(minimo){
        return auto.precio>=minimo
    }
    return auto
    
 }

 function filtrarMaximo(auto){
    const {maximo} = datosBusqueda
    if(maximo){
        return auto.precio<=maximo
    }
    return auto
 }

 function filtrarPuertas(auto){
    const {puertas} = datosBusqueda
    console.log(typeof puertas)
    if(puertas){
        return auto.puertas===puertas
    }
    return auto
 }
 function filtrarTransmision(auto){
    const {transmision} = datosBusqueda
    if(transmision){
        return auto.transmision===transmision
    }
    return auto
 }
 function filtrarColor(auto){
    const {color} = datosBusqueda
    console.log(typeof color)
    if(color){
        return auto.color===color
    }
    return auto
 }

 function noResultado(){
    const mensajeError = document.createElement('p')
        mensajeError.textContent= 'Qué macana! No tenemos un auto con esas características che'
        resultadoHTML.appendChild(mensajeError)
 }