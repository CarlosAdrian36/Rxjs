import { of, from, asyncScheduler } from 'rxjs';

/*
*of = toma argumentos y genera una secuencia 
* from = array, promise,iterable,observable
*/


const observer = {
   next: val=> console.log('next: ',val),
   complete: () => console.log('Complete')
};


const miGenerador = function*() {
   yield 1;
   yield 2;
   yield 3;
   yield 4;
   yield 5;


}

const miIterable = miGenerador();

// for(let id of miIterable){
//     console.log(id)
// }

from(miIterable).subscribe( observer );





// const surc$ =from([1,2,3,4,5]);
// const surc$ =of(...[1,2,3,4,5]);


// const surc$ = from ('fernando')

const surc$ = from( fetch('https://api.github.com/users/klerith') );


// surc$.subscribe(async (resp) => {
//     console.log(resp);
//     const datares= await resp.json()
//     console.log(datares)
// })
// surc$.subscribe( observer );






