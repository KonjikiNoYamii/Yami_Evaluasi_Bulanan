import { fetchSurat } from './api.js'
export async function renderSurat() {
    const list = document.getElementById("list")
  const surat = await fetchSurat();

  surat.forEach((item) => {
    const box = document.createElement("div");
    box.className = "suratItem";
    box.dataset.nomor = item.nomor;
    box.innerHTML =  `<h3 class="suratNama">${item.nama}</h3>
      <h4 class="suratLatin">${item.namaLatin}</h4>
      <p class="suratInfo">${item.arti} <br> ${item.jumlahAyat} ayat</p>
    `;
    list.appendChild(box);
  });
}
