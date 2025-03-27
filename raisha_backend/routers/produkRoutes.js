// const express = require('express');
// const router = express.Router();
// const pool = require('../db'); // Pastikan ini sesuai dengan file db.js


// // READ: Get all produk
// router.get('/produk', async (req, res) => {
//     try {
//         const allProduk = await pool.query('SELECT * FROM produk');
//         res.json(allProduk.rows);
//     } catch (err) {
//         console.error("Error GET /produk:", err);
//         res.status(500).json({ error: 'Server error' });
//     }
// });

// // CREATE: Tambahproduk
// router.post('/produk', async (req, res) => {
//     const { nama, harga } = req.body;

//     // Validasi data sebelum masuk ke database
//     if (!nama || harga == null || harga < 0) {
//         return res.status(400).json({ error: "Nama harus ada dan harga tidak boleh negatif" });
//     }

//     try {
//         const newProduk = await pool.query(
//             "INSERT INTO produk (nama, harga) VALUES ($1, $2) RETURNING *",
//             [nama, harga]
//         );
//         res.json(newProduk.rows[0]);
//     } catch (err) {
//         console.error("Error POST /produk:", err);
//         res.status(500).json({ error: "Server error" });
//     }
// });



// // UPDATE: Perbarui produk
// router.put('/produk/:id', async (req, res) => {
//     const { id } = req.params;
//     const { nama, harga } = req.body;
//     try {
//         const updateProduk = await pool.query(
//             'UPDATE produk SET nama = $1, harga = $2 WHERE id = $3 RETURNING *',
//             [nama, harga, id]
//         );
//         res.json(updateProduk.rows[0]);
//     } catch (err) {
//         console.error("Error PUT /produk:", err);
//         res.status(500).json({ error: 'Server error' });
//     }
// });

// // DELETE: Hapus produk
// router.delete('/produk/:id', async (req, res) => {
//     const { id } = req.params;
//     try {
//         await pool.query('DELETE FROM produk WHERE id = $1', [id]);
//         res.json({ message: 'Produk dihapus' });
//     } catch (err) {
//         console.error("Error DELETE /produk:", err);
//         res.status(500).json({ error: 'Server error' });
//     }
// });

// module.exports = router;

const express = require('express');
const pool = require('../db');

const router = express.Router();

// GET: Ambil semua produk
router.get('/produk', async (req, res) => {
    try {
        const allProduk = await pool.query("SELECT * FROM produk");
        console.log("Data produk:", allProduk.rows); // Debugging
        res.json(allProduk.rows);
    } catch (err) {
        console.error("Error GET /produk:", err);
        res.status(500).json({ error: "Server error" });
    }
});

// POST: Tambah produk
router.post('/produk', async (req, res) => {
    const { nama, harga } = req.body;
    if (!nama || !harga) {
        return res.status(400).json({ error: "Nama dan harga harus diisi" });
    }

    try {
        const newProduk = await pool.query(
            "INSERT INTO produk (nama, harga) VALUES ($1, $2) RETURNING *",
            [nama, harga]
        );
        res.json(newProduk.rows[0]);
    } catch (err) {
        console.error("Error POST /produk:", err);
        res.status(500).json({ error: "Server error" });
    }
});

// PUT: Perbarui produk
router.put('/produk/:id', async (req, res) => {
    const { id } = req.params;
    const { nama, harga } = req.body;
    try {
        const updateProduk = await pool.query(
            'UPDATE produk SET nama = $1, harga = $2 WHERE id = $3 RETURNING *',
            [nama, harga, id]
        );
        res.json(updateProduk.rows[0]);
    } catch (err) {
        console.error("Error PUT /produk:", err);
        res.status(500).json({ error: 'Server error' });
    }
});

// DELETE: Hapus produk
router.delete('/produk/:id', async (req, res) => {
    const { id } = req.params;
    try {
        await pool.query('DELETE FROM produk WHERE id = $1', [id]);
        res.json({ message: 'Produk dihapus' });
    } catch (err) {
        console.error("Error DELETE /produk:", err);
        res.status(500).json({ error: 'Server error' });
    }
});

module.exports = router;

