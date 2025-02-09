// Add smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Add hover effect for project image
const projectImage = document.querySelector('.project-image');
if (projectImage) {
    projectImage.addEventListener('mouseover', () => {
        projectImage.style.transform = 'scale(1.02)';
        projectImage.style.transition = 'transform 0.3s ease';
    });

    projectImage.addEventListener('mouseout', () => {
        projectImage.style.transform = 'scale(1)';
    });
}

// Update the project data
function updateProjectData(projectId) {
    // You can add more projects here
    const projects = {
        'digital-music-store': {
            title: "Digital Music Store Data Analysis using SQL",
            description: "Analyzed music store data using advanced SQL queries...",
            // Add more project details
        },
        // Add more projects here
    };

    const project = projects[projectId];
    if (project) {
        document.querySelector('h1').textContent = project.title;
        document.querySelector('.hero p').textContent = project.description;
        // Update other project details
    }
}

// Call this function when the page loads
// updateProjectData('digital-music-store');