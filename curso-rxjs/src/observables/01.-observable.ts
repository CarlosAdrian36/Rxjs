import { Observable, Observer } from 'rxjs';

const observer: Observer<any > = {
    next: value => console.log('Siguiente [ next]: ',value),
    error: error => console.warn('error [obs]: ',error),
    complete: () => console.info ('completado [obs]') 

}

const obs$ = new Observable<string>( subs => {

    subs.next('Hola');
    subs.next('Mundo');

    subs.next('Hola');
    subs.next('Mundo');

    //Forzar un error
    // const a = undefined;

    // a.nombre = 'fernando';

    subs.complete(); //deja de emitir valores


 


});
obs$.subscribe( observer );

// obs$.subscribe( 
//     valor => console.log ('next: ',valor),
//     error => console.warn('error: ',error),
//     () => console.info('Completado')
    
//  );