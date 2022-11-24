import { interval, reduce, take, tap } from 'rxjs';




const numbres = [1,2,3,4,5];

const totalReducer = ( acumulador: number, valoractual: number ) =>{
    return acumulador + valoractual ;
}

const total = numbres.reduce ( totalReducer, 0 );

console.log('total arr', total);


interval(1000).pipe(
    take(4),
    tap (console.log),
    reduce( totalReducer,)
)
.subscribe({
    next: val => console.log('next: ',val),
    complete : () => console.log( 'Complete' )
});





