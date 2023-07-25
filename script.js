const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

let nav = $("#navtop");

window.onclick = function(evt) {
    if(evt.target == nav) {
        nav.style.display = 'none';
    }
}

/* Active navbars*/ 

let navs = $$(".link");

for(let i = 0; i < navs.length; i++) {
    navs[i].addEventListener("click", function() {
        var current = document.getElementsByClassName("active");
        current[0].className = current[0].className.replace(" active", "");
        this.className += " active";
    })
}

/* Slide img baner*/ 

let paner = $(".paner-modal");
let bigImg = paner.getElementsByTagName('img');
let imgIndex = 1;
showSlide();

function showSlide() {
    for(let i = 0; i < bigImg.length; i++) {

        bigImg[i].style.display = 'none';
    }

    imgIndex++;
    if(imgIndex > bigImg.length){imgIndex = 1}

    bigImg[imgIndex -1].style.display = 'block';

    setTimeout(showSlide, 5000);
}


/*Slide products*/ 

let indexCard = 1;

showCards(indexCard);

function plusSlides(n) {
    showCards(indexCard += n)
}


function showCards(n) {
    let width = $(".list-card").offsetWidth;
    let cards = $$(".card");
  
    if(n > cards.length){indexCard = 1}
    if(n < 1){indexCard = cards.length}

    for(let j = 0; j < cards.length; j++) {
        if(width < 900){
            cards[j].style.display = "none";
        }
    }
    cards[indexCard-1].style.display = "block"
}