let carritoDeCompras = []

const contenedorProducto = document.getElementById('contenedor-productos')
const contenedorCarritos = document.getElementById('carrito-contenedor')

const botonTerminar = document.getElementById('terminar')
const finCompra = document.getElementById('fin-compra')

const contadorCarrito = document.getElementById('contadorCarrito')
const precioTotal = document.getElementById('precioTotal')

const link = document.getElementById('link')

const button = document.getElementById('ir')
button.addEventListener("click", ()=> {
  location.href = "registrate.html"
})

 mostrarProductos()

function mostrarProductos(){
stockHabitaciones.forEach(el =>{
    let div = document.createElement('div')
    div.classList.add('producto')
    div.innerHTML =  ` <div class="producto">
    <div class="card">
      <div class="card-image">
        <img src="${el.img}">
        <span class="card-title">${el.nombre}</span>
        <a id="boton${el.id}" class="btn-floating halfway-fab waves-effect waves-light "><i
             class="material-icons">add_shopping_cart</i></a>
      </div>
      <div class="card-content">
        <p>${el.desc}</p>
        <p>${el.tipo}</p>
        <p>$${el.precio}</p>
      </div>
    </div> `
    contenedorProducto.appendChild(div)

     let botonAgregar = document.getElementById(`boton${el.id}`)
    
      botonAgregar.addEventListener('click',()=>{

       agregarAlCarrito(el.id);
     
      })
     


})

}

function agregarAlCarrito(id){

let habitacionAgregar = stockHabitaciones.find(item=>item.id === id)

carritoDeCompras.push(habitacionAgregar)
mostrarCarrito(habitacionAgregar)
actualizarCarrito()
guardarEnLs()
}

function mostrarCarrito(habitacionAgregar){

  let div = document.createElement('div')
  div.setAttribute('class','productocarrito')
  div.innerHTML= `
  <p>nombre:${habitacionAgregar.nombre}</p>
<p>precio:${habitacionAgregar.precio}</p>
<p>Descripcion:${habitacionAgregar.desc}</p>
<button id="eliminar${habitacionAgregar.id}" class="btn btn-primary">borrar</button>
<button id="pagar" class="btn btn-outline-success">pagar</button>
  `
  contenedorCarritos.appendChild(div)

  let btnEliminar = document.getElementById(`eliminar${habitacionAgregar.id}`)
  btnEliminar.addEventListener('click',()=>{
  btnEliminar.parentElement.remove()
  carritoDeCompras = carritoDeCompras.filter(elemento => elemento.id !== habitacionAgregar.id)
  actualizarCarrito()
  })
}

function actualizarCarrito(){
contadorCarrito.innerText = carritoDeCompras.length
precioTotal.innerText = carritoDeCompras.reduce((acc,el)=> acc + el.precio, 0)

}


function guardarEnLs(){
  localStorage.setItem("carritoDeCompras", JSON.stringify(carritoDeCompras))
}

window.onload = function(){
  const storage = JSON.parse(localStorage.getItem("carridoDeCompras"));
  if(storage){
    carritoDeCompras = storage;
    mostrarCarrito()
  }
}


 
 