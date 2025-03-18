function switchLanguage(lang) {
    if (lang === 'en') {
        window.location.href = window.location.pathname.replace('-de', '-en');
    } else {
        window.location.href = window.location.pathname.replace('-en', '-de');
    }
}