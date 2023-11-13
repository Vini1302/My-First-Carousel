//Buscar elementos HTML

//Selecionat todas as tagsdiv.slide
const slides = document.querySelectorAll('.slide');
//Buscar btn prev
const prev = document.querySelector('#prev');
//Buscar brn next
const next = document.querySelector('#next');

//Configuração do autoplay
const auto = true;
//tempo de transição
const intervaloTransicao = 5000;
//tempo para exibição
let slideIntervalo;

//Eventos
next.addEventListener('click', (e) => {
    nextSlide(); //Chama a função

    if (auto) {
        clearInterval(intervaloTransicao)
        slideIntervalo =setInterval(nextSlide, intervaloTransicao)
    }
});

function nextSlide(){
    //Localizar o elemento que detém da classe .atual
    const atual = document.querySelector('.atual');
    //Removendo a classe do elemento
    atual.classList.remove('atual')

    if(atual.nextElementSibling){
        atual.nextElementSibling.classList.add('atual');
     } else{
        slides[0].classList.add('atual');

    }
 setTimeout (() => atual.classList.remove('atual'));
};

function prevSlide() {
     //Localizar o elemento que detém da classe .atual
     const atual = document.querySelector('.atual');
     //Removendo a classe do elemento
     atual.classList.remove('atual')
 
     if(atual.previousElementSibling){
         atual.previousElementSibling.classList.add('atual');
      } else{
         slides[slides.length-1].classList.add('atual');
 
     }
     setTimeout(() => atual.classList.remove('atual'));
};

//Caso a variavel esteja como true
if(auto){
    //Mostra o próximo slide após um tempo
    slideIntervalo = setInterval(nextSlide, intervaloTransicao)
}