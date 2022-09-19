import pg from 'pg';
const Pool = pg.Pool;
const pool = new Pool({
    user: 'postgres',
    password: 'database123',
    host: 'localhost',
    port: 5432,
    database: 'perntodo'
});

export default pool;