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



// let swiperTestimonial = new Swiper(".testimonial__container", {
  
//     spaceBetween: 24,
//     loop:true,
//     grabCursor:true,

//     pagination: {
//       el: ".swiper-pagination",
//       clickable: true,
//     },
//     breakpoints: {
//         576: {
//           slidesPerView: 2,
//           spaceBetween: 20,
//         },
//         768: {
//           slidesPerView: 2,
//           spaceBetween: 48,
//         },
      
//       }
//   });
let swiperTestimonial = new Swiper(".testimonial__container", {
    spaceBetween: 24,
    loop: true, // Ensure that loop is set to true for infinite scrolling
    grabCursor: true, // Optional: to show a grabbing hand cursor

    pagination: {
        el: ".swiper-pagination",
        clickable: true, // Allows pagination bullets to be clickable
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
    },
    // Optional settings for autoplay if you want continuous scrolling
    autoplay: {
        delay: 2000, // Delay between slides in milliseconds
        disableOnInteraction: false, // Continue autoplay after user interactions
    },
});

  


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




// const loadMoreBtn = document.getElementById('loadMoreBtn');
// const filterButtons = document.querySelectorAll('.work__item'); // All filter buttons
// let allItemsLoaded = false; // Track whether all items are fully loaded

// // Event listener for the "Load More" button
// loadMoreBtn.addEventListener('click', function () {
//     const hiddenCards = document.querySelectorAll('.work__card.hidden'); // Get updated list of hidden cards

//     // Show up to 3 more hidden items
//     let itemsShown = 0;
//     hiddenCards.forEach(card => {
//         if (itemsShown < 3) {
//             card.classList.remove('hidden');
//             itemsShown++;
//         }
//     });

//     // Hide the button if there are no more hidden items
//     if (document.querySelectorAll('.work__card.hidden').length === 0) {
//         loadMoreBtn.style.display = 'none';
//         allItemsLoaded = true; // All items are now loaded
//     }
// });

// // Handle filter button clicks
// filterButtons.forEach(button => {
//     button.addEventListener('click', function (event) {
//         if (!allItemsLoaded) {
//             event.preventDefault(); // Prevent filter change
//             event.stopPropagation(); // Prevent any further event propagation
            
//             // Show SweetAlert
//             Swal.fire({
//                 title: 'Please load all items before switching categories!!',
              
//                 icon: 'warning',
//                 confirmButtonText: 'OK',
//                 position: 'center' // Ensure the alert appears centered
//             }).then(() => {
//                 // Optionally, force a refresh after the alert is closed
//                 location.reload();
//             });
//         } else {
//             // Your filter logic here when all items are loaded
//             console.log('Filter applied');
//         }
//     });
// });
// const loadMoreBtn = document.getElementById('loadMoreBtn');
// const filterButtons = document.querySelectorAll('.work__item'); // All filter buttons
// let allItemsLoaded = false; // Track whether all items are fully loaded

// // Create and append a spinner inside the "Load More" button
// const spinner = document.createElement('div');
// spinner.className = 'spinner';
// loadMoreBtn.appendChild(spinner);

// // Event listener for the "Load More" button
// loadMoreBtn.addEventListener('click', function () {
//     spinner.style.display = 'block'; // Show the spinner

//     setTimeout(() => {
//         const hiddenCards = document.querySelectorAll('.work__card.hidden'); // Get updated list of hidden cards

//         // Show up to 3 more hidden items
//         let itemsShown = 0;
//         hiddenCards.forEach(card => {
//             if (itemsShown < 3) {
//                 card.classList.remove('hidden');
//                 itemsShown++;
//             }
//         });

//         // Hide the button if there are no more hidden items
//         if (document.querySelectorAll('.work__card.hidden').length === 0) {
//             loadMoreBtn.style.display = 'none';
//             allItemsLoaded = true; // All items are now loaded
//         }

//         spinner.style.display = 'none'; // Hide the spinner
//     }, 1000); // Adjust the delay as needed
// });

// // Handle filter button clicks
// filterButtons.forEach(button => {
//     button.addEventListener('click', function (event) {
//         if (!allItemsLoaded) {
//             event.preventDefault(); // Prevent filter change
//             event.stopPropagation(); // Prevent any further event propagation
            
//             // Show SweetAlert
//             Swal.fire({
//                 title: 'Please load all items before switching categories!!',
//                 icon: 'warning',
//                 confirmButtonText: 'OK',
//                 position: 'center' // Ensure the alert appears centered
//             }).then(() => {
//                 // Optionally, force a refresh after the alert is closed
//                  location.reload(); 
//             });
//         } else { console.log('Filter applied');
//             // Your filter logic here when all items are loaded
//             console.log('Filter applied');
//         }
//     });
// });

// document.addEventListener('DOMContentLoaded', () => {
//     const hiddenCards = document.querySelectorAll('.work__card.hidden');
//     hiddenCards.forEach(card => card.style.display = 'none'); // Ensure hidden items are not visible
// });

const loadMoreBtn = document.getElementById('loadMoreBtn');
const filterButtons = document.querySelectorAll('.work__item'); // All filter buttons
let allItemsLoaded = false; // Track whether all items are fully loaded

// Create and append a spinner inside the "Load More" button
const spinner = document.createElement('div');
spinner.className = 'spinner';
spinner.style.display = 'none'; // Initially hide the spinner
loadMoreBtn.appendChild(spinner);

// Event listener for the "Load More" button
loadMoreBtn.addEventListener('click', function () {
    spinner.style.display = 'block'; // Show the spinner

    setTimeout(() => {
        const hiddenCards = document.querySelectorAll('.work__card.hidden'); // Get updated list of hidden cards

        // Show up to 3 more hidden items
        let itemsShown = 0;
        hiddenCards.forEach(card => {
            if (itemsShown < 3) {
                card.classList.remove('hidden'); // Remove 'hidden' class
                card.style.display = 'block'; // Ensure item is visible
                itemsShown++;
            }
        });

        // Hide the button if there are no more hidden items
        if (document.querySelectorAll('.work__card.hidden').length === 0) {
            loadMoreBtn.style.display = 'none';
            allItemsLoaded = true; // All items are now loaded
        }

        spinner.style.display = 'none'; // Hide the spinner
    }, 1000); // Adjust the delay as needed
});

// Handle filter button clicks
filterButtons.forEach(button => {
    button.addEventListener('click', function (event) {
        if (!allItemsLoaded) {
            event.preventDefault(); // Prevent filter change
            event.stopPropagation(); // Prevent any further event propagation
            
            // Show SweetAlert
            Swal.fire({
                title: 'Please load all items before switching categories!',
                icon: 'warning',
                confirmButtonText: 'OK',
                position: 'center' // Ensure the alert appears centered
            }).then(() => {
                // Optionally, force a refresh after the alert is closed
                location.reload();
            });
        } else {
            // Your filter logic here when all items are loaded
            console.log('Filter applied');
        }
    });
});

document.addEventListener('DOMContentLoaded', () => {
    const hiddenCards = document.querySelectorAll('.work__card.hidden');
    hiddenCards.forEach(card => {
        card.style.display = 'none'; // Initially ensure hidden items are not visible
    });
});


loadMoreBtn.addEventListener('click', function () {
    spinner.style.display = 'inline-block';  // Make sure it's visible
    setTimeout(() => {
        spinner.style.display = 'none'; // Hide the spinner after the items load
    }, 1000); // Adjust the delay as needed
});
