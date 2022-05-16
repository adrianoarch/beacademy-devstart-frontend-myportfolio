/*=============== CHANGE BACKGROUND HEADER ===============*/
function scrollHeader(){
    const header = document.getElementById('header')
    // Quando a rolagem for maior que 50 de altura da janela de visualização, adicione a classe scroll-header à tag de cabeçalho
    if(this.scrollY >= 50) header.classList.add('scroll-header'); else header.classList.remove('scroll-header')
}
window.addEventListener('scroll', scrollHeader)

/*=============== SERVICES MODAL ===============*/
const modalViews = document.querySelectorAll('.services__modal')
const modalBtns = document.querySelectorAll('.services__button')
const modalClose = document.querySelectorAll('.services__modal-close')

let modal = function(modalClick){
    modalViews[modalClick].classList.add('active-modal')
}

modalBtns.forEach((mb, index) => {
    mb.addEventListener('click', () => {
        modal(index)
    })
})

modalClose.forEach((mc, index) => {
    mc.addEventListener('click', () => {
        modalViews[index].classList.remove('active-modal')
    })
})

/*=============== MIXITUP FILTER PORTFOLIO ===============*/
let mixerPortfolio = mixitup('.work__container', {
    selectors: {
        target: '.work__card'
    },
    animation: {
        duration: 300
    }
});

/* Função para adicionar e remover class active-work */ 
const linkWork = document.querySelectorAll('.work__item')

function activeWork(link){
    linkWork.forEach(l => {
        l.classList.remove('active-work')
    })
    link.classList.add('active-work')
}

linkWork.forEach(l => l.addEventListener('click', () => {
    activeWork(l)
}))


/*=============== SWIPER TESTIMONIAL ===============*/
let swiperTestemonial = new Swiper(".testemonial__container", {
    spaceBetween: 24,
    loop: true,
    grabCursor: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    breakpoints: {
        576: {
          slidesPerView: 2,
        },
        768: {
          slidesPerView: 2,
          spaceBetween: 48,
        },
      },
  });

/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/


/*=============== LIGHT DARK THEME ===============*/ 


/*=============== SCROLL REVEAL ANIMATION ===============*/

