
function generarNumeroAleatorio(bajo, alto) {
    const cararteres = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ01234567#$%&=';
    const longitudContrasena = Math.floor(Math.random() * (alto - bajo + 1)) + bajo;
    let contrasena = '';
    for (let i = 0; i < longitudContrasena; i++) {
        const indiceAleatorio = Math.floor(Math.random() * cararteres.length);
        contrasena += cararteres[indiceAleatorio];


    }
    return contrasena;
}

const nuevaContrasena = generarNumeroAleatorio(8, 10);

console.log(nuevaContrasena);
