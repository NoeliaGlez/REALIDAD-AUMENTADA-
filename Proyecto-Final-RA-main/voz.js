window.contador=0;          
window.contadorcubogrande=0;
  var SpeechRecognition = SpeechRecognition || webkitSpeechRecognition
  var SpeechGrammarList = SpeechGrammarList || webkitSpeechGrammarList
  var SpeechRecognitionEvent = SpeechRecognitionEvent || webkitSpeechRecognitionEvent

  var arreglovoz = ['Hola ',
  'gracias',
  'Eso es todo por ahora',
  'puedes presentarte',
  'dime tus caracteristicas',
  '¿que eres?',
  'oferta educativa',
  'carreras',
  'yakuin Muéstrame a Iron Cat',
  'yakuin Muéstrame a Iron Man',
  'Muéstrame a Iron Cat',
  'Muéstrame Iron Cat',
  'yakuin muéstrame a IronCat más grande',
  'yakuin Muéstrame a Iron Cat más grande',
  'yakuin Muéstrame Iron Man más grande',
  'Muéstrame a Iron Cat más grande',
  'Muéstrame Iron Cat más grande',
  'yakuin muéstrame a IronCat más pequeño',
  'yakuin Muéstrame ironcat más pequeño',
  'yakuin Muéstrame a Iron Cat más pequeño',
  'yakuin Muéstrame Iron Cat más pequeño',
  'yakuin Haz que Iron Cat desaparezca',
  'yakuin Haz que ironcat desaparezca',
  'yakuin regresa al escenario',
  'yakuin regresa a la escena',
  'yakuin vuelve',
  'yakuin muéstrame la luna',
  'yakuin Muéstrame la luna',
];

var grammar = '#JSGF V1.0; grammar arreglovoz; public <arreglovoz> = ' + arreglovoz.join(' | ') + ' ;'

var recognition = new SpeechRecognition();
var speechRecognitionList = new SpeechGrammarList();
speechRecognitionList.addFromString(grammar, 1);
recognition.grammars = speechRecognitionList;
recognition.continuous = false;           
recognition.lang = 'es-MX';        
recognition.interimResults = false;
recognition.maxAlternatives = 1;

var diagnostic = document.querySelector('#text');  
//var hints = document.querySelector('.hints');  
var vozHTML= '';
arreglovoz.forEach(function(v, i, a){
console.log(v, i);

});
document.onkeydown = function() {
recognition.start();
console.log('Estoy listo para escuchar.');

}       

