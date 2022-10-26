var escolha = confirm("Pressione confirmar para ativar modo dark. Caso contrário, cancele");

function DarkMode(){

 const bg = document.querySelector('.dark')
 bg.classList.add('darkbg')

 const title = document.querySelector('h1')
 title.classList.add('darkTitle')

const item = document.querySelectorAll('.item')
const itemText = document.querySelectorAll('h2')
const itemText1 = document.querySelectorAll('p')

for ( i = 0; i <= item.length; i++){
    item[i].classList.toggle('darkItens');
    itemText[i].classList.toggle('darkItensText');
    itemText1[i].classList.add('darkItensText');
}
 
}

if(escolha === true){
    alert('Modo escuro ativado')
    DarkMode();
}else{
    alert('Modo branco ativado.')
}