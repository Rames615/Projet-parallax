

// document.addEventListener("DOMContentLoaded", function () {
//     const parallaxElements = document.querySelectorAll(".parallax");
  
//     function updateParallax() {
//       let scrollY = window.scrollY;
  
//       parallaxElements.forEach((element, index) => {
//         let speed = 0.2 + index * 0.1; 
//         let yPos = -(scrollY * speed);
//         element.style.transform = `translateY(${yPos}px)`;
//       });
  
//       requestAnimationFrame(updateParallax);
//     }
  
//     updateParallax(); 
//   });
  

document.addEventListener('DOMContentLoaded', function() {
    // Sélectionner tous les éléments avec l'effet parallax
    const parallaxElements = document.querySelectorAll('.parallax');

    const hero = document.querySelector('.hero');
    function updateParallax() {
        const scrollTop = window.pageYOffset;
        if (hero) {
            hero.style.backgroundPositionY = scrollTop * 0.1 + 'px';
        }

        parallaxElements.forEach(element => {
        
            const section = element.parentElement;

            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;

            if (scrollTop + window.innerHeight > sectionTop && scrollTop < sectionTop + sectionHeight) {

                const yPos = (scrollTop - sectionTop) * 0.4;
                
                element.style.transform = `translateY(${yPos}px)`;
            }
        });
    }

    // Mettre à jour l'effet parallax lors du scroll
    window.addEventListener('scroll', updateParallax);
    updateParallax();
});
