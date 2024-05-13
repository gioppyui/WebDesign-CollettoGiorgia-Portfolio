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
});