'use strict';

// - impostare una variabile X che sia uguale a 3.
const x=3;

// - impostare una variabile y che sia uguale a 5.
const y=5;

/* creare un "ciclo for" JS per verificare uno alla volta
i numeri da 1 a 100; l'index "i" conterà i numeri da 1 a 100 
prima di fermarsi.
- (i=1) è il contatore che parte da 1.
- (i<=100) è la condizione impostata per la quale "i" è compreso tra 1 e 100.
- (i++) equivale a (i+1) e incrementa "i" di 1 a fine ciclo.)*/
for (let i = 1; i <=100; i++){

    /*all'interno del ciclo impostare una prima condizione IF che 
    contemporaneamente dia resto zero sia facendo la divisione 
    tra "i" e "x" sia tra "i" e "y" . In tal caso dire alla console 
    di mostrare il valore testuale “FizzBuzz”.*/
    if ((i % x === 0)  && (i % y === 0)){
    console.log('FizzBuzz');

    /*all'interno del ciclo impostare una seconda condizione IF che dia 
    resto zero facendo la divisione tra "i" e "x". In tal caso dire 
    alla console di mostrare il valore testuale “Fizz”.*/
}   else if (i % x === 0) {
    console.log('Fizz');

     /*all'interno del ciclo impostare una terza condizione IF che dia 
     resto zero facendo la divisione tra "i" e "y". In tal caso dire 
     alla console di mostrare il valore testuale “Buzz”.*/
}   else if (i % y === 0) {
    console.log('Buzz');

    /*all'interno del ciclo impostare la condizione "else" rimanente 
    che in caso non vengano soddisfatte le precedenti condizioni, 
    mostri semplicemente il valore numerico di "i".*/
}   else
    console.log(i);

}

