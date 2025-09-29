const formLogin = document.getElementById("formLogin");
const warn = document.getElementById("warn");
formLogin.addEventListener("submit", function (e) {
  e.preventDefault();
  const username = document.getElementById("username").value.trim();
  const password = document.getElementById("password").value.trim();
  const confirmPassword = document.getElementById("confirmPass").value.trim();

  if (username === "" || password === "" || confirmPassword === "") {
    warn.style.color = "red";
    warn.innerText = "Data tidak boleh kosong!!";
    return;
  } else if (password.length < 6) {
    warn.style.color = "red";
    warn.innerText = "Password harus lebih dari 6 karakter!!";
    return;
  } else if (password !== confirmPassword) {
    warn.style.color = "red";
    warn.innerText = "Password tidak sama!!";
    return;
  } else {
    localStorage.setItem(username,password)
    localStorage.setItem("userLog",username)
    warn.style.color = "green";
    warn.innerText = "Berhasil";
    setTimeout(() => {
      window.location.href = "./main/index.html";
    }, 3000);
  }
});
