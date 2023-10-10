const fs = require('node:fs') // <-- Se recomienda poner node: antes del modulo
const stats = fs.statSync('./archivo.txt')

console.log(
    stats.isFile(), // si es un fichero
    stats.isDirectory(), // si es un directorio
    stats.isSymbolicLink(), // si es un enlace Simbólico
    stats.size, // Tamaño en bytes
)