// Declarando variáveis
const languageButton = document.querySelector(".language-button");
const languagePanel = document.querySelector(".language-panel");
const gearIcon = document.querySelector(".gear-icon");
const copy = document.querySelector(".email-copy-ico");
const copyDiv = document.querySelector(".copy-mail");
const copyIMG = document.querySelector(".imgcopy");
const txtCopiar = document.querySelector(".txt-copiar");
const email = document.querySelector("#email-text");
console.log(email.innerHTML);
let i = 0;

// Carregando script ao entrar na página
document.addEventListener("DOMContentLoaded", function () {
  languagePanel.style.animation = "none";
  languagePanel.style.animation = "fade-in 1.5s forwards";
  languageButton.classList.toggle("active");
  setTimeout(() => {
    if (languageButton.classList.contains("active") && i == 0) {
      console.log("Fechando automaticamente.");
      languageButton.classList.remove("active");
    }
  }, 5000);
});

// Ativando language button ao clicar
languageButton.addEventListener("click", function () {
  languagePanel.style.animation = "none";
  languagePanel.style.animation = "fade-in 1s forwards";

  if (languageButton.classList.contains("active")) {
    console.log("Fechando");
    languagePanel.style.animation = "fade-out 1s forwards";
    i++;
    setTimeout(() => {
      this.classList.toggle("active");
    }, 1000);
  } else {
    //languagePanel.style.animation = "fade-in 1.5s forwards";
    this.classList.toggle("active");
  }
});

// Removendo o botão ao clicar fora da div
window.addEventListener("click", (event) => {
  if (
    languageButton.classList.contains("active") &&
    !event.target.closest(".language-button")
  ) {
    languagePanel.style.animation = "fade-out 1s forwards";
    i++;
    setTimeout(function () {
      console.log("Fechando (click fora da div).");
      languageButton.classList.remove("active");
    }, 1000);
  }
});

// Copiar
function copiarTexto(texto) {
  navigator.clipboard
    .writeText(texto)
    .then(() => {
      console.log("Texto copiado com sucesso!");
    })
    .catch((err) => {
      console.error("Erro ao copiar o texto: ", err);
    });
}
copy.addEventListener("click", () => {
  if (
    txtCopiar.innerHTML != " Copiar email" && txtCopiar.innerHTML != " Copiado!") {
      copy.style.pointerEvents = "none";
      copyIMG.src = "check.svg";
      txtCopiar.innerHTML = " Copied!";
      copiarTexto(email.innerHTML);
  
      setTimeout(() => {
        copyIMG.src = "clipboard.svg";
        txtCopiar.innerHTML = " Copy email";
        copy.style.pointerEvents = "auto";
      }, 1500);
  }
  else {
    copy.style.pointerEvents = "none";
    copyIMG.src = "assets/check.svg";
    txtCopiar.innerHTML = " Copiado!";
    copiarTexto(email.innerHTML);

    setTimeout(() => {
      copyIMG.src = "assets/clipboard.svg";
      txtCopiar.innerHTML = " Copiar email";
      copy.style.pointerEvents = "auto";
    }, 1500);
  }
});
