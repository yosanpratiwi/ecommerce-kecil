// const { Pool } = require('pg');

// const pool = new Pool({
//     user: 'postgres', // Sesuaikan dengan username PostgreSQL-mu
//     host: 'localhost',
//     database: 'ecommerce-kecil', // Ganti dengan nama database yang benar
//     password: 'yosan45', // Sesuaikan dengan password PostgreSQL
//     port: 5432, // Port default PostgreSQL
// });

// module.exports = pool;

const { Pool } = require('pg');

const pool = new Pool({
    user: 'postgres', // Sesuaikan dengan username PostgreSQL
    host: 'localhost',
    database: 'ecommerce-kecil', // Nama database
    password: 'yosan45', // Sesuaikan dengan password PostgreSQL
    port: 5432, // Port default PostgreSQL
});

pool.connect()
    .then(() => console.log('Database connected successfully'))
    .catch((err) => console.error('Database connection error:', err));

module.exports = pool;
