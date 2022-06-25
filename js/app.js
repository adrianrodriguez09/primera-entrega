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
  location.href = "form.html"
})

 mostrarProductos()

function mostrarProductos(){
stockHabitaciones.forEach(el =>{
    let div = document.createElement('div')
    div.className = 'producto'
    div.innerHTML =  ` <div class="producto">
    <div class="card">
      <div class="card-image">
        <img src="${el.img}">
        <span class="card-title">${el.nombre}</span>
        <a id="boton${el.id}" class="btn-floating halfway-fab waves-effect waves-light "><i
            // class="material-icons">add_shopping_cart</i>></a>
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
}

function mostrarCarrito(habitacionAgregar){

  let div = document.createElement('div')
  div.setAttribute('class','productocarrito')
  div.innerHTML= `
  <p>${habitacionAgregar.nombre}</p>
<p>precio:${habitacionAgregar.precio}</p>
<p>Descripcion:${habitacionAgregar.desc}</p>

  
  `
  contenedorCarritos.appendChild(div)
}

function actualizarCarrito(){
contadorCarrito.innerText = carritoDeCompras.length
precioTotal.innerText = carritoDeCompras.reduce((acc,el)=> acc + el.precio, 0)
}


