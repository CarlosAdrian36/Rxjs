import { Observable, Observer } from 'rxjs';

const observer: Observer<any > = {
    next: value => console.log('next: ',value),
    error: error => console.warn('error: ',error),
    complete: () => console.info ('completado') 

}

const intervalo$ = new Observable<number>(subs =>{
    //Contador 1,2,3,4,5,6.....
    let cont = 0;

    const interval = setInterval(  () =>{
        //Cada segundo
        cont++;
        subs.next(cont);
        console.log(cont);


    },1000);

    setTimeout(() => {
        subs.complete();
    }, 2500);
    return ()=> {
        clearInterval(interval);
        console.log('intervalo destruido')
    }
})

const subs1 = intervalo$.subscribe( observer);
const subs2 = intervalo$.subscribe( observer);
const subs3 = intervalo$.subscribe( observer);

subs1.add(subs2);
subs2.add(subs3)

setTimeout(() => {
    subs1.unsubscribe()
    // subs1.unsubscribe()
    // subs2.unsubscribe()
    // subs3.unsubscribe()

    console.log('Completado timeout')

}, 6000);