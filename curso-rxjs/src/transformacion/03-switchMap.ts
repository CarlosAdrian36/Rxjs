

import { debounceTime, fromEvent, map, mergeAll, mergeMap, Observable, pluck, switchMap } from "rxjs";
import { ajax } from "rxjs/ajax";
import { isTemplateExpression } from "typescript";
import { GithubUser } from "../interfaces/github-user.interface";
import { GithubusersResp } from "../interfaces/hithub-users";



//Referencias
const body = document.querySelector('body');
const textinput = document.createElement('input');
const orderList = document.createElement('ol');

body.append( textinput,orderList)

//helpers
const mostrarUsuarios= ( usuarios: GithubUser[] ) => {
    console.log(usuarios)
    orderList.innerHTML='';
    for ( const usuario of usuarios ){
        const li = document.createElement('li');
        const img = document.createElement('img');
        img.src = usuario.avatar_url;

        const anchor= document.createElement('a')
        anchor.href = usuario.html_url
        anchor.text = 'ver pagina';
        anchor.target = '_blank'

        li.append(img);
        li.append(usuario.login + ' ')
        li.append(anchor)

        orderList.append(li)


    }
}
//strams
const input$ = fromEvent<KeyboardEvent>(textinput, 'keyup');

input$.pipe(
    debounceTime<KeyboardEvent>(500),
    // pluck<KeyboardEvent,string>('target','value'),
    map<KeyboardEvent,string> (evento=> evento.target['value']),
    mergeMap<string,Observable<GithubusersResp>>( texto =>  ajax.getJSON(
            `https://api.github.com/search/users?q=${ texto }`
        )),
    map<GithubusersResp,GithubUser[]>(item => item.items )   
)
// .subscribe(mostrarUsuarios );

const url = 'https://httpbin.org/delay/1?arg=';

input$.pipe(
    map ( val => val.target['value']),
    switchMap( texto => ajax.getJSON( url + texto))
).subscribe( console.log )


