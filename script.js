
var d = new Date();
var n = d.getFullYear();
document.getElementById("footer").innerText = "Created By NK with ❤️ " + n;



var know = document.querySelector(".know-me");

var moreText = document.getElementById("more-text");

function hideButton() {
    know.className = "hide";
    moreText.innerText = "I am full stack Web Developer. Basically I use NoSql Database as Mongodb which is very famous and easy to keep data secure,Nodejs which is javacript runtime, Ejs as a template to make web pages to build web apps. I am graduating from NSIT,Delhi. I made some projects you can see below. I do programming as well.Languages: C++, Javascript, and Python"

}


function resume() {
    document.querySelector(".resume-button").className = "hide";
    document.querySelector(".resume-text").innerText = "😃 Thank You For Downloading,I Hope You Would Like To Hire Me🔥"
    document.querySelector(".resume-button").className = "hide";
}



function darkMode() {
    var element = document.body;
    var cardBody = document.querySelector(".card-body");
    var cards = document.querySelectorAll(".card");
    var lightMode = document.getElementById("light-mode");

    if (lightMode.innerText === "*DARK MODE*") {
        lightMode.innerText = "*LIGHT MODE*"
        cards.forEach(card => {
            cardBody.classList.add("cardColor");
            card.classList.add("cardBackground");
        });
        element.classList.add("dark");
    } else {
        lightMode.innerText = "*DARK MODE*"
        cards.forEach(card => {
            cardBody.classList.remove("cardColor");
            card.classList.remove("cardBackground");
        });
        element.classList.remove("dark");
    }


}

function closeNav() {
    document.getElementById("navbarTogglerDemo03").classList.remove("show");
}
