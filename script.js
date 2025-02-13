document.addEventListener("DOMContentLoaded", function () {
    setTimeout(() => {
        document.querySelector(".photo").classList.add("visible");
    }, 2000);

    function createHeart() {
        const heart = document.createElement("div");
        heart.classList.add("heart");
        heart.innerHTML = Math.random() > 0.5 ? "🤍" : "🖤"; 

        heart.style.left = Math.random() * window.innerWidth + "px";
        heart.style.top = "-10px";
        heart.style.fontSize = Math.random() * 20 + 20 + "px";
        heart.style.animationDuration = Math.random() * 3 + 2 + "s";

        document.getElementById("hearts-container").appendChild(heart);

        setTimeout(() => {
            heart.remove();
        }, 5000);
    }

    setInterval(createHeart, 300);

    const music = document.getElementById("bg-music");


    updateVolume(0.5); 

    function playMusic() {
        music.play().catch(error => console.log("Music error:", error));
        document.removeEventListener("click", playMusic);
    }

    document.addEventListener("click", playMusic);

    function updateVolume(newValue) {
        music.volume = newValue; 
    }
});
