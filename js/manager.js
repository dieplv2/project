const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

/* Dec variable common*/ 
let navs = $$(".link");
let close = $(".start")

const App = {
    /* handle code icon sidebar*/ 
    closes: function() {
        close.onclick = function() {
            let icon = $("#icon");
            let nav = $("#nav");
            
           
            if(icon.classList == "start") {
                icon.classList += " starting"

                document.getElementById("left").style.width="5%";
                document.getElementById("right").style.width="95%";
                nav.style.display = "none"
            } else {
                icon.classList = "start"
             
                document.getElementById("left").style.width="20%";
                document.getElementById("right").style.width="80%";
                nav.style.display = "block"
            }
        }
    },

    /* active menu side*/ 
    active: function() {

        for(let i = 0; i< navs.length; i++) {
            navs[i].addEventListener("click", function() {
                let current = document.getElementsByClassName("active");
                current[0].className = current[0].className.replace(" active", "");
                this.className += " active";
            })
        }
        
    },

    /* Render code */ 
    render: function() {
        // console.log(close)
    },

    /*Start programing*/ 
    start: function() {
        this.render();
        this.closes();
        this.active();
    }
}

/* Call function start()*/ 
App.start()