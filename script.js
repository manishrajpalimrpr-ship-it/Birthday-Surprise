
console.log(confetti);
const verifyBtn = document.getElementById("verifyBtn");

verifyBtn.addEventListener("click", function () {

    const day = document.getElementById("day").value;
    const month = document.getElementById("month").value;

    // 👇 Apni friend ka birthday
    if (day == "9" && month == "8") {

        document.querySelector(".verification-screen").style.display = "none";
        document.querySelector(".welcome-screen").style.display = "flex";

    } else {

        alert("❌ Oops! Wrong Birthday ❤️");

    }

});

const btn = document.getElementById("startBtn");

btn.addEventListener("click", function () {

    document.querySelector(".welcome-screen").innerHTML = `
<div id="countdown" class="countdown">
    <div class="count-number">3</div>
    <div class="count-text">Get Ready ❤️</div>
</div>
`;

    let count = 3;

    const timer = setInterval(() => {

        count--;

        if (count > 0) {

            document.getElementById("countdown").innerHTML = `
    <div class="count-number">${count}</div>
    <div class="count-text">Get Ready ❤️</div>
`;

        } else {

            clearInterval(timer);
document.querySelector(".welcome-screen").innerHTML = `

<img id="slider" src="Images/photo.jpg" class="birthday-photo">

<h1 class="fade-in">🎂 Happy Birthday , PANDA! ❤️</h1>

<p id="typingMessage" class="fade-in" style="font-size:24px;margin-top:20px;"></p>
<p id="signature">Made with❤️ by Manish</p>
`;

const music = document.createElement("audio");
music.id = "birthdayMusic";
music.src = "Music/Happy Birthday song.mp3";
music.loop = true;
music.autoplay = true;
document.body.appendChild(music);

music.play().catch(() => {});
            
setTimeout(() => {
    confetti({
        particleCount: 150,
        spread: 120,
        origin: { x: 0.2, y: 0.6 }
    });

    confetti({
        particleCount: 150,
        spread: 120,
        origin: { x: 0.8, y: 0.6 }
    });
}, 300);
            startSlider();
            typeMessage();
document.getElementById("balloons").style.display = "block";
        }

    }, 1000);

});


function createHeart() {

    const heart = document.createElement("div");

    heart.className = "heart";

    heart.innerHTML = "❤️";

    heart.style.left = Math.random() * 100 + "vw";

    document.body.appendChild(heart);

    setTimeout(() => {

        heart.remove();

    }, 6000);

}

setInterval(createHeart, 500);


function startSlider() {

    const photos = [

        "Images/photo.jpg",
        "Images/panda.jpg",
        "Images/photo2.jpg",
        "Images/photo3.jpg",
        "Images/photo4.jpg",
        "Images/photo5.jpg"

    ];

    let current = 0;

    setInterval(() => {

        const img = document.getElementById("slider");

        if (!img) return;

        img.classList.add("fade");

        setTimeout(() => {

            current++;

            if (current >= photos.length) {
                current = 0;
            }

            img.src = photos[current];

            img.classList.remove("fade");

        }, 800);

    }, 3000);

}
function typeMessage() {

    const text = "";

    let i = 0;

    const target = document.getElementById("typingMessage");

    const typing = setInterval(() => {

        if (i < text.length) {
            target.innerHTML += text.charAt(i);
            i++;
       } else {
    clearInterval(typing);
    document.getElementById("signature").style.opacity = "1";

    const nextBtn = document.createElement("button");
    nextBtn.innerHTML = "Next ❤️";
    nextBtn.className = "next-btn";

   nextBtn.onclick = function () {
    const style = document.createElement("style");

style.innerHTML = `
    .final-surprise {
        width: 100%;
        height: 100vh;
        box-sizing: border-box;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        text-align: center;
        padding: 15px;
        overflow: hidden;
    }

    .final-photo {
        width: auto;
        height: 48vh;
        max-width: 85%;
        object-fit: contain;
        border-radius: 20px;
    }

    .final-title {
        margin: 10px 0 5px;
        color: white;
        font-size: 28px;
    }

    .final-message {
        margin: 0;
        max-width: 90%;
        color: white;
        font-size: 18px;
        line-height: 1.4;
    }
`;

document.head.appendChild(style);

document.head.appendChild(style);

    const welcome = document.querySelector(".welcome-screen");

    welcome.innerHTML = `
        <div class="final-surprise">

            <img src="Images/panda-birthday.jpg" class="final-photo">

            <h2 class="final-title">
                Panda ❤️
            </h2>

            <p class="final-message">
                Ye chhota sa surprise sirf tumhare liye hai ❤️<br>
                Bas ek wish hai... hamesha aise hi smile karti rehna. 🐼✨
            </p>

        </div>
    `;

    welcome.style.display = "flex";
};

    document.getElementById("typingMessage").appendChild(nextBtn);
}

    }, 35);

}
const balloonBox = document.getElementById("balloons");

const colors = [
    "#ff4d6d",
    "#ffbe0b",
    "#3a86ff",
    "#06d6a0",
    "#8338ec",
    "#ff006e"
];

function createBalloon() {
    const balloon = document.createElement("div");
    balloon.classList.add("balloon");

    balloon.style.left = Math.random() * 100 + "vw";
    balloon.style.background =
        colors[Math.floor(Math.random() * colors.length)];

    balloon.style.animationDuration = (6 + Math.random() * 4) + "s";

    balloonBox.appendChild(balloon);

    setTimeout(() => {
        balloon.remove();
    }, 10000);
}

setInterval(createBalloon, 600);