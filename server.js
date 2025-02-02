console.clear();
const readline = require('readline');
const { exec } = require('child_process');
const figlet = require('figlet');
const colors = require('colors');

// Membuat antarmuka untuk input
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Menampilkan teks "NightCore" dalam warna merah
figlet('NightCore', (err, data) => {
  if (err) {
    console.log('Terjadi kesalahan dalam membuat figlet');
    console.dir(err);
    return;
  }
  console.log(data.red); // Menampilkan teks berwarna merah dengan colors
});

// Menampilkan pertanyaan kepada pengguna
rl.question('Apakah kamu ingin melanjutkannya? Y/n: ', (answer) => {
  if (answer.toLowerCase() === 'y') {
    // Menjalankan file core.js jika jawabannya 'Y'
    exec('node core.js', (err, stdout, stderr) => {
      if (err) {
        console.error(`Error: ${err.message}`);
        return;
      }
      if (stderr) {
        console.error(`stderr: ${stderr}`);
        return;
      }
      console.log(`Output: ${stdout}`);
    });
  } else {
    console.log('Eksekusi dibatalkan.');
  }
  rl.close();
});