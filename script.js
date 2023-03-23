//Header (burger)
const headerBurger = document.querySelector('.header_burger');
const headerNav = document.querySelector('.header__nav');
const overlay = document.querySelector('.overlay');
const headerClose = document.querySelector('.header_close')

headerBurger.addEventListener('click', () => {
    headerNav.classList.toggle('header__nav-active');
    overlay.classList.toggle('overlay_active');
    headerClose.classList.toggle('header_close-active');
});
function removeAll() {
    headerNav.classList.remove('header__nav-active');
    overlay.classList.remove('overlay_active');
    headerClose.classList.remove('header_close-active');
};
overlay.addEventListener('click', () => {
    removeAll()
});
headerClose.addEventListener('click', () => {
    removeAll()
});

//Pets (slider)
const smallDesktop = 1440;
//unable to click btn many times
let btnWork = true;
//help to realize animation
let actualSlide = document.querySelector('.actual');
let sliders;
const petsWindow = document.querySelector('.pets_window');
const btnNext = document.querySelector('.pets_arrow-right');
const btnPrev = document.querySelector('.pets_arrow-left');

//pet card array
const petCardArray = [
    {
        name: 'GIANT PANDAS',
        habitat: 'Native to Southwest China',
        food: 'pet_card-logo-banana',
        picture: 1,
    },
    {
        name: 'EAGLES',
        habitat: 'Native to South America',
        food: 'pet_card-logo-meet',
        picture: 2,
    },
    {
        name: 'GORILLAS',
        habitat: 'Native to Central Africa',
        food: 'pet_card-logo-banana',
        picture: 3,
    },
    {
        name: 'TWO-TOED SLOTHS',
        habitat: 'Native to Central America',
        food: 'pet_card-logo-banana',
        picture: 4,
    },
    {
        name: 'CHEETAHS',
        habitat: 'Native Africa',
        food: 'pet_card-logo-meet',
        picture: 5,
    },
    {
        name: 'PENGUINS',
        habitat: 'Native Antarctica',
        food: 'pet_card-logo-meet',
        picture: 6,
    },
]

//create pet card 
function createCard(pet) {
        return `<div class="pet_card">
            <div class="pet_card_wrapper">
                <div class="pet_card-wrapper-pic">
                    <img src ="./img/animals_${pet.picture}.jpg" alt="${pet.name}" class="pet_card-pic">
                </div>
                <div class="pet_card_stats">
                    <div class="pet_card-text">
                        <h4 class="pet_card-tittle">${pet.name}</h4>
                        <p class="pet_card-desc">${pet.habitat}</p>   
                    </div>
                    <div class="${pet.food}"></div>
                </div>
            </div>
        </div>`;
};

//shuffle obj in array 
function shuffle(arr, n) {
    let pets = [].concat(arr);
    for (let i = arr.length - 1; i > 0; i--) {
        j = Math.floor(Math.random() * (i + 1));
        [pets[i], pets[j]] = [pets[j], pets[i]];
    };
    return pets.slice(0, n); 
};

//create html block of list card  
function createListCards(pets) {
    return  pets.reduce((acc, card) => (acc += createCard(card)), ''); 
};

//create html node
function createNextSlide(pets) {
    return `<div class="carousel carousel_actual">
                <div class="pets_slider next">
                ${createListCards(pets)}
                </div>
            </div>`;
};

//create slider
window.addEventListener('load', function () {
    let slider;
    slider = createNextSlide(shuffle(petCardArray, 6));
    petsWindow.insertAdjacentHTML('afterbegin', slider);
});

//slider buttons
//take away slider
function changeCarousel(direction) {
    btnWork = false;
    sliders[0].classList.add(direction);
    sliders[0].addEventListener('animationend', function () {
        this.remove();
    });
};
//show new slider
function showCarousel(direction) {
    sliders[1].classList.add(direction);
    sliders[1].addEventListener('animationend', function () {
      this.classList.remove('carousel_next', direction);
      this.classList.add('carousel_actual');
      btnWork = true;
    });
};

function nextSlider() {
    changeCarousel('to-left');
    showCarousel('from-right');
};

function prevSlider() {
    changeCarousel('to-right');
    showCarousel('from-left');
};

function createSlideAfterClick() {
   if (btnWork) {
    let slider = createNextSlide(shuffle(petCardArray, 6));
    slider = slider.replace('carousel_actual', 'carousel_next');
    petsWindow.insertAdjacentHTML('beforeend', slider);
    sliders = document.querySelectorAll('.carousel');
   }; 
};
//click on left button
btnPrev.addEventListener('click', function () {
    createSlideAfterClick();
    prevSlider();
});
//click on right button
btnNext.addEventListener('click', function () {
    createSlideAfterClick();   
    nextSlider();
});  

//testimonials
//range
const input = document.querySelector('.testimonial_input-range');
const testimonialsCards = document.querySelector('.testimonials_cards');
testimonialsCards.style.marginLeft = 0;
input.addEventListener('input', () => {
    //294px / 318px = card width + gap
    let step = input.value * 294;
    if (window.innerWidth < smallDesktop) {
        step = input.value * 318;
    };
    testimonialsCards.style.marginLeft =  -step + 'px';
});

//modal Window
const testimonials = document.querySelectorAll('.testimonial_card');
const testimonialsBlock = document.querySelector('.testimonial_card_block');
const closeTestimonial = document.querySelector('.testimonial-close');

testimonials.forEach((card) => {
    let cardNodeList = card.childNodes;
    card.addEventListener('click', () => {
        //cardNodeList[3] === testimonial_text-container 
        cardNodeList[3].classList.add('testimonial_text-active');
        card.classList.add('testimonial_card-active');
        testimonialsBlock.classList.add('testimonial_card_block-active');
        overlay.classList.add('overlay_active');
    });
    function removeActiveTestimonial() {
        card.classList.remove('testimonial_card-active');
        cardNodeList[3].classList.remove('testimonial_text-active');
        testimonialsBlock.classList.remove('testimonial_card_block-active');
        overlay.classList.remove('overlay_active');
    };
    overlay.addEventListener('click', () => {
        removeActiveTestimonial(); 
    });
    closeTestimonial.addEventListener('click', () => {
        removeActiveTestimonial(); 
    });
});






