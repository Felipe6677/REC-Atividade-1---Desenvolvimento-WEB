const loginForm = document.getElementById("loginForm");
const loginBtn = document.getElementById("loginBtn");
const userInput = document.getElementById("userInput");
const passInput = document.getElementById("passInput");

const modalBack = document.getElementById("modalBack");
const forgotBtn = document.getElementById("forgotBtn");
const cancelRecover = document.getElementById("cancelRecover");
const sendRecover = document.getElementById("sendRecover");
const recoverInput = document.getElementById("recoverInput");

function validateForm() {
  loginBtn.disabled =
    userInput.value.trim() === "" || passInput.value.trim() === "";
}

userInput.addEventListener("input", validateForm);
passInput.addEventListener("input", validateForm);

loginForm.addEventListener("submit", (e) => {
  e.preventDefault();
  if (
    userInput.value.trim().toLowerCase() === "usuario@example.com" &&
    passInput.value === "senha123"
  ) {
    alert("Login realizado com sucesso (simulado)!");
  } else {
    alert("Erro: usuário ou senha incorretos.");
  }
});

forgotBtn.addEventListener("click", () => {
  modalBack.style.display = "flex";
});

cancelRecover.addEventListener("click", () => {
  modalBack.style.display = "none";
  recoverInput.value = "";
});

sendRecover.addEventListener("click", () => {
  if (!recoverInput.value.trim()) {
    alert("Digite algo!");
    return;
  }

  alert(
    `Se existir uma conta com "${recoverInput.value}", enviaremos a recuperação.`
  );

  modalBack.style.display = "none";
  recoverInput.value = "";
});

modalBack.addEventListener("click", (e) => {
  if (e.target === modalBack) modalBack.style.display = "none";
});
