import { Noticia } from "./class/noticia.js"

const formCadNoticias = document.getElementById("formCadNoticias") as HTMLFormElement;
const txtTitulo = document.getElementById("txtTitulo") as HTMLInputElement;
const txtConteudo = document.getElementById("txtConteudo") as HTMLTextAreaElement;
const txtData = document.getElementById("txtData") as HTMLInputElement;
const divMensagem = document.getElementById("divMensagem") as HTMLDivElement;

const tituloPagina = document.getElementById("tituloPagina") as HTMLTitleElement;
const tituloCabecalho = document.getElementById("tituloCabecalho") as HTMLHeadElement;
const btnEnviar = document.getElementById("btnEnviar") as HTMLButtonElement;

const parametros = new URLSearchParams(window.location.search);
const id = parametros.get("id");

if(id) {
    tituloPagina.textContent = "Alteração de Notícia"
    tituloCabecalho.textContent = "Alteração de Notícia"
    btnEnviar.textContent = "Alterar"

    let noticia = Noticia.buscarNoticia(id);
    if(noticia) {
        txtTitulo.value = noticia.titulo;
        txtConteudo.value = noticia.conteudo;
        txtData.value = noticia.data;
    }
}

formCadNoticias.addEventListener("submit", (event) => {

    event.preventDefault();

    const titulo = txtTitulo.value;
    const conteudo = txtConteudo.value;
    const data = txtData.value;

    if(!id) {

        const noticia = new Noticia(titulo, conteudo, data)
        noticia.cadastrar();

        divMensagem.style.color = "green";
        divMensagem.textContent = "";
        divMensagem.textContent = "Cadastro Realizado com Sucesso";
        formCadNoticias.reset();

    }else{
        let noticiaAlterada = new Noticia(titulo, conteudo, data);
        noticiaAlterada.id = id;
        Noticia.alterar(noticiaAlterada);

        divMensagem.style.color = "green";
        divMensagem.textContent = "Alteração Realizada com Sucesso";
        setTimeout(() => {
            window.location.href = "listaNoticiasAdm.html";            
        }, 3000);
    } 

});

