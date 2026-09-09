export const carregarRodape = async() => {
    const rodape = document.getElementById("rodape") as HTMLDivElement;

    //Carregar o arquivo rodape.html.
    const conteudo = await fetch("rodape.html");

    //converter o conteudo do arquivo para texto.
    const html = await conteudo.text();
    
    //inserir o html no rodapé.
    rodape.innerHTML = html; 
    
};
carregarRodape();
