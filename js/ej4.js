let generateOption = () => {
  return Math.floor(Math.random() * (4 - 1) + 1);
};

let captureOption = () => {
  return parseInt(prompt("Ingrese una opcion del menu"));
};

let executeGame = () => {
  getMenu();
  let optionUser = captureOption();
  let generateOption2 = generateOption();
  let options = ["", "Piedra", "Papel", "Tijera"];
  switch (optionUser) {
    case 1:
      if (generateOption2 === 3) {
        alert(
          "Ganaste, La opcion elegida por el sistema fue " +
            options[generateOption2] +
            " y la elegida por el usuario fue " +
            options[optionUser]
        );
      } else if (generateOption2 === 1 || generateOption2 === 2) {
        alert(
          "Perdiste, La opcion elegida por el sistema fue " +
            options[generateOption2] +
            " y la elegida por el usuario fue " +
            options[optionUser]
        );
      }
      break;
    case 2:
      if (generateOption2 == 1) {
        alert(
          "Ganaste, La opcion elegida por el sistema fue " +
            options[generateOption2] +
            " y la elegida por el usuario fue " +
            options[optionUser]
        );
      } else if (generateOption2 === 2 || generateOption2 === 3) {
        alert(
          "Perdiste, La opcion elegida por el sistema fue " +
            options[generateOption2] +
            " y la elegida por el usuario fue " +
            options[optionUser]
        );
      }
      break;
    case 3:
      if (generateOption2 == 2) {
        alert(
          "Ganaste, La opcion elegida por el sistema fue " +
            options[generateOption2] +
            " y la elegida por el usuario fue " +
            options[optionUser]
        );
      } else if (generateOption2 === 1 || generateOption2 === 3) {
        alert(
          "Perdiste, La opcion elegida por el sistema fue " +
            options[generateOption2] +
            " y la elegida por el usuario fue " +
            options[optionUser]
        );
      }
      break;
  }
};

let getMenu = () => {
  alert(
    "Bienvenidos al juego de Piedra, Papel o Tijera, ingrese una de las opciones para comenzar 1- Para Piedra, 2- Para Papel y 3- Para Tijera"
  );
};
