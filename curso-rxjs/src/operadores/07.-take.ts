import { of, take, tap } from "rxjs";


//take
const numeros$ = of(1,2,3,4,5).pipe(tap(console.log));

numeros$.pipe(
    tap ( t => console.log( 'tap', t ) ),
    take(3)
)
.subscribe({
    next: val => console.log('Next: ',val),
    complete: () => console.log('Complete'),
})

