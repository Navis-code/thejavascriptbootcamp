// Nos han encargado un controlador de gastos para una aplicación de gestión de finanzas.

// El controlador debe permitir como mínimo:

// Añadir un gasto
// Mostrar un listado de gastos
// Editar un gasto
// Eliminar un gasto
// Todo esto lo vamos a hacer con JavaScript por supuesto.Como aún no sabemos manipular el DOM(próximo módulo) vamos a hacerlo todo usando la consola del navegador y usando prompt para pedir datos al usuario.

// Hay un par de bonus que puedes hacer:

//     Los datos de los gastos se guardan en el localStorage para que no se pierdan al recargar la página.
// Cuando lo termines puedes incluir también los ingresos y mostrar un balance de los mismos.Nos han encargado un controlador de gastos para una aplicación de gestión de finanzas.

// El controlador debe permitir como mínimo:

//     Añadir un gasto
// Mostrar un listado de gastos
// Editar un gasto
// Eliminar un gasto
// Todo esto lo vamos a hacer con JavaScript por supuesto.Como aún no sabemos manipular el DOM(próximo módulo) vamos a hacerlo todo usando la consola del navegador y usando prompt para pedir datos al usuario.

// Hay un par de bonus que puedes hacer:

//     Los datos de los gastos se guardan en el localStorage para que no se pierdan al recargar la página.
// Cuando lo termines puedes incluir también los ingresos y mostrar un balance de los mismos.

var gastoNumero = 1;
//var opcion = '';


function menu() {
    console.log('Menu:');
    console.log('==================');
    console.log('CONTROL DE GASTOS:');
    console.log('==================');
    console.log("1. Añadir gasto");
    console.log("2. Editar gasto");
    console.log("3. Eliminar gasto");
    console.log("4. Fin");
    return prompt("Qué quieres hacer:");

}



const opcion = menu();

switch (opcion) {
    case '1':
        const nuevoGasto = prompt('¿Qué gasto quieres añadir?');
        if (nuevoGasto === null || nuevoGasto === '') {
            console.log("No has metido gasto ninguno");
        } else {
            localStorage.setItem("Gasto numero ${gastoNumero}", "${nuevoGasto}");
            console.log("Se ha añadido:" + nuevoGasto);
            gastoNumero += gastoNumero;
            menu();
        }

        break;

    case '2':
        for (let numeroKey; numeroKey < localStorage.length; numeroKey++) {
            console.log(localStorage.key(numeroKey), ": ", localStorage.getItem(localStorage.key(numeroKey)));
        }
        const editarGasto = prompt("¿Cuál quieres modificar?");
        if (editarGasto <= localStorage.length) {
            const valorEditado = prompt('¿Qué valor editado quieres meter ahora?');
            localStorage.setItem(localStorage.key(editarGasto), valorEditado);
        }

        break;

    case '3':
        for (let numeroKey; numeroKey < localStorage.length; numeroKey++) {
            console.log(localStorage.key(numeroKey), ": ", localStorage.getItem(localStorage.key(numeroKey)));
        }
        const quitarGasto = prompt("¿Cuál quieres modificar?");
        if (quitarGasto <= localStorage.length) {
            localStorage.removeItem(localStorage.key(quitarGasto));
        }
        break;

    default:
        console.log('Opción no reconocida');
        break;
}