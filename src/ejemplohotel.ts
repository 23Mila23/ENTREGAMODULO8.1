/*
//BUCLES
const nombres = ["Ana", "Juan", "Pedro", "Maria"];

const mostrarNombreEnPagina = (nombre: string) => {
  const div = document.getElementById("lista-nombres");
  const parrafo = document.createElement("p");

  parrafo.textContent = nombre;

  div?.appendChild(parrafo);
};

for (let i = 0; i < nombres.length; i++) {
  mostrarNombreEnPagina(nombres[i]);
}

const carrito = [
  {
    tipoProducto: "Camiseta",
    precio: 19.99,
  },
  {
    tipoProducto: "Pantalones",
    precio: 34.99,
  },
  {
    tipoProducto: "Jersey",
    precio: 44.99,
  },
  {
    tipoProducto: "Vaqueros",
    precio: 79.99,
  },
  {
    tipoProducto: "Polo",
    precio: 44.95,
  },
];

const SonLosGastosDeEnvioGratis = () => {
  let total = 0;
  for (let i = 0; i < carrito.length; i++) {
    const producto = carrito[i];
    total += producto.precio;
    if (total > 100) {
      console.log("Vamos a cortar el bucle");
      break;
    }
  }
  return total > 100; // Que pasa si el bucle pasa por el array y nunca llega a 100? Para el bucle al terminar de recorrer y return false
};

const dudaBucle = () => {
  let total = 0;
  for (let i = 0; i < carrito.length && total < 100; i++) {
    total += carrito[i].precio;
  }

  return total > 100;
}; // No entiendo la segunda condicion, si el bucle solo se ejecuta para que no llegue a 100. En el momento que llega a 100, corta el bucle y return true



const reservas = [
  {
    id: 23453,
    precio: 250,
    habitacion: "standard",
    prepago: false,
    completadaConExito: true,
  },
  {
    id: 56456,
    precio: 150,
    habitacion: "superior",
    prepago: false,
    completadaConExito: true,
  },
  {
    id: 43243,
    precio: 550,
    habitacion: "standard",
    prepago: true,
    completadaConExito: false,
  },
  {
    id: 23223,
    precio: 550,
    habitacion: "standard",
    prepago: true,
    completadaConExito: true,
  },
  {
    id: 89232,
    precio: 650,
    habitacion: "superior",
    prepago: true,
    completadaConExito: false,
  },
];

let algunaHaFallado = false;
for (let i = 0; i < reservas.length && !algunaHaFallado; i++) {
  if (!reservas[i].completadaConExito) {
    algunaHaFallado = true;
  }
}

const reservasFallidas = [];
for (let i = 0; i < reservas.length; i++) {
  if (!reservas[i].completadaConExito) {
    reservasFallidas.push(reservas[i]);
  }
}

// Cambiar a habitacion superior, version mutable al original

for (let i = 0; i < reservas.length; i++) {
  if (reservas[i].habitacion === 'standard') {
    reservas[i].habitacion = 'superior';
    break;
  }
}

// Cambiar a habitación superior, version sin mutar el original
let indiceReserva = -1;
for (let i = 0; i < reservas.length; i++) {
  if (reservas[i].habitacion === 'standard') {
    indiceReserva = i;
    break;
  }
}
if (indiceReserva !== -1) {
  const reservaModificada = {
    ...reservas[indiceReserva],
    habitacion: 'superior',
  };
  const nuevoArrayDeReservas = [
    ...reservas.slice(0, indiceReserva),
    reservaModificada,
    ...reservas.slice(indiceReserva + 1),
  ];
  console.log('Reservas modificadas: ', nuevoArrayDeReservas);
} else {
  console.log('No hay reservas estándar');
}

//Descuento opción mutable
for (let i = 0; i < reservas.length; i++) {
  reservas[i].precio = reservas[i].precio * 0.9;
}
console.log('Reservas con descuento: ', reservas);

//Descuento opción inmutable con push
const reservasConDescuento : (number | string | boolean)[] = [];
for (let i = 0; i < reservas.length; i++) {
  const reservaConDescuento  = {
    // No entiendo pk crea otro objeto reservaConDescuento, ¿no podría modificarse el array que hemos declarado fuera del for? ¿Es pk no la hemos definido como let?
    ...reservas[i],
    precio: reservas[i].precio * 0.9,
  };
  reservasConDescuento.push(reservaConDescuento);
}
console.log('Reservas con descuento: ', reservasConDescuento);

//Descuento inmutable con spread operator
let coleccionReservasConDescuento : (number | string | boolean)[] = []; // Para añadir un tipo tenemos que hacer una interfaz y ponerle el tipo: coleccionesReservasConDescuento : Reservas[]
for (let i = 0; i < reservas.length; i++) {
  const reservaConDescuento = {
    ...reservas[i],
    precio: reservas[i].precio * 0.9,
  };
  coleccionReservasConDescuento = [
    ...coleccionReservasConDescuento,
    reservaConDescuento,
  ];
}
console.log('Reservas con descuento: ', reservasConDescuento);

//Pasar arrays como parametro
const edades: number[] = [24, 40, 32, 84, 38];
const pintaEdades = (edadColeccion: number[]) => {
 console.log(edadColeccion);
};
const devuelveArrayPeliculas = (): string[] => {
  return ["El señor de los anillos", "El padrino", "Matrix"];
 };
 

//Tipificar de forma generica un array es mejor:
const nombresB: string[] = ["Juan", "Pedro", "María", "Lucía"];
const numeros: number[] = [1, 2, 3, 4, 5];
const cabezaDeLista = <T>(miArray: T[]): T => {
 return miArray[0];
};
console.log(cabezaDeLista<string>(nombres));
console.log(cabezaDeLista<number>(numeros));

//Insertar elemento al principio y al final
const peliculasOriginal = ["El señor de los anillos", "El padrino"];

const insertarElemento = <T>(miArray: T[], elemento: T, cabeza: boolean): T[] =>
 cabeza ? [elemento, ...miArray] : [...miArray, elemento];

console.log(insertarElemento(peliculasOriginal, "El padrino 2", true)); */
