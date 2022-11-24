import { delay, forkJoin, interval, of, take } from "rxjs";




const numeros$ = of(1,2,3,4)

const interval$ = interval(1000).pipe(take(3))

const letras$ = of('a','b','c').pipe( delay(3500));

// forkJoin([
//     numeros$,
//     interval$,
//     letras$
// ]).subscribe( console.log)

// forkJoin([
//     numeros$,
//     interval$,
//     letras$
// ]).subscribe( resp => {
//     console.log('numeros: ', resp[0])
//     console.log('intervalo: ', resp[1])
//     console.log('letras: ', resp[2])
// } )
forkJoin([
    numeros$,
    interval$,
    letras$
]).subscribe( resp => {
    console.log('numeros: ', resp[0])
    console.log('intervalo: ', resp[1])
    console.log('letras: ', resp[2])
} )