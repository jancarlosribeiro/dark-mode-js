var body = document.querySelector("body")
var btnDarkMode = document.querySelector("#darkMode")

function darkMode(){
    body.classList.toggle("dark-Mode")
    /* ADICIONAR OU REMOVER UMA CLASSE */
}

btnDarkMode.addEventListener("click", darkMode)
