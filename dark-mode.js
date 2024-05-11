document.addEventListener('DOMContentLoaded', function() {
    const body = document.body;

    // Set default theme to dark mode
    body.classList.add('dark-mode');

    // Save theme preference to localStorage
    localStorage.setItem('darkMode', 'dark');
});
