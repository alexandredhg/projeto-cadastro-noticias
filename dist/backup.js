var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
export const carregarMenuAcessibilidade = () => __awaiter(void 0, void 0, void 0, function* () {
    const menuAcessibilidade = document.getElementById("divMenuAcessibilidade");
    const conteudo = yield fetch("menuAcessibilidade.html");
    const html = yield conteudo.text();
    menuAcessibilidade.innerHTML = html;
    const btnAcessibilidade = document.getElementById("btnAcessibilidade");
    btnAcessibilidade.addEventListener("click", () => {
        const menuAcessibilidade = document.getElementById("menuAcessibilidade");
        menuAcessibilidade.hidden = !menuAcessibilidade.hidden;
        btnAcessibilidade.setAttribute("aria-expanded", String(!menuAcessibilidade.hidden));
    });
    const btnAumentarFonte = document.getElementById("btnAumentarFonte");
    btnAumentarFonte.addEventListener("click", () => {
        //let tamanhoFonte = parseInt(document.body.style.fontSize) || 16;
        let tamanhoFonte = parseInt(window.getComputedStyle(document.documentElement).fontSize) || 16;
        tamanhoFonte += 5;
        //document.body.style.fontSize = tamanhoFonte + "px";
        document.documentElement.style.fontSize = tamanhoFonte + "px";
    });
    const btnDiminuirFonte = document.getElementById("btnDiminuirFonte");
    btnDiminuirFonte.addEventListener("click", () => {
        //let tamanhoFonte = parseInt(document.body.style.fontSize) || 16;
        let tamanhoFonte = parseInt(window.getComputedStyle(document.documentElement).fontSize) || 16;
        tamanhoFonte -= 5;
        //document.body.style.fontSize = tamanhoFonte + "px";
        document.documentElement.style.fontSize = tamanhoFonte + "px";
    });
    const btnAlterarContraste = document.getElementById("btnAlterarContraste");
    btnAlterarContraste.addEventListener("click", () => {
        document.body.classList.toggle("contraste");
    });
});
carregarMenuAcessibilidade();
//# sourceMappingURL=backup.js.map