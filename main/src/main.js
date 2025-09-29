import { renderSurat } from "./modulus/render.js";
import { renderAyat } from "./modulus/renderAyat.js";
import { printQuotes } from "./modulus/renderQuotes.js";

document.addEventListener("DOMContentLoaded", function () {
  const list = document.getElementById("list");
  const back = document.getElementById("backToList");
  const listSurat = document.getElementById("listSurat");
  const ayatSurat = document.getElementById("ayatSurat");
  const body = document.body;
  const theme = document.querySelector(".theme");
  const quotes = document.getElementById("quotes");
  renderSurat();  printQuotes();
  setInterval(printQuotes, 3000);


  list.addEventListener("click", function (e) {
    const target = e.target.closest(".suratItem");
    if (target) {
      const id = target.dataset.nomor;
      console.log("Klik surat:", id);

      listSurat.classList.remove("active");
      ayatSurat.classList.add("active");

      listSurat.style.display = "none";
      ayatSurat.style.display = "block";
      document.getElementById("ayatList").innerHTML = "";
      renderAyat(id);
      quotes.style.display ="none"
    }
  });

  back.addEventListener("click", function () {
    listSurat.style.display = "block";
    quotes.style.display ="block"
    ayatSurat.style.display = "none";
  });

  if (localStorage.getItem("theme") === "dark") {
    body.classList.add("dark");
  }
  theme.addEventListener("click", function () {
    body.classList.toggle("dark");

    if (body.classList.contains("dark")) {
      localStorage.setItem("theme", "dark");
    } else {
      localStorage.setItem("theme", "light");
    }
  });
});
