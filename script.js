const regionesYComunas = {
  "Arica y Parinacota": ["Arica", "Camarones", "Putre", "General Lagos"],
  "Tarapacá": ["Huara", "Camiña", "Colchane", "Pica", "Pozo Almonte", "Alto Hospicio", "Iquique"],
  "Antofagasta": ["Antofagasta", "Mejillones", "Sierra Gorda", "Taltal", "Calama", "Ollagüe", "San Pedro de Atacama", "Tocopilla", "María Elena"],
  "Atacama": ["Copiapó", "Caldera", "Tierra Amarilla", "Chañaral", "Diego de Almagro"],
  "Coquimbo": ["La Serena", "Coquimbo", "Andacollo", "La Higuera", "Paiguano", "Vicuña", "Illapel", "Canela", "Los Vilos", "Salamanca"],
  "Valparaíso": ["Valparaíso", "Viña del Mar", "Concón", "Quilpué", "Villa Alemana", "Casablanca", "San Antonio", "Cartagena", "El Quisco", "El Tabo", "Algarrobo", "Hijuelas", "La Ligua", "Papudo", "Petorca", "Zapallar", "San Felipe", "Los Andes", "Rinconada", "Putaendo", "Santa María"],
  "Región Metropolitana de Santiago": ["Cerrillos", "Cerro Navia", "Conchalí", "El Bosque", "Estación Central", "Huechuraba", "Independencia", "La Cisterna", "La Florida", "La Granja", "La Pintana", "La Reina", "Las Condes", "Lo Barnechea", "Lo Espejo", "Lo Prado", "Macul", "Maipú", "Ñuñoa", "Pedro Aguirre Cerda", "Peñalolén", "Providencia", "Pudahuel", "Quilicura", "Quinta Normal", "Recoleta", "Renca", "San Joaquín", "San Miguel", "San Ramón", "Santiago", "Vitacura"],
  "O'Higgins": ["Rancagua", "Machalí", "Graneros", "Codegua", "Coinco", "Mostazal", "Malloa", "Olivar", "Doñihue", "San Vicente", "Peumo", "Pichidegua", "Las Cabras", "Rengo", "San Fernando", "Chimbarongo", "Lolol", "Nancagua", "Palmilla", "Peralillo", "Placilla", "Pumanque", "Santa Cruz"],
  "Maule": ["Talca", "Constitución", "Curepto", "Empedrado", "Maule", "Pelarco", "Pencahue", "Río Claro", "San Clemente", "San Rafael", "Cauquenes", "Chanco", "Pelluhue", "Linares", "Colbún", "Longaví", "Parral", "Retiro", "San Javier", "Villa Alegre", "Yerbas Buenas"],
  "Ñuble": ["Chillán", "Chillán Viejo", "Bulnes", "Cobquecura", "Coelemu", "Coihueco", "El Carmen", "Ninhue", "Ñiquén", "Pemuco", "Pinto", "Quillón", "Quirihue", "Ránquil", "San Carlos", "San Fabián", "San Ignacio", "San Nicolás", "Treguaco", "Yungay"],
  "Biobío": ["Concepción", "Coronel", "Hualpén", "Hualqui", "Lota", "Penco", "San Pedro de la Paz", "Santa Juana", "Talcahuano", "Tomé", "Chiguayante", "Florida", "Lebu", "Arauco", "Cañete", "Contulmo", "Curanilahue", "Los Álamos", "Tirúa"],
  "Araucanía": ["Temuco", "Carahue", "Cunco", "Curarrehue", "Freire", "Galvarino", "Gorbea", "Lautaro", "Loncoche", "Melipeuco", "Nueva Imperial", "Padre Las Casas", "Perquenco", "Pitrufquén", "Pucón", "Saavedra", "Teodoro Schmidt", "Toltén", "Vilcún", "Villarrica"],
  "Los Ríos": ["Valdivia", "Corral", "Lanco", "Los Lagos", "Máfil", "Mariquina", "Paillaco", "Panguipulli"],
  "Los Lagos": ["Puerto Montt", "Calbuco", "Cochamó", "Fresia", "Frutillar", "Los Muermos", "Llanquihue", "Maullín", "Puerto Varas", "Castro", "Ancud", "Chonchi", "Curaco de Vélez", "Dalcahue", "Puqueldón", "Queilén", "Quellón", "Quemchi", "Quinchao"],
  "Aysén": ["Coihaique", "Lago Verde", "Cisnes", "Guaitecas", "Aysén", "Chile Chico", "Río Ibáñez", "O'Higgins"],
  "Magallanes y la Antártica Chilena": ["Punta Arenas", "Puerto Natales", "Porvenir", "Primavera", "Timaukel", "Laguna Blanca", "Cabo de Hornos", "Antártica"]
};


