// Function to toggle visibility of job details
function toggleDetails(jobId) {
    const jobDetails = document.getElementById(jobId);
    if (jobDetails) {
        jobDetails.classList.toggle('hidden');
    }
}

// Function to initialize event listeners
function initialize() {
    // Bind the click event for 'View Details' buttons
    const buttons = document.querySelectorAll('.toggle-details');
    buttons.forEach(button => {
        button.addEventListener('click', (event) => {
            const targetId = event.target.getAttribute('data-target');
            toggleDetails(targetId);
        });
    });
}

// Dynamic section loading
const sections = ['header', 'summary', 'experience', 'education', 'projects', 'skills', 'footer'];

sections.forEach(section => {
    fetch(`sections/${section}.html`)
        .then(response => response.text())
        .then(html => {
            document.getElementById(section).innerHTML = html;
            // Initialize JavaScript for this section after it's loaded
            initialize();
        })
        .catch(err => console.error(`Failed to load ${section}:`, err));
});
