'use strict';

let x=3;
let y=5;

for (let i = 1; i <=100; i++){
    
    x = (i/3);
    y = (i/5);
    console.log(i,x,y);

    if ((i % x === 0)  && (i % y === 0)){
    console.log('FizzBuzz');

}   else if (i % x === 0) {
    console.log('Fizz');

}   else if (i % y === 0) {
    console.log('Buzz');

}

}

