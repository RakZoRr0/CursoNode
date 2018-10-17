

const argv = require('./config/yargs').argv;
var colors = require('colors');
const {CrearArchivo, ListarArchivos} = require('./multiplicar/multiplica');

let comando = argv._[0];

switch(comando){
    case 'listar':
        ListarArchivos(argv.base)
        .then(archivo => console.log(archivo))
        .catch(e => console.log(e))
    break;
    case 'crear':
        CrearArchivo(argv.base)
        .then(archivo => console.log(colors.green(`archivo creado: ${archivo}`)))
        .catch(e => console.log(e))
    break;
    default: console.log('comando no reconocido'); break;
}


/*
$ git init
$ git status

// Creamos excepcion para no subir algunos archivos
Crear archivo .gitignore

// Agregar archivos con git add
$ git add .
*/


/*
// uso de consola con nodeJS

const argv = require('yargs')
    .command('listar', 'Imprime en consola', {
        base:{
            demand: true,
            alias: 'b'// alias al comando base
        }
    })
    .command('crear', 'Crea la multiplicacion', {
        base:{
            demand: true,
            alias: 'b'// alias al comando base
        },
        hasta:{
            alias: 'h',
            default: 20
        }
    })
    .argv

    const {CrearArchivo, ListarArchivos} = require('./multiplicar/multiplica')

let comando = argv._[0];

switch(comando){
    case 'listar':
        ListarArchivos(argv.base)
        .then(archivo => console.log(archivo))
        .catch(e => console.log(e))
    break;
    case 'crear':
        // const {CrearArchivo} = require('./multiplicar/multiplica')

        CrearArchivo(argv.base)
        .then(archivo => console.log(`archivo creado: ${archivo}`))
        .catch(e => console.log(e))
    break;
}

// let argv2 = process.argv

// console.log(argv.base);
// console.log('hasta', argv.hasta);
*/


/*
const {CrearArchivo} = require('./multiplicar/multiplica')

// let base = 5;
let argv = process.argv
let parametro1 = argv[2]
let parametro2 = argv[3]

let nmbrPrmt1 = parametro1.split('=')[0]
let base = parametro1.split('=')[1]
let nmbrPrmt2 = parametro2.split('=')[0]
let hasta = parametro2.split('=')[1]

console.log(`Base: ${base} - Hasta: ${hasta}`);

CrearArchivo(base)
.then(archivo => console.log(`archivo creado: ${archivo}`))
.catch(e => console.log(e))
// console.log(base[1]);

// Obtenemos todos los datos del sistema
// console.log(process.argv);
*/

/*
CrearArchivo(base)
.then(archivo => console.log(`archivo creado: ${archivo}`))
.catch(e => console.log(e))
*/


/*
// EJERCICIO CON CALLBACK


const fs = require('fs'); // si esta dentro de nuestros documentos, referenciarlo asi:  ./fs
let mensaje = '';

let empleados = [ { id : 1, nombre : 'Oscar' }, { id : 2, nombre : 'Sandra' }, { id : 3, nombre : 'Geral' } ];
let salarios = [ { id : 1, salario : 20000 }, { id : 2, salario : 12000 } ];

let getEmpleado = (id) => {
    return new Promise((resolve, reject) => {
        let empleadosDB = empleados.find(empleados => empleados.id === id)
        if(!empleadosDB){ reject(`No existe un empleado con ID ${id}`); }else{ resolve(null, empleadosDB); }
    });
}

let getSalario = (empleado) => {
    return new Promise((resolve, reject) => {
        let salariosDB = salarios.find(salario => salario.id === empleado.id)

        if(!salariosDB){
            reject(`No existe un salario para el empleado ${empleado.empleado}`)
        }else{
            resolve(null, {
                nombre : empleado.nombre,
                salario : salariosDB.salario,
                id : empleado.id
            })
        }
    });
}

getEmpleado(1).then(empleado => {
    return getSalario(empleado);
})
.then(resp => { mensaje += `El salario de ${resp.nombre} es de $ ${resp.salario}`; })
.catch(err => { mensaje += err; });


fs.writeFile('callback.txt', mensaje, (err) => {
    if(err) throw err;
    console.log('el archivo ha sido creado!');
});
*/


/*
// EJERCICIO PRINCIPAL

let mensaje = '';

let numero_multiplicar = 2
let tablas = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];

for (let i = 0; i < tablas.length; i++) {
    // console.log(`${tablas[i]} x ${numero_multiplicar} = `, tablas[i]*numero_multiplicar);
    // mensaje += tablas[i] + ' x ' + numero_multiplicar + ' = ' + tablas[i]*numero_multiplicar + '\n';
    mensaje += (`${tablas[i]} x ${numero_multiplicar} = ${tablas[i] * numero_multiplicar}\n`);
}

fs.writeFile('mensaje.txt', mensaje, (err) => {
    if(err) throw err;
    console.log('el archivo ha sido creado!');
});
*/