const textArray = [
    "Mahasiswa Ilmu Komputer",
    "Universitas Halu Oleo",
    "Calon Web Developer",
    "Pecinta Dunia Digital"
];

let typingElement = document.getElementById("typing");
let textIndex = 0;
let charIndex = 0;

function typeEffect() {
    if (charIndex < textArray[textIndex].length) {
        typingElement.innerHTML += textArray[textIndex].charAt(charIndex);
        charIndex++;
        setTimeout(typeEffect, 100);
    } else {
        setTimeout(eraseEffect, 1500);
    }
}

function eraseEffect() {
    if (charIndex > 0) {
        typingElement.innerHTML = textArray[textIndex].substring(0, charIndex - 1);
        charIndex--;
        setTimeout(eraseEffect, 50);
    } else {
        textIndex++;
        if (textIndex >= textArray.length) {
            textIndex = 0;
        }
        setTimeout(typeEffect, 200);
    }
}

document.addEventListener("DOMContentLoaded", function() {
    typeEffect();
});
