let servicios = []   
let listadoServ = []

const inputServicio = document.querySelector("#inputServicio")
const inputImporte = document.querySelector("#inputImporte")

const btnCargar = document.querySelector("#btnCargar")
const btnCancelar = document.querySelector("#btnCancelar")



const ul = document.querySelector("ul")
const tbody = document.querySelector("tbody")


/////


     function recuperarServicios(){ 
    const servicios = JSON.parse(localStorage.getItem("servicios"))
    let item = ""
     for (servicio of servicios) {
     item += `<li> ${servicio}</li>`
}
     ul.innerHTML = item
}

recuperarServicios()

 function recuperarObjetos(){
     let filas = ""
     const objServ = JSON.parse(localStorage.getItem("ListadoServ"))
     for(elemento of objServ){
          filas += 
          `<tr>
              <td>${elemento.servicio}</td>
              <td>${elemento.importe}</td>
            </tr>
          `
     }
     tbody.innerHTML = filas
 }

 recuperarObjetos()