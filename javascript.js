let boton1 = document.getElementById('boton1');
boton1.onclick = function() {
    if(document.getElementById('p1').classList.contains('hide')){
     document.getElementById('p1').classList.remove('hide')
     document.getElementById('boton1').innerHTML = "Menos info"
    }else{
     document.getElementById('p1').classList.add('hide')
     document.getElementById('boton1').innerHTML = "Más info"
    }
}

let boton2 = document.getElementById('boton2');
boton2.onclick = function() {
    if(document.getElementById('p2').classList.contains('hide')){
     document.getElementById('p2').classList.remove('hide')
     document.getElementById('boton2').innerHTML = "Menos info"
    }else{
     document.getElementById('p2').classList.add('hide')
     document.getElementById('boton2').innerHTML = "Más info"
    }
}

let boton3 = document.getElementById('boton3');
boton3.onclick = function() {
    if(document.getElementById('p3').classList.contains('hide')){
     document.getElementById('p3').classList.remove('hide')
     document.getElementById('boton3').innerHTML = "Menos info"
    }else{
     document.getElementById('p3').classList.add('hide')
     document.getElementById('boton3').innerHTML = "Más info"
    }
}

/*
Intenté hacer una funcion genérica para reutilizar el código y que solo haya que pasar
como parámetros al elemento que se quiere ocultar/mostrar y el botón que ejecuta la funcionalidad.
A la hora de la implementación no lo pude hacer andar, por lo que quedó el mismo código repetido 3 veces.

function usarBotones(elementoVinculado, boton) {
    if(document.getElementById(elementoVinculado).classList.contains('hide')){
     document.getElementById(elementoVinculado).classList.remove('hide')
     document.getElementById(boton).innerHTML = "Menos info"
    }else{
     document.getElementById(elementoVinculado).classList.add('hide')
     document.getElementById(boton).innerHTML = "Más info"
    }
}
}
*/
