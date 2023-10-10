
const fs = require('node:fs')


console.log('Leyendo el primer archivo...')
fs.readFile('./archivo.txt','utf-8', (err,txt) => { // <-- Ejecutas el callback
    console.log(txt)
})



console.log('Hacer cosas mientras lee el archivo')

console.log('Leyendo el segundo archivo...')
fs.readFile('./archivo2.txt','utf-8', (err,txt) => { // <-- Ejecutas el callback
    console.log(txt)
})