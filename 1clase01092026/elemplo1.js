alert("se conecto correctamente");
function sumar(){
    
    let num1=parseInt(document.getElementById("num1").value);
    let num2=parseInt(document.getElementById("num2").value);
    let resultado=num1+num2;
    let mostrar=document.getElementById("resultado");
    mostrar.innerHTML="suma="+resultado;
    let mostrar2=document.getElementById("resultado2");
    let matriz= "" ;
    for (let i=0; i<num1; i++){
        for (let j=0; j<num2; j++){
            matriz+="*";
        }
        matriz+="<br>";
    }
    mostrar2.innerHTML=matriz;
}
