let listaDeGastos = [];
let listaDeIngresos = [];
const lista = document.querySelector('#lista');
let sumaDeGastos = 0;
let saldoRestante = 0;
// FUNCION QUE PIDE INGRESOS Y LO AÑADE A LA LISTA DE INGRESOS
function llamaIngresos(params) {
  let nuevoIngreso = prompt('introduzca sus ingreso mensual');
  if (!isNaN(nuevoIngreso)) {
    listaDeIngresos = nuevoIngreso;
    gastos();
  } else {
    alert('introduzca un dato valido');
  }
}
// FUNCION QUE PIDE GASTOS HASTA QUE PULSAMOS EN CANCELAR Y CREA LA LISTA CON ESOS VALORES,
// TAMBIEN COMPRUEBA QUE EL DATO INTRODUCIDO SEA UN NUMERO
function gastos(params) {
  let nuevoGasto = prompt('introduzca un nuevo gasto');
  if (!isNaN(nuevoGasto)) {
    if (!nuevoGasto) return;
    listaDeGastos.push(nuevoGasto);
    mostrarLista();
    gastos();
  } else {
    alert('introduzca un valor valido');
  }
}
// FUNCION QUE MUESTRA LA LISTA DE GASTOS EN PANTALLA
function mostrarLista(params) {
  let items = '';
  for (let i = 0; i < listaDeGastos.length; i++) {
    items += parseFloat(listaDeGastos[i]) + ' €' + '<br>';
  }
  lista.innerHTML = items;
}
// FUNCION QUE TE DEJA CAMBIAR UN GASTO POR OTRO
function editarGasto(posicion, nuevo) {
  listaDeGastos[posicion] = nuevo;
  mostrarLista();
}
// FUNCION QUE ELIMINA EL GASTO QUE QUERAMOS
function eliminarGasto(posicion, cuantos) {
  listaDeGastos.splice(posicion, cuantos);
  mostrarLista();
}
// FUNCION QUE SUMA LOS GASTOS PARA DESPUES RESTARLO A LOS INGRESOS Y TENER EL BALANCE
function sumarGastos(params) {
  listaDeGastos;
  for (let i = 0; i < listaDeGastos.length; i++) {
    sumaDeGastos += parseFloat(listaDeGastos[i]);
  }
}
// ESTA FUNCION DEBE RESTAR LOS GASTOS AL INGRESO MENSUAL Y MOSTRAR EN PANTALLA EL SALDO ACTUAL
function balance(params) {
  saldoRestante = listaDeIngresos - sumaDeGastos;
  document.write(saldoRestante + ' € te queda de saldo');
}

llamaIngresos();
sumarGastos();
balance();

// editarGasto(2,11);

// eliminarGasto(2,1);
