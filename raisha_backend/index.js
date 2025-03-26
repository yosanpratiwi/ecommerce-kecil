// const express = require('express');
// const cors = require('cors');
// const pool = require('./db');
// const app = express();
// const PORT = 3001;
// app.use(cors());
// app.use(express.json());
// app.get('/', (req, res) => {
// res.send('Hello World from Express.js!');
// });
// app.post('/data', (req, res) => {
//     const { nama } = req.body;
//     res.send(`Data diterima: ${nama}`);
// });

// // CREATE
// app.post('/produk', async (req, res) => {
//     const { nama, harga } = req.body;
//     try {
//         const newProduk = await pool.query(
// 'INSERT INTO produk (nama, harga) VALUES ($1, $2) RETURNING *',
// [nama, harga]
// );
// res.json(newProduk.rows[0]);} catch (err) {
//     console.error(err);
//     res.status(500).json({ error: 'Server error' });
// }
// });

// // READ
// app.get('/produk', async (req, res) => {
//     try {
//         const allProduk = await pool.query('SELECT * FROM produk');
//         res.json(allProduk.rows);
//     } catch (err) {
//         console.error(err);
//         res.status(500).json({ error: 'Server error' });
//     }
// });
// app.listen(PORT, () => {
//     console.log(`Server berjalan di http://localhost:${PORT}`);
// });

// // PUT & DELETE
// app.put('/produk/:id', async (req, res) => {
//     const { id } = req.params;
//     const { nama, harga } = req.body;
//     try {
//         const updateProduk = await pool.query(
//             'UPDATE produk SET nama = $1, harga = $2 WHERE id = $3 RETURNING *',
//             [nama, harga, id]
//         );
//         res.json(updateProduk.rows[0]);
//     } catch (err) {
//         console.error(err);
//         res.status(500).json({ error: 'Server error' });
//     }
// });
// app.delete('/produk/:id', async (req, res) => {
//     const { id } = req.params;
//     try {
//         await pool.query('DELETE FROM produk WHERE id = $1', [id]);
//         res.json({ message: 'Produk dihapus' });
//     } catch (err) {
//         console.error(err);
//         res.status(500).json({ error: 'Server error' });
//     }
// });



const express = require('express'); 
const cors = require('cors');
const pool = require('./db');
const app = express();
const PORT = 3001;

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
    console.log('GET / - Server menerima request');
    res.send('Hello World from Express.js!');
});

app.post('/data', (req, res) => {
    console.log('POST /data - Request Body:', req.body);
    const { nama } = req.body;
    res.send(`Data diterima: ${nama}`);
});

// CREATE
app.post('/produk', async (req, res) => {
    const { nama, harga } = req.body;
    console.log('POST /produk - Data diterima:', { nama, harga });
    try {
        const newProduk = await pool.query(
            'INSERT INTO produk (nama, harga) VALUES ($1, $2) RETURNING *',
            [nama, harga]
        );
        console.log('POST /produk - Produk berhasil ditambahkan:', newProduk.rows[0]);
        res.json(newProduk.rows[0]);
    } catch (err) {
        console.error('POST /produk - Error:', err);
        res.status(500).json({ error: 'Server error' });
    }
});

// READ
app.get('/produk', async (req, res) => {
    console.log('GET /produk - Mengambil semua produk');
    try {
        const allProduk = await pool.query('SELECT * FROM produk');
        console.log('GET /produk - Data produk:', allProduk.rows);
        res.json(allProduk.rows);
    } catch (err) {
        console.error('GET /produk - Error:', err);
        res.status(500).json({ error: 'Server error' });
    }
});

// UPDATE
app.put('/produk/:id', async (req, res) => {
    const { id } = req.params;
    const { nama, harga } = req.body;
    console.log(`PUT /produk/${id} - Data diterima:`, { nama, harga });
    try {
        const updateProduk = await pool.query(
            'UPDATE produk SET nama = $1, harga = $2 WHERE id = $3 RETURNING *',
            [nama, harga, id]
        );
        console.log(`PUT /produk/${id} - Produk berhasil diperbarui:`, updateProduk.rows[0]);
        res.json(updateProduk.rows[0]);
    } catch (err) {
        console.error(`PUT /produk/${id} - Error:`, err);
        res.status(500).json({ error: 'Server error' });
    }
});

// DELETE
app.delete('/produk/:id', async (req, res) => {
    const { id } = req.params;
    console.log(`DELETE /produk/${id} - Menghapus produk`);
    try {
        await pool.query('DELETE FROM produk WHERE id = $1', [id]);
        console.log(`DELETE /produk/${id} - Produk berhasil dihapus`);
        res.json({ message: 'Produk dihapus' });
    } catch (err) {
        console.error(`DELETE /produk/${id} - Error:`, err);
        res.status(500).json({ error: 'Server error' });
    }
});

// Jalankan server
app.listen(PORT, () => {
    console.log(`Server berjalan di http://localhost:${PORT}`);
});
