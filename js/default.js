const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document)

let open = $(".icon-open");
let btnClose = $(".btnclose");

const App = {
    /* slide bar*/ 
    slides: function() {
        let slides = $$(".slide li");
        
        let slideIndex = 1;
        showSlide();

        function showSlide() {
            for(let i = 0; i < slides.length; i++) {
                slides[i].style.display = 'none';
            }
            slideIndex++;
            if(slideIndex > slides.length){slideIndex = 1}
            slides[slideIndex-1].style.display = 'block';

            setTimeout(showSlide, 3500);
        }
    },

    /* function nabar*/ 
    navbar: function () {
        /* Open nav*/ 
        open.onclick = function () {
           document.getElementById("nav-mobile").style.width = "100%"
        }
        /* Close nav*/ 
        btnClose.onclick = function() {
            document.getElementById("nav-mobile").style.width = "0"
        }
        let navId = $("#nav-mobile");
        window.onclick = function() {
            if(event.target == navId) {
                document.getElementById("nav-mobile").style.width = "0"
            }
        }
    },

    render: function () {

    },

    start: function () {
        this.render()
        this.navbar()
        this.slides()
    }
}

App.start();