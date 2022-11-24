import { Observable, Observer, Subject } from 'rxjs';

const observer: Observer<any > = {
    next: value => console.log('next: ',value),
    error: error => console.warn('error: ',error),
    complete: () => console.info ('completado') 

}

const intervalo$ =  new Observable<number>(subs =>{
    const IntervalID = setInterval( ()=> subs.next(Math.random() ),1000);
    
    
    return ( ) => {clearInterval( IntervalID)
    console.log(' intervalo destruido')}
});

/*
* 1.- Casteo multiple
* 2.- Tambien es un observer
* 3.- Next,error y complete
*/

const subject$ = new Subject();
const intervalosubject = intervalo$.subscribe( subject$ );



// const sub1 = intervalo$.subscribe( rnd => console.log('subs1', rnd))
// const sub2 = intervalo$.subscribe( rnd => console.log('subs2', rnd))

const sub1 = subject$.subscribe( observer)
const sub2 = subject$.subscribe( observer)


setTimeout( ()=>{

    subject$.next(10);

    subject$.complete();

    intervalosubject.unsubscribe();

},3500 )