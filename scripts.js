document.addEventListener("DOMContentLoaded", function() {

    const biografiaLink = document.querySelector('a[href="#biografia"]');
    biografiaLink.addEventListener("click", function(event) {
        event.preventDefault();
        const biografiaSection = document.getElementById("biografia");
        biografiaSection.scrollIntoView({ behavior: "smooth" });
    });

    const progettiLink = document.querySelector('a[href="#progetti"]');
    progettiLink.addEventListener("click", function(event) {
        event.preventDefault();
        const progettiSection = document.getElementById("progetti");
        progettiSection.scrollIntoView({ behavior: "smooth" });
    });

    const contattiLink = document.querySelector('a[href="#contatti"]');
    contattiLink.addEventListener("click", function(event) {
        event.preventDefault();
        const contattiSection = document.getElementById("contatti");
        contattiSection.scrollIntoView({ behavior: "smooth" });
    });

    const carouselInner = document.querySelector('.carousel-inner');
    const items = document.querySelectorAll('.carousel-item');
    let currentIndex = 0;

    const moveCarousel = () => {
        currentIndex++;
        if (currentIndex >= items.length) {
            currentIndex = 0;
        }
        const offset = -currentIndex * 100;
        carouselInner.style.transform = `translateX(${offset}%)`;
    };

    setInterval(moveCarousel, 3000);
});

