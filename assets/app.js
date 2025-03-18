
// on attend le chargement du DOM

  document.addEventListener('DOMContentLoaded', function() {
    // Sélectionner et stocké tous les éléments avec l'effet parallax
    const parallaxElements = document.querySelectorAll('.parallax');

    const hero = document.querySelector('.hero');
    function updateParallax() {
        // je recupere la position de la page
        const scrollTop = window.pageYOffset;
        if (hero) {
            hero.style.backgroundPositionY = scrollTop * 0.001 + 'px';
        }
        // je boucle sur les elements parallax
        parallaxElements.forEach(element => {
        // je recupere le parent de l'element
            const section = element.parentElement;
            // je recupere la position du parent

            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;

            // je verifie si l'element est visible
            // si la position de la page + la hauteur de la fenetre est superieur a la position du parent et la position de la page est inferieur a la position du parent + la hauteur du parent

            if (scrollTop + window.innerHeight > sectionTop && scrollTop < sectionTop + sectionHeight) {
            // je stocke la position de la page - la position du parent
                const yPos = (scrollTop - sectionTop) * 0.4;
                
                element.style.transform = `translateY(${yPos}px)`;
            }
        });
    }

    // Mettre à jour l'effet parallax lors du scroll
    window.addEventListener('scroll', updateParallax);
    
});
// initialiser l'effet parallax
updateParallax();