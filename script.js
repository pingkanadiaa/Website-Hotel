document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', event => {
        event.preventDefault();
        const target = document.querySelector(link.getAttribute('href'));
        target.scrollIntoView({ behavior: 'smooth' });
    });
    document.getElementById("contact-form").addEventListener("submit", function(event) {
        event.preventDefault();
        document.getElementById("thank-you-message").style.display = "block";
        document.getElementById("contact-form").reset();
        setTimeout(function() {
            document.getElementById("thank-you-message").style.display = "none";
        }, 5000); 
    });
});

