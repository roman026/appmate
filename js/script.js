const $btnInicio = document.getElementById("btnIniciar"),
  $titulo = document.getElementById("titulo1"),
  $numOpcion = document.getElementById("numOpcion"),
  $num1 = document.getElementById("num1"),
  $num2 = document.getElementById("num2"),
  $operador = document.getElementById("operador"),
  $operador1 = document.getElementById("operador1"),
  $resultado = document.getElementById("resultado"),
  $btnNuevo = document.getElementById("btnNuevo"),
  $opcion = document.getElementById("opcion"),
  $palabraOculta = document.getElementById("palabraOculta"),
  $figura = document.getElementById("figura"),
  $practicar = document.getElementById("practicar"),
  $inicio = document.getElementById("inicio"),
  $operacion = document.getElementById("operacion"),
  $imagenNum2 = document.getElementById("imagenNum2"),
  $imagenNum1 = document.getElementById("imagenNum1"),
  $btnSiguiente = document.getElementById("btnSiguiente"),
  $btnRepetir = document.getElementById("btnRepetir"),
  $juego = document.getElementById("juego"),
  $reusltadoImagen = document.getElementById("resultadoImagen"),
  $opcionNumero = document.getElementById("opcion-numero"),
  $imagenes = document.getElementById("imagenes"),
  $home = document.getElementById("home"),
  $btnHome = document.getElementById("btnHome"),
  /******************practicar */
  $pregunta = document.getElementById("pregunta"),
  $inputEl = document.getElementById("input"),
  $puntajeEl = document.getElementById("score"),
  $categoria = document.getElementById("categoria"),
  $resultadoPractica = document.getElementById("resultadoPracitar"),
  $form = document.getElementById("form"),
  $acierto = document.getElementById("acierto"),
  $rpiM = document.getElementById("resultadoImagenesPractica"),
  $rpitextM = document.getElementById("resultadoPracticaImagen"),
  $mal = document.getElementById("mal");

var operadorSelect = "";
var figuraSelect = "";
var numOpcionSelect = "";
var opcionSelect = "";
var num1 = "";
let Victoria = 0;
var imagen = "";

const operacion = () => {
  var operadorSelect = $operacion.value;

  switch (operadorSelect) {
    case "suma":
      $juego.style.display = "block";
      $practicar.style.display = "none";
      suma();
      sumaCambio();
      break;
    case "resta":
      $juego.style.display = "block";
      $practicar.style.display = "none";
      resta();
      restaCambio();
      break;
    case "division":
      $juego.style.display = "block";
      $practicar.style.display = "none";
      division();
      divisionCambio();
      break;
    case "multiplicacion":
      $juego.style.display = "block";
      $practicar.style.display = "none";
      multiplicacion();
      multiplicacionCambio();
      break;
    default:
      break;
  }
};

const practicar = () => {
  operadorSelect = $operacion.value;
  switch (operadorSelect) {
    case "suma":
      $juego.style.display = "none";
      $practicar.style.display = "block";
      practicarSuma();
      break;
    case "resta":
      $juego.style.display = "none";
      $practicar.style.display = "block";
      practicarResta();
      break;
    case "division":
      $juego.style.display = "none";
      $practicar.style.display = "block";
      practicarDivision();
      break;
    case "multiplicacion":
      $juego.style.display = "none";
      $practicar.style.display = "block";
      practicarMultiplicacion();
      break;
    default:
      break;
  }
};

const figura = () => {
  figuraSelect = $figura.value;
  console.log(figuraSelect);
};
const numOpcion = () => {
  numOpcionSelect = $numOpcion.value;
  console.log(numOpcionSelect);
};

const opcion = () => {
  opcionSelect = $opcion.value;
  console.log(opcionSelect);
};

const blocker = () => {
  let letterButtons = document.querySelectorAll(".letra");

  letterButtons.forEach((img) => {
    img.className = "deshabilitado";
    console.log(img);
  });
};
var numInicial = 1;
var num2A = 1;
var resultado = 1;
let incrementador = 1;
var numeroElegido = 1;
let dividendo = 1;
$numOpcion.addEventListener("change", (event) => {
  numeroElegido = event.target.value;
  numeroElegido = parseInt(numeroElegido);
  operadorSelect = $operacion.value;
  switch (operadorSelect) {
    case "suma":
      if (opcionSelect === "aprender") {
        sumaCambio();
      } else {
        numRS = numeroElegido;
        practicarSuma();
      }
      break;
    case "resta":
      restaCambio();
      break;
    case "division":
      if (opcionSelect === "aprender") {
        divisionCambio();
      } else {
        numRD = numeroElegido;
        practicarDivision();
      }
      break;
    case "multiplicacion":
      if (opcionSelect === "aprender") {
        multiplicacionCambio();
      } else {
        num2MR = numeroElegido;
        practicarMultiplicacion();
      }

      break;
    default:
      break;
  }
});

