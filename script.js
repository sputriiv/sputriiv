const text = [
    "Mahasiswa Ilmu Komputer",
    "Web Developer Beginner",
    "UI Design Enthusiast"
];

let i = 0;
let j = 0;
let current = "";
let isDeleting = false;

function typeEffect(){
    current = text[i];
    
    if(!isDeleting){
        document.getElementById("typing").textContent = current.slice(0, ++j);
        if(j === current.length){
            isDeleting = true;
            setTimeout(typeEffect, 1000);
            return;
        }
    } else {
        document.getElementById("typing").textContent = current.slice(0, --j);
        if(j === 0){
            isDeleting = false;
            i = (i + 1) % text.length;
        }
    }
    setTimeout(typeEffect, 100);
}

typeEffect();
