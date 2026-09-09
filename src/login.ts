const formLogin = document.getElementById("formLogin") as HTMLFormElement;
const txtEmail = document.getElementById("txtEmail") as HTMLInputElement;
const txtSenha = document.getElementById("txtSenha") as HTMLInputElement;
const toggleSenhaBtn = document.getElementById('toggleSenha') as HTMLButtonElement;
const divMensagem = document.getElementById("divMensagem") as HTMLDivElement;

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

    if(email  == "adm@gmail.com" && senha == "123456"){
        divMensagem.style.color="green";
        divMensagem.textContent="Login realizado com sucesso";
        localStorage.setItem("usuarioLogado", "sim")
        setTimeout(() => {
            window.location.href="adm.html"
        },3000 );
    }
    else{
    divMensagem.style.color="red";
    divMensagem.textContent="E-mail ou senha incorretos"; 
    }

});