$btnSiguiente.addEventListener("click", () => {
  operadorSelect = $operacion.value;
  switch (operadorSelect) {
    case "suma":
      sumaSiguiente();
      break;
    case "resta":
      restaSiguiente();
      break;
    case "division":
      divisionSiguiente();
      break;
    case "multiplicacion":
      multiplicacionSiguiente();
      break;
    default:
      break;
  }
});

const suma = () => {
  figura();
  numOpcion();
  opcion();

  $num1.innerHTML = `${numeroElegido}`;
  $num2.innerHTML = `${num2A}`;
  resultado = numeroElegido + num2A;
  $resultado.innerHTML = `${resultado}`;

  $reusltadoImagen.innerHTML = `${resultado}<br>`;

  let imagen = document.createElement("img");
  imagen.src = `./img/${figuraSelect}.svg`;
  imagen.className = "letra";
  $imagenNum1.append(imagen);

  const imagen2 = imagen.cloneNode();
  $imagenNum2.append(imagen2);

  const imagen3 = imagen.cloneNode();
  $reusltadoImagen.append(imagen3);

  $btnRepetir.addEventListener("click", () => {
    incrementador = 1;
    $imagenNum2.innerHTML = "";
    resultado = numeroElegido + incrementador;
    $num2.textContent = `${incrementador}`;
    $resultado.textContent = `${resultado}`;
    aDibujarRespuestaSuma();
    /* $reusltadoImagen.innerHTML = `${resultado} <br>`;
    let imagen = document.createElement("img");
    imagen.src = `./img/${figuraSelect}.svg`;
    imagen.className = "letra";
    $reusltadoImagen.append(imagen);
    for (let i = 0; i < incrementador; i++) {
      let imagen = document.createElement("img");
      imagen.src = `./img/${figuraSelect}.svg`;
      imagen.className = "letra";
      $imagenNum2.append(imagen);
    } */
  });

  $resultado.innerHTML = `${resultado}`;
};
const sumaSiguiente = () => {
  if (incrementador <= 9) {
    $imagenNum2.innerHTML = "";
    incrementador++;
    console.log(incrementador);
    $num2.textContent = `${incrementador}`;
    resultado = numeroElegido + incrementador;
    $resultado.innerHTML = `${resultado}`;
    aDibujarRespuestaSuma();
    /*   $reusltadoImagen.innerHTML = `${resultado} <br>`;
    let imagen = document.createElement("img");
    imagen.src = `./img/${figuraSelect}.svg`;
    imagen.className = "letra";
    $reusltadoImagen.append(imagen);
    for (let i = 0; i < incrementador; i++) {
      let imagen = document.createElement("img");
      imagen.src = `./img/${figuraSelect}.svg`;
      imagen.className = "letra";
      $imagenNum2.append(imagen);
    } */
  }
};

const sumaCambio = () => {
  $imagenNum1.innerHTML = "";
  $imagenNum2.innerHTML = "";
  incrementador = 1;
  $num1.innerHTML = `${numeroElegido}`;
  $num2.innerHTML = `${numInicial}`;
  resultado = parseInt(numeroElegido) + numInicial;
  $resultado.innerHTML = `${resultado}`;
  aDibujarRespuestaSuma();

  /*  let imagen2 = document.createElement("img");
  imagen2.src = `./img/${figuraSelect}.svg`;
  imagen2.className = "letra";
  $imagenNum2.append(imagen2);

  $reusltadoImagen.innerHTML = `${resultado} <br>`;
  let imagen3 = document.createElement("img");
  imagen3.src = `./img/${figuraSelect}.svg`;
  imagen3.className = "letra";
  $reusltadoImagen.append(imagen3);

  for (let i = 0; i < parseInt(numeroElegido); i++) {
    let imagen = document.createElement("img");
    imagen.src = `./img/${figuraSelect}.svg`;
    imagen.className = "letra";
    $imagenNum1.append(imagen);
  } */
};
const aDibujarRespuestaSuma = () => {
  $imagenes.innerHTML = "";
  let contenido;
  contenido = document.createElement("div");
  contenido.className = "imagenPracticaRS";
  $imagenes.append(contenido);
  for (let i = 0; i < numeroElegido; i++) {
    let imagen = document.createElement("img");
    imagen.src = `./img/${figuraSelect}.svg`;
    imagen.className = "imagenP";
    contenido.append(imagen);
  }

  let operador = document.createElement("span");
  operador.className = "operadorImagenRS";
  $imagenes.append(operador);

  operador.innerHTML = "+";
  contenido = document.createElement("div");
  contenido.className = "imagenPracticaRS";
  $imagenes.append(contenido);

  for (let i = 0; i < incrementador; i++) {
    let imagen = document.createElement("img");
    imagen.src = `./img/${figuraSelect}.svg`;
    imagen.className = "imagenP";
    contenido.append(imagen);
  }
  let respuestaTotal = document.createElement("span");
  respuestaTotal.className = "resultadoTotal";
  respuestaTotal.innerHTML = `_______ <br> ${resultado}`;
  $imagenes.append(respuestaTotal);
};

