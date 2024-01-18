// First, let's check for any syntax errors or issues in the code.

let words = document.querySelectorAll(".word");
words.forEach((word) => {
    let letters = word.textContent.split("");
    word.textContent = "";
    letters.forEach((letter) => {
        let span = document.createElement("span");
        span.textContent = letter;
        span.className = "letter";
        word.append(span);
    });
});

let currentWordIndex = 0;
let maxWordIndex = words.length - 1;
words[currentWordIndex].style.opacity = "1";

let changeText = () => {
    let currentWord = words[currentWordIndex];
    let nextWord = currentWordIndex === maxWordIndex ? words[0] : words[currentWordIndex + 1];
    Array.from(currentWord.children).forEach((letter, i) => {
        setTimeout(() => {
            letter.className = "letter out";
        }, i * 80);
    });
    nextWord.style.opacity = "1";
    Array.from(nextWord.children).forEach((letter, i) => {
        letter.className = "letter behind";
        setTimeout(() => {
            letter.className = "letter in";
        }, 340 + i * 80);
    });
    currentWordIndex = currentWordIndex === maxWordIndex ? 0 : currentWordIndex + 1;
};

changeText();
setInterval(changeText, 3000);

// The code for changing text seems fine. Now, let's check the next part.

// circle skills/////////////////////

const circles = document.querySelectorAll(".circle");
circles.forEach((elem) => {
    let dots = elem.getAttribute("data-dots");
    let marked = elem.getAttribute("data-percent");
    let percent = Math.floor((dots * marked) / 100);
    let points = "";
    let rotate = 360 / dots;

    for (let i = 0; i < dots; i++) {
        points += `
        <div class="points" style="--i:${i}; --rot:${rotate}deg"></div>
        `;
    }
    elem.innerHTML = points;

    const pointsMarked = elem.querySelectorAll(".points");
    for (let i = 0; i < percent; i++) {
        pointsMarked[i].classList.add("marked");
    }
});

// The code for circles also seems fine. Let's continue.

// mix it up portfolio section 
var mixer = mixitup('.portfolio-gallery');

// active menu//////////////////////////////////

let menuLi = document.querySelectorAll(".header ul li a");
let section = document.querySelectorAll('section');

function activeMenu() {
    let len = section.length;
    while (--len && window.scrollY + 97 < section[len].offsetTop) { }
    menuLi.forEach(sec => sec.classList.remove("active"));
    menuLi[len].classList.add("active");
}

activeMenu();
window.addEventListener("scroll", activeMenu);

// The code for active menu and sticky navbar seems fine. Let's continue.

// sticky navbar//////////////////////////////////

const header = document.querySelector("header");
window.addEventListener("scroll", function () {
    header.classList.toggle("sticky", window.scrollY > 50);
});

// toggle icon navbar //////////////////////////////////
// let menuIcon = document.getElementById("menu-icon");
// let navlist = document.querySelector(".navlist");

// menuIcon.onclick = () => {
//     menuIcon.classList.toggle("bx-x");
//     navlist.classList.toggle("open");
// };
// window.onscroll = () => {
//     menuIcon.classList.remove("bx-x");
//     navlist.classList.remove("open");
// };

const observer = new IntersectionObserver(() => {
    entries.forEach((entry) => {
        if (entry.inIresecting) {
            entry.target.classList.add("show-items");
        } else {
            entry.target.classList.remove("show-items");
        }
    });
});

const scrollScale = document.querySelectorAll(".scroll-scale");
scrollScale.forEach((el) => observer(el));

const scrollBotton = document.querySelectorAll(".scroll-botton");
scrollBotton.forEach((el) => observer(el));

const scrollTop = document.querySelectorAll(".scroll-top");
scrollTop.forEach((el) => observer(el));