const regionSelect = document.getElementById('region');
const comunaSelect = document.getElementById('comuna');

for (let region in regionesYComunas) {
  const opcion = document.createElement('option');
  opcion.value = region;
  opcion.textContent = region;
  regionSelect.appendChild(opcion);
}


regionSelect.addEventListener('change', () => {
  comunaSelect.innerHTML = '<option value="">Seleccione Comuna</option>';
  const comunas = regionesYComunas[regionSelect.value] || [];
  comunas.forEach(comuna => {
    const opt = document.createElement('option');
    opt.value = comuna;
    opt.textContent = comuna;
    comunaSelect.appendChild(opt);
  });
});


const telefonoInput = document.getElementById('telefono');
const telefonoHint = document.getElementById('telefonoHint');

telefonoInput.addEventListener('input', () => {
  const valido = /^\+56 9 \d{4} \d{4}$/.test(telefonoInput.value.trim());
  telefonoHint.style.color = valido ? 'green' : '#a26161';
});


const contrasenaInput = document.getElementById('contrasena');
const contrasenaHint = document.getElementById('contrasenaHint');

contrasenaInput.addEventListener('input', () => {
  const valido = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/.test(contrasenaInput.value);
  contrasenaHint.style.color = valido ? 'green' : '#a26161';
});


document.getElementById('registroForm').addEventListener('submit', function (e) {
  e.preventDefault();

  const nombre = document.getElementById('nombreReg').value.trim();
  const correo = document.getElementById('correoReg').value.trim();
  const telefono = telefonoInput.value.trim();
  const edad = parseInt(document.getElementById('edad').value.trim());
  const contrasena = contrasenaInput.value.trim();
  const region = regionSelect.value;
  const comuna = comunaSelect.value;

  if (!nombre || !correo || !telefono || !edad || !contrasena || !region || !comuna) {
    alert('Por favor, completa todos los campos.');
    return;
  }

  if (!/\S+@\S+\.\S+/.test(correo)) {
    alert('Correo electrónico inválido.');
    return;
  }

  if (!/^\+56 9 \d{4} \d{4}$/.test(telefono)) {
    alert('Formato de teléfono incorrecto.');
    return;
  }

  if (isNaN(edad) || edad < 18 || edad > 120) {
    alert('La edad debe estar entre 18 y 120 años.');
    return;
  }

  if (!/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/.test(contrasena)) {
    alert('Contraseña no segura.');
    return;
  }

  alert('¡Registro exitoso! 🎉');
});


const productos = {
  fermentos: [
    {
      nombre: "Kombucha de Feijoa",
      imagen: "imagenes/ingredienteskombuchafeijoa.jpeg",
      descripcion: "Kombucha saborizada naturalmente con feijoa",
      id: "kombucha"
    }
  ],
  pan: [
    {
      nombre: "Pan Ciabatta con Poolish",
      imagen: "imagenes/ciabatta.jpeg",
      descripcion: "Pan rústico con fermentación previa",
      id: "ciabatta"
    },
    {
      nombre: "Pan de Papa",
      imagen: "imagenes/pandepapa.jpeg",
      descripcion: "Suave y dorado, ideal para sandwiches",
      id: "pandepapa"
    }
  ],
  dulces: [
    {
      nombre: "Panqueques Esponjosos",
      imagen: "imagenes/panquequeesponjoso.jpeg",
      descripcion: "Perfectos para un desayuno dulce",
      id: "panquequeesponjoso"
    },
    {
      nombre: "Queque de Zapallo",
      imagen: "imagenes/Quequezapallo.jpeg",
      descripcion: "Humectado y especiado con canela",
      id: "quequezapallo"
    },
    {
      nombre: "Queque Casero",
      imagen: "imagenes/quequecasero.jpeg",
      descripcion: "Sabores de la abuelita",
      id: "quequecasero"
    },
     {
      nombre: "Alfajor Bon o Bon",
      imagen: "imagenes/alfajorbonobon.jpeg",
      descripcion: "Un clásico snack",
      id: "alfajorbob"
    }


  ],
  galletas: [
    {
      nombre: "Galletas de Maní con Chips",
      imagen: "imagenes/galletasmanichipschoco.jpeg",
      descripcion: "Crujientes por fuera, suaves por dentro",
      id: "galletas"
    }
  ]
};



