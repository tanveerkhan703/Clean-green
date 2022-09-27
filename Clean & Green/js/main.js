// Owl Carousel Sliding Function 
$(".owl-carousel").owlCarousel({
  loop: true,
  margin: 10,
  nav: true,
  autoplay: true,
  autoplayTimeout: 6000,

  responsive: {
    0: {
      items: 1,
    },
    600: {
      items: 1,
    },
    1000: {
      items: 1,
    },
  },
});
// Ended 

// Navbar Animation 
const navbar = document.querySelector('.navbar');
window.addEventListener('scroll', fixNav)

function fixNav() {
    if(window.scrollY > navbar.offsetHeight + 200) {
        navbar.classList.add('active')
    } else {
        navbar.classList.remove('active')
    }
}

// Navbar Animation Ended 

// Incrementing Counter 
const counters = document.querySelectorAll('.counter')

counters.forEach(counter => {
    counter.innerText = '0'

    const updateCounter = () => {
        const target = +counter.getAttribute('data-target')
         
        const c = +counter.innerText


        const increment = target / 400

        if(c < target) {
            counter.innerText = `${Math.ceil(c + increment)}`

            setTimeout(updateCounter, 1)
        } else{
            counter.innerText = target
        }

    }
    updateCounter()
})
// Ended 

// Text Effect 2

const textEl = document.getElementById('text');

const text = 'In 2010, Pakistan Had Lost 648 Trillions of tree Cover, extending over 0.74% of its land area.In 2011, It Lost 63.2 Trillions of Tree Cover.';
 
let idx = 1


writetext()

function writetext(){
    textEl.innerText = text.slice(0, idx)

    idx++

    if(idx > text.length){
        idx = 1
    }
    setTimeout(writetext, 150)
}
// Ended 

