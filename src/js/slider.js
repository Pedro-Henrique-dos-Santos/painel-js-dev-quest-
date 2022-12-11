const imagens = document.querySelectorAll(".slide");
const setaVoltar = document.getElementById("seta-voltar");
const setaAvancar = document.getElementById("seta-avancar");
const totalImagens = imagens.length - 1;
let imagemAtual = 0;

setaAvancar.addEventListener("click",function(){
   if(imagemAtual === totalImagens){
        return;
   }

   imagemAtual++;
   esconderImagemAberta();
   mostrarImagem();
  mostrarOuEsconderSetas();
})

setaVoltar.addEventListener("click",function(){
    if(imagemAtual === 0){
        return;
   }

   imagemAtual--;
   esconderImagemAberta();
   mostrarImagem();
   mostrarOuEsconderSetas();

})

function esconderImagemAberta(){
    const imagemAberta = document.querySelector(".mostrar");
    imagemAberta.classList.remove('mostrar');
}

function mostrarImagem(){
    imagens[imagemAtual].classList.add('mostrar');
}

function mostrarOuEsconderSetas(){
    if(imagemAtual !== 0){
        setaVoltar.classList.remove('opacidade');
   }else if(imagemAtual === 0){
    setaVoltar.classList.add('opacidade');
   }

   if(imagemAtual === totalImagens){
    setaAvancar.classList.add('opacidade');
   }else{
    setaAvancar.classList.remove('opacidade');
   }
}

// colocarOpacidade();
// function colocarOpacidade(){
//     setaAvancar.classList.add('opacidade');
// };

// imagens.forEach(function(imagem){
//     imagem.classList.remove('mostrar');
//    })

//    imagemAtual++;
//    imagens[imagemAtual].classList.add('mostrar');
