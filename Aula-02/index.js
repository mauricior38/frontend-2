var PlacarJogador = 0;
var PlacarComputador = 0;

function EscolhaPc(min, max) {
  return Math.random() * (max - min) + min;
}

function Jogo(opcao) {
  let jogador = opcao;
  let computador = parseInt(EscolhaPc(1, 4));
  let EscolhaComputador = "";
  let EscolhaJogador = "";


  if (computador === 1) {
    EscolhaComputador = "Pedra";
  } else if (computador === 2) {
    EscolhaComputador = "Papel";
  } else if (computador === 3) {
    EscolhaComputador = "Tesoura";
  }

  if (jogador === 1) {
    EscolhaJogador = "Pedra";
  } else if (computador === 2) {
    EscolhaJogador = "Papel";
  } else if (computador === 3) {
    EscolhaJogador = "Tesoura";
  }

  switch (EscolhaJogador) {
    case "Pedra":
      if (EscolhaComputador === "Tesoura") {
        PlacarJogador++;
      } else if (EscolhaComputador === "Papel") {
        PlacarComputador++;
      }
      break;

    case "Papel":
      if (EscolhaComputador === "Pedra") {
        PlacarJogador++;
      } else if (EscolhaComputador === "Tesoura") {
        PlacarComputador++;
      }
      break;
      case "Tesoura":
        if (EscolhaComputador === "Papel") {
          PlacarJogador++;
        } else if (EscolhaComputador === "Pedra") {
          PlacarComputador++;
        }
        break;
    default:
  }
}

while(PlacarJogador < 2 && PlacarComputador < 2){
    const jogada = parseInt(prompt("Digite sua jogada"))

    Jogo(jogada);
    alert(`Computador: ${PlacarComputador} VS Jogador: ${PlacarJogador}`)
}