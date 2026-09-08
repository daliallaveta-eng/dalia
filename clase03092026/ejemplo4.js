const productos={
    "monitor": 100,
    "teclado": 50,
    "mouse": 25,
}
let producto=prompt("ingrese un producto");
let cantidad=parseInt(prompt("ingrese la cantidad"));
if(productos[producto]){
    let precio=productos[producto];
    let total=precio*cantidad;
    console.log("Producto: " + producto);
    console.log("Cantidad: " + cantidad);
    console.log("El total a pagar es: " + total);
}