const fs = require('fs')

const buildTableFile = async(base = 5) => {
    try {
        console.log('=====================');
        console.log('    Table of', base);
        console.log('=====================');

        let salida = ``;
        for(let i=1; i<=10; i++) {
            salida += `${base} x ${i} = ${base*i}\n`;
        }
        console.log(salida);
        fs.writeFileSync(`table-${base}.txt`, salida );
        // fs.writeFile(`table-${base}.txt`, salida , err => {
        //     if(err) throw err;
        //     console.log(`The file table-${base}.txt has been created`);
        // })
        return `table-${base}.txt`;    
    } catch (error) {
        throw error;
    }
    
}

/*const buildTableFile = (base = 5) => {
    return new Promise((resolve, reject) => {
        console.log('=====================');
        console.log('    Table of', base);
        console.log('=====================');
        let salida = ``;
        for(let i=1; i<=10; i++) {
            salida += `${base} x ${i} = ${base*i}\n`;
        }
        console.log(salida);
        fs.writeFileSync(`table-${base}.txt`, salida );
        // fs.writeFile(`table-${base}.txt`, salida , err => {
        //     if(err) throw err;
        //     console.log(`The file table-${base}.txt has been created`);
        // })
        resolve(`table-${base}.txt`);
    });
}*/

module.exports =  {
    buildTableFile
}