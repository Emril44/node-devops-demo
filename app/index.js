const http = require('http');
const { Client } = require('pg');

const PORT = process.env.PORT || 3001;

const client = new Client({
    host: process.env.DB_HOST || 'db',
    user: process.env.DB_USER ||  'postgres',
    password:  process.env.DB_PASSWORD || 'postgres',
    database:  process.env.DB_NAME || 'mydb',
    port:  process.env.DB_PORT ? Number(process.env.DB_PORT) : 5432, 
});

client.connect()
    .then(() => console.log('Connected to Postgres!'))
    .catch(err => console.error('Connection error! ', err));

const server = http.createServer(async (req, res) => {
    if(req.url === '/health') {
        try {
            await client.query('SELECT 1');

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

    res.end('this is node on docker, hello :D (no pm2 allowed!!!)');
});

server.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});

