const recuperarServicios = ()=>{
    
    const servicios =  JSON.parse(localStorage.getItem("servicios"))
    let item = ""
    for (servicio of servicios) {
        item += `<li>${servicio}</li>`
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
     
     function recuperLS (){
        servicios = JSON.parse(localStorage.getItem("servicios"))
        listadoServ = JSON.parse(localStorage.getItem("ListadoServ"))
        }
        
        recuperLS()