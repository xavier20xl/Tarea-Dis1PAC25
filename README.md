<!-- # Ejercicios de Programación

## Tarea: Ejercicios de JavaScript (Funciones, Arrays y Objetos)

### Ejercicio 1: Filtrar y Transformar Productos

**Descripción**

Cree una función llamada `aplicarImpuestos` que:
- Reciba un array de objetos (productos con `nombre` y `precio`).
- Filtre los productos con precio mayor a 50.
- Aumente el precio de los productos filtrados agregando un 10% de impuesto.
- Retorne el nuevo array modificado.

**Ejemplo de Entrada**

```javascript
const productos = [
    { nombre: "Camisa", precio: 45 },
    { nombre: "Zapatos", precio: 80 },
];
```

**Ejemplo de Salida**

```javascript
[
    { nombre: 'Zapatos', precio: 88 }
]
```

### Ejercicio 2: Actualizar Stock por ID

**Descripción**

Cree una función llamada `actualizarStock` que:
- Reciba un array de productos (objetos con `id`, `nombre`, y `stock`), un `id`, y un `nuevoStock`.
- Busque el producto con el `id` especificado.
- Si existe, actualice su propiedad `stock` con el `nuevoStock`.
- Retorne el array modificado. Si el producto no existe, retorna `null`.

**Ejemplo de Entrada**

```javascript
const productos = [
    { id: 1, nombre: "Lápiz", stock: 10 },
    { id: 2, nombre: "Cuaderno", stock: 5 },
];
actualizarStock(productos, 2, 20);
```

**Ejemplo de Salida**

```javascript
[
    { id: 1, nombre: "Lápiz", stock: 10 },
    { id: 2, nombre: "Cuaderno", stock: 20 },
]
```

### Ejercicio 3: Contador de Ocurrencias

**Descripción**

Cree una función llamada `contarOcurrencias` que:
- Reciba un array de elementos (strings, números, etc.).
- Retorne un objeto donde las claves sean los elementos del array y los valores sean la cantidad de veces que aparecen.

**Ejemplo de Entrada**

```javascript
const elementos = ["a", "b", "a", "c", "b"];
```

**Ejemplo de Salida**

```javascript
{
    a: 2,
    b: 2,
    c: 1
}
```

### Ejercicio 4: Combinar Datos de Usuarios

**Descripción**

Cree una función llamada `combinarUsuarios` que:
- Reciba dos arrays:
    - `usuarios`: array de objetos con `id` y `nombre`.
    - `detalles`: array de objetos con `id` y propiedades adicionales (ej: `edad`).
- Combine ambos arrays en uno solo, fusionando los objetos que compartan el mismo `id`.

**Ejemplo de Entrada**

```javascript
const usuarios = [
    { id: 1, nombre: "Juan" },
    { id: 2, nombre: "Pedro" }
];
const detalles = [
    { id: 1, edad: 25 },
    { id: 2, edad: 30 }
];
```

**Ejemplo de Salida**

```javascript
[
    { id: 1, nombre: "Juan", edad: 25 },
    { id: 2, nombre: "Pedro", edad: 30 },
]
```

### Ejercicio 5: Reporte de Ventas

**Descripción**

Cree una función llamada `generarReporte` que:
- Reciba un array de objetos de ventas con `producto` y `monto`.
- Retorne un objeto con:
    - `totalVentas`: suma de todos los montos.
    - `promedio`: monto promedio por transacción.
    - `cantidadTransacciones`: número total de ventas.

**Ejemplo de Entrada**

```javascript
const ventas = [
    { producto: "TV", monto: 1000 },
    { producto: "Radio", monto: 200 },
];
```

**Ejemplo de Salida**

```javascript
{
    totalVentas: 1200,
    promedio: 600,
    cantidadTransacciones: 2
}
```

## Instrucciones de entrega

Debe crear un repositorio de Github (público) y subir los 5 ejercicios por separado en él. Debe compartir el enlace en un documento `.txt` en el campus en la fecha solicitada. No se aceptarán cambios en el repositorio posterior a la fecha máxima de entrega. -->
