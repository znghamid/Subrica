// function to set a given theme/color-scheme
function setTheme(themeName) {
    localStorage.setItem('SubricaTheme', themeName);
    document.documentElement.className = themeName;
}

// function to toggle between light and dark theme
function toggleTheme() {
    if (localStorage.getItem('SubricaTheme') === 'theme-dark') {
        setTheme('theme-light');
    } else {
        setTheme('theme-dark');
    }
}

// Immediately invoked function to set the theme on initial load
(function () {
    if (localStorage.getItem('SubricaTheme') === 'theme-dark') {
        setTheme('theme-dark');
        document.getElementById('slider').checked = false;
    } 
    else if(localStorage.getItem('SubricaTheme') === 'theme-light'){
        setTheme('theme-light');
        document.getElementById('slider').checked = true;
    } 
    else {
        setTheme('theme-dark');
        document.getElementById('slider').checked = false;
    }
})();