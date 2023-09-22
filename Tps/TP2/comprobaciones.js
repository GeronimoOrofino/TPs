
class Persona {

    constructor (nombre){
        this.nombre = nombre;
    }

}
const prohibidos = /^[a-z]*$/


const agregarPersona = (event)=> {
    event.preventDefault();
    
    let nombre = document.getElementById("nombre").value;

    if(prohibidos.test(nombre)){
        let persona1 = new Persona (nombre);
        console.log(persona1);
    }
    else{
        console.log("cambia el nombre porque te mato gil");
    }
    
   
}

const formu = document.getElementById("formulario");
formu.addEventListener("submit", agregarPersona );






/*
function comprobarNombre(){
            
    let n = document.getElementById("nombre").value 

     console.log(n);

    if (n.includes("@") || n.includes("#") ){
        console.log("no debe de haber arrobas en el campo");
    }
    else{
        console.log("el campo esta bien");
    }
    if (document.getElementById("nombre").value.length >20) {
        console.log("no debe de haber 20 letras en el campo");
        alert("el " + "nombre" + " no debe tener mas de 20 letras");
    }
    else{
        console.log("to bien");
    }

}


function comprobarPass(){
    let n = document.getElementById("contra").value 
    console.log(n);
    if (n.length >20 || n.length <9 ) {
        console.log("no debe de haber 20 letras en el campo");
        alert("la contraseña debe tener entre 9 y 20 letras");
    }
    else{
        console.log("to bien");
    }
}

function comprobarCampo(){
    comprobarNombre("nombre");
    comprobarNombre("apellido");
    comprobarPass("contra");
}*/

