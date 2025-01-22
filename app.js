// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

var amigosSorteo = [];

function agregarAmigo(){
    let nombreParticipante = document.getElementById("amigo").value;
    if(nombreParticipante == "" ){
        alert("Estimado usuario , por favor ingrese un nombre de participante");
    }else{
        amigosSorteo.push(nombreParticipante)
        document.getElementById("amigo").value="";
        actualizarListAmigos()
    }
}

function actualizarListAmigos(){
    const listaAmimgos = document.getElementById("listaAmigos")
    listaAmimgos.innerHTML="";

    amigosSorteo.forEach(amigosregistrados=>{
        const items = document.createElement("li");
        items.textContent = amigosregistrados;
        listaAmimgos.appendChild(items);
    });
}

function sortearAmigo(){
    if(amigosSorteo == ""){
        alert("Aun no hay amigos asignados para realizar el sorteo")
    }else{
        let indiceGanador = Math.floor(Math.random()*amigosSorteo.length)

        let amigoVictorioso = amigosSorteo[indiceGanador]

        let resultado = document.getElementById("resultado");

        resultado.innerHTML=amigoVictorioso;
    }
}
