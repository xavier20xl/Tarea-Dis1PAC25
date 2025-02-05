
//  esta funcion recibe un array de objetos y devuelve un objeto con el total de ventas, el promedio y la cantidad de transacciones
function generarReporte(ventas) { // se define la funcion generarReporte que recibe un array de objetos como parametro
    const totalVentas = ventas.reduce((suma, venta) => suma + venta.monto, 0); // reduce recorre el array de ventas y va acumulando en la variable suma el monto de cada venta
    const cantidadTransacciones = ventas.length; // se obtiene la cantidad de transacciones como la longitud del array de ventas
    const promedio = cantidadTransacciones > 0 ? totalVentas / cantidadTransacciones : 0; // se calcula el promedio como el total de ventas dividido la cantidad de transacciones

    return { // se retorna un objeto con las propiedades totalVentas, promedio y cantidadTransacciones
        totalVentas, 
        promedio,
        cantidadTransacciones
    };
}

// Ejemplo de uso
const ventas = [
    { producto: "TV", monto: 1000 },
    { producto: "Radio", monto: 200 }
];

console.log(generarReporte(ventas)); // { totalVentas: 1200, promedio: 600, cantidadTransacciones: 2 } se imprime un objeto con el total de ventas, el promedio y la cantidad de transacciones
