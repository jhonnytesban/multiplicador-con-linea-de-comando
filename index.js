const argv = require('yargs')
  .option('b', {
    alias: 'base',
    type: 'number',
    demandOption: true,
    describe: 'Es la base de la tabla de multiplicar'
  })
  .option('l', {
    alias: 'limite',
    type: 'number',
    demandOption: true,
    default: 10,
    describe: 'Es el limite de la tabla de multiplicar'
  })
  .option('v', {
    alias: 'visualizar',
    type: 'boolean',
    demandOption: true,
    default: true,
    describe: 'Es el limite de la tabla de multiplicar'
  })
  .check((argv, options) => {
    if (isNaN(argv.b)) {
      throw new Error("La base tiene que ser un número")
    }
    return true
  })
  .argv
const {multiplicar} = require('./multliplicador/index')


multiplicar(argv.b, argv.l, argv.v)

