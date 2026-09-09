const logoutBtn = document.getElementById('logoutBtn');
const divMensagem = document.getElementById("divMensagem");
logoutBtn.addEventListener('click', (event) => {
    event.preventDefault;
    divMensagem.textContent = "Sessão Encerrada com Sucesso!";
    divMensagem.style.color = "blue";
    setTimeout(() => {
        /*localStorage.clear();*/
        localStorage.removeItem("usuarioLogado");
        sessionStorage.clear();
        window.location.replace("login.html");
    }, 3500);
});
export {};
//# sourceMappingURL=logout.js.map