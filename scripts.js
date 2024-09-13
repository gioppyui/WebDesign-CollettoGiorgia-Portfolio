function showSidebar(){
    const sidebar = document.querySelector('.sidebar')
    sidebar.style.display = 'flex'
}

function hideSidebar(){
    const sidebar = document.querySelector('.sidebar')
    sidebar.style.display = 'none'
}
document.addEventListener("DOMContentLoaded", function() {
    if (window.innerWidth <= 800) {
        document.documentElement.style.scrollBehavior = "auto";
    }
});    
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
