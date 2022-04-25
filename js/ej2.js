let getText2 = () => {
  return prompt("Input a text");
};

let vocalesCount = (text, vocal) => {
  let cont = 0;
  for (let i = 0; i < text.length; i++) {
    if (text.charAt(i) === vocal) {
      cont++;
    }
  }
  return cont;
};

let execEj2 = () => {
  let cont = 0;
  let text = getText2().toLocaleLowerCase();
  let vocales = ["a", "e", "i", "o", "u"];
  vocales.forEach((vocal) => {
    cont += vocalesCount(text, vocal);
  });
  alert("Cantidad de vocales encontradas en el texto son de : "+cont);
};
