function contarOcurrencias(array) {
    return array.reduce((contador, elemento) => {
        contador[elemento] = (contador[elemento] || 0) + 1;
        return contador;
    }, {});
}

// Ejemplo de uso
const elementos = ["a", "b", "a", "c", "b", "b", "b", "b"];
console.log(contarOcurrencias(elementos));
