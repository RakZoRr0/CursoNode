const fs = require('fs');

let CrearArchivo = (base, hasta) => {
    return new Promise((resolve, reject) => {
        let data = '';
        
        if(!Number(base)){
            reject(`El valor introducido "${base}" no es un número`)
            return;
        }
        
        for(let i=1; i<= hasta; i++){
            data += (`${base} x ${i} = ${base*i}\n`);
        }
    
        fs.writeFile('tablas/tablas-'+base+'.txt', data, (error) => {
            (error) ? reject(error) : resolve
            console.log(`El archivo tablas-${base}.txt ha sido creado`)
        });
        
    });
}

let ListarArchivos = (base) => {
    return new Promise((resolve, reject) => {
        fs.readFile('tablas/tablas-'+base+'.txt', 'utf-8', (error, data) => {
            (error) ? reject(error) : resolve
            console.log(data);
        });
    });
}

module.exports = {
    CrearArchivo, ListarArchivos
}

/*
const fs = require('fs');

let CrearArchivo = (base) => {
    return new Promise((resolve, reject) => {
        let data = '';
        
        if(!Number(base)){
            reject(`El valor introducido "${base}" no es un número`)
            return;
        }
        
        for(let i=1; i<= 20; i++){
            data += (`${base} x ${i} = ${base*i}\n`);
        }
    
        fs.writeFile('tablas/tablas-2.txt', data, (error) => {
            (error) ? reject(error) : resolve
            console.log(`El archivo tablas-2.txt ha sido creado`)
        });
        
    });
}

module.exports = {
    CrearArchivo
}
*/