
class Habitaciones {

    constructor(id,habitacion,precio){

        this.id = id

        this.habitacion = habitacion

        this.precio = precio

    }

}

let habitacion1 = new Habitaciones(1,"premium",10000);
let habitacion2 = new Habitaciones(2,"media,tirando a cheta",20000);
let habitacion3 = new Habitaciones(3,"media,ni  tan tanm,ni muy muy",30000);
let habitacion4 = new Habitaciones(4,"media",40000);
let habitacion5 = new Habitaciones(5,"tranqui,muy tranqui",30000);


let total = 0;



function hotel(){

    

    let viaje = prompt(` por favor elegi una opcion

    

    opcion 1 ${habitacion1.habitacion}

    Opcion 2 ${habitacion2.habitacion}

    Opcion 3 ${habitacion3.habitacion}

    Opcion 4 ${habitacion4.habitacion}

    Opcion 5 ${habitacion5.habitacion}

 
    `)


    switch (viaje) {

        case "1":

            console.log(`Has elegido ${habitacion1.habitacion}`)

            cantidadPersonas(habitacion1.precio)

            break;

        case "2":

            console.log(`Has elegido ${habitacion2.habitacion}`)

            cantidadPersonas(habitacion2.precio)

            break;

        case "3":

            console.log(`Has elegido ${habitacion3.habitacion}`)

            cantidadPersonas(habitacion3.precio)

            break;

        case "4":

            console.log(`Has elegido ${habitacion4.habitacion}`)

            cantidadPersonas(habitacion4.precio)

            break;

        case "5":   
         
            console.log(`has elegido ${habitacion5.habitacion}`)

            cantidadPersonas(habitacion5.precio)

        default:

            console.log("No selecciono ningun destino")

            break;

    }

}



hotel()


function cantidadPersonas(precio){

    let cantidad = prompt(`Ingrese la cantidad de personas que desean hospedarse em nuestro hotel`)

    total = parseInt(cantidad) * parseInt(precio)

    alert(`El total a pagar es de ${total}`)

    cuotas(total)

}



function cuotas(total){



    let cuotas = prompt(`

    Ingrese la cantidad de cuotas que desea pagar

    Digite 1 para un pago en efectivo, descuento del 10%

    Digite 2 para 6 coutas con recargo de 10%

    Digite 3 para 12 cuotas con recargo de 20%`);



    switch (cuotas) {

        case "1":

            alert(`un solo pago en efectivo`)

            alert(`El total a pagar es de ${total - 1.1}`)

            break; 

        case "2":

            alert(`Has elegido 6 cuotas con recargo de 10%`) 

            alert(`El total a pagar es de ${total * 1.1}`)        

            break;

        case "3":

            alert(`Has elegido 12 cuotas con recargo de 20%`)

            alert(`El total a pagar es de ${total * 1.2}`)

            break;

        default:

            alert("No selecciono ninguna opcion")

            break;

    }

 }
const servicios = []

class Servicios {
      constructor (cod, desc, precio) {
          this.codigo = cod
          this.descripcion = desc
          this.precio = precio
      }


}

function cargoServicios() {
servicios.push(new Servicios(101, "alquiler de un automovil" ,3000))
servicios.push(new Servicios(133, "alquiler de un bote" ,4000))
servicios.push(new Servicios(561, "alquiler de caballos" ,800))
servicios.push(new Servicios(431, "guia turistico" ,1000))
servicios.push(new Servicios(261, "servicio de spa" ,3500))
servicios.push(new Servicios(301, "servicios de juegos" ,3500))
servicios.push(new Servicios(241, "servicio de relax" ,3500))

}


cargoServicios()


function filtrarServicios() {
    const aBuscar = prompt("ingrese el servicio o alquiler que necesitas:")
    const respuesta = servicios.filter( servicios => servicios.descripcion.includes(aBuscar))
      if (respuesta != undefined){
          console.table(respuesta)
      }

}

filtrarServicios()