document.addEventListener('DOMContentLoaded', function () {
    fetchGithubProjects();
});

function fetchGithubProjects() {
    fetch('https://api.github.com/users/Javierbajamar/repos')
        .then(response => response.json())
        .then(data => displayGithubProjects(data))
        .catch(error => console.error('Error fetching GitHub projects:', error));
}

function displayGithubProjects(projects) {
    const projectsContainer = document.getElementById('github-projects');
    projects.forEach(project => {
        const projectElement = document.createElement('div');
        projectElement.className = 'p-4 border border-gray-300 rounded mb-4';
        projectElement.innerHTML = `
            <h3 class="font-bold">${project.name}</h3>
            <p>${project.description || 'No description available'}</p>
            <a href="${project.html_url}" target="_blank" class="text-blue-600 hover:underline">View on GitHub</a>
        `;
        projectsContainer.appendChild(projectElement);
    });
}