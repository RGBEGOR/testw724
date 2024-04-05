// array con respuestas correctas

let correctas = [1,2,3,1,2];
let opcion_elegida =[];
let cantidad_correctas = 0;

//funcion que selecciona el input de cada pregunta
function respuesta(num_pregunta,seleccionada){
    // guardar la seleccion
    opcion_elegida[num_pregunta] = seleccionada.value;
    // tomar el id y dejarlo seleccionado
    id = "p" + num_pregunta;
    labels = document.getElementById(id).childNodes;
    labels[3].style.backgroundColor = "white";
    labels[5].style.backgroundColor = "white";
    labels[7].style.backgroundColor = "white";

    seleccionada.parentNode.style.backgroundColor = "#cec0fc"
}

//comparar los arreglos para determinar respuestas correctas

function corregir(){
    cantidad_correctas = 0;
    for(i=0; i< correctas.length;i++){
        if(correctas[i] == opcion_elegida[i]){
            cantidad_correctas++;
        }
    }
    document.getElementById("resultado").innerHTML = cantidad_correctas;
}