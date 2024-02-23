// Tableau des diapositives avec leurs images et légendes
const slides = [
    {
        "image": "slide1.jpg",
        "tagLine": "Impressions tous formats <span>en boutique et en ligne</span>"
    },
    {
        "image": "slide2.jpg",
        "tagLine": "Tirages haute définition grand format <span>pour vos bureaux et events</span>"
    },
    {
        "image": "slide3.jpg",
        "tagLine": "Grand choix de couleurs <span>de CMJN aux pantones</span>"
    },
    {
        "image": "slide4.png",
        "tagLine": "Autocollants <span>avec découpe laser sur mesure</span>"
    }
]

// Sélection des éléments HTML nécessaires
const fleche_gauche = document.querySelector(".arrow_left");
const fleche_droite = document.querySelector(".arrow_right");
const dots = document.querySelector(".dots");
const bannerImg = document.querySelector(".banner-img");
const tagline = document.querySelector("#banner p");

//  initialise une variable qui va garder en mémoire l'index de la diapositive actuelle
let currentIndex = 0;

// Ajout des points (dots) correspondant à chaque diapositive
slides.forEach((slide, index) => {
    const dot = document.createElement("div");
    dot.classList.add("dot");
    dots.appendChild(dot);

    // Ajout d'un écouteur d'événements pour chaque point
    dot.addEventListener("click", () => {
        showSlide(index);
    });
});

// Affichage de la première diapositive au chargement de la page
showSlide(currentIndex);

// Ajout d'écouteurs d'événements pour les flèches gauche et droite
fleche_gauche.addEventListener("click", () => {
    currentIndex= currentIndex-1;
    if(currentIndex<0){
        currentIndex=slides.length-1
    }
    showSlide(currentIndex);
});

fleche_droite.addEventListener("click", () => {
    currentIndex = currentIndex+1
    // slides.length est super au dernier element du tableau
    if(currentIndex>slides.length-1){
        currentIndex=0
    }
    showSlide(currentIndex);
});

// Fonction pour afficher une diapositive spécifique
function showSlide(index) {
    const slide = slides[index];
    // Mise à jour de l'image et de la légende de la diapositive
    bannerImg.src = `./assets/images/slideshow/${slide.image}`;
    tagline.innerHTML = `${slide.tagLine}`;
    // Mise à jour des points pour indiquer la diapositive actuelle
    updateDots();
}

// Fonction pour mettre à jour l'état des points
function updateDots() {
    const allDots = document.querySelectorAll(".dot");
    allDots.forEach((dot, index) => {
        if (index === currentIndex) {
            dot.classList.add("dot_selected");
        } else {
            dot.classList.remove("dot_selected");
        }
    });
}
