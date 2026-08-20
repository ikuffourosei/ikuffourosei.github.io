document.addEventListener('DOMContentLoaded', () => {
    // 1. Mobile Menu Toggle
    const MenuLoader = document.querySelector('.menu-icon');
    const NavLoader = document.querySelector('.nav-links');
    const NavItems = document.querySelectorAll('.nav-links a');

    if (MenuLoader && NavLoader) {
        MenuLoader.addEventListener('click', () => {
            NavLoader.classList.toggle('active');
        });

        NavItems.forEach(link => {
            link.addEventListener('click', () => {
                NavLoader.classList.remove('active');
            });
        });
    }

    // 2. Interactive 3D Tilt Effect on Profile Image
    const profileImg = document.querySelector('.profile img');

    if (profileImg) {
        profileImg.addEventListener('mousemove', (e) => {
            const { left, top, width, height } = profileImg.getBoundingClientRect();
            const x = (e.clientX - left - width / 2) / 10;
            const y = (e.clientY - top - height / 2) / 10;
            
            profileImg.style.transform = `scale(1.05) rotateX(${-y}deg) rotateY(${x}deg)`;
        });

        profileImg.addEventListener('mouseleave', () => {
            profileImg.style.transform = 'scale(1) rotateX(0deg) rotateY(0deg)';
        });
    }

    // 3. Letter-by-letter reveal animation for the profile name
    const nameElement = document.getElementById('profile-name');
    
    if (nameElement) {
        // Trim whitespace and remove extra line breaks
        const text = nameElement.textContent.replace(/\s+/g, ' ').trim();
        nameElement.textContent = ''; 

        [...text].forEach((char, index) => {
            const span = document.createElement('span');
            span.textContent = char === ' ' ? '\u00A0' : char;
            span.className = 'letter';
            
            // Set animation delays individually to prevent CSS shorthand overrides
            const delay = (index * 0.05 + 0.3).toFixed(2);
            span.style.setProperty('animation-delay', `${delay}s, ${parseFloat(delay) + 0.8}s`);
            
            nameElement.appendChild(span);
        });
    }
});
