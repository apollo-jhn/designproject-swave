const APP_HTML_PATH = "app/"

let appDiv = document.getElementById("app");

// Startup
window.onload = () => {
    console.log("Website fully loaded!");
    loadContent("homepage.html");
};

// Load Content Function
function loadContent(html_path) {
    let path = APP_HTML_PATH + html_path
    appDiv.innerHTML = "";
    fetch(path).then(response => response.text()).then(data => appDiv.innerHTML = data).catch(error => console.error('Error loading content: ', error));
}

// Blur Toggle on App
document.getElementById("toggleBlurApp").addEventListener("click", function () {
    document.getElementById("app").classList.toggle("blur");
});