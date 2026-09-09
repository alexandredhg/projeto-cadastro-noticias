import { Noticia } from "./class/noticia.js"

window.onload = () => {
    let listaNoticias = Noticia.listar();
    let tabela = document.getElementById("tabelaNoticias") as HTMLTableElement;

    tabela.innerHTML = "";

    //Cabeçalho da Tabela
    let linha = tabela.insertRow();

    let thTitulo = document.createElement("th");
    thTitulo.textContent = "Título";
    thTitulo.classList.add("titulo")
    linha.appendChild(thTitulo);

    let thConteudo = document.createElement("th");
    thConteudo.textContent = "Conteúdo";
    thConteudo.classList.add("conteudo")
    linha.appendChild(thConteudo);

    let thData = document.createElement("th");
    thData.classList.add("data")
    thData.textContent = "Data";
    linha.appendChild(thData);

    let thAcoes = document.createElement("th");
    thAcoes.textContent = "Ações";
    thAcoes.classList.add("acoes")
    thAcoes.colSpan = 2;
    linha.appendChild(thAcoes);


    listaNoticias.forEach(noticia => {
        linha = tabela.insertRow();

        let tdTitulo = linha.insertCell();
        tdTitulo.textContent = noticia.titulo;
        //tdTitulo.classList.add("");

        
        let tdConteudo = linha.insertCell();
        tdConteudo.textContent = noticia.conteudo;
        //tdConteudo.classList.add("");

        
        let tdData = linha.insertCell();
        tdData.textContent = noticia.data;
        //tdData.classList.add("");

        let btnExcluir = document.createElement("button");
        btnExcluir.textContent = "Excluir";
        btnExcluir.classList.add("excluir")

        btnExcluir.addEventListener("click", () => {
            if (confirm("Deseja Realmente Excluir a Notícia" + noticia.titulo + "?")) {
                Noticia.excluir(noticia.id)
                alert("Notícia Excluida com Sucessso");
                window.location.reload();
            }
        });

        linha.insertCell().appendChild(btnExcluir);

        let btnAlterar = document.createElement("button");
        btnAlterar.textContent = "Alterar";
        btnAlterar.classList.add("alterar")

        btnAlterar.addEventListener("click", () => {
            window.location.href = `cadNoticias.html?id=${noticia.id}`;
        });

        linha.insertCell().appendChild(btnAlterar);

    });




}