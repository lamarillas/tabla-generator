const { crearArchivo } = require('./helpers/multiplicar');   
const argv = require('./config/yargs');

//const base = 6;
console.clear()


// console.log(process.argv);
// console.log(argv);

//console.log('Base en yargs', argv.base);

crearArchivo(argv.base, argv.l, argv.h)
    .then(nombre => console.log(nombre, ' creado'))
    .catch(err => console.log(err));
