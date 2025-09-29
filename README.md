# QurAna 📖✨

QurAna adalah sebuah web sederhana yang menampilkan **daftar surat dalam Al-Qur’an** beserta ayat-ayatnya.  
Web ini dibuat dengan HTML, CSS (grid layout), dan JavaScript, serta memanfaatkan **localStorage** untuk menyimpan data login dan preferensi tema (gelap/terang).

---

## ✨ Fitur Utama

### 🔑 Login Page
- User diarahkan terlebih dahulu ke halaman **Login**.  
- Terdapat input:
  - **Username**
  - **Password**
  - **Confirm Password**
- Validasi:
  - Jika ada input kosong → muncul peringatan *"Data harus diisi"*.  
  - Jika password kurang dari 6 karakter → muncul peringatan *"Password harus lebih dari 6 karakter"*.  
  - Jika password dan confirm password tidak sama → muncul peringatan *"Password tidak sama"*.  
- Jika semua input benar → login berhasil dan user diarahkan ke halaman utama QurAna.

---

### 🕌 Halaman Utama
- **Navbar** berisi:
  - Logo profil (nantinya bisa diedit – *planning feature*).
  - Nama web: **QurAna**
  - Menu bar: **Home, About, Contact** (masih placeholder untuk update berikutnya).
  - Tombol **Theme Toggle** (ganti mode terang ↔ gelap).
- **Random Hadits** akan tampil dan berganti setiap beberapa detik.  
- **Daftar Surat (List Surat)**:
  - Ditampilkan dalam **grid layout**.  
  - Saat user menekan salah satu surat → daftar surat menghilang dan muncul **daftar ayat**.  

---

### 📖 Halaman Ayat
- Menampilkan:
  - **Teks Arab** ayat.  
  - **Nomor ayat**.  
  - **Teks Latin** dari ayat.  
  - **Terjemahan** bahasa Indonesia.  
  - **Audio** untuk setiap ayat yang bisa diputar.  
- Terdapat tombol **Kembali** untuk kembali ke daftar surat.  

---

## 🎨 Tampilan & Desain
- CSS menggunakan **Grid Layout** (tanpa flexbox).  
- Mendukung **Dark Mode** dan **Light Mode** dengan penyimpanan preferensi di `localStorage`.  

---

## 📌 Rencana Update
- Edit foto profil user di navbar.  
- Update halaman **About** dan **Contact**.  
- Peningkatan UI/UX untuk navigasi dan tema.
- Highlight ayat saat audio diputar

---

## 🚀 Teknologi yang Digunakan
- **HTML5**
- **CSS3** (Grid Layout)
- **JavaScript (ES6 Modules)**
- **LocalStorage API**

---

## 📷 Preview
*![alt text](<Screenshot from 2025-09-29 13-59-50.png>)* 
*![alt text](<Screenshot from 2025-09-29 14-00-10.png>)* 
*![alt text](<Screenshot from 2025-09-29 14-00-20.png>)*
*![alt text](<Screenshot from 2025-09-29 14-00-26.png>)*
*![alt text](<Screenshot from 2025-09-29 14-00-39.png>)*

---

## 🙌 Penutup
QurAna hadir sebagai latihan projek kecil yang bermanfaat untuk belajar **JavaScript, manipulasi DOM, dan penggunaan localStorage** dengan konteks Islami 🌙.  

Semoga bermanfaat!