recognition.onresult = function(event) {            
var voz = event.results[0][0].transcript;
//diagnostic.textContent = 'Dijiste: ' + voz + '.';           
diagnostic.setAttribute("value", "Dijiste: " + voz + ".");
//diagnostic.textContent = 'Dijiste: ' + voz + '.';
bg = voz;
var bg = document.querySelector('text');


//VISUALIZO EN CONSOLA
console.log(bg);
console.log(voz);

function randD(array){
var rand= Math.random()*array.length|0;
var result=array[rand];
return result;
}


    // Interacciones iniciales
    if (voz === 'Hola') {
      console.log("Hola, estas saludando!");
      let utterance = new SpeechSynthesisUtterance('Hola amigo,  te doy la bienvenida al Tecnologico de Tlaxiaco. . Que te gustaria saber...')
      utterance.lang = 'es-MX'
      speechSynthesis.speak(utterance)
    }


    if (voz === 'gracias ') {
      console.log("Estas dando las gracias");
      let utterance = new SpeechSynthesisUtterance('de nada amigo, quieres que te ayude con algo mas?')
      utterance.lang = 'es-MX'
      speechSynthesis.speak(utterance)
    }


    if (voz === 'Eso es todo por ahora') {
      console.log("Hola, estas saludando!");
      let utterance = new SpeechSynthesisUtterance('de nada amigo, siempre es un placer ayudarte.')
      utterance.lang = 'es-MX'
      speechSynthesis.speak(utterance)
    }

    if (voz === 'puedes presentarte') {
      console.log("yakuin se esta presentando!");
      let utterance = new SpeechSynthesisUtterance('¡Hola! Soy Yakuin, un armadillo endémico de la región Mixteca, en Oaxaca, México. Me enorgullece ser la mascota del Tecnológico de Tlaxiaco, ya que represento los valores fundamentales de esta institución.')
      utterance.lang = 'es-MX'
      speechSynthesis.speak(utterance)
    }

    if (voz === 'dime tus caracteristicas') {
      console.log("Hola, estas pregutando!");
      var datos = [' Me verás como un armadillo de color azul, con detalles en blanco y naranja. Llevo con orgullo un escudo con el logotipo del Tecnológico en mi pecho y una gorra de graduación en mi cabeza, porque me encanta representar el espíritu académico y el compromiso con el éxito educativo',
      ];
      var result = randD(datos);
      let utterance = new SpeechSynthesisUtterance(result);
      utterance.lang = 'es-MX'
      speechSynthesis.speak(utterance)
    }

    if (voz === ' ¿que eres?' || voz === ' Qué eres') {
      console.log("Hola, estas preguntando!");
      let utterance = new SpeechSynthesisUtterance('Yakuin es más que una simple mascota, es un símbolo de identidad y orgullo para la comunidad del Tecnológico de Tlaxiaco')
      utterance.lang = 'es-MX'
      speechSynthesis.speak(utterance)
    }
//interaccion con RA         
if(voz === 'yakuin muéstrame a IronCat' || voz === 'yakuin Muéstrame a Iron Cat'  || voz === 'yakuin Muéstrame a Iron Man'  || voz === 'Muéstrame a Iron Cat' || voz === 'Muéstrame Iron Cat'){
console.log("Estas queriendo visualizar el modelo ironcat");

if(contador ==0){
var el = document.querySelector('#avatar');
  el.setAttribute("src", '#Modelo3D');
  let utterance = new SpeechSynthesisUtterance('Ironcat es un modelo basado en el personaje de ciencia ficcion IRONMAN de Marvel, esta fue renderizada por alumnos del instituo tecnologico de tlaxiaco tomando como referencia la imagen compartida por Cameron McEfee en el octodex, la verdadera identidad de Ironcat sigue siendo un misterio. Tienes idea de quien es?')
  utterance.lang = 'es-MX'
  speechSynthesis.speak(utterance)    
}

if (contador ==1){
  var el = document.querySelector('#caja');
  el.setAttribute("src", '#Modelo3D');
  let utterance = new SpeechSynthesisUtterance('Nuevamente se hace presente Ironcat. Dicen que es un famoso y multimillonario personaje que ayuda a compartir proyectos y/o repositorios para elaborar trabajos colaborativos. Aun no sabes quien es?. Por cierto su cabeza se parece a la de un gato justiciero. No, no es BATMAN')
  utterance.lang = 'es-MX'
  speechSynthesis.speak(utterance)
  contador=0;
}
contador++;
console.log(contador);
}

if(voz === 'yakuin muéstrame a ironcat más grande' || voz === 'yakuin Muéstrame a Iron Cat más grande' || voz === 'Muéstrame a Iron Cat más grande' || voz === 'yakuin Muéstrame Iron Cat más grande' || voz === 'Muéstrame Iron Cat más grande'){
console.log("Estas queriendo hacer a ironcat mas grande");             
if(contadorcubogrande ==0){
var el = document.querySelector('#avatar');
  el.setAttribute("scale", '1 1 1');

  let utterance = new SpeechSynthesisUtterance('Ahora Ironcat es más grande pero no me pidas hacerlo de nuevo por que es imposible. ok?')
  utterance.lang = 'es-MX'
  speechSynthesis.speak(utterance)
}

if(contadorcubogrande ==1){
  let utterance = new SpeechSynthesisUtterance('Amigo, Ironcat no es como ANT-MAN hacerlo más grande hará que explote su traje, además este no podrá volar. ¿Quieres ser el causante de que Ironcat no vuele?')
  utterance.lang = 'es-MX'
  speechSynthesis.speak(utterance)
  contadorcubogrande=0;
}
contadorcubogrande++;
}

if(voz === 'yakuin muéstrame a IronCat más pequeño' || voz === 'yakuin Muéstrame ironcat más pequeño' || voz === 'yakuin Muéstrame a IronCat más pequeño' || voz === 'yakuin Muéstrame Iron Cat más pequeño'){
console.log("Estas queriendo a ironcat mas pequeño");
var el = document.querySelector('#avatar');
  el.setAttribute("scale", '0.1 0.1 0.1');

  let utterance = new SpeechSynthesisUtterance('Reduciendo a Ironcat. Ahora Ironcat a vuelto a su tamaño normal para volver a combatir el mal.')
  utterance.lang = 'es-MX'
  speechSynthesis.speak(utterance)
}
if(voz === 'yakuin Haz que ironcat desaparezca' || voz === 'yakuin Haz que Iron Cat desaparezca'){
console.log("Estas queriendo a ironcat transparente");
var el = document.querySelector('#avatar');
  el.setAttribute("opacity", '0.4');

  let utterance = new SpeechSynthesisUtterance('Ironcat a desaparecido, a utilizado nanotecnologia y muchas librerias que ha econtrado en GitHub')
  utterance.lang = 'es-MX'
  speechSynthesis.speak(utterance)
}

if(voz === 'yakuin regresa al escenario'){
console.log("Estas queriendo regresar a yakuin");
var el = document.querySelector('#avatar');
  el.setAttribute("src", '#Modelo3D');            
  el.setAttribute("scale", '0.1 0.1 0.1');
  el.setAttribute("position", '0 -0.25 0');
  el.setAttribute("rotation", '0 0 0');
 
  var es = document.querySelector('#entityID1').removeAttribute('opacity');


  let utterance = new SpeechSynthesisUtterance('Enseguida amigo. auqnue ya me estoy cansando de esto')
  utterance.lang = 'es-MX'
  speechSynthesis.speak(utterance)
 
}

document.addEventListener('DOMContentLoaded', function() {
  // Función para mostrar el video de YouTube relacionado con la oferta educativa
  function mostrarOfertaEducativa() {
    // Enlace del video de YouTube relacionado con la oferta educativa
    const enlaceVideo = 'https://www.youtube.com/embed/Jr9vGSYu6lY';

    // Selecciona el elemento en el que deseas incrustar el video (puedes cambiar el ID si es necesario)
    const contenedorVideo = document.getElementById('videoContainer');

    // Crea un elemento iframe
    const iframe = document.createElement('iframe');

    // Establece los atributos del iframe
    iframe.setAttribute('src', enlaceVideo);
    iframe.setAttribute('width', '560'); // Ancho del video (puedes ajustar según tus necesidades)
    iframe.setAttribute('height', '315'); // Altura del video (puedes ajustar según tus necesidades)
    iframe.setAttribute('frameborder', '0');
    iframe.setAttribute('allow', 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture');
    iframe.setAttribute('allowfullscreen', 'true');

    // Agrega el iframe al contenedor de video
    contenedorVideo.appendChild(iframe);
  }

  // Interacción del usuario
  const voz = ''; // Aquí deberías obtener la voz del usuario

  if (voz === 'oferta educativa') {
    console.log("Mostrando la oferta educativa.");

    // Aquí puedes agregar el código para narrar lo que está sucediendo antes de mostrar la oferta educativa, si lo deseas

    mostrarOfertaEducativa();
  }
});


if(voz === 'realidad muestra un modelo 3D'){
console.log("Estas mostrando un modelo 3D");
var es = document.querySelector('#entityID1');
  es.setAttribute("obj-model", 'obj:url(samus/DolBarriersuit.obj);mtl:url(samus/DolBarriersuit.mtl)');
  es.setAttribute("scale",'.10 .10 .10');
               

  var el = document.querySelector('#caja');
      el.setAttribute("opacity", '0.0');        
                
  var es = document.querySelector('#entityID2').removeAttribute('gltf-model');
  
  let utterance = new SpeechSynthesisUtterance('ya era hora!. ya me estaba aburriendo de los cubos. Aqui esta tu modelo 3D')
  utterance.lang = 'es-MX'
  speechSynthesis.speak(utterance)
}

if(voz === 'realidad muestra un segundo modelo 3D'){
console.log("Estas mostrando un segundo modelo 3D");
var es = document.querySelector('#entityID2');
  es.setAttribute("gltf-model", 'url(llama/scene.gltf)');
                
  var el = document.querySelector('#caja');
      el.setAttribute("opacity", '0.0');       
                
  var es = document.querySelector('#entityID1').removeAttribute('obj-model');

  let utterance = new SpeechSynthesisUtterance('Carlos, mira. Mira, si me preguntas no se cual modelo 3D me gusta mas.')
  utterance.lang = 'es-MX'
  speechSynthesis.speak(utterance)
}

console.log('Confidence: ' + event.results[0][0].confidence);
}


recognition.onspeechend = function() {
recognition.stop();
}

recognition.onnomatch = function(event) {
diagnostic.textContent = "No puedo escucharte claramente, por favor repiteme.";
//diagnostic.textContent = "No puedo escucharte claramente, por favor repiteme.";
}

recognition.onerror = function(event) {
diagnostic.textContent = 'Ocurrio un error al escucharte: ' + event.error;
//diagnostic.textContent = 'Ocurrio un error al escucharte: ' + event.error;
}


