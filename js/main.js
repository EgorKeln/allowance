
AOS.init();



const hamburger = document.querySelector('.hamburger');
const navigation = document.querySelector('.navigation');

hamburger.addEventListener('click', () => {
	navigation.classList.toggle('is-open');
	hamburger.classList.toggle('is-open');

})

let close0 = document.querySelector('.close0');
let close1 = document.querySelector('.close1');
let close2 = document.querySelector('.close2');
let close3 = document.querySelector('.close3');
let close4 = document.querySelector('.close4');
let close5 = document.querySelector('.close5');
let close6 = document.querySelector('.close6');
let close7 = document.querySelector('.close7');

close0.onclick = function(){
	navigation.classList.toggle('is-open');
	hamburger.classList.toggle('is-open');
}
close1.onclick = function(){
	navigation.classList.toggle('is-open');
	hamburger.classList.toggle('is-open');
}
close2.onclick = function(){
	navigation.classList.toggle('is-open');
	hamburger.classList.toggle('is-open');
}
close3.onclick = function(){
	navigation.classList.toggle('is-open');
	hamburger.classList.toggle('is-open');
}
close4.onclick = function(){
	navigation.classList.toggle('is-open');
	hamburger.classList.toggle('is-open');
}
close5.onclick = function(){
	navigation.classList.toggle('is-open');
	hamburger.classList.toggle('is-open');
};
close6.onclick = function(){
	navigation.classList.toggle('is-open');
	hamburger.classList.toggle('is-open');
};
close7.onclick = function(){
	navigation.classList.toggle('is-open');
	hamburger.classList.toggle('is-open');
};

const SkewedOne = document.querySelector('.SkewedOne');
const SkewedTwo = document.querySelector('.SkewedTwo');
window.addEventListener('scroll', function(){
    const value1 = -15 + window.scrollY/45;
    const value2 = 15 + window.scrollY/-45;
    SkewedOne.style.transform = "skewY(" + value1 + "deg)";
    SkewedTwo.style.transform = "skewY(" + value2 + "deg)";
});


