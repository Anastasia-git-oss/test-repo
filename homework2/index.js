'use strict'




for (let x = 1; x <= 100; x += 1) {
    if (x % 3 === 0 && x % 5 === 0) {
        console.log('ЛолКек'); 
    } else if (x % 3 === 0) {
        console.log('Лол'); 
    } else if (x % 5 === 0) {
        console.log('Кек');  
    } else {
        console.log(x);  
    };
}

let j = 2;
if (typeof j !== "number") {
    console.log ('Таке чуство шо Бог десь наказує нас за шось');
}
while (j < 20 && j % 2 === 0 ) {
    console.log (j);
    j += 2;
}
 

for ( let j = 2 ; j < 40 ; j++) {
    if ( j % 2 === 0){
        console.log ( j);
    };
    
}