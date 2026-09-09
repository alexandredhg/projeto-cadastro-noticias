const logoutBtn = document.getElementById('logoutBtn') as HTMLButtonElement;
const divMensagem = document.getElementById("divMensagem") as HTMLDivElement;

logoutBtn.addEventListener('click', (event) => {
  event.preventDefault;

  divMensagem.textContent = "Sessão Encerrada com Sucesso!"
  divMensagem.style.color = "blue";

  setTimeout(() => {
    /*localStorage.clear();*/
    localStorage.removeItem("usuarioLogado");
    sessionStorage.clear();
    window.location.replace("login.html");
  }, 3500);


});