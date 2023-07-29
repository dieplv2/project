const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document)

var productsApi = 'http://localhost:3000/products'

fetch(productsApi)
    .then(function(response){
        return response.json();
    })
    .then(function(products){
        // console.log(products)
    });


let open = $(".icon-open");
let btnClose = $(".btnclose");

const App = {

    /* Promotion */
    promotion: function () {
        let promotions = $$(".promotion-item");
        let _btn = $$(".btn-click");
        let maxWidth = $("#promotion").offsetWidth;

        let currentIndex = 1;
        showSlide(currentIndex);

        for (let i = 0; i < _btn.length; i++) {
            _btn[i].addEventListener("click", function () {
                /* Code đã chạy nhung không hiểu vì sao nó chạy */
                showSlide(currentIndex += 1)
            })
        }

        function showSlide(n) {
            if (n > promotions.length) { currentIndex = 1 }
            if (n < 1) { currentIndex = promotions.length }

            for (let i = 0; i < promotions.length; i++) {

                if (maxWidth < 900) {
                    // promotions[i].style.display = "none"

                }
            }

            promotions[currentIndex - 1].style.display = "block";

        }
    },
    /* slide bar*/
    slides: function () {
        let slides = $$(".slide li");

        let slideIndex = 1;
        showSlide();

        function showSlide() {
            for (let i = 0; i < slides.length; i++) {
                slides[i].style.display = 'none';
            }
            slideIndex++;
            if (slideIndex > slides.length) { slideIndex = 1 }
            slides[slideIndex - 1].style.display = 'block';

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
        btnClose.onclick = function () {
            document.getElementById("nav-mobile").style.width = "0"
        }
        let navId = $("#nav-mobile");
        window.onclick = function () {
            if (event.target == navId) {
                document.getElementById("nav-mobile").style.width = "0"
            }
        }
    },

    /* List products*/
    define: htmls = '',

    /*Render data*/
    render: function () {
        const proApi = 'http://localhost:3000/products'
        // const cartegoryApi = 'http://localhost:3000/category';
        fetch(proApi)
            .then(function(response){
                return response.json();
            })
            .then(function(products){
               
                
                let bestsellers = "<h2>bestsellers </h2>"
                let smalldesc = "<i>The best productions from us</i>"
                let desc = "<p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nulla deleniti amet et offici recusandae fuga asperiores eos ad doloribus. </p> "
        
                const setAtt = document.createAttribute("class");
                let Att = setAtt.value = "introduce";
        
                this.htmls = products.map(function (product, index) {
                    let img = `<img src="${product.imgs.thumnail}" alt="">`
                    return `
                            <li class="${index == 0 ? Att : ''}">
                                <a href="#" data-name="${product.id}" class="thumnail">
                                ${index == 0 ? bestsellers + smalldesc + desc : img} </a>
                                <div class="price">
                                    <a href="#" data-name="${product.name}" data-price="${index == 0 ? "" : (product.price).toPrecision(6)}" class="add-to-cart">${index == 0 ? " " : product.name}</a>
        
                                    <p>${index == 0 ? "" : (product.price).toPrecision(6)}</p>
                              
                                </div>
                                <span class="buy">
                                    ${index == 0 ? "" : `<a href=""><i class="fas fa-store"></i></a>
                                    <a href=""><i class="fas fa-heart"></i></a> 
                                    <a href=""><i class="fas fa-exchange-alt"></i></a>`}
                                </span>
                            </li>
                    
                        `
                })
                $(".product-list").innerHTML = this.htmls.join("");

            });


    },

    /* add localStorega */ 
    getProductDetail: function() {

        let products = $$(".thumnail");
        
        for(let i = 0; i < products.length; i++) {

            products[i].addEventListener("click", function() {
                let getImgs = products[i].getAttribute("data-name");
       
                window.location = "./detail.html"
            })
        }
    },

    /* Start  */ 
    start: function () {
        this.render()
        this.navbar()
        this.slides()
        this.promotion()
        this.getProductDetail()
    }
}

App.start();