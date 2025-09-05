window.addEventListener('DOMContentLoaded', () => {
    const button = document.getElementById('button');
    
    // Listen for clicks on the button
    button.addEventListener('click', () => {
        // Get the actual, current dimensions of the button
        const buttonWidth = button.offsetWidth;
        const buttonHeight = button.offsetHeight;
        
        // Use the dynamic dimensions to calculate the boundaries
        const maxWidth = window.innerWidth - buttonWidth;
        const maxHeight = window.innerHeight - buttonHeight;
        
        // Generate new random positions based on the correct boundaries
        button.style.left = Math.floor(Math.random() * (maxWidth + 1)) + 'px';
        button.style.top = Math.floor(Math.random() * (maxHeight + 1)) + 'px';
    });
});
