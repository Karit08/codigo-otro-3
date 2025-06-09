// Tenemos un li de productos
const productos = [
  {nombre: "Zapato negro", tipo: "zapato", color: "negro", img: "./taco-negro.jpg"},
  {nombre: "Zapato azul", tipo: "zapato", color: "azul", img: "./taco-azul.jpg"},
  {nombre: "Bota negra", tipo: "bota", color: "negro", img: "./bota-negra.jpg"},
  {nombre: "Bota azul", tipo: "bota", color: "azul", img: "./bota-azul.jpg"},
  {nombre: "Zapato rojo", tipo: "zapato", color: "rojo", img: "./zapato-rojo.jpg"}
];

const listaProductos = document.getElementById("lista-de-productos"); 
// Estaba usando const li = document.getElementsByName("lista-de-productos"),
// pero debería ser document.getElementById("lista-de-productos") para seleccionar un div por su id.

const inputFiltro = document.getElementById("inputFiltro"); 
// El input debería ser seleccionado correctamente con querySelector y usando el selector adecuado
// const $i = document.querySelector('.input');

const botonDeFiltro = document.getElementById("botonFiltro");
// El input debería ser seleccionado correctamente con querySelector y usando el selector adecuado
// const botonDeFiltro = document.querySelector("button");

// Función para mostrar productos en la página
function mostrarProductos(productos) {
  // Limpiar la lista antes de agregar nuevos productos
  listaProductos.innerHTML = "";

  productos.forEach(producto => {
    const productoDiv = document.createElement("div");
    productoDiv.classList.add("producto");

    const titulo = document.createElement("p");
    titulo.classList.add("titulo");
    titulo.textContent = producto.nombre;

    const imagen = document.createElement("img");
    imagen.setAttribute('src', producto.img);
    imagen.setAttribute('alt', producto.nombre);

    productoDiv.appendChild(titulo);
    productoDiv.appendChild(imagen);

    listaProductos.appendChild(productoDiv);
  });
}


// Función para filtrar los productos según el texto ingresado
const filtrado = (productos = [], texto) => {
  return productos.filter(item => item.tipo.includes(texto) || item.color.includes(texto));
};

// Mostrar todos los productos inicialmente
mostrarProductos(productos);

// Evento del botón de filtro
botonDeFiltro.onclick = function () {
  const textoFiltro = inputFiltro.value.trim().toLowerCase();
  if (textoFiltro) {
    const productosFiltrados = filtrado(productos, textoFiltro);
    mostrarProductos(productosFiltrados);
  } else {
    mostrarProductos(productos);
  }
};



// for (let i = 0; i < productos.length; i++) {
//   var d = document.createElement("div")
//   d.classList.add("producto")

//   var ti = document.createElement("p")
//   ti.classList.add("titulo")
//   ti.textContent = productos[i].nombre
  
//   var imagen = document.createElement("img");
//   imagen.setAttribute('src', productos[i].img);

//   d.appendChild(ti)
//   d.appendChild(imagen)

//   li.appendChild(d)
// }
// displayProductos(productos)


// botonDeFiltro.onclick = function() {
//   while (li.firstChild) {
//     li.removeChild(li.firstChild);
//   }

//   const texto = $i.value;
//   console.log(texto);
//   const productosFiltrados = filtrado(productos, texto );

//   for (let i = 0; i < productosFiltrados.length; i++) {
//     var d = document.createElement("div")
//     d.classList.add("producto")
  
//     var ti = document.createElement("p")
//     ti.classList.add("titulo")
//     ti.textContent = productosFiltrados[i].nombre
    
//     var imagen = document.createElement("img");
//     imagen.setAttribute('src', productosFiltrados[i].img);
  
//     d.appendChild(ti)
//     d.appendChild(imagen)
  
//     li.appendChild(d)
//   }
// }

