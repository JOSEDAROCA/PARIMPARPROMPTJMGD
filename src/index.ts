import "./styles.css";

let rotulo = document.getElementById("rotulo");
let btnEnv = document.getElementById("btnEnv");

rotulo.innerHTML = "¿Par / Impar? : ";

btnEnv.addEventListener("click", () => {
  let numIngresado: number = Number(prompt("Ingrese un número"));
  while (numIngresado <= 0) {
    numIngresado = Number(prompt("Ingrese otro número (positivo)"));
  }
  
  if (numIngresado % 2 === 0) {
    console.log("El número es par");
  } else if (numIngresado % 2 !== 0) {
    console.log("El número es impar");
  } else (typeof numIngresado === "string" ) {
    console.log("Debe ingresar caracteres numericos");
  }
});
