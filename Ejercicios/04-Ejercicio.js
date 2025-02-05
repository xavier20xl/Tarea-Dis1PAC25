
// esta funcion recibe dos arrays de objetos y devuelve un array con los objetos combinados
function combinarUsuarios(usuarios, detalles) { // se define la funcion combinarUsuarios que recibe dos arrays de objetos como parametros
    return usuarios.map(usuario => { // map recorre el array de usuarios y devuelve un nuevo array con los objetos combinados
        const detalle = detalles.find(d => d.id === usuario.id); // se busca el objeto en el array de detalles que tenga el mismo id que el usuario actual
        return { ...usuario, ...detalle }; // se retorna un objeto combinado con las propiedades de usuario y detalle
    }); // se cierra el map
}

// Ejemplo de uso
const usuarios = [{ id: 1, nombre: "Juan" }, { id: 2, nombre: "Pedro" }];
const detalles = [{ id: 1, edad: 25 }, { id: 2, edad: 30 }];

console.log(combinarUsuarios(usuarios, detalles));