let contador = 1;
let minuendo = 1;
const resta = () => {
  figura();
  numOpcion();
  opcion();
  $operador.innerHTML = "-";
  $operador1.innerHTML = "-";

  $num1.innerHTML = `${minuendo}`;
  $num2.innerHTML = `${numeroElegido}`;

  resultado = minuendo - numeroElegido;
  $resultado.innerHTML = `${resultado}`;
  aDibujarRespuestaResta();

  /*  $reusltadoImagen.innerHTML = `${resultado}<br>`;

  let imagen = document.createElement("img");
  imagen.src = `./img/${figuraSelect}.svg`;
  imagen.className = "letra";
  $imagenNum2.append(imagen);

  for (let i = 0; i < minuendo; i++) {
    let imagen2 = document.createElement("img");
    imagen2.src = `./img/${figuraSelect}.svg`;
    imagen2.className = "letra";
    $imagenNum1.append(imagen2);
  }

  const imagen3 = imagen.cloneNode();
  $reusltadoImagen.append(imagen3); */

  $btnRepetir.addEventListener("click", () => {
    contador = 1;
    minuendo = numeroElegido;
    $imagenNum1.innerHTML = "";
    resultado = minuendo - numeroElegido;
    $num1.textContent = `${minuendo}`;
    $resultado.textContent = `${resultado}`;
    aDibujarRespuestaResta();

    /*  $reusltadoImagen.innerHTML = `${resultado} <br>`;
    let imagen = document.createElement("img");
    imagen.src = `./img/${figuraSelect}.svg`;
    imagen.className = "letra";
    $reusltadoImagen.append(imagen);
    for (let i = 0; i < minuendo; i++) {
      let imagen2 = document.createElement("img");
      imagen2.src = `./img/${figuraSelect}.svg`;
      imagen2.className = "letra";
      $imagenNum1.append(imagen2);
    } */
  });

  $resultado.innerHTML = `${resultado}`;
};

const aDibujarRespuestaResta = () => {
  $imagenes.innerHTML = "";
  let contenido;
  contenido = document.createElement("div");
  contenido.className = "imagenPracticaRS";
  $imagenes.append(contenido);
  for (let i = 0; i < minuendo; i++) {
    let imagen = document.createElement("img");
    imagen.src = `./img/${figuraSelect}.svg`;
    imagen.className = "imagenP";
    contenido.append(imagen);
  }

  let operador = document.createElement("span");
  operador.className = "operadorImagenRS";
  $imagenes.append(operador);

  operador.innerHTML = "-";
  contenido = document.createElement("div");
  contenido.className = "imagenPracticaRS";
  $imagenes.append(contenido);

  for (let i = 0; i < numeroElegido; i++) {
    let imagen = document.createElement("img");
    imagen.src = `./img/${figuraSelect}.svg`;
    imagen.className = "imagenP";
    contenido.append(imagen);
  }
  let respuestaTotal = document.createElement("span");
  respuestaTotal.className = "resultadoTotal";
  respuestaTotal.innerHTML = `_______ <br> ${resultado}`;
  $imagenes.append(respuestaTotal);
};
const restaSiguiente = () => {
  if (contador <= 10) {
    contador++;
    minuendo++;
    $num1.textContent = `${minuendo}`;
    resultado = minuendo - parseInt(numeroElegido);
    $resultado.innerHTML = `${resultado}`;
    aDibujarRespuestaResta();

    /*   $reusltadoImagen.innerHTML = `${resultado} <br>`;
    let imagen = document.createElement("img");
    imagen.src = `./img/${figuraSelect}.svg`;
    imagen.className = "letra";
    $reusltadoImagen.append(imagen);

    if (minuendo < 11) {
      for (let i = 0; i < minuendo; i++) {
        let imagen = document.createElement("img");
        imagen.src = `./img/${figuraSelect}.svg`;
        imagen.className = "letra";
        $imagenNum1.append(imagen);
      }
    } else {
      $imagenNum1.innerHTML = `${minuendo} `;
      let imagen = document.createElement("img");
      imagen.src = `./img/${figuraSelect}.svg`;
      imagen.className = "letra";
      $imagenNum1.append(imagen);
    }*/
  }
};

