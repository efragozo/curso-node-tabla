
const { createFile } = require('./helpers/multiplicar');
const  argv  = require('./config/yargs');

require('colors');

console.clear();


// const [, , arg3] = process.argv;
// const[ , tabla = 5] = arg3.split('=');
//console.log(process.argv);
// console.log(argv);
// console.log('Base: yargs', argv.base);

//const tabla = 5;

createFile( argv.b, argv.l, argv.h )
    .then( nombreArchivo => console.log(nombreArchivo, 'creado'))
    .catch(err => console.log(err));
