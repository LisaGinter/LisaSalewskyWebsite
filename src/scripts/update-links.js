const LINKS = {
    mail: 'mailto:lisa.ginter97@gmail.com',
    github: 'https://github.com/LisaGinter',
    linkedin: 'https://www.linkedin.com/in/lisa-ginter-708a84196/',
    xing: 'https://www.xing.com/profile/Lisa_Salewsky',
    insta: 'https://www.instagram.com/lisairina.hanako/'
};

// Function to update href attributes on the page
function updateLinks() {
    // Find all <a> elements and update their href values
    document.getElementById('mail-link').href = LINKS.mail;
    document.getElementById('github-link').href = LINKS.github;
    document.getElementById('linkedin-link').href = LINKS.linkedin;
    document.getElementById('xing-link').href = LINKS.xing;
    document.getElementById('insta-link').href = LINKS.insta;
}

// Wait until the DOM is fully loaded
document.addEventListener('DOMContentLoaded', updateLinks);