const restaCambio = () => {
  contador = 1;
  switch (numeroElegido) {
    case 2:
      minuendo = 2;
      break;
    case 3:
      minuendo = 3;
      break;
    case 4:
      minuendo = 4;
      break;
    case 5:
      minuendo = 5;
      break;
    case 6:
      minuendo = 6;
      break;
    case 7:
      minuendo = 7;
      break;
    case 8:
      minuendo = 8;
      break;
    case 9:
      minuendo = 9;
      break;
    case 10:
      minuendo = 10;
      break;
    default:
      minuendo = 1;
      break;
  }
  console.log(minuendo);
  $imagenNum1.innerHTML = "";
  $imagenNum2.innerHTML = "";
  $reusltadoImagen.innerHTML = "";
  $num1.innerHTML = `${minuendo}`;
  $num2.innerHTML = `${numeroElegido}`;
  resultado = minuendo - numeroElegido;
  $resultado.innerHTML = `${resultado}`;
  aDibujarRespuestaResta();

  /*  for (let i = 0; i < minuendo; i++) {
    let imagen2 = document.createElement("img");
    imagen2.src = `./img/${figuraSelect}.svg`;
    imagen2.className = "letra";
    $imagenNum1.append(imagen2);
  }
  $reusltadoImagen.innerHTML = `${resultado} <br>`;
  let imagen3 = document.createElement("img");
  imagen3.src = `./img/${figuraSelect}.svg`;
  imagen3.className = "letra";
  $reusltadoImagen.append(imagen3);

  for (let i = 0; i < parseInt(numeroElegido); i++) {
    let imagen = document.createElement("img");
    imagen.src = `./img/${figuraSelect}.svg`;
    imagen.className = "letra";
    $imagenNum2.append(imagen);
  } */
};

const division = () => {
  $num1.innerHTML = "";
  $imagenNum1.innerHTML = "";
  $imagenNum2.innerHTML = "";
  dividendo = numeroElegido;

  figura();
  numOpcion();
  opcion();
  $operador.innerHTML = "÷";
  $operador1.innerHTML = "÷";

  $num1.innerHTML = `${dividendo}`;
  $num2.innerHTML = `${numeroElegido}`;
  resultado = dividendo / numeroElegido;
  $resultado.innerHTML = `${resultado}`;
  aDibujarRespuestaDivision();

  /*  $reusltadoImagen.innerHTML = `${resultado}<br>`;

  let imagen = document.createElement("img");
  imagen.src = `./img/persona.svg`;
  imagen.className = "letra";
  $imagenNum2.append(imagen);

  for (let i = 0; i < incrementador; i++) {
    let imagen2 = document.createElement("img");
    imagen2.src = `./img/${figuraSelect}.svg`;
    imagen2.className = "letra";
    $imagenNum1.append(imagen2);
  }

  let imagen3 = document.createElement("img");
  imagen3.src = `./img/${figuraSelect}.svg`;
  imagen3.className = "letra";
  $reusltadoImagen.append(imagen3); */

  $btnRepetir.addEventListener("click", () => {
    incrementador = 1;
    dividendo = numeroElegido;
    resultado = dividendo / numeroElegido;
    $num1.textContent = `${dividendo}`;
    $resultado.textContent = `${resultado}`;
    aDibujarRespuestaDivision();

    /* $reusltadoImagen.innerHTML = `${resultado} <br>`;
    let imagen = document.createElement("img");
    imagen.src = `./img/${figuraSelect}.svg`;
    imagen.className = "letra";
    $reusltadoImagen.append(imagen);
    for (let i = 0; i < dividendo; i++) {
      let imagen2 = document.createElement("img");
      imagen2.src = `./img/${figuraSelect}.svg`;
      imagen2.className = "letra";
      $imagenNum1.append(imagen2);
    } */
  });

  $resultado.innerHTML = `${resultado}`;
};

const aDibujarRespuestaDivision = () => {
  $imagenes.innerHTML = "";
  let contenido;
  for (let index = 0; index < resultado; index++) {
    contenido = document.createElement("div");
    contenido.className = "imagenPractica";
    $imagenes.append(contenido);

    for (let i = 0; i < numeroElegido; i++) {
      let imagen = document.createElement("img");
      imagen.src = `./img/${figuraSelect}.svg`;
      imagen.className = "imagenP";
      contenido.append(imagen);
    }
  }

  let operador = document.createElement("span");
  operador.className = "operadorImagenRS";
  $imagenes.append(operador);

  operador.innerHTML = "÷";
  contenido = document.createElement("div");
  contenido.className = "imagenPractica";
  $imagenes.append(contenido);

  for (let i = 0; i < numeroElegido; i++) {
    let imagen = document.createElement("img");
    imagen.src = `./img/persona.svg`;
    imagen.className = "imagenP";
    contenido.append(imagen);
  }
  let respuestaTotal = document.createElement("span");
  respuestaTotal.className = "resultadoTotal";
  respuestaTotal.innerHTML = `_______ <br> ${resultado}`;
  $imagenes.append(respuestaTotal);
};

const divisionSiguiente = () => {
  if (incrementador < 10) {
    $imagenNum1.classList.remove("active");
    $imagenNum1.innerHTML = "";
    incrementador++;
    dividendo = dividendo + numeroElegido;
    $num1.textContent = `${dividendo}`;
    resultado = dividendo / numeroElegido;
    $resultado.innerHTML = `${resultado}`;
    aDibujarRespuestaDivision();

    /* $reusltadoImagen.innerHTML = `${resultado} <br>`;
    let imagen = document.createElement("img");
    imagen.src = `./img/${figuraSelect}.svg`;
    imagen.className = "letra";
    $reusltadoImagen.append(imagen);

    if (dividendo <= 10) {
      for (let i = 0; i < dividendo; i++) {
        let imagen = document.createElement("img");
        imagen.src = `./img/${figuraSelect}.svg`;
        imagen.className = "letra";
        $imagenNum1.append(imagen);
      }
    } else {
      $imagenNum1.innerHTML = `${dividendo} <br>`;
      $imagenNum1.classList.add("active");
      let imagen = document.createElement("img");
      imagen.src = `./img/${figuraSelect}.svg`;
      imagen.className = "letra";
      $imagenNum1.append(imagen);
    } */
  }
};

const divisionCambio = () => {
  incrementador = 1;
  switch (numeroElegido) {
    case 2:
      dividendo = 2;
      break;
    case 3:
      dividendo = 3;
      break;
    case 4:
      dividendo = 4;
      break;
    case 5:
      dividendo = 5;
      break;
    case 6:
      dividendo = 6;
      break;
    case 7:
      dividendo = 7;
      break;
    case 8:
      dividendo = 8;
      break;
    case 9:
      dividendo = 9;
      break;
    case 10:
      dividendo = 10;
      break;
    default:
      dividendo = 1;
      break;
  }
  console.log(dividendo);
  $imagenNum1.innerHTML = "";
  $imagenNum2.innerHTML = "";
  $reusltadoImagen.innerHTML = "";
  $imagenNum1.classList.remove("active");

  $num2.innerHTML = `${numeroElegido}`;
  $num1.innerHTML = `${dividendo}`;
  resultado = dividendo / numeroElegido;
  $resultado.innerHTML = `${resultado}`;
  aDibujarRespuestaDivision();

  /* for (let i = 0; i < dividendo; i++) {
    let imagen2 = document.createElement("img");
    imagen2.src = `./img/${figuraSelect}.svg`;
    imagen2.className = "letra";
    $imagenNum1.append(imagen2);
  }

  $reusltadoImagen.innerHTML = `${resultado} <br>`;
  let imagen3 = document.createElement("img");
  imagen3.src = `./img/${figuraSelect}.svg`;
  imagen3.className = "letra";
  $reusltadoImagen.append(imagen3);

  for (let i = 0; i < numeroElegido; i++) {
    let imagen = document.createElement("img");
    imagen.src = `./img/persona.svg`;
    imagen.className = "letra";
    $imagenNum2.append(imagen);
  } */
};

const multiplicacion = () => {
  figura();
  numOpcion();
  opcion();
  $operador.innerHTML = "x";
  $operador1.innerHTML = "x";

  $num1.innerHTML = `${numeroElegido}`;
  $num2.innerHTML = `${num2A}`;
  resultado = numeroElegido * num2A;
  $resultado.innerHTML = `${resultado}`;

  $reusltadoImagen.innerHTML = `${resultado}`;

  let imagen = document.createElement("img");
  imagen.src = `./img/${figuraSelect}.svg`;
  imagen.className = "letra";
  $imagenNum1.append(imagen);

  const imagen2 = imagen.cloneNode();
  $imagenNum2.append(imagen2);

  $btnRepetir.addEventListener("click", () => {
    incrementador = 1;
    $imagenNum2.innerHTML = "";
    resultado = parseInt(numeroElegido) * incrementador;
    $num2.textContent = `${incrementador}`;
    $resultado.textContent = `${resultado}`;
    aDibujarRespuestaMult();

    /* $reusltadoImagen.innerHTML = `${resultado} <br>`;
    let imagen = document.createElement("img");
    imagen.src = `./img/${figuraSelect}.svg`;
    imagen.className = "letra";
    $reusltadoImagen.append(imagen);
    for (let i = 0; i < incrementador; i++) {
      let imagen = document.createElement("img");
      imagen.src = `./img/${figuraSelect}.svg`;
      imagen.className = "letra";
      $imagenNum2.append(imagen);
    } */
  });

  $resultado.innerHTML = `${resultado}`;
};

const multiplicacionSiguiente = () => {
  if (incrementador <= 9) {
    $imagenNum2.innerHTML = "";
    incrementador++;
    $num2.textContent = `${incrementador}`;
    resultado = numeroElegido * incrementador;
    $resultado.innerHTML = `${resultado}`;
    aDibujarRespuestaMult();

    /*  $reusltadoImagen.innerHTML = `${resultado} <br>`;
    let imagen = document.createElement("img");
    imagen.src = `./img/${figuraSelect}.svg`;
    imagen.className = "letra";
    $reusltadoImagen.append(imagen);
    for (let i = 0; i < incrementador; i++) {
      let imagen = document.createElement("img");
      imagen.src = `./img/${figuraSelect}.svg`;
      imagen.className = "letra";
      $imagenNum2.append(imagen);
    } */
  }
};

const multiplicacionCambio = () => {
  $imagenNum1.innerHTML = "";
  $imagenNum2.innerHTML = "";
  incrementador = 1;
  $num1.innerHTML = `${numeroElegido}`;
  $num2.innerHTML = `${numInicial}`;
  resultado = parseInt(numeroElegido) * numInicial;
  $resultado.innerHTML = `${resultado}`;
  aDibujarRespuestaMult();
  /* let imagen2 = document.createElement("img");
  imagen2.src = `./img/${figuraSelect}.svg`;
  imagen2.className = "letra";
  $imagenNum2.append(imagen2);
  $reusltadoImagen.innerHTML = `${resultado} <br> `;
  const imagen3 = imagen2.cloneNode();
  $reusltadoImagen.append(imagen3);

  for (let i = 0; i < parseInt(numeroElegido); i++) {
    let imagen = document.createElement("img");
    imagen.src = `./img/${figuraSelect}.svg`;
    imagen.className = "letra";
    $imagenNum1.append(imagen);
  }*/
};
const aDibujarRespuestaMult = () => {
  $imagenes.innerHTML = "";
  let respuestaTotal;
  let contenido;
  let limite = (numeroElegido * incrementador) / numeroElegido - 1;
  for (let index = 0; index < incrementador; index++) {
    contenido = document.createElement("div");
    contenido.className = "imagenPractica";
    $imagenes.append(contenido);

    for (let i = 0; i < numeroElegido; i++) {
      let imagen = document.createElement("img");
      imagen.src = `./img/${figuraSelect}.svg`;
      imagen.className = "imagenP";
      contenido.append(imagen);
    }

    if (incrementador > 1 && limite > index) {
      let operador = document.createElement("span");
      operador.className = "operadorImagen";
      $imagenes.append(operador);
      operador.innerHTML = "+";
    }
  }
  respuestaTotal = document.createElement("span");
  respuestaTotal.className = "resultadoTotal";
  respuestaTotal.innerHTML = `= <br> ${resultado}`;
  $imagenes.append(respuestaTotal);
};

let puntajeSuma = 0;
let respCorrecta = 0;
let num1S = 0;
let num2S = 0;
let numRS = 1;

/*******Empieza funcion de practicar la Suma */
const practicarSuma = () => {
  $inputEl.value = "";
  num2S = Math.ceil(Math.random() * 10);
  num1S = Math.ceil(Math.random() * numRS);
  puntajeSuma = JSON.parse(localStorage.getItem("puntajeSuma"));

  if (!puntajeSuma) {
    puntajeSuma = 0;
  }

  $puntajeEl.innerText = `Puntuaje: ${puntajeSuma}`;
  $pregunta.innerText = `¿Cuantos es ${num1S} mas ${num2S}? `;

  respCorrecta = num1S + num2S;
  dibujarRespuestaSuma();
};

const dibujarRespuestaSuma = () => {
  $rpiM.innerHTML = "";
  $rpitextM.innerHTML = `El resultado de ${num1S} mas ${num2S} es:`;
  let contenido;
  contenido = document.createElement("div");
  contenido.className = "imagenPracticaRS";
  $rpiM.append(contenido);
  for (let i = 0; i < num1S; i++) {
    let imagen = document.createElement("img");
    imagen.src = `./img/${figuraSelect}.svg`;
    imagen.className = "imagenP";
    contenido.append(imagen);
  }

  let operador = document.createElement("span");
  operador.className = "operadorImagenRS";
  $rpiM.append(operador);

  operador.innerHTML = "+";
  contenido = document.createElement("div");
  contenido.className = "imagenPracticaRS";
  $rpiM.append(contenido);

  for (let i = 0; i < num2S; i++) {
    let imagen = document.createElement("img");
    imagen.src = `./img/${figuraSelect}.svg`;
    imagen.className = "imagenP";
    contenido.append(imagen);
  }
};

let num1R = 0;
let num2R = 0;
let puntajeResta = 0;
/*******Empieza funcion de practicar la Resta */
const practicarResta = () => {
  $inputEl.value = "";
  num1R = Math.ceil(Math.random() * 20);
  num2R = Math.ceil(Math.random() * num1R);

  puntajeResta = JSON.parse(localStorage.getItem("puntajeResta"));

  if (!puntajeResta) {
    puntajeResta = 0;
  }

  $puntajeEl.innerText = `Puntuaje: ${puntajeResta}`;
  $pregunta.innerText = `¿Cuantos es ${num1R} menos ${num2R}? `;

  respCorrecta = num1R - num2R;
  dibujarRespuestaResta();
};

const dibujarRespuestaResta = () => {
  $rpiM.innerHTML = "";
  $rpitextM.innerHTML = `El resultado de ${num1R} menos ${num2R} es:`;
  let contenido;
  contenido = document.createElement("div");
  contenido.className = "imagenPracticaRS";
  $rpiM.append(contenido);
  for (let i = 0; i < num1R; i++) {
    let imagen = document.createElement("img");
    imagen.src = `./img/${figuraSelect}.svg`;
    imagen.className = "imagenP";
    contenido.append(imagen);
  }

  let operador = document.createElement("span");
  operador.className = "operadorImagenRS";
  $rpiM.append(operador);

  operador.innerHTML = "-";
  contenido = document.createElement("div");
  contenido.className = "imagenPracticaRS";
  $rpiM.append(contenido);

  for (let i = 0; i < num2R; i++) {
    let imagen = document.createElement("img");
    imagen.src = `./img/${figuraSelect}.svg`;
    imagen.className = "imagenP";
    contenido.append(imagen);
  }
};

let num1D = 0;
let num2D = 0;
let numRD = 1;
let puntajeDivision = 0;
/*******Empieza funcion de practicar la division*/
const practicarDivision = () => {
  $inputEl.value = "";
  num1D = Math.ceil(Math.random() * 10);
  num2D = Math.ceil(Math.random() * numRD);
  num1D = num1D * num2D;

  /* if (num2R > num1R) {
    num2R = Math.ceil(Math.random() * num1R);
  } */

  puntajeDivision = JSON.parse(localStorage.getItem("puntajeDivision"));

  if (!puntajeDivision) {
    puntajeDivision = 0;
  }

  $puntajeEl.innerText = `Puntuaje: ${puntajeDivision}`;
  $pregunta.innerText = `¿Cuantos es ${num1D} dividido entre ${num2D}? `;

  respCorrecta = num1D / num2D;
  dibujarRespuestaDivision();
};

const dibujarRespuestaDivision = () => {
  $rpiM.innerHTML = "";
  $rpitextM.innerHTML = `El resultado de ${num1D} dividido ${num2D} es:`;
  let contenido;
  for (let index = 0; index < respCorrecta; index++) {
    contenido = document.createElement("div");
    contenido.className = "imagenPractica";
    $rpiM.append(contenido);

    for (let i = 0; i < num2D; i++) {
      let imagen = document.createElement("img");
      imagen.src = `./img/${figuraSelect}.svg`;
      imagen.className = "imagenP";
      contenido.append(imagen);
    }
  }

  let operador = document.createElement("span");
  operador.className = "operadorImagenRS";
  $rpiM.append(operador);

  operador.innerHTML = "÷";
  contenido = document.createElement("div");
  contenido.className = "imagenPractica";
  $rpiM.append(contenido);

  for (let i = 0; i < num2D; i++) {
    let imagen = document.createElement("img");
    imagen.src = `./img/persona.svg`;
    imagen.className = "imagenP";
    contenido.append(imagen);
  }
};

/*******Empieza funcion de practicar multiplicacion */
let puntajeMultiplicacion = 0;
var num1M = 0;
var num2M = 0;
let num1MR = 10;
let num2MR = 10;
const practicarMultiplicacion = () => {
  $inputEl.value = "";
  num2M = Math.ceil(Math.random() * num1MR);
  num1M = Math.ceil(Math.random() * num2MR);

  puntajeMultiplicacion = JSON.parse(
    localStorage.getItem("puntajeMultiplicacion")
  );

  if (!puntajeMultiplicacion) {
    puntajeMultiplicacion = 0;
  }

  $puntajeEl.innerText = `Puntuaje: ${puntajeMultiplicacion}`;
  $pregunta.innerText = `¿Cuantos es ${num1M} mulplicado por ${num2M}? `;

  respCorrecta = num1M * num2M;
  dibujarRespuestaMult();
};

