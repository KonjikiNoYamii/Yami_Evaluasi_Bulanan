import { fetchAyat } from "./api.js";

export async function renderAyat(id) {
  const data = await fetchAyat(id);
  const ul = document.getElementById("ayatList");
  const namaSurat = document.getElementById("namaSurat");

  namaSurat.textContent = data.namaLatin + " (" + data.arti + ")";


  ul.innerHTML = "";

data.ayat.forEach((a) => {
  const li = document.createElement("li");
  li.className = "ayatItem";
  li.innerHTML = `
    <div class="ayatBaris">
      <p class="ayatAr">${a.teksArab}</p>
      <span class="ayatNomor">${a.nomorAyat}</span>
    </div>
    <p class="ayatLatin"><i>${a.teksLatin}</i></p>
    <p class="ayatTr">${a.teksIndonesia}</p> 
    <audio class="audio" controls src="${a.audio["01"]}"></audio>
  `;
  ul.appendChild(li);
});


}
