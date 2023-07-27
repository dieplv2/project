const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document)

let open = $(".icon-open");
let btnClose = $(".btnclose");

const App = {
    /* Promotion */

    promotion: function () {
        let promotions = $$(".promotion-item");
        let _btn = $$(".btn-click");
        let maxWidth = $("#promotion").offsetWidth;
        console.log(maxWidth);

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
                    promotions[i].style.display = "none"

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

    datas: [
        { id: 1, name: "Ao nam", cat_id: 1, sku: 123, price: 150.000, price_sale: 90.000, img: "./img/p2.jpg", decs: "header headerheaderheaderheaderheader" },
        { id: 2, name: "Ao nu", cat_id: 2, sku: 456, price: 150.000, price_sale: 90.000, img: "./img/p3.jpg", decs: "header headerheaderheaderheaderheader" },
        { id: 3, name: "Ao nu", cat_id: 3, sku: 789, price: 150.000, price_sale: 90.000, img: "./img/p1.jpg", decs: "header headerheaderheaderheaderheader" },
        { id: 4, name: "Ao nu", cat_id: 3, sku: 123, price: 150.000, price_sale: 90.000, img: "./img/p3.jpg", decs: "header headerheaderheaderheaderheader" },
        { id: 5, name: "Ao nu", cat_id: 3, sku: 452, price: 150.000, price_sale: 90.000, img: "./img/p2.jpg", decs: "header headerheaderheaderheaderheader" },
        { id: 6, name: "Ao Nam", cat_id: 3, sku: 123, price: 150.000, price_sale: 90.000, img: "./img/p1.jpg", decs: "header headerheaderheaderheaderheader" },
        { id: 7, name: "Ao nu", cat_id: 2, sku: 123, price: 150.000, price_sale: 90.000, img: "./img/p2.jpg", decs: "header headerheaderheaderheaderheader" },
        { id: 8, name: "Ao nu", cat_id: 2, sku: 123, price: 150.000, price_sale: 90.000, img: "./img/p3.jpg", decs: "header headerheaderheaderheaderheader" },
        { id: 9, name: "Ao nu", cat_id: 1, sku: 123, price: 150.000, price_sale: 90.000, img: "./img/p1.jpg", decs: "header headerheaderheaderheaderheader" },
        { id: 10, name: "Ao nu", cat_id: 2, sku: 123, price: 150.000, price_sale: 90.000, img: "./img/p2.jpg", decs: "header headerheaderheaderheaderheader" },
    ],
    /*Render data*/
    render: function () {
        let bestsellers = "<h2>bestsellers </h2>"
        let smalldesc = "<i>The best productions from us</i>"
        let desc = "<p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nulla deleniti amet et offici recusandae fuga asperiores eos ad doloribus. </p> "

        const setAtt = document.createAttribute("class");
        let Att = setAtt.value = "introduce";

        this.htmls = this.datas.map(function (data, index) {
            let img = `<img src="${data.img}" alt="" style="width: 100%;">`
            return `
                    <li class="${index == 0 ? Att : ''}">
                        <a href="${data.id}">
                        ${index == 0 ? bestsellers + smalldesc + desc : img} </a>
                        <div class="price">
                            <p>${index == 0 ? " " : data.name}</p>

                            <a href="">${index == 0 ? "" : (data.price).toPrecision(6)}</a>
                            <p>${index == 0 ? "" : `<button>Add store</button>`}</p>
                        </div>
                    </li>
            
                `
        })
        $(".product-list").innerHTML = this.htmls.join("");
    },

    start: function () {
        this.render()
        this.navbar()
        this.slides()
        this.promotion()
    }
}

App.start();