const darkModeTheme = () => {
    document.querySelector("html").setAttribute("data-bs-theme", "dark");
    document.querySelector("#togglerIcon").setAttribute("class", "bi bi-sun-fill");
    document.querySelector("#btnTheme").setAttribute("class", "btn btn-light");
}

const lightModeTheme = () => {
    document.querySelector("html").setAttribute("data-bs-theme", "light");
    document.querySelector("#togglerIcon").setAttribute("class", "bi bi-moon-fill");
    document.querySelector("#btnTheme").setAttribute("class", "btn btn-dark");
}

const cambiarTema = () => {
    console.log("yeah, this works")
document.querySelector("html").getAttribute("data-bs-theme") === "dark" ?
lightModeTheme() : darkModeTheme() ;
}