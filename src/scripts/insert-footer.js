document.addEventListener('DOMContentLoaded', function() {
    
    const currentPath = window.location.pathname;


    // Check if we are on the index page
    let footerPath;
    if (currentPath.endsWith('/')||currentPath.endsWith('.app')||currentPath.includes('index')) {
        // On the index page, the footer path is relative to './src/pages'
        footerPath = './src/pages/footer.html';
    } else {
        // On subpages, the footer path is relative to '../pages'
        footerPath = '../pages/footer.html';
    }

    // Function to load footer from an external file
    function loadFooter() {
        fetch(footerPath)  // Path to footer.html (relative to the HTML page)
            .then(response => response.text())
            .then(data => {
                // Insert footer content into the footer element
                document.getElementById('sub-pages-footer').innerHTML += data;
            })
            .catch(error => console.error('Error loading footer:', error));
    }

    // Load the footer once the DOM is ready
    loadFooter();
});