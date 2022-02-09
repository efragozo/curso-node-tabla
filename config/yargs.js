
const argv =  require('yargs')
    .option('b', {
        alias: 'base',
        type: 'number',
        describe: 'Añade la base de la tabla a crear', 
        demandOption: true
    })
    .option('l', {
        alias: 'listar',
        type: 'boolean',
        describe: 'Lista la tabla creada',        
        default: false
    })
    .option('h', {
        alias: 'hasta',
        type: 'number',
        describe: 'Cantidad de veces que se multiplica la bases',        
        default: 10
    })
    .check((argv, options) => {

        if (isNaN( argv.b)) {
            throw 'La base tiene que ser un numero';
        }
        if (isNaN( argv.h)) {
            throw 'La cantidad de veces a multiplicar debe ser un numero';
        }
        return true;

    })
    .argv;

    module.exports = argv;