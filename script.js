document.addEventListener('DOMContentLoaded', function() {
    // DOM Elements
    const themeSelect = document.getElementById('theme');
    const animationSelect = document.getElementById('animation');
    const savePrefsBtn = document.getElementById('savePrefs');
    const animatedElement = document.getElementById('animatedElement');
    const triggerAnimationBtn = document.getElementById('triggerAnimation');
    
    // Load saved preferences
    loadPreferences();
    
    // Event Listeners
    savePrefsBtn.addEventListener('click', savePreferences);
    animatedElement.addEventListener('click', triggerAnimation);
    triggerAnimationBtn.addEventListener('click', triggerAnimation);
    
    // Theme change handler
    themeSelect.addEventListener('change', function() {
        applyTheme(this.value);
    });
    
    // Function to load preferences from localStorage
    function loadPreferences() {
        const savedTheme = localStorage.getItem('themePreference');
        const savedAnimation = localStorage.getItem('animationPreference');
        
        if (savedTheme) {
            themeSelect.value = savedTheme;
            applyTheme(savedTheme);
        }
        
        if (savedAnimation) {
            animationSelect.value = savedAnimation;
        }
    }
    
    // Function to save preferences to localStorage
    function savePreferences() {
        const selectedTheme = themeSelect.value;
        const selectedAnimation = animationSelect.value;
        
        localStorage.setItem('themePreference', selectedTheme);
        localStorage.setItem('animationPreference', selectedAnimation);
        
        // Show confirmation
        alert('Preferences saved successfully!');
    }
    
    // Function to apply the selected theme
    function applyTheme(theme) {
        // Remove all theme classes first
        document.body.classList.remove('light-theme', 'dark-theme', 'blue-theme');
        
        // Add the selected theme class
        if (theme !== 'light') {
            document.body.classList.add(`${theme}-theme`);
        }
    }
    
    // Function to trigger animation
    function triggerAnimation() {
        // First remove any existing animation classes
        animatedElement.classList.remove('bounce', 'rotate', 'pulse');
        
        // Force reflow to reset animation
        void animatedElement.offsetWidth;
        
        // Get the selected animation
        const selectedAnimation = animationSelect.value;
        
        // Add the selected animation class
        animatedElement.classList.add(selectedAnimation);
        
        // For demonstration, let's also change the box color during animation
        animatedElement.style.backgroundColor = getRandomColor();
    }
    
    // Helper function to generate random colors
    function getRandomColor() {
        const letters = '0123456789ABCDEF';
        let color = '#';
        for (let i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    }
});