// Biodata
const profile = {
  nama: "Muhammad Imam Al Bukhori",
  nim: "241401085",
  kom: "A",
  hobi: "Bermain Game, Olahraga, Belajar",
  motto: "Dari mereka (orang tua) aku ada, untuk mereka aku berjuang, demi mereka aku kembali."
};

const tentangSaya = `Halo, saya ${profile.nama}. Saya biasa dipanggil Imam, mahasiswa S1 Ilmu Komputer.
Saya merupakan pribadi yang cenderung introvert, namun dapat lebih terbuka ketika bersama orang-orang terdekat.
Saya memiliki minat yang besar di bidang olahraga, khususnya basket dan futsal. 
Saya adalah anak bungsu dari empat bersaudara. 
Ketertarikan saya pada dunia teknologi mendorong saya untuk menempuh pendidikan di jurusan Ilmu Komputer 
dengan tujuan berkarier dan berkontribusi dalam bidang teknologi di masa depan.`;

// Jadwal
const jadwal = [
  { no: 1, kode: "ILK2108", matkul: "Wirausaha Digital", sks: 3, kelas: "A", waktu: "Jumat, 08:00-09:40", ruang: "D-104", dosen: "Dr. T. Henny Febriana Harumy S.Kom., M.Kom, Dr. Fauzan Nurahmadi S.Kom., M.Cs" },
  { no: 2, kode: "ILK2105", matkul: "Praktikum Basis Data", sks: 3, kelas: "A", waktu: "Senin, 08.20-10.00", ruang: "Lab 3", dosen: "Muhammad Syukron Jazila" },
  { no: 3, kode: "ILK2104", matkul: "Basis Data", sks: 3, kelas: "A", waktu: "Rabu, 14:40-17:10", ruang: "D-103", dosen: "Dr. Dewi Sartika Br Ginting S.Kom., M.Kom, Insidini Fawwaz M.kom" },
  { no: 4, kode: "ILK2110", matkul: "Praktikum Struktur Data", sks: 3, kelas: "A", waktu: "Kamis 13.00-14.40", ruang: "Lab 2", dosen: "Alya Debora Panggabean" },
  { no: 5, kode: "ILK2109", matkul: "Struktur Data", sks: 3, kelas: "A", waktu: "Jumat, 13:50-16:20", ruang: "D-101", dosen: "Anandhini Medianty Nababan S.Kom., M.T, Insidini Fawwaz M.Kom" },
  { no: 6, kode: "ILK2107", matkul: "Praktikum Pemrograman Web", sks: 3, kelas: "A", waktu: "Senin, 10.30-12.10", ruang: "-", dosen: "Andre" },
  { no: 7, kode: "ILK2106", matkul: "Pemrograman Web", sks: 3, kelas: "A", waktu: "Rabu, 08:00-10:30", ruang: "D-103", dosen: "Dr. Dewi Sartika Br Ginting S.Kom., M.Kom, Nurrahmadayeni M.Kom" },
  { no: 8, kode: "SAE3108", matkul: "IELTS Preparation", sks: 2, kelas: "PIK E", waktu: "Selasa, 08:50-10:30", ruang: "D-101", dosen: "Drs. Yulianus Harefa GradDipEd TESOL., MEd TESOL" },
  { no: 9, kode: "ETN1205", matkul: "Musikologi Sumatera Utara", sks: 2, kelas: "MKWU1", waktu: "Senin, 13:00-14:40", ruang: "M RSM 2", dosen: "Dra. Heristiana Dewi M.Pd" },
  { no: 10, kode: "ILK3102", matkul: "Etika Profesi", sks: 3, kelas: "A", waktu: "Kamis, 08:00-09:40", ruang: "D-104", dosen: "Dr. Ir. Elviawaty Muisa Zamzami S.T,M.T.,M.M., IPU - Dr. Eng Ade Candra S.T.,M.Kom." },
  { no: 11, kode: "ILK3107", matkul: "Kecerdasan Buatan", sks: 3, kelas: "A", waktu: "Selasa, 13:50-16:20", ruang: "D-104", dosen: "Dr. Amalia S.T., M.T. - Dr. Pauzi Ibrahim Nainggolan S.Komp. M.Sc." }
];

// Render Profil
document.getElementById("profile-info").innerHTML = `
  <p><b>Nama Lengkap:</b> ${profile.nama}</p>
  <p><b>NIM:</b> ${profile.nim}</p>
  <p><b>Kom:</b> ${profile.kom}</p>
  <p><b>Hobi:</b> ${profile.hobi}</p>
  <p><b>Motto Hidup:</b> "${profile.motto}"</p>
`;

// Render Tentang Saya
document.getElementById("tentang-saya").innerText = tentangSaya;

// Render Jadwal
const tbody = document.querySelector("#jadwal-table tbody");
jadwal.forEach(matkul => {
  const row = `
    <tr>
      <td>${matkul.no}</td>
      <td>${matkul.kode}</td>
      <td>${matkul.matkul}</td>
      <td>${matkul.sks}</td>
      <td>${matkul.kelas}</td>
      <td>${matkul.waktu}</td>
      <td>${matkul.ruang}</td>
      <td>${matkul.dosen}</td>
    </tr>
  `;
  tbody.innerHTML += row;
});
