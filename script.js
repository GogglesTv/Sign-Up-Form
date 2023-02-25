"use strict";

const pw = document.getElementById("password");
const confirmPw = document.getElementById("confirmation");
const pwWarning = document.querySelector(".matching-passwords");

pw.addEventListener("keyup", (e) => {
  pw.innerText += e.key;
});

confirmPw.addEventListener("keyup", (e) => {
  confirmPw.innerText += e.key;
  passwordConfirmation();
});

const passwordConfirmation = () => {
  if (confirmPw.value !== pw.value) {
    pwWarning.removeAttribute("id");
    pw.style.border = "1px solid rgb(212, 12, 12)";
    confirmPw.style.border = "1px solid rgb(212, 12, 12)";
  } else if (confirmPw.value === pw.value) {
    pwWarning.setAttribute("id", "hide");
    pw.style.border = "";
    confirmPw.style.border = "";
  }
};
