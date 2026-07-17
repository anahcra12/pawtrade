// CampusMart — client-side JS
// Hover-box preview + scale effects are handled entirely in CSS (see style.css).
// Add fetch-driven behavior here later, e.g. loading /marketplace products
// into #latest-products without a full page reload.

document.addEventListener('DOMContentLoaded', () => {
  console.log('CampusMart loaded');
});
const cards = document.querySelectorAll(".hero-card");

cards.forEach(card=>{

    const video = card.querySelector("video");

    card.addEventListener("mouseenter",()=>{

        video.currentTime=0;

        video.play();

    });

    card.addEventListener("mouseleave",()=>{

        video.pause();

        video.currentTime=0;

    });

});
