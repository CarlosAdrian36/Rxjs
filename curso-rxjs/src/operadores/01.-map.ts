import { range, fromEvent } from 'rxjs';
import { map, mapTo, pluck } from 'rxjs/operators'

// range(1,5).pipe(
//     map <number, string>( val => (val * 10).toString() )
// )
// .subscribe( console.log );


const keyup$ = fromEvent<KeyboardEvent>(document, 'keyup');

const keyupKey$ = keyup$.pipe(
    map( event => event.key)
);

const keyupMapTo$ = keyup$.pipe(
   map(() => '1000000')
);

keyup$.subscribe(console.log)
keyupKey$.subscribe( code => console.log ('map: ', code));
keyupMapTo$.subscribe( code => console.log ('mapTo: ', code));


