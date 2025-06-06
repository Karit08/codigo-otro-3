// Tenemos un li de productos
const productos = [
  {nombre: "Zapato negro", tipo: "zapato", color: "negro", img: "./taco-negro.jpg"},
  {nombre: "Zapato azul", tipo: "zapato", color: "azul", img: "./taco-azul.jpg"},
  {nombre: "Bota negra", tipo: "bota", color: "negro", img: "./bota-negra.jpg"},
  {nombre: "Bota azul", tipo: "bota", color: "azul", img: "./bota-azul.jpg"},
  {nombre: "Zapato rojo", tipo: "zapato", color: "rojo", img: "./zapato-rojo.jpg"}
];

const listaProductos = document.getElementById("lista-de-productos"); // const li = document.getElementsByName("lista-de-productos")
const inputFiltro = document.getElementById("inputFiltro"); // const $i = document.querySelector('.input');
const botonDeFiltro = document.getElementById("botonFiltro");

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