

const password = document.getElementById("password");
const generateBtn = document.querySelector("button");
const copyImg = document.querySelector(".display img");

const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+[]{}|;:,.<>?";
const passwordLength = 22;

function generatePassword() {
  let randomPassword = "";
  for (let i = 0; i < passwordLength; i++) {
    const randomIndex = Math.floor(Math.random() * characters.length);
    randomPassword += characters.charAt(randomIndex);
  }
  password.value = randomPassword;
}

function showCopyMessage() {
  let msg = document.getElementById("copy-message");
  if (!msg) {
    msg = document.createElement("div");
    msg.id = "copy-message";
    document.querySelector('.display').appendChild(msg);
  }
  msg.textContent = "Password copied!";
  msg.style.display = "block";
  setTimeout(() => {
    msg.style.display = "none";
  }, 5000);
}

function copyToClipboard() {
  if (navigator.clipboard) {
    navigator.clipboard.writeText(password.value).then(showCopyMessage);
  } else {
    password.select();
    document.execCommand("copy");
    showCopyMessage();
  }
}

generateBtn.addEventListener("click", generatePassword);
copyImg.addEventListener("click", copyToClipboard);