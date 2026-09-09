const formLogin = document.getElementById("formLogin");
const txtEmail = document.getElementById("txtEmail");
const txtSenha = document.getElementById("txtSenha");
const toggleSenhaBtn = document.getElementById('toggleSenha');
const divMensagem = document.getElementById("divMensagem");
// Alternar visibilidade da senha
toggleSenhaBtn.addEventListener('click', () => {
    const type = txtSenha.getAttribute('type') === 'password' ? 'text' : 'password';
    txtSenha.setAttribute('type', type);
    toggleSenhaBtn.textContent = type === 'password' ? 'Mostrar' : 'Ocultar';
});
// Evento de Submit do Formulário
formLogin.addEventListener("submit", (event) => {
    event.preventDefault();
    const email = txtEmail.value;
    const senha = txtSenha.value;
    if (email == "adm@gmail.com" && senha == "123456") {
        divMensagem.style.color = "green";
        divMensagem.textContent = "Login realizado com sucesso";
        localStorage.setItem("usuarioLogado", "sim");
        setTimeout(() => {
            window.location.href = "adm.html";
        }, 3000);
    }
    else {
        divMensagem.style.color = "red";
        divMensagem.textContent = "E-mail ou senha incorretos";
    }
});
export {};
//# sourceMappingURL=login.js.map