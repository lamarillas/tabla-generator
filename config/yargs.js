const argv = require('yargs')
        .options({
            'b': {
                alias: 'base',
                type: 'number',
                demandOption: true
            },
            'l': {
                alias:'listar',
                type: 'boolean',
                demandOption: true,
                default: false
            },
            'h': {
                alias:'hasta',
                type: 'numeric',
                demandOption: true,
                default: 10
            }
        })
        .check((argv, options) => {
            if(isNaN(argv.b)) {
                throw 'La base tiene que ser numerico';
            } else if(isNaN(argv.h)) { 
                throw 'El limite tiene que ser numerico';
            }
            return true;
        })
        .argv;



        module.exports = argv;