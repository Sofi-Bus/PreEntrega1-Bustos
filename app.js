let anioActual = 2022;
let usuario = prompt ("Ingrese su nombre");

while (!usuario ) {

    alert ( "Los datos soliciatados son obligatorios")

    usuario = prompt ("Ingrese su nombre")
    

} 

let flag = true;

let anioNacimiento = Number(prompt ("Ingrese su año de nacimiento"));

while (isNaN (anioNacimiento) || (!anioNacimiento)) { 

    alert ("Debes ingresar numeros enteros") ;
    
    flag = false ; 
    
    anioNacimiento = prompt ("Ingrese su año de nacimiento")


}
 


let edad = anioActual - anioNacimiento;

if (edad >= 18) { alert("Bienvenid@ " + usuario + " tienes " + edad + " años," + " estas habilitado para navegar por esta pagina")

console.log(usuario);
console.log(edad);


function sumarTotal (prod1=0 , prod2=0, prod3=0) {
    
    return prod1 + prod2 + prod3
    
}


let producto1 = Number (prompt ("¿Elija el precio del producto  que desea comprar? \n 1. 100 para Vinos \n 2.150 para Aperitivos  \n 3. 250 para Fernet  ") )
let producto2 = Number (prompt ("¿Elija el precio del producto  que desea comprar? \n 1. 100 para Vinos \n 2.150 para Aperitivos  \n 3. 250 para Fernet  ") )
let producto3 = Number (prompt ("¿Elija el precio del producto  que desea comprar? \n 1. 100 para Vinos \n 2.150 para Aperitivos  \n 3. 250 para Fernet  ") ) ;


let productosComprado = sumarTotal (producto1 + producto2 + producto3);

alert ( "Gastaste " + "$" + productosComprado);



const formaDePAgo = Number (prompt ("Ingrese la forma de pago \n 1 para pago en efectivo 20% de descuento \n 2 para pago con tarjeta de credito hasta 3 pagos con el 10% de recargo"))

const calcularDescuento = productosComprado => productosComprado * 0.20

let descuentoEfectivo = calcularDescuento (productosComprado)

let totalEnefectivo = productosComprado - descuentoEfectivo

const calcularRecargo = productosComprado => productosComprado * 0.10

let recargoConTarjeta = calcularRecargo (productosComprado)

let totalConTarjeta = productosComprado + calcularRecargo (productosComprado)


if (formaDePAgo == 1 ) {
       
        alert ("el descuento es de $ " + descuentoEfectivo )
        alert ("Gastaste en total $ " + totalEnefectivo )
        
} 


 
if (formaDePAgo == 2) {

    alert ("el recargo es de $ " + recargoConTarjeta )
    alert ("Gastaste en total $ " + totalConTarjeta ) 

}

} else { alert ( "No estás habilitado para navegar por esta página ya que no eres mayor de 18 años") 

}
alert ("Muchas gracias por visitar nuestra tienda")












