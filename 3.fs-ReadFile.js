const { error } = require('node:console')
const fs = require('node:fs')


console.log('Leyendo el primer archivo...')
fs.readFile('./archivo.txt','utf-8', (err,text) => { // <-- Ejecutas el callback
    console.log(txt)
})



console.log('Hacer cosas mientras lee el archivo')

console.log('Leyendo el segundo archivo...')
const txt2 = fs.readFile('./archivo2.txt','utf-8')
fs.readFile('./archivo.txt','utf-8', (err,text) => { // <-- Ejecutas el callback
    console.log(txt2)
})