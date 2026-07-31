const express = require('express');
const app = express();
const path = require('path');

// Serve file statis dari folder 'public'
app.use(express.static(path.join(__dirname, 'public')));

// Route utama
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// API sederhana
app.get('/api/salam', (req, res) => {
    res.json({
        pesan: 'Halo! Selamat datang di website pertamaku! 🎉',
        waktu: new Date().toLocaleString('id-ID')
    });
});

// Jalankan server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server berjalan di http://localhost:${PORT}`);
});