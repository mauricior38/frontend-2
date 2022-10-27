var escolha = confirm("Pressione confirmar para ativar modo dark. Caso contrário, cancele");

let felinos = [
  {
    src: "./imagens/pantera-negra.jpg",
    title: "A pantera negra",
    desc: "A pantera negra é uma variação escura (melanismo) de várias espécies de felinos grandes, especialmente o leopardo (Panthera pardus) e a onça-pintada (Panthera onca). Mas deve-se ressaltar que não se trata de uma espécie nova, nem mesmo de uma subespécie, é simplesmente uma variação negra destes animais.",
  },
  {
    src: "./imagens/jaguar.jpg",
    title: "O jaguar",
    desc: "O jaguar, ou jaguarete (Panthera onca) é um carnívoro felídeo da sub-família Panthera e do gênero Panthera. É a única das cinco espécies existentes deste gênero encontradas nas Américas. Também é o maior felino das Américas e o terceiro maior do mundo, depois do tigre (Panthera tigris) e do leão (Panthera leo).",
  },
  {
    src: "./imagens/tiger.jpg",
    title: "O tigre",
    desc: "O tigre (Panthera tigris) é uma das espécies da subfamília Pantherinae (família Felidae) pertencente ao gênero Panthera. É encontrado de forma nativa apenas no continente asiático; é um predador carnívoro e é a maior espécie de felino do mundo junto com o leão.",
  },
  {
    src: "./imagens/leon.jpg",
    title: "O leão",
    desc: "O leão (Panthera leo) é um mamífero carnívoro da família dos felinos é uma das cinco espécies do gênero gênero Panthera. Os leões selvagens vivem em populações cada vez mais dispersas e fragmentadas na África subsahariana (com exceção das regiões florestais e das regiões de selva da Bacia do Congo) e uma pequena área do noroeste da Índia.",
  },
  {
    src: "./imagens/leopardo.jpg",
    title: "O leopardo",
    desc: "O leopardo (Panthera pardus) é um mamífero carnívoro da família dos felinos. Como três dos outros felinos do gênero Panthera: o leão, o tigre e a onça-pintada, são caracterizados por uma modificação do osso hióide que lhes permite rugir. É também conhecido como pantera marrom e, quando tem a pelagem completamente escura, como pantera negra (melanista).",
  },
  {
    src: "./imagens/chita.jpg",
    title: "O guepardo",
    desc: "O guepardo, ou chita (Acinonyx jubatus) é um membro atípico da família felina. É o único representante vivo do gênero Acinonyx. Ele caça graças à sua visão e grande velocidade. É o animal terrestre mais rápido do mundo, atingindo uma velocidade máxima de 115 km/h em corridas de até quinhentos metros.",
  },
];

const container = document.querySelector(".container");

for (i = 0; i < felinos.length; i++) {
  container.innerHTML += `
    <div class="item">
    <img src="${felinos[i].src}">
    <h2>${felinos[i].title}</h2>
    <p>
    ${felinos[i].desc}
    </p>
  </div>
    `;
}

function DarkMode() {
  const bg = document.querySelector(".dark");
  bg.classList.add("darkbg");

  const title = document.querySelector("h1");
  title.classList.add("darkTitle");

  const item = document.querySelectorAll(".item");
  const itemText = document.querySelectorAll("h2");
  const itemText1 = document.querySelectorAll("p");

  for (i = 0; i <= item.length; i++) {
    item[i].classList.toggle("darkItens");
    itemText[i].classList.toggle("darkItensText");
    itemText1[i].classList.add("darkItensText");
  }
}

if (escolha === true) {
  alert("Modo escuro ativado");
  DarkMode();
} else {
  alert("Modo branco ativado.");
}
