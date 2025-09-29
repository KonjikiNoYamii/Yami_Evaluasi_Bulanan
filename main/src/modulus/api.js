export async function fetchSurat() {
  try {
    const res = await fetch("https://equran.id/api/v2/surat");
    const data = await res.json();
    return data.data || [];
  } catch (error) {
    console.error(error);
  }
}

export async function fetchAyat(id) {
  try {
    const res = await fetch(`https://equran.id/api/v2/surat/${id}`);
    const data = await res.json();
    return data.data;
  } catch (error) {}
  console.error(error);
}
