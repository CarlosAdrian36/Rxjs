import { range, tap } from 'rxjs';
import { map } from 'rxjs/operators';

const numeros$ = range (1,5);

numeros$.pipe(
    tap( x => {
        console.log('antes',x);
        return 100;
    }),
    map(  val => val * 10  ),
    tap({
        next: valor => console.log('despues' , valor),
        complete: () => console.log('Completado')    })
)
.subscribe( val => console.log('subs ',val))