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
setInterval(showPopup, 600000);


// feels
function showDiv(id) {
    // Hide all divs first
    document.getElementById('smart').style.display = 'none';
    document.getElementById('stupid').style.display = 'none';

    // Show the selected div
    document.getElementById(id).style.display = 'block';
}

function feelingLucky() {
    // Randomly choose between 'smart' and 'stupid'
    var choices = ['smart', 'stupid'];
    var randomChoice = choices[Math.floor(Math.random() * choices.length)];
    showDiv(randomChoice);
}