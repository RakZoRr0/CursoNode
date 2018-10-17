const opciones = {
    base:{
        demand: true,
        alias: 'b'
    },
    hasta:{
        alias: 'h',
        default: 20
    }
}

const argv = require('yargs')

.command('listar', 'Imprime en consola', opciones)
.command('crear', 'Crea la multiplicacion', opciones)
.argv;

module.exports = { argv }