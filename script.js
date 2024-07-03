function scrollHeader(){
    const header = document.getElementById('header')
    if(this.scrollY >= 50) header.classList.add('scroll-header');else header.classList.remove('scroll-header')
}
window.addEventListener('scroll',scrollHeader)



let menu =document.querySelector('#menu-icon');
    let navmenu =document.querySelector('.navmenu');
    
    menu.onclick = () =>{
        menu.classList.toggle('bx-x')
        navmenu.classList.toggle('open')
        
    }




const modalViews =document.querySelectorAll('.services__model'),
        modalBtns = document.querySelectorAll('.services__button'),
        modalClose=document.querySelectorAll('.services__model-close')
let modal= (modalClick)=>{
    modalViews[modalClick].classList.add('active-modal')
}

modalBtns.forEach((mb,i)=>{
    mb.addEventListener('click',()=>{
        modal(i)
    })
})

modalClose.forEach((mc)=>{
    mc.addEventListener('click',()=>{
        modalViews.forEach((mv)=>{
            mv.classList.remove('active-modal')
        })

    })
})

let mixer = mixitup('.work__container', {
    selectors: {
        target: '.work__card'
    },
    animation: {
        duration: 300
    }
});


const linkWork=document.querySelectorAll('.work__item')
function activeWork(){
    linkWork.forEach(l=> l.classList.remove('active-work'))
    this.classList.add('active-work')
}

linkWork.forEach(l=>l.addEventListener('click',activeWork))



let swiperTestimonial = new Swiper(".testimonial__container", {
  
    spaceBetween: 24,
    loop:true,
    grabCursor:true,

    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    breakpoints: {
        576: {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        768: {
          slidesPerView: 2,
          spaceBetween: 48,
        },
      
      }
  });

  


//   document.addEventListener('contextmenu',function(e){
//     alert('inspect not alowed on this portpholio')
//     e.preventDefault()
//   })



//   dark theame

// const themeButton = document.getElementById('theame-btn')
// const lightTheme ='light-theme'
// const iconTheme ='bx-sun'


// const selectedTheme = localStorage.getItem('selected-theme')
// const selectedIcon =localStorage.getItem('selected-icon')

// const getCurrentTheme = () => document.body.classList.contains(lightTheme)? 'dark':'light'
// const getCurrentIcon = ()=>themeButton.classList.contains(iconTheme)?'bx bx-moon':'bx bx-sun'

// if(selectedTheme){
//     document.body.classList[selectedTheme === 'dark'? 'add':'remove'](lightTheme)
//     themeButton.classList[selectedIcon === 'bx bx-moon'?'add':'remove'](iconTheme)
// }


// themeButton.addEventListener('click',()=>{
//     document.body.classList.toggle(lightTheme)
//     themeButton.classList.toggle(iconTheme)

//     localStorage.setItem('selected-theme',getCurrentTheme())
//     localStorage.setItem('selected-icon',getCurrentIcon())
// })

// const themeButton = document.getElementById('theme-btn')
// const lightTheme = 'light-theme'
// const iconTheme = 'bx-sun'

// const selectedTheme = localStorage.getItem('selected-theme')
// const selectedIcon = localStorage.getItem('selected-icon')

// const getCurrentTheme = () => document.body.classList.contains(lightTheme) ? 'light' : 'dark'
// const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'bx bx-sun' : 'bx bx-moon'

// if (selectedTheme) {
//     document.body.classList[selectedTheme === 'light' ? 'add' : 'remove'](lightTheme)
//     themeButton.classList[selectedIcon === 'bx bx-sun' ? 'add' : 'remove'](iconTheme)
// }

// themeButton.addEventListener('click', () => {
//     document.body.classList.toggle(lightTheme)
//     themeButton.classList.toggle(iconTheme)

//     localStorage.setItem('selected-theme', getCurrentTheme())
//     localStorage.setItem('selected-icon', getCurrentIcon())
// })

// const themeButton = document.getElementById('theme-btn');
// const lightTheme = 'light-theme';
// const iconTheme = 'bx-sun';

// const selectedTheme = localStorage.getItem('selected-theme');
// const selectedIcon = localStorage.getItem('selected-icon');

// const getCurrentTheme = () => document.body.classList.contains(lightTheme) ? 'light' : 'dark';
// const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'bx bx-sun' : 'bx bx-moon';

// if (selectedTheme) {
//     document.body.classList[selectedTheme === 'light' ? 'add' : 'remove'](lightTheme);
//     themeButton.classList[selectedIcon === 'bx bx-sun' ? 'add' : 'remove'](iconTheme);
// }

// themeButton.addEventListener('click', () => {
//     document.body.classList.toggle(lightTheme);
//     themeButton.classList.toggle(iconTheme);

//     localStorage.setItem('selected-theme', getCurrentTheme());
//     localStorage.setItem('selected-icon', getCurrentIcon());
// });




// let btn = document.getElementById('theame-btn')

// btn.onclick=function(){
//     document.body.classList.toggle('light-theme')

//     if(document.body.classList.contains('light-theme')){
//         btn.src="./images/night-mode.png"
//     }else{
//         btn.src="./images/—Pngtree—sun icon design_4816760.png"
//         btn.style.width='20px'
//     }
// }
const toggleButton = document.getElementById('dark');
const body = document.body;
const darkTheme = 'light-theme'; // Assuming 'light-theme' is the class for light theme
const sunIcon = 'bxs-sun';
const moonIcon = 'bxs-moon';

toggleButton.addEventListener('click', () => {
  body.classList.toggle(darkTheme);

  // Change icon based on mode
  if (body.classList.contains(darkTheme)) {
    toggleButton.classList.remove(moonIcon);
    toggleButton.classList.add(sunIcon); // bx-sun for light mode icon
    toggleButton.style.color='#efed9b'
  } else {
    toggleButton.classList.remove(sunIcon);
    toggleButton.classList.add(moonIcon);
    toggleButton.style.color='#7e7e7a'
  }
});