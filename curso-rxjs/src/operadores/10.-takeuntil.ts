import { from, interval, fromEvent, takeUntil, skip, tap } from 'rxjs';




const boton = document.createElement('button')

boton.innerHTML = 'Detener Timer';


document.querySelector('body').append( boton );


const counter$ = interval (100)

// const clickbt$ = fromEvent( boton, 'click');
const clickbt$ = fromEvent( boton, 'click').pipe(
    tap( () => console.log('tap antes del skip')),
    skip(1),
    tap( () => console.log('tap despues del skip')),

)


counter$.pipe(
    takeUntil(clickbt$)
).subscribe({
    next: val => console.log('next', val),
    complete: () => console.log('Complete')
})



