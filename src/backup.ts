export const carregarMenuAcessibilidade = async () => {
    const menuAcessibilidade = document.getElementById("divMenuAcessibilidade") as HTMLDivElement;
    const conteudo = await fetch("menuAcessibilidade.html")
    const html = await conteudo.text();
    menuAcessibilidade.innerHTML = html;

    const btnAcessibilidade = document.getElementById("btnAcessibilidade") as HTMLButtonElement;
    btnAcessibilidade.addEventListener("click", () => {
        const menuAcessibilidade = document.getElementById("menuAcessibilidade") as HTMLDivElement;
        menuAcessibilidade.hidden = !menuAcessibilidade.hidden;
        btnAcessibilidade.setAttribute("aria-expanded", String(!menuAcessibilidade.hidden));
    });

    const btnAumentarFonte = document.getElementById("btnAumentarFonte") as HTMLButtonElement;
    btnAumentarFonte.addEventListener("click", () => {

        //let tamanhoFonte = parseInt(document.body.style.fontSize) || 16;
        let tamanhoFonte = parseInt(window.getComputedStyle(document.documentElement).fontSize) || 16;

        tamanhoFonte += 5;
        //document.body.style.fontSize = tamanhoFonte + "px";
        document.documentElement.style.fontSize = tamanhoFonte + "px";
    });

    const btnDiminuirFonte = document.getElementById("btnDiminuirFonte") as HTMLButtonElement;
    btnDiminuirFonte.addEventListener("click", () => {

        //let tamanhoFonte = parseInt(document.body.style.fontSize) || 16;
        let tamanhoFonte = parseInt(window.getComputedStyle(document.documentElement).fontSize) || 16;

        tamanhoFonte -= 5;
        //document.body.style.fontSize = tamanhoFonte + "px";
        document.documentElement.style.fontSize = tamanhoFonte + "px";
    });

    const btnAlterarContraste = document.getElementById("btnAlterarContraste") as HTMLButtonElement;
    btnAlterarContraste.addEventListener("click", () => {
        document.body.classList.toggle("contraste");
    });


}

carregarMenuAcessibilidade();










.skipLink {
    left: -9999px;
    top: 20px; /* Define a distância do topo aqui */
    position: absolute;
    text-decoration: none;
    background-color: blue;
    border: none;
    color: white;
    padding: 10px;
    z-index: 9999; /* Garante que o botão fique visível por cima de outros elementos */
}


.skipLink:focus {
    /*position: static;*/
    left: 20px; /* Traz o botão de volta para a tela mantendo a posição topo */
    position: absolute; /* Mantém como absolute para respeitar o 'top' */
    outline-offset: 3px;
}