function mostrarProductos(categoria) {
  const contenedor = document.getElementById('contenedor-productos');
  contenedor.innerHTML = ''; 

  if (productos[categoria] && productos[categoria].length > 0) {
    productos[categoria].forEach(prod => {
      const tarjeta = document.createElement('div');
      tarjeta.classList.add('tarjeta-prod');

      tarjeta.innerHTML = `
        <img src="${prod.imagen}" alt="${prod.nombre}" />
        <h4>${prod.nombre}</h4>
        <p>${prod.descripcion}</p>
        <button onclick="agregarAlCarrito('${prod.id}')">Agregar al carrito</button>
        `;

      contenedor.appendChild(tarjeta);
    });

    document.getElementById('productos').style.display = 'block';
    document.getElementById('productos').scrollIntoView({ behavior: 'smooth' });
  } else {
    document.getElementById('productos').style.display = 'none';
  }

  document.getElementById('productos').scrollIntoView({ behavior: 'smooth' });
}

function irAReceta(id) {
  const destino = document.getElementById(id);
  if (destino) {
    destino.scrollIntoView({ behavior: 'smooth' });
    destino.classList.add('resaltado');
    setTimeout(() => destino.classList.remove('resaltado'), 2000);
  }
}

document.getElementById('buscador').addEventListener('input', function () {
  const texto = this.value.toLowerCase().trim();
  const contenedor = document.getElementById('contenedor-productos');
  contenedor.innerHTML = '';

  if (texto === '') {
    document.getElementById('productos').style.display = 'none';
    return;
  }

  let resultados = [];

 
  for (let categoria in productos) {
    productos[categoria].forEach(prod => {
      if (
        prod.nombre.toLowerCase().includes(texto) ||
        prod.descripcion.toLowerCase().includes(texto)
      ) {
        resultados.push(prod);
      }
    });
  }

  if (resultados.length > 0) {
    resultados.forEach(prod => {
      const tarjeta = document.createElement('div');
      tarjeta.classList.add('tarjeta-prod');
      tarjeta.innerHTML = `
        <img src="${prod.imagen}" alt="${prod.nombre}" />
        <h4>${prod.nombre}</h4>
        <p>${prod.descripcion}</p>
      `;
      contenedor.appendChild(tarjeta);
    });
    document.getElementById('productos').style.display = 'block';
  } else {
    contenedor.innerHTML = `<p style="grid-column: 1/-1; text-align:center;">No se encontraron resultados para "${texto}".</p>`;
    document.getElementById('productos').style.display = 'block';
  }
});

let carrito = [];

function agregarAlCarrito(id) {
  let producto;

 
  for (let categoria in productos) {
    producto = productos[categoria].find(p => p.id === id);
    if (producto) break;
  }

  if (producto) {
    carrito.push(producto);
    actualizarCarrito();
  } else {
    console.warn('Producto no encontrado con id:', id);
  }
}

function actualizarCarrito() {
  const lista = document.getElementById('lista-carrito');
  const total = document.getElementById('total-carrito');

  lista.innerHTML = '';

  carrito.forEach((prod, index) => {
    const item = document.createElement('li');
    item.innerHTML = `
      ${prod.nombre}
      <button onclick="eliminarDelCarrito(${index})" style="margin-left: 0.5rem;">✖</button>
    `;
    lista.appendChild(item);
  });

  total.textContent = `Total: ${carrito.length} producto(s)`;
}

function eliminarDelCarrito(indice) {
  carrito.splice(indice, 1);
  actualizarCarrito();
}

function vaciarCarrito() {
  carrito = [];
  actualizarCarrito();
}

const productosDestacados = [

  ...productos.fermentos,
  ...productos.pan,
  ...productos.dulces,
  ...productos.galletas
];

let indiceCarrusel = 0;

const imgCarrusel = document.getElementById('imagen-carrusel');
const nombreCarrusel = document.getElementById('nombre-carrusel');
const btnPrev = document.getElementById('prev-btn');
const btnNext = document.getElementById('next-btn');

function mostrarProductoCarrusel() {
  const producto = productosDestacados[indiceCarrusel];
  imgCarrusel.src = producto.imagen;
  imgCarrusel.alt = producto.nombre;
  nombreCarrusel.textContent = producto.nombre;
}

btnPrev.addEventListener('click', () => {
  indiceCarrusel = (indiceCarrusel - 1 + productosDestacados.length) % productosDestacados.length;
  mostrarProductoCarrusel();
});

btnNext.addEventListener('click', () => {
  indiceCarrusel = (indiceCarrusel + 1) % productosDestacados.length;
  mostrarProductoCarrusel();
});


mostrarProductoCarrusel();

