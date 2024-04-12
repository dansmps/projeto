function toggleMode() {
    const html = document.documentElement;

    if (html.classList.contains("light")) {
        html.classList.remove("light");
        img.setAttribute('src', './acesions/daniel.jpeg');
    } else {
        html.classList.add("light");
        img.setAttribute('src', './acesions/daniellight.jpeg');
    }
}

// Selecionando o elemento de imagem
const img = document.querySelector('img');

// Chamar a função toggleMode() quando necessário
toggleMode();



