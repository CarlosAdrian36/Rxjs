
import { throttleTime, distinctUntilChanged, fromEvent, pluck, asyncScheduler } from 'rxjs';





const clicks$=  fromEvent(document, 'click');


clicks$.pipe(
    throttleTime(1000)
) .subscribe(console.log)


//Ejemplo 2

const input = document.createElement('input')

document.querySelector('body').append( input );

const input$= fromEvent( input, 'keyup' );

input$.pipe(
    throttleTime(1000,asyncScheduler,{
        leading: true,
        trailing:true
    }),
    pluck('target','value'),
    distinctUntilChanged()
).subscribe(console.log)


