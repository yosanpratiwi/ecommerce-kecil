const { Pool } = require('pg');

const pool = new Pool({
user: 'postgres',
host: 'localhost',
database: 'raisha_backend',
password: 'rai1015',
port: 5432,
});
module.exports = pool;