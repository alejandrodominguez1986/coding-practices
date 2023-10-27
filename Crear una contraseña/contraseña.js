function generateRandomPassword(minLength, maxLength) {
    // 1. Definimos una función llamada 'generateRandomPassword' que toma dos argumentos: 'minLength' y 'maxLength'. 
    //'minLength' seriua el minimo de caracteres que puede tener la contraseña y 'maxLength' seria la maxima cantidad de caracteres a usar en la contraseña.

    const chars = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*';
    // 2. Creamos una cadena llamada 'chars' que contiene todos los caracteres válidos para la contraseña, incluyendo letras minúsculas, mayúsculas, dígitos y símbolos especiales.

    const passwordLength = Math.floor(Math.random() * (maxLength - minLength + 1)) + minLength;
    // 3. Generamos aleatoriamente la longitud de la contraseña dentro del rango especificado utilizando 'Math.random'.
    // La fórmula garantiza que la longitud esté dentro de [minLength, maxLength].

    let password = '';
    // 4. Inicializamos una cadena vacía llamada 'password' para almacenar la contraseña.

    for (let i = 0; i < password.length; i++) {
        // 5. Iniciamos un bucle 'for' que se ejecutará tantas veces como la longitud de la contraseña.
        const randomIndex = Math.floor(Math.random() * chars.length);
        // 6. Generamos un índice aleatorio dentro de la longitud de la cadena 'chars'.
        password += chars[randomIndex];
        // 7. Agregamos el carácter aleatorio correspondiente a la variable 'password' concatenandola .
    }

    return password;
    // 8. Devolvemos la contraseña generada.
}

const newPassword = generateRandomPassword(8, 15);
// 9. Llamamos a la función 'generateRandomPassword' con los valores de longitud mínima (8) y máxima (15) y almacenamos la contraseña generada en 'newPassword'.

console.log(newPassword);
// 10. Imprimimos la contraseña generada en la consola.

