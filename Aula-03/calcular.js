import Soma from "./src/soma.js";
import Subtrair from "./src/subtrair.js";
import Multiplica from "./src/multiplica.js";
import Dividir from "./src/dividir.js";

var confirmacao = true;

function EscolhaUsuarios() {
  const valor1 = parseInt(prompt("Digite o primeiro valor"));
  const valor2 = parseInt(prompt("Digite o primeiro valor"));
  const operacao = parseInt(
    prompt(
      "Digite qual operação gostaria de realizar. \n1 - Somar \n2 - Subtrair \n3 - Multiplicar \n4 - Dividir"
    )
  );

  switch (operacao) {
    case 1:
      confirmacao = confirm(
        `Você tem certeza da seguinte operação ${valor1} + ${valor2}? `
      );
      if (confirmacao === false) {
        alert("Operação cancelada");
        EscolhaUsuarios();
        break;
      }

      alert(Soma(valor1, valor2));

      confirmacao = confirm("Deseja realizar mais alguma operação?");

      if (confirmacao === true) {
        EscolhaUsuarios();
      }
      break;
    case 2:
      confirmacao = confirm(
        `Você tem certeza da seguinte operação ${valor1} - ${valor2}? `
      );
      if (confirmacao === false) {
        alert("Operação cancelada");
        EscolhaUsuarios();
        break;
      }
      alert(Subtrair(valor1, valor2));

      confirmacao = confirm("Deseja realizar mais alguma operação?");

      if (confirmacao === true) {
        EscolhaUsuarios();
      }
      break;

    case 3:
      confirmacao = confirm(
        `Você tem certeza da seguinte operação ${valor1} * ${valor2}? `
      );
      if (confirmacao === false) {
        alert("Operação cancelada");
        EscolhaUsuarios();
        break;
      }
      alert(Multiplica(valor1, valor2));

      confirmacao = confirm("Deseja realizar mais alguma operação?");

      if (confirmacao === true) {
        EscolhaUsuarios();
      }
      break;

    case 4:
      confirmacao = confirm(
        `Você tem certeza da seguinte operação ${valor1} / ${valor2}? `
      );
      if (confirmacao === false) {
        alert("Operação cancelada");
        EscolhaUsuarios();
        break;
      }
      alert(Dividir(valor1, valor2));

      confirmacao = confirm("Deseja realizar mais alguma operação?");

      if (confirmacao === true) {
        EscolhaUsuarios();
      }
      break;
  }
}

EscolhaUsuarios();
