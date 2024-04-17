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
            navLinks.forEach(link => { 
                link.style.color = 'white';
                link.style.textShadow = " -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000";
            });
            navLinks[index].style.textShadow = " -1px -1px 0 #FFF, 1px -1px 0 #FFF, -1px 1px 0 #FFF, 1px 1px 0 #FFF";
            navLinks[index].style.color = 'purple';
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
