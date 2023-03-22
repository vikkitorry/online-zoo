//donate range
const points = document.querySelectorAll('.point');
const money = document.querySelectorAll('.money');
const moneyInput = document.querySelector('.form_amount');
const moneyValuesArray = [5000, 2000, 1000, 500, 250, 100, 50, 25];

for (let i = 0; i < points.length; i++ ) {
    function moneyAmount() {
        let pointActive = document.querySelector('.point-active');
        let moneyActive = document.querySelector('.money-active');
        pointActive.classList.remove('point-active');
        moneyActive.classList.remove('money-active');
        points[i].classList.add('point-active');
        money[i].classList.add('money-active');
        moneyInput.value = moneyValuesArray[i]
    };
    points[i].addEventListener('click', () => {
        moneyAmount()
    });
    money[i].addEventListener('click', () => {
        moneyAmount()
    });
};
moneyInput.addEventListener('input', () => {
    for (let i = 0; i < money.length; i++) {
        if (moneyInput.value == moneyValuesArray[i]) {
            let pointActive = document.querySelector('.point-active');
            let moneyActive = document.querySelector('.money-active');
            pointActive.classList.remove('point-active');
            moneyActive.classList.remove('money-active');
            points[i].classList.add('point-active');
            money[i].classList.add('money-active');
        };
    };
});

moneyInput.addEventListener('input', () => {
    if (moneyInput.value.length > 4) {
        moneyInput.value = moneyInput.value.slice(0, 4);
    }
});

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


