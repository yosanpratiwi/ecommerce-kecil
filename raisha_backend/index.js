// const express = require('express');
// const cors = require('cors');
// const pool = require('./db'); // Pastikan path benar
// const produkRoutes = require('./produkRoutes'); // Panggil router

// const app = express(); // HARUS DIBUAT DULU sebelum dipakai!

// // Middleware
// app.use(cors());
// app.use(express.json());
// app.use(express.urlencoded({ extended: true }));

// app.get('/', (req, res) => {
//     res.send('API Berjalan 🚀');
// });

// // Gunakan Router
// app.use('/api', produkRoutes); // Pastikan prefix sudah benar!

// // Jalankan server
// const PORT = 3001;
// app.listen(PORT, () => {
//     console.log(`Server berjalan di http://localhost:${PORT}`);
// });

const express = require('express');
const cors = require('cors');
const pool = require('./db');
const produkRoutes = require('./routers/produkRoutes');

const app = express();

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Route utama
app.get('/', (req, res) => {
    res.send('API Berjalan 🚀');
});

// Pastikan `produkRoutes` bisa di-load
try {
    app.use('/api', produkRoutes);
} catch (error) {
    console.error("Error loading routes:", error);
}

// Jalankan server
const PORT = 3001;
app.listen(PORT, () => {
    console.log(`Server berjalan di http://localhost:${PORT}`);
});
