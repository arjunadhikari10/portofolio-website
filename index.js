const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelectorAll('.nav__link')

navToggle.addEventListener('click', () => {
    document.body.classList.toggle('nav-open');
});

navLinks.forEach(link => {
    link.addEventListener('click', () => {
        document.body.classList.remove('nav-open');
    })
})
// Get the Pulchowk Campus link element
const schoolLink = document.querySelector('.school');

// Add click event listener to toggle additional styling
schoolLink.addEventListener('click', function() {
    // Toggle class on click
    this.classList.toggle('clicked');
});



// Select all the bubble letters
const bubbles = document.querySelectorAll('.bubble-text span');

// Add event listener for each bubble
bubbles.forEach(bubble => {
    bubble.addEventListener('mouseover', function() {
        this.classList.add('popped'); // Add the pop class to animate
        setTimeout(() => {
            this.classList.remove('popped'); // Remove the pop class after animation
        }, 600); // 600ms to match the animation duration
    });
});

/* USING GPT GAMING EFFECT in name */
const nameElement = document.getElementById("name");
const hardHat = document.getElementById("hard-hat");

// Show hard hat on hover
nameElement.addEventListener('mouseover', () => {
    hardHat.style.display = 'block';
    hardHat.style.animation = 'hatFall 0.8s ease-out forwards';
});

// Hide hard hat when hover ends
nameElement.addEventListener('mouseleave', () => {
    hardHat.style.display = 'none';
});




