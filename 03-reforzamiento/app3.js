console.log('Inicio de programa'); // 1

setTimeout(()=>{
    console.log('Primer timeOut'); // 5
}, 3000);

setTimeout(()=>{
    console.log('Segundo timeOut');// 2
}, 0);

setTimeout(()=>{
    console.log('Tercero timeOut');// 3
}, 0);

console.log('Fin de programa');// 4

setTimeout(()=>{
    console.log('Cuarto timeOut');// 3
}, 1000);