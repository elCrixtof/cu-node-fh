const fs = require('fs')
const colors = require('colors');

const buildTableFile = async(base = 5, to = 10, listing = false) => {
    try {
        let salida = ``
        let consola = ``
        for(let i=1; i<=to; i++) {
            salida += `${base}`.blue + ` x `.yellow + `${i}`.blue + ` = `.yellow + `${base*i}\n`.blue;
            consola += `${base} x ${i} = ${base*i}\n`;
        }

        if (listing){
            console.log('====================='.rainbow);
            console.log('    Table of'.rainbow, base);
            console.log('====================='.rainbow);
            console.log(salida);
        }
        
        if (!fs.existsSync('./output')){
            fs.mkdirSync('./output');
        }
        
        fs.writeFileSync(`./output/table-${base}.txt`, consola );
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