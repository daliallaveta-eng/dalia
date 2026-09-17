const listaEstudiantes = [
  { Nro: 1, Nombre: "Abril", apellido: "Flores", fecNac: "12/12/2000", Edad: 26, genero: "Femenino" },
  { Nro: 2, Nombre: "Mateo", apellido: "Guzmán", fecNac: "05/03/1999", Edad: 27, genero: "Masculino" },
  { Nro: 3, Nombre: "Lucía", apellido: "Pérez", fecNac: "21/07/2001", Edad: 25, genero: "Femenino" },
  { Nro: 4, Nombre: "Santiago", apellido: "Rojas", fecNac: "14/11/2000", Edad: 25, genero: "Masculino" },
  { Nro: 5, Nombre: "Valentina", apellido: "Mendoza", fecNac: "30/01/2002", Edad: 24, genero: "Femenino" },
  { Nro: 6, Nombre: "Diego", apellido: "Fernández", fecNac: "09/09/1998", Edad: 28, genero: "Masculino" },
  { Nro: 7, Nombre: "Camila", apellido: "Ortiz", fecNac: "18/06/2001", Edad: 25, genero: "Femenino" },
  { Nro: 8, Nombre: "Andrés", apellido: "Vargas", fecNac: "25/04/2000", Edad: 26, genero: "Masculino" },
  { Nro: 9, Nombre: "Isabella", apellido: "Castro", fecNac: "02/02/2003", Edad: 23, genero: "Femenino" },
  { Nro: 10, Nombre: "Tomás", apellido: "López", fecNac: "11/08/1999", Edad: 27, genero: "Masculino" }
];
function mostrarEstudiantes()
{
    const datos=document.getElementById("datos");
    datos.innerHTML="";
    let fila="";
    listaEstudiantes.forEach(
     est=>{
        fila=`
           <tr>
              <td>${est.Nro}</td>
              <td>${est.Nombre}</td>
              <td>${est.apellido}</td>
              <td>${est.fecNac}</td>
              <td>${est.Edad}</td>
              <td>${est.genero}</td>
          </tr>
        `;
        datos.innerHTML+=fila;
     }
    )
    
}
mostrarEstudiantes()

 function adicionarEstudiante() {
    const Nombre= document.getElementById("Nombre").value;
    const apellido = document.getElementById("apellido").value;
    const fecNacimiento= document.getElementById("fecNacimiento").value;
    const Edad= document.getElementById("Edad").value;
    const Genero = document.getElementById("Genero").value;
const Nro=listaEstudiantes.length
   listaEstudiantes.push({Nro,Nombre,apellido,fecNacimiento,Edad,Genero}) ;
    mostrarEstudiantes()
      
}


