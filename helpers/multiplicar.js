const fs = require('fs');
const colors = require('colors');

// const createFile = ( tabla => {

//     return new Promise( (resolve, reject) => {

//         console.log('==============================');
//         console.log('     Tabla del:', tabla); 
//         console.log('==============================');
//         let salida = '';
//         for (let i = 1; i <= 10; i++) {
           
//            salida += `${tabla} x ${i} = ${i * tabla}\n`;
        
//         }
        
//         fs.writeFileSync(`tabla-${tabla}.txt`, salida);

//         resolve(`Tabla-${tabla}.txt`);

//         console.log(salida);

       
//     })

// })

const createFile = async(tabla, listar, hasta) => {
    
    try {
        
        
        let salida, consola = '';
        for (let i = 1; i <= hasta; i++) {
           
            consola += `${tabla} ${'X'.green} ${i} ${'='.blue} ${i * tabla}\n`;
            salida += `${tabla} X ${i} = ${i * tabla}\n`;
        
        }

        if (listar) {

            console.log('=============================='.green);
            console.log('     Tabla del:'.green, colors.blue(tabla) ); 
            console.log('=============================='.green);
            
            console.log(consola);

        }

        fs.writeFileSync(`./salida/tabla-${tabla}.txt`, salida);

        return `Tabla-${tabla}.txt`.rainbow;

    } catch (error) {
        throw error;
    }
      

}

module.exports = {
    createFile
}
