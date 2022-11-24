import { fromEvent, map, Subject, takeWhile } from 'rxjs';

//takeWhile

const click$ = fromEvent<MouseEvent>(document, 'click')

click$.pipe(
    map( ({x, y })=> ({x,y}) ),
    // takeWhile( ({ y }) => y <= 150 ) cierra el observble pero no toma el valor 
    takeWhile( ({ y }) => y <= 150,true ) //cierra el observable, pero si da el valor por el cual se cerro

)
.subscribe({
    next: val => console.log('next: ',val),
    complete: () => console.log('Complete')
})

