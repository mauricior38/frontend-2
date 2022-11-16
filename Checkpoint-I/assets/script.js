var jogadores = [
  {
    nome: "Vinicius Jr.",
    idade: 22,
    time: "Real Madrid",
    posicao: "Atacante",
    desc: "Jogador revelado no Flamengo, fez o gol do título da última Champions League pelo Real Madrid ",
    url: "https://i.pinimg.com/564x/f4/18/bc/f418bc79e61bc964adf1d86cc3d4ab44.jpg",
  },

  {
    nome: "Raphinha",
    idade: 25,
    time: "Barcelona",
    posicao: "Atacante",
    desc: "Jogador revelado pelo Avaí,ex-jogador do Leeds United, foi vendido em 2022 para o Barcelona",
    url: "https://i.pinimg.com/236x/b8/91/56/b8915679061dddd60b90aa7b8cbd054d.jpg",
  },
  {
    nome: "Raphinha",
    idade: 25,
    time: "Barcelona",
    posicao: "Atacante",
    desc: "Jogador revelado pelo Avaí,ex-jogador do Leeds United, foi vendido em 2022 para o Barcelona",
    url: "https://i.pinimg.com/236x/b8/91/56/b8915679061dddd60b90aa7b8cbd054d.jpg",
  },
  {
    nome: "Marquinhos.",
    idade: 28,
    time: "PSG",
    posicao: "Zagueiro",
    desc: "Jogador revelado pelo Corinthians, conquistou a libertadores pelo clube, atua como Zagueiro, volante e lateral",
    url: "https://i.pinimg.com/236x/6c/60/06/6c6006ffa7504b366444775e94d48054.jpg",
  },
  {
    nome: "Neymar",
    idade: 30,
    time: "PSG",
    posicao: "Atacante",
    desc: "Jogador revelado pelo Santos,camisa 10, grande esperança de gols da Seleção Brasileira",
    url: "https://i.pinimg.com/236x/65/b6/9f/65b69f6da9c93f7706f77252e4d6d6e6.jpg",
  },
  {
    nome: "Philippe Coutinho",
    idade: 30,
    time: "Aston Villa",
    posicao: "Meio-Campo",
    desc: "Jogador revelado pelo Vasco, atualmente joga pelo Aston Villa",
    url: "https://i.pinimg.com/236x/25/d2/8f/25d28ff6ed9ffb43595d121deade3db7.jpg",
  },
  {
    nome: "Danilo",
    idade: 33,
    time: "Juventus",
    posicao: "Lateral",
    desc: "Jogador revelado pelo Santos,campeão da Libertadores,atualmente joga na Itália pela Juventus",
    url: "https://i.pinimg.com/236x/c9/2d/a6/c92da6bf47c297702f78d5833b670419.jpg",
  },
  {
    nome: "Pedro",
    idade: 25,
    time: "Flamengo",
    posicao: "Atacante",
    desc: "Jogador revelado pelo Fluminense,artilheiro da última libertadores e campeão",
    url: "https://i.pinimg.com/236x/92/48/90/92489055c3cb7e396e71f9c690682578.jpg",
  },
  {
    nome: "Thiago Silva",
    idade: 38,
    time: "Chelsea",
    posicao: "Zagueiro",
    desc: "Jogador mais experiente da seleção, capitão na copa de 2014 disputada no Brasil",
    url: "https://i.pinimg.com/236x/89/fc/21/89fc21b07ad093c8247aba2621c2de60.jpg",
  },

  {
    nome: "Mauricio Corrêa Alves",
    idade: 31,
    time: "Grêmio",
    posicao: "Atacante",
    desc: "Atleta pagador de boleto, não corre e nem joga bem",
    url: "https://media-exp1.licdn.com/dms/image/D4D03AQFVHT3WmJgn-w/profile-displayphoto-shrink_200_200/0/1666900655279?e=1674086400&v=beta&t=cN0pjmN7fmcEQ8-WcxcRb4GvSH-RFtmnSF39gLJZjms",
  },

  {
    nome: "Guilherme Anzolin Laquinto",
    idade: 27,
    time: "Santos",
    posicao: "Atacante",
    desc: "Jogador dos bom, diferenciado. Com certeza uma grande aposta para a copa",
    url: "https://avatars.githubusercontent.com/u/85501131?v=4",
  },

  {
    nome: "Lucas Santos",
    idade: 23,
    time: "Grêmio",
    posicao: "Lateral",
    desc: "Jogador caro, camisa 10, estudante da DH exemplar.",
    url: "https://media-exp1.licdn.com/dms/image/D4D03AQFVHT3WmJgn-w/profile-displayphoto-shrink_200_200/0/1666900655279?e=1674086400&v=beta&t=cN0pjmN7fmcEQ8-WcxcRb4GvSH-RFtmnSF39gLJZjms",
  },
];

var nomeJogador = document.getElementById("nomeJogador");
var idadeJogador = document.getElementById("idadeJogador");
var timeJogador = document.getElementById("timeJogador");
var posicaoJogador = document.getElementById("posicaoJogador");
var descricaoJogador = document.getElementById("descricaoJogador");
var urlFoto = document.getElementById("urlFoto");

let jogador = document.getElementById("jogadores");

let btnJogador = document.getElementById("cadastrarJogador");
btnJogador.setAttribute("disabled", "");

function addJogador(dados) {
  let col = document.createElement("div");
  col.classList.add("col");
  jogador.appendChild(col);

  let card = document.createElement("div");
  card.classList.add("card", "shadow-sm");
  card.setAttribute("style", "width:250px");
  col.appendChild(card);

  card.innerHTML = ` <img src="${dados.url}" style="width:100%; 
height:100%" alt="" />

<div class="card-body">
    <h2>${dados.nome}</h2>
        <p class="card-text">
            ${dados.desc}
        </p>

        <ul class="list-group">
        <li class="list-group-item active">Dados</li>
        <li class="list-group-item"><p>Idade:  <span>${dados.idade}</span></p></li>
        <li class="list-group-item"><p>Time:  <span>${dados.time}</span></p></li>
        <li class="list-group-item"><p>Posição:  <span>${dados.posicao}</span></p></li>
      </ul>
  `;
}

jogadores.forEach((e) => {
  addJogador(e);
});

function validaBtn() {
  if (
    nomeJogador.value !== "" &&
    idadeJogador.value !== "" &&
    timeJogador.value !== "" &&
    posicaoJogador.value !== "" &&
    urlFoto.value !== "" &&
    descricaoJogador.value !== ""
  ) {
    btnJogador.removeAttribute("disabled", "");
  } else {
    btnJogador.setAttribute("disabled", "");
  }
}

document
  .getElementById("cadastrarJogador")
  .addEventListener("click", function (event) {
    event.preventDefault();

    addJogador({
      nome: nomeJogador.value,
      idade: idadeJogador.value,
      time: timeJogador.value,
      posicao: posicaoJogador.value,
      desc: descricaoJogador.value,
      url: urlFoto.value,
    });
    document.getElementById("Formul").reset();
  });
