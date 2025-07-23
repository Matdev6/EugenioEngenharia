import express from 'express';
import path from 'path';

const isProduction = process.env.NODE_ENV === 'production';
const root = process.cwd();

async function createAndStartServer() {
    const app = express();

    const port = process.env.PORT || 3000;

    app.use(express.static(path.resolve(root, 'dist/client')));

    app.get('*', async (_req, res, next) => {
        res.send('Servidor Express funcionando! (Vike desabilitado para teste)');
    });

    app.use((_req, res) => {
        res.statusCode = 404;
        res.end('Not Found');
    });

    app.listen(port, () => {
        console.log(`Server running on http://localhost:${port}`);
        console.log(`Visit: http://localhost:${port}`);
        console.log(`Running in ${isProduction ? 'production' : 'development'} mode.`);
    });
}

createAndStartServer();