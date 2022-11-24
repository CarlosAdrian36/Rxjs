import { interval, map, mergeMap, of, take, fromEvent, takeUntil } from 'rxjs';


const letras$= of('a','b','c');

letras$.pipe(
    mergeMap((letra)=> interval(1000).pipe(
        map( i => letra + i),
        take(3)
        )
    )
)
// .subscribe({
//     next: val => console.log('next: ',val),
//     complete: () => console.log('Complete')
// });

const mouseDown$ = fromEvent(document,'mousedown');
const mouseUp$ = fromEvent(document,'mouseup');
const interval$ = interval();

mouseDown$.pipe(
    mergeMap( ()=> interval$.pipe(
        takeUntil(mouseUp$)
    ))
).subscribe(console.log)





