// Simple script to add interactivity, like a welcome message when the page loads

window.onload = function() {
    alert("Welcome to my portfolio website!");
};

// Smooth scroll effect for navigation
document.querySelectorAll('nav ul li a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Additional functionality to highlight clicked project (active state)
const projectElements = document.querySelectorAll('.project');
projectElements.forEach(project => {
    project.addEventListener('click', () => {
        // Remove active class from all projects
        projectElements.forEach(proj => proj.classList.remove('active'));
        
        // Add active class to clicked project
        project.classList.add('active');
    });
});
