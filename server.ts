import express from 'express';
import path from 'path';
import { renderPage } from 'vike/server';

const isProduction = process.env.NODE_ENV === 'production';
const root = process.cwd();
const port = process.env.PORT || 3000;

const app = express();

app.use(express.static(path.resolve(root, 'dist/client')));

app.get('*', async (req, res, next) => {
    console.log('Renderizando URL:', req.originalUrl);
    try {
        const pageContext = await renderPage({ urlOriginal: req.originalUrl });

        if (!pageContext.httpResponse) {
            return next();
        }

        const { body, statusCode, headers } = pageContext.httpResponse;

        res.writeHead(statusCode, Object.fromEntries(headers));

        if (typeof body === 'string') {
            res.end(body);
        } else if (body && typeof (body as any).pipe === 'function') {
            (body as NodeJS.ReadableStream).pipe(res);
        } else {
            res.statusCode = 500;
            res.end('Internal Server Error: Unexpected response body format.');
        }
    } catch (error) {
        console.error(error);
        res.statusCode = 500;
        res.end('Internal Server Error');
    }
});


app.use((_req, res) => {
    res.statusCode = 404;
    res.end('Not Found');
});

app.listen(port, () => {
    console.log(`Server rodando em http://localhost:${port}`);
    console.log(`Modo: ${isProduction ? 'Produção' : 'Desenvolvimento'}`);
});
