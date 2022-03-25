console.log('Inicio de programa'); // 1

setTimeout(()=>{
    console.log('Primer timeOut'); // 6
}, 3000);

setTimeout(()=>{
    console.log('Segundo timeOut');// 3
}, 0);

setTimeout(()=>{
    console.log('Tercero timeOut');// 4
}, 0);

console.log('Fin de programa');// 2

setTimeout(()=>{
    console.log('Cuarto timeOut');// 5
}, 1000);