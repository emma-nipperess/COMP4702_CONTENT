// script.js
window.onscroll = function() {
    highlightSection();
};

function highlightSection() {
    const sections = document.querySelectorAll('.content');
    const navLinks = document.querySelectorAll('.sidenav a');

    sections.forEach((section, index) => {
        const rect = section.getBoundingClientRect();
        if (rect.top <= 150 && rect.bottom >= 150) {
            navLinks.forEach(link => { link.style.color = '#818181'; });
            navLinks[index].style.color = '#f1f1f1';
        }
    });
}


function showPopup() {
    document.getElementById('minecraftPopup').style.display = 'block';
}

function closePopup() {
    document.getElementById('minecraftPopup').style.display = 'none';
}

// Set interval to show the popup every 10 minutes
//setInterval(showPopup, 600000);
