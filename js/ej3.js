let getText3 = () => {
  return prompt("Input a text");
};

let reverseText = () => {
  alert(String(getText3()).split("").reverse().join(""));
};
