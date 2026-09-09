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

