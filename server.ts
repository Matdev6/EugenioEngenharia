import express from 'express';
import { renderPage } from 'vike/server';
import path from 'path';
// import { Readable } from 'stream'; // <-- REMOVA ESTA LINHA! Não precisaremos dela.

const isProduction = process.env.NODE_ENV === 'production';
const root = process.cwd();

async function createAndStartServer() {
    const app = express();

    const port = process.env.PORT || 3000;

    app.use(express.static(path.resolve(root, 'dist/client')));

    app.get('*', async (req, res, next) => {
        const pageContext = await renderPage({ urlOriginal: req.originalUrl });

        if (!pageContext.httpResponse) {
            return next();
        }

        const { body, statusCode, headers } = pageContext.httpResponse;

        res.writeHead(statusCode, Object.fromEntries(headers));

        // NOVO BLOCO DE VERIFICAÇÃO DO CORPO:
        // Verifica se 'body' é uma string.
        // Ou verifica se 'body' existe e tem uma função 'pipe' (duck typing para streams).
        if (typeof body === 'string') {
            res.end(body);
        } else if (body && typeof (body as any).pipe === 'function') {
            // Usamos (body as any) para "convencer" o TypeScript de que 'pipe' existe.
            // A verificação 'typeof (body as any).pipe === 'function'' nos dá a segurança.
            (body as any).pipe(res);
        } else {
            // Caso inesperado: o corpo não é string nem tem método pipe.
            console.error('Tipo inesperado para httpResponse.body:', typeof body, body);
            res.statusCode = 500;
            res.end('Internal Server Error: Unexpected response body format.');
        }
    });

    app.use((req, res) => {
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