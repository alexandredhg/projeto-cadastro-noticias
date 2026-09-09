import{Noticia} from "./class/noticia.js"
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

    listaNoticias.forEach(noticia => {
        linha = tabela.insertRow();

        linha.insertCell().textContent = noticia.titulo;
        linha.insertCell().textContent = noticia.conteudo;
        linha.insertCell().textContent = noticia.data;

    })

}