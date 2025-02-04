// Función que aplica impuestos a los productos con precio mayor a 50
function aplicarImpuestos(productos) {
    // Filtrar productos con precio mayor a 50
    let productosFiltrados = productos.filter(producto => producto.precio > 50);
    
    // Aplicar el 10% de impuesto a los productos filtrados
    let productosConImpuesto = productosFiltrados.map(producto => {
        return {
            nombre: producto.nombre,
            precio: producto.precio * 1.10 // Aumenta el precio en un 10%
        };
    });
    
    // Retornar el nuevo array modificado
    return productosConImpuesto;
}

// Ejemplo de uso
const productos = [ 
    { nombre: "Camisa", precio: 45 },
    { nombre: "Zapatos", precio: 80 }
];

console.log(aplicarImpuestos(productos)); // Salida esperada: [{ nombre: 'Zapatos', precio: 88 }]
