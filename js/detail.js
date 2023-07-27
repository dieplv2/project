const $ = document.querySelector.bind(document)
const $$ = document.querySelectorAll.bind(document)

const App = {
    /* onmouseover  set Atribute img*/
    showImg: function () {
        let imgs = $$(".img-item img");
        for (let i = 0; i < imgs.length; i++) {
            imgs[i].onmouseover = function () {
                let getImg = imgs[i].getAttribute('src');
                document.getElementById("img").setAttribute("src", getImg)
            }
        }
    },
    /* Nav mobile*/
    navmobile: function () {
        let navs = $(".icon-bar");
        navs.onclick = function () {
            let navMoble = $(".overlay");
            navMoble.style.height = "100%"
        }

        let id002 = $("#mobile");
        window.onclick = function (event) {
            if (event.target == id002) {
                id002.style.height = "0%";
            }
        }
    },

    render: function () {

    },
    start: function () {
        this.render()
        this.navmobile()
        this.showImg()
    }
}

App.start();