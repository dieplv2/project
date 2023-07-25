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