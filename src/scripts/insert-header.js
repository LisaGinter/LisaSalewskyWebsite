document.addEventListener('DOMContentLoaded', function() {
    
    const currentPath = window.location.pathname;
    const currentLanguage = currentPath.includes('de') ? 'de' : 'en';
    const headerId = `header-${currentLanguage}`;  // Set headerId to either 'header-en' or 'header-de'
    
    // Check if we are on the index page
    let headerPath;
    if (currentPath.endsWith('/')||currentPath.endsWith('.app')||currentPath.includes('index')) {
        // On the index page, the footer path is relative to './src/pages'
        headerPath = './src/pages/header.html';
    } else {
        // On subpages, the header path is relative to '../pages'
        headerPath = '../pages/header.html';
    }

    console.log(document.getElementById(headerId).style.display);
    const headerElement = document.getElementById(headerId);

    const computedStyle = window.getComputedStyle(headerElement);
    console.log('Computed style display:', computedStyle.display);
    // Function to load header from an external file
    function loadHeader() {
        fetch(headerPath)  // Path to header.html (relative to the HTML page)
            .then(response => response.text())
            .then(data => {
                // Insert header content into the header element
                document.getElementById(headerId).innerHTML += data;
                // Call the function to display the correct language header
                switchHeaderLanguage();
            })
            .catch(error => console.error('Error loading header:', error));
    }


    // Function to switch the header content based on language
    function switchHeaderLanguage() {
        // Get the current page language from the URL (example: 'index-en.html' or 'index-de.html')
        const currentLanguage = currentPath.includes('en') ? 'en' : 'de';

        // Show the appropriate language header
        if (currentLanguage === 'en') {
            document.getElementById('header-en').style.display = 'block';
            document.getElementById('header-de').style.display = 'none';
        } else {
            document.getElementById('header-en').style.display = 'none';
            document.getElementById('header-de').style.display = 'block';
        }
    }

    
    // Function to switch between languages
    function switchLanguage(lang) {
        if (lang === 'en') {
            window.location.href = window.location.pathname.replace('-de', '-en');
        } else {
            window.location.href = window.location.pathname.replace('-en', '-de');
        }
    }
    
    // Load the header once the DOM is ready
    loadHeader();
});