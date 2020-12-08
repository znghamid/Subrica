
function toggleTheme() {
    if (localStorage.getItem('SubricaTheme') === 'dark-theme') {
        localStorage.setItem('SubricaTheme', 'light-theme');
        document.getElementById('slider').checked = true;
        document.getElementById("light-theme").disabled = false;
    } else {
        localStorage.setItem('SubricaTheme', 'dark-theme');
        document.getElementById('slider').checked = false;
        document.getElementById("light-theme").disabled = true;
    }
}

(function () {
    if (localStorage.getItem('SubricaTheme') === 'light-theme') {
        localStorage.setItem('SubricaTheme', 'light-theme');
        try {
            document.getElementById('slider').checked = true;
        } catch (error) {
            // 
        }
        document.getElementById("light-theme").disabled = false;
    } else if (localStorage.getItem('SubricaTheme') === 'dark-theme'){
        localStorage.setItem('SubricaTheme', 'dark-theme');
        try {
            document.getElementById('slider').checked = false;
        } catch (error) {
            // 
        }
        document.getElementById("light-theme").disabled = true;
    } else {
        localStorage.setItem('SubricaTheme', 'dark-theme');
        try {
            document.getElementById('slider').checked = false;
        } catch (error) {
            // 
        }
        document.getElementById("light-theme").disabled = true;
    }
})();