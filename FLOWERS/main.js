// Valentine's Day Website - Interactive Script

document.addEventListener('DOMContentLoaded', function() {
    const menuScreen = document.getElementById('menuScreen');
    const messageScreen = document.getElementById('messageScreen');
    const photoScreen = document.getElementById('photoScreen');
    const flowersScene = document.getElementById('flowersScene');
    const heartsContainer = document.getElementById('heartsContainer');

    // Button elements
    const btnMessage = document.getElementById('btnMessage');
    const btnFlowers = document.getElementById('btnFlowers');
    const btnPhoto = document.getElementById('btnPhoto');
    const backFromMessage = document.getElementById('backFromMessage');
    const backFromPhoto = document.getElementById('backFromPhoto');

    // Create floating hearts
    function createHeart() {
        const heart = document.createElement('div');
        heart.classList.add('floating-heart');
        heart.innerHTML = '❤️';
        heart.style.left = Math.random() * 100 + '%';
        heart.style.animationDuration = (Math.random() * 3 + 2) + 's';
        heart.style.opacity = Math.random() * 0.5 + 0.3;
        heart.style.fontSize = (Math.random() * 20 + 15) + 'px';
        heartsContainer.appendChild(heart);

        setTimeout(() => {
            heart.remove();
        }, 5000);
    }

    // Create hearts periodically
    setInterval(createHeart, 500);

    // Button - Read My Message
    btnMessage.addEventListener('click', function() {
        menuScreen.style.display = 'none';
        messageScreen.style.display = 'flex';
    });

    // Button - View Flowers
    btnFlowers.addEventListener('click', function() {
        // Redirect to the separate flower page
        window.location.href = 'flower.html';
    });

    // Button - Our Photo
    btnPhoto.addEventListener('click', function() {
        menuScreen.style.display = 'none';
        photoScreen.style.display = 'flex';
    });

    // Back from Message
    backFromMessage.addEventListener('click', function() {
        messageScreen.style.display = 'none';
        menuScreen.style.display = 'flex';
    });

    // Back from Photo
    backFromPhoto.addEventListener('click', function() {
        photoScreen.style.display = 'none';
        menuScreen.style.display = 'flex';
    });

    // Body class removal for container
    document.body.classList.remove('container');
});
