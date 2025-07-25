import express from 'express';
import path from 'path';
import { renderPage } from 'vike/server'; // Adicionado novamente


const isProduction = process.env.NODE_ENV === 'production';
const root = process.cwd();

const port = process.env.PORT || 3000;

const app = express();

app.use(express.static(path.resolve(root, 'dist/client')));

// AQUI ESTÁ A MUDANÇA: Reintroduzindo a lógica do Vike
app.get('*', async (req, res, next) => {
    const pageContext = await renderPage({ urlOriginal: req.originalUrl });

    if (!pageContext.httpResponse) {
        return next();
    }

    const { body, statusCode, headers } = pageContext.httpResponse;

    res.writeHead(statusCode, Object.fromEntries(headers));

    if (typeof body === 'string') {
        res.end(body);
    } else if (body && typeof (body as any).pipe === 'function') {
        (body as any).pipe(res);
    } else {
        console.error('Tipo inesperado para httpResponse.body:', typeof body, body);
        res.statusCode = 500;
        res.end('Internal Server Error: Unexpected response body format.');
    }
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