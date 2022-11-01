// window.onload = function(){
//     alert("Seja bem vindo ao exercicio da Mesa-08")
// }

let button = document.querySelector("button");
button.addEventListener("click", function (e) {
  e.preventDefault();
  console.log("Enviado");
});

let label = document.querySelectorAll("label");

label.forEach(function (e) {
  e.addEventListener("mouseover", function () {
    e.setAttribute("class", "trocaCor");
  });

  e.addEventListener("mouseout", function () {
    e.removeAttribute("class", "trocaCor");
  });
});

let contInput = document.querySelector("#cont");
let conSpan = document.querySelector("#contSpan");

contInput.onkeypress = function (e) {

  if (e.key === "Enter") {
    conSpan.innerHTML = ``;
  } else {
    conSpan.innerHTML = `${e.key}`;
  }

};
