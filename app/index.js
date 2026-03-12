const http = require('http');
const { Pool } = require('pg');

const PORT = process.env.PORT || 3001;

const pool = new Pool({
    host: process.env.DB_HOST || 'db',
    user: process.env.DB_USER ||  'postgres',
    password:  process.env.DB_PASSWORD || 'postgres',
    database:  process.env.DB_NAME || 'mydb',
    port:  process.env.DB_PORT ? Number(process.env.DB_PORT) : 5432, 
});

const server = http.createServer(async (req, res) => {
    if(req.url === '/health') {
        res.writeHead(200, {'Content-Type': 'application/json'});
        res.end(JSON.stringify({
            status: 'ok'
        }));
        return;
    }

    if(req.url === '/ready') {
        try {
            await pool.query('SELECT 1');
            res.writeHead(200, {'Content-Type': 'application/json'});
            res.end(JSON.stringify({
                status: 'ok',
                database: 'connected'
            }));
        } catch (err) {
            res.writeHead(500, {'Content-Type': 'application/json'});
            res.end(JSON.stringify({
                status: 'error',
                database: 'disconnected'
            }));
        }
        return;
    }

    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('this is node on docker, hello :D (no pm2 allowed!!!)');
});

server.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});

