import { fromEvent, map, tap } from 'rxjs';
const texto = document.createElement('div')

texto.innerHTML = 
`
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam ligula quam, tincidunt ut est a, elementum aliquam nulla. Nam interdum ipsum et felis imperdiet, vitae pretium diam condimentum. Quisque semper metus fermentum neque blandit, ut sodales nulla pharetra. Morbi laoreet dolor a quam condimentum, nec elementum arcu ultrices. Nullam et metus commodo, cursus diam vitae, iaculis leo. Mauris in eros suscipit, iaculis sapien non, tempus lectus. Mauris sit amet tellus vitae augue aliquet placerat vel varius lacus. Praesent commodo sem ut ultrices viverra. Maecenas venenatis lectus ante, quis pellentesque enim venenatis semper.
<br/>
<br/>
Curabitur at massa feugiat, mollis ipsum sed, maximus risus. Proin a est nec nibh pulvinar imperdiet. Cras odio quam, dictum id velit vel, varius malesuada sem. Praesent mollis placerat odio quis cursus. Nunc odio diam, tempus nec tortor vel, iaculis auctor enim. Fusce eleifend neque a nibh blandit posuere. Etiam aliquam pellentesque odio, a lacinia eros accumsan quis. Cras eget volutpat ligula, in euismod neque. Vivamus ut molestie nisi. Suspendisse aliquet nibh purus, et lobortis libero vestibulum sed. Curabitur nec lacinia erat. Mauris a neque ultricies, sollicitudin sapien sit amet, luctus orci.
<br/>
<br/>
Nullam eget erat viverra arcu laoreet pharetra nec bibendum tellus. Vestibulum in pulvinar eros. Suspendisse sit amet sapien ut leo fringilla scelerisque. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Aenean in lacus at sem elementum hendrerit vitae ac odio. Praesent a pretium justo, ac facilisis elit. Donec posuere nisl rutrum tempus egestas. Nunc scelerisque dolor et ex venenatis faucibus. Mauris at eros ac ligula semper tincidunt sed id nisl.
<br/>
<br/>
Ut nec ornare nunc. Maecenas neque risus, sodales a tortor semper, bibendum vestibulum tortor. Nulla blandit condimentum libero, sed rutrum ante tristique nec. Sed vitae ullamcorper leo. Praesent in nisi faucibus, dapibus neque lobortis, efficitur turpis. Aenean varius, diam vitae vulputate fermentum, mauris lacus vehicula elit, eget lacinia lorem urna sit amet est. Etiam bibendum orci nec ipsum mattis rhoncus. Aenean a sagittis massa, a scelerisque metus. Proin non ligula placerat, lacinia leo nec, finibus ante. Nullam a finibus arcu. Praesent dictum egestas mauris, id semper mi. Integer ante arcu, venenatis vitae consequat id, eleifend a quam. Integer congue ultrices ex, quis laoreet est dictum nec.
<br/>
<br/>
Vivamus at vestibulum nunc. Mauris at dui non felis congue commodo sed eu orci. Praesent a turpis libero. Mauris quis pellentesque velit. In sodales congue augue eu sodales. Praesent tempor neque a dui scelerisque gravida. Ut fringilla pharetra lacus a convallis. Donec maximus ipsum quam, quis ornare neque pharetra vel. Sed volutpat ante ante, non pharetra erat pharetra nec. Etiam rhoncus, nisi sit amet luctus ultrices, justo eros laoreet nunc, vel mattis tellus diam at justo. Nam varius enim ac ante facilisis dignissim.
<br/>
<br/>
Aenean rutrum sem vel rutrum tempus. Morbi at neque quis orci scelerisque sollicitudin. Vestibulum tincidunt pretium massa ac hendrerit. Sed convallis, lorem nec blandit tincidunt, metus eros laoreet ante, et sollicitudin ligula sem vel mauris. Donec posuere dignissim eros, vel auctor metus. Ut a auctor nisi, vitae ullamcorper odio. In a urna nibh. Nunc nibh nunc, hendrerit eu egestas sit amet, sollicitudin sit amet sem. Sed sit amet justo sem. Quisque pretium velit ut lacus accumsan tempor. Duis quis odio et arcu blandit auctor in eu dui. Curabitur blandit risus in neque posuere dapibus. Aenean tellus felis, pellentesque id quam non, faucibus auctor nibh. Aliquam bibendum ullamcorper enim sed accumsan.
<br/>
<br/>
Interdum et malesuada fames ac ante ipsum primis in faucibus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Pellentesque at luctus elit, sed facilisis tortor. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis porttitor ex quis magna varius ornare. Praesent convallis massa ut nibh congue, quis ornare mi faucibus. Nunc eu venenatis justo. Pellentesque lacus risus, hendrerit vitae congue a, consequat in est. Nulla purus odio, mollis ac lobortis id, fringilla ut mi. Sed cursus pharetra velit vitae fringilla. Integer tincidunt, massa ut fermentum sagittis, ante urna placerat enim, porta consectetur augue augue at lectus. Cras leo tortor, fringilla non sollicitudin ut, dictum eget dui. Sed id odio non erat sollicitudin commodo. Cras convallis, orci sit amet vestibulum gravida, sapien leo volutpat nulla, vel molestie justo erat nec felis. Nam maximus velit est, id venenatis nibh scelerisque a. Curabitur quis nisl at ipsum consequat venenatis.
<br/>
<br/>
Nam sit amet sollicitudin elit. Vivamus sodales turpis in libero finibus laoreet. Integer eget tortor in massa dignissim feugiat. Curabitur iaculis lobortis massa, a tincidunt neque posuere sed. Proin ut rutrum dui. Morbi mauris felis, accumsan id purus non, sollicitudin ultricies magna. Vestibulum ut ante facilisis, rhoncus ex id, eleifend lacus. Nulla vitae erat eget sem venenatis mattis. Nam dolor tellus, eleifend eu sodales sed, vulputate nec tellus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Duis finibus lacus ut sagittis eleifend. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vestibulum a nisl tellus. Maecenas sed pellentesque mauris.
<br/>
<br/>
Praesent at neque vel tortor bibendum consectetur vel nec sapien. Mauris id nunc augue. Nam scelerisque augue non leo malesuada euismod. Donec quam nulla, aliquet quis laoreet sed, volutpat sed est. In hac habitasse platea dictumst. Sed tincidunt pellentesque nibh, in scelerisque massa varius id. Donec at quam ut velit tempus egestas.
<br/>
<br/>
Etiam pretium est nec velit feugiat, id blandit tortor maximus. Donec mollis tempor ipsum id faucibus. Nulla eget lacus molestie, ultrices ante et, suscipit mauris. Aliquam at fermentum diam. Mauris eu tellus ac libero malesuada feugiat a sed quam. Maecenas rhoncus fermentum magna, eget volutpat eros euismod commodo. Aenean aliquet elementum lacus at pharetra.
<br/>
<br/>
Quisque tristique viverra nibh, nec vehicula quam accumsan sit amet. Etiam non erat in odio tincidunt rutrum. Nunc sit amet ligula euismod mi vehicula cursus. Nullam quis ullamcorper purus, sed efficitur libero. Mauris vehicula accumsan purus sit amet pretium. Quisque et ipsum sit amet velit gravida fringilla. Sed scelerisque sollicitudin tellus a porttitor. Nam est lectus, imperdiet eget vestibulum dignissim, ullamcorper in ligula. Maecenas rhoncus diam ac enim consectetur, at iaculis velit sollicitudin.
<br/>
<br/>
Proin eget mi sem. Aliquam rhoncus fringilla lorem at scelerisque. Suspendisse potenti. Etiam a ipsum mattis, blandit lorem dapibus, pulvinar lacus. Etiam pharetra odio nec dolor malesuada, eget rhoncus nisl interdum. Donec sapien ex, tincidunt vitae auctor placerat, fermentum in dui. Fusce placerat, nisi et mattis eleifend, quam lectus mollis ligula, et venenatis lectus velit a ex. Praesent consectetur diam in gravida eleifend. Integer scelerisque, lectus ac blandit mollis, ex elit lobortis velit, at sollicitudin lectus ante vel tortor. Praesent volutpat blandit neque, ut pellentesque risus. Proin id lorem non mauris tempor varius. Proin eget mauris nec diam varius pulvinar.
<br/>
<br/>
Phasellus nec augue sit amet mauris cursus mollis. Etiam at euismod lectus. Duis ac velit eu enim efficitur pharetra vestibulum laoreet diam. Fusce accumsan fermentum quam, non cursus enim euismod at. Aliquam elementum, nulla id vulputate bibendum, ex ligula mattis nulla, a commodo diam turpis nec quam. Suspendisse ornare tellus id massa accumsan, nec tincidunt quam pretium. Vestibulum cursus nisl id malesuada euismod. Aenean semper mattis erat et bibendum. Integer varius turpis nec placerat sagittis. Aenean eget nunc ornare, tempor libero at, hendrerit est. Nam congue ex nec erat accumsan, sit amet pharetra est elementum. Sed efficitur, odio sed luctus cursus, ante magna tristique felis, in sollicitudin dolor nisi sed lacus. Morbi consectetur dapibus velit, eu ullamcorper sapien semper ac.
<br/>
<br/>
Nunc consectetur tellus justo, nec tempus nisl finibus ac. Sed lobortis dolor eros, sed hendrerit nulla laoreet sodales. Vivamus tincidunt velit diam, in pretium ligula suscipit non. Nullam egestas purus eros, ac mollis magna ultricies non. Etiam nec tortor maximus, suscipit dui dapibus, posuere arcu. Etiam ac augue non elit placerat posuere in nec orci. Phasellus vehicula dolor non rutrum molestie. Nullam imperdiet, tellus vitae semper tincidunt, ligula magna dictum arcu, sed semper lectus diam sed ante.
<br/>
<br/>
Morbi ligula sem, hendrerit nec ultricies nec, lobortis eu quam. Nam hendrerit vestibulum velit, ac venenatis sem molestie a. Vestibulum non est vel sem porttitor varius. Nullam dolor orci, porttitor ac facilisis sit amet, posuere vitae mauris. Pellentesque sed neque id urna lobortis tincidunt ut sit amet mi. Suspendisse potenti. Interdum et malesuada fames ac ante ipsum primis in faucibus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nulla suscipit laoreet consequat. Nam quam dui, fermentum nec sodales sit amet, porta a magna. Nullam vel facilisis lectus. Suspendisse at diam et justo fringilla hendrerit. Aenean eleifend efficitur turpis, eu aliquam sem fermentum imperdiet. Integer tempor rutrum lacus eu euismod. Etiam pharetra velit a ligula eleifend laoreet.
<br/>
<br/>
In luctus tempor turpis. Aliquam porttitor mauris sed urna maximus cursus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ac auctor felis. Praesent tempor tempor pellentesque. Cras blandit tellus vitae orci tempus volutpat. Nulla venenatis mauris eu tempor semper.
<br/>
<br/>
Maecenas eget viverra ipsum, nec dignissim est. Vivamus finibus, diam at molestie auctor, arcu augue egestas ipsum, sed mattis nunc metus eget nibh. Integer ut interdum elit. Vivamus id lacinia diam. Nullam nec ipsum sed felis tristique rutrum a quis turpis. Mauris accumsan ligula ut ornare vestibulum. Nullam eleifend sapien felis, a laoreet tellus pharetra in. Maecenas pulvinar bibendum massa, quis iaculis eros bibendum a. Vivamus vehicula odio a fringilla efficitur. Vivamus pretium ex sed mollis semper. Etiam imperdiet nulla magna, nec euismod mauris consequat ac. Morbi non maximus elit, ac ultrices ex. Sed semper diam libero, fringilla varius purus sagittis ut. Suspendisse vehicula non ipsum feugiat ultrices. Cras porta lacus ut enim auctor bibendum. Duis sollicitudin sed erat id pretium.
<br/>
<br/>
Nullam laoreet consequat nibh ac rutrum. Mauris nunc sapien, luctus nec orci quis, semper vulputate tellus. Sed euismod, sem consectetur vestibulum placerat, lorem metus convallis quam, non aliquet ligula nulla vel neque. Proin vestibulum dolor quam, at ornare dui pharetra nec. Vestibulum sit amet interdum enim, non convallis ipsum. Etiam sed finibus lorem, nec lacinia enim. Donec eget vehicula augue, eget pellentesque mi. Ut vel dapibus sapien, non facilisis velit. Vestibulum tincidunt vulputate magna, et lobortis augue elementum eget. Sed a congue lectus, et feugiat tellus. Nullam vulputate eu libero sed finibus. In hac habitasse platea dictumst. Fusce gravida pellentesque sollicitudin.
<br/>
<br/>
Vestibulum vestibulum blandit libero. Phasellus pretium tincidunt dictum. Cras rutrum, lacus ut tempor tincidunt, risus ex venenatis neque, sed ultricies odio ex non purus. Etiam eget orci turpis. Mauris pellentesque ipsum a feugiat posuere. Duis eleifend magna purus, non finibus massa laoreet in. Integer lobortis ipsum non urna vulputate pharetra vel ac elit.

Duis malesuada eros id arcu scelerisque, non elementum turpis placerat. Ut mollis tincidunt posuere. Fusce elementum, nisl in facilisis gravida, metus dui porttitor tellus, ut interdum leo libero ac elit. Maecenas odio magna, tincidunt id enim eu, lacinia tincidunt ipsum. Vestibulum consectetur venenatis turpis. Aenean luctus ex eu dui scelerisque varius. Pellentesque sit amet interdum urna. Integer condimentum tincidunt magna quis placerat.
`;

const body = document.querySelector('body')
body.append( texto );

const progresbar = document.createElement('div');

progresbar.setAttribute('class','progress-bar');
body.append( progresbar );

//funcion que haga el caluclo
const calcularPorcentajerScroll = ( event ) =>{
    const {
        scrollTop,
        scrollHeight,
        clientHeight
    } = event.target.documentElement;
    
    return ( scrollTop / (scrollHeight - clientHeight) ) * 100;
}

//Streams;

const scroll$ = fromEvent(document, 'scroll');

// scroll$.subscribe(console.log)

const progress$ = scroll$.pipe(
    // map( event => calcularPorcentajerScroll( event ))
    map( calcularPorcentajerScroll ),
    tap(console.log)

);

progress$.subscribe( porcentaje => {
    progresbar.style.width = `${ porcentaje }%`;
})