const dibujarRespuestaMult = () => {
  $rpiM.innerHTML = "";
  $rpitextM.innerHTML = `El resultado de ${num1M} x ${num2M} es:`;
  let contenido;
  let limite = (num1M * num2M) / num1M - 1;
  for (let index = 0; index < num2M; index++) {
    contenido = document.createElement("div");
    contenido.className = "imagenPractica";
    $rpiM.append(contenido);

    for (let i = 0; i < num1M; i++) {
      let imagen = document.createElement("img");
      imagen.src = `./img/${figuraSelect}.svg`;
      imagen.className = "imagenP";
      contenido.append(imagen);
    }

    if (num2M > 1 && limite > index) {
      let operador = document.createElement("span");
      operador.className = "operadorImagen";
      $rpiM.append(operador);
      operador.innerHTML = "+";
    }
  }
};

$form.addEventListener("submit", (event) => {
  event.preventDefault();
  const respUsuario = +$inputEl.value;
  console.log(`mi respuesta: ${respUsuario}`);
  console.log(`respuesta correcta: ${respCorrecta}`);
  if (respUsuario === respCorrecta) {
    operadorSelect = $operacion.value;
    switch (operadorSelect) {
      case "suma":
        puntajeSuma++;
        $mal.innerHTML = "¡Muy Bien!";
        $mal.className += "acierto verde";
        updateLocalStorage();
        break;
      case "resta":
        puntajeResta++;
        $mal.innerHTML = "¡Muy Bien!";
        $mal.className += "acierto verde";
        updateLocalStorage();
        break;
      case "division":
        puntajeDivision++;
        $mal.innerHTML = "¡Muy Bien!";
        $mal.className += "acierto verde";
        updateLocalStorage();
        break;
      case "multiplicacion":
        puntajeMultiplicacion++;
        $mal.innerHTML = "¡Muy Bien!";
        $mal.className += "acierto verde";
        updateLocalStorage();
        break;
      default:
        break;
    }
  } else {
    operadorSelect = $operacion.value;
    switch (operadorSelect) {
      case "suma":
        puntajeSuma--;
        $mal.innerHTML = "¡fallaste!";
        $mal.className += "acierto rojo";
        updateLocalStorage();
        break;
      case "resta":
        puntajeResta--;
        $mal.innerHTML = "¡fallaste!";
        $mal.className += "acierto rojo";
        updateLocalStorage();
        break;
      case "division":
        puntajeDivision--;
        $mal.innerHTML = "¡fallaste!";
        $mal.className += "acierto rojo";
        updateLocalStorage();
        break;
      case "multiplicacion":
        puntajeMultiplicacion--;
        $mal.innerHTML = "¡fallaste!";
        $mal.className += "acierto rojo";
        updateLocalStorage();
        break;
      default:
        break;
    }
  }
  setTimeout(function () {
    $acierto.className = "";
    $mal.className = "";
  }, 800);
});

const updateLocalStorage = () => {
  operadorSelect = $operacion.value;
  switch (operadorSelect) {
    case "suma":
      localStorage.setItem("puntajeSuma", JSON.stringify(puntajeSuma));
      break;
    case "resta":
      localStorage.setItem("puntajeResta", JSON.stringify(puntajeResta));
      break;
    case "division":
      localStorage.setItem("puntajeDivision", JSON.stringify(puntajeDivision));
      break;
    case "multiplicacion":
      localStorage.setItem(
        "puntajeMultiplicacion",
        JSON.stringify(puntajeMultiplicacion)
      );
      break;
    default:
      break;
  }

  practicar();
};

/*********Empiieza la aplicacion */
const empezar = () => {
  operacion();
};

/*****Escucha el cambio de aprender y practicar */
$opcion.addEventListener("change", (event) => {
  opcionSelect = event.target.value;
  switch (opcionSelect) {
    case "aprender":
      operacion();

      break;
    case "practicar":
      practicar();
      break;
    default:
      break;
  }
});

$btnInicio.onclick = async () => {
  $opcionNumero.style.display = "flex";
  $inicio.style.display = "none";
  $titulo.style.display = "none";
  $opcion.style.display = "block";
  $home.style.display = "block";

  empezar();
};
$btnHome.onclick = async () => {
  location.reload($inicio);
};
