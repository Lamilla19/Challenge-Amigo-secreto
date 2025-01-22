// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

let amigosSorteo = [];

function agregarAmigo(){
    let nombreParticipante = document.getElementById("amigo").value;
    if(nombreParticipante == "" ){
        alert("Estimado usuario , por favor ingrese un nombre de participante");
    }else{
        amigosSorteo.push(nombreParticipante)
        document.getElementById("amigo").value="";
        console.log(amigosSorteo)
    }
}
