/*=============== LOADER ===============*/
onload = () => {
    const load = document.querySelector('#load');

    setTimeout(() => {
        load.style.display = 'none';
    }, 3000);
  }

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
const sections = document.querySelectorAll('section[id]')

function scrollActive(){
    const scrollY = window.pageYOffset

    sections.forEach(current =>{
        const sectionHeight = current.offsetHeight,
              sectionTop = current.offsetTop - 58,
              sectionId = current.getAttribute('id')

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active-link')
        }else{
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active-link')
        }
    })
}
window.addEventListener('scroll', scrollActive)

/*=============== LIGHT DARK THEME ===============*/ 
const themeButton = document.getElementById('theme-button')
const lightTheme = 'light-theme'
const iconTheme = 'bx-sun'

// Tema previamente selecionado (se o usuário for selecionado)
const selectedTheme = localStorage.getItem('selected-theme')
const selectedIcon = localStorage.getItem('selected-icon')

// Obtemos o tema atual da interface validando a classe light-theme
const getCurrentTheme = () => document.body.classList.contains(lightTheme) ? 'dark' : 'light'
const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'bx bx-moon' : 'bx bx-sun'

// Validamos se o usuário já escolheu um tópico
if (selectedTheme) {
  // Se a validação for atendida, perguntamos qual foi a escolha para saber se ativamos ou desativamos o tena
  document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](lightTheme)
  themeButton.classList[selectedIcon === 'bx bx-moon' ? 'add' : 'remove'](iconTheme)
}

// Ative/desative o tema manualmente com o botão
themeButton.addEventListener('click', () => {
    // Adicione ou remova o tema / tema do ícone
    document.body.classList.toggle(lightTheme)
    themeButton.classList.toggle(iconTheme)
    // Salvamos o tema e o ícone atual que o usuário escolheu usando o localStorage
    localStorage.setItem('selected-theme', getCurrentTheme())
    localStorage.setItem('selected-icon', getCurrentIcon())
})


/*=============== ANIMAÇÃO SCROLL REVEAL ===============*/
const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2500,
    // reset: true,
    delay: 3000
})

sr.reveal(`.home__data`)
sr.reveal(`.home__handle`, {delay: 3200})
sr.reveal(`.home__social, .home__scroll`, {delay: 3300, origin: 'bottom'})

