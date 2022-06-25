btnCargar.addEventListener("click", ()=>{
    const obj = {
        servicio: inputServicio.value,
         importe: inputImporte.value
    }
    listadoServ.push(obj)
    console.log("se agergo un servicio")
    btnCancelar.click()
    localStorage.setItem("ListadoServ", JSON.stringify(listadoServ))
})

btnCancelar.addEventListener("click", ()=>{
inputServicio.value = ""
inputImporte.value = ""
})

function recuperLS (){
servicios = JSON.parse(localStorage.getItem("servicios"))
listadoServ = JSON.parse(localStorage.getItem("ListadoServ"))
}

recuperLS()