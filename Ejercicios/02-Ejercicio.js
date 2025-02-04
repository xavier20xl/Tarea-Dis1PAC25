function actualizarStock(productos, id, nuevoStock) {
    // Buscar el producto por ID
    const producto = productos.find(p => p.id === id);

    // Si el producto existe, actualizar el stock
    if (producto) {
        producto.stock = nuevoStock;
        return productos;
    }

    // Si el producto no existe, retornar null
    return null;
}


const productos = [ 
  { id: 1, nombre: "Lápiz", stock: 10 }, 
  { id: 2, nombre: "Cuaderno", stock: 5 }, 
];

console.log(actualizarStock(productos, 2, 20));
