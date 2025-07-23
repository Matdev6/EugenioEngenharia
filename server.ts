import express from 'express'
import { createServer as createViteServer } from 'vite'
import { renderPage } from 'vike/server'

async function startServer() {
    const app = express()
    const vite = await createViteServer({
        server: { middlewareMode: true }
    })

    app.use(vite.middlewares)

    app.use('*', async (req, res, next) => {
        try {
            const pageContext = await renderPage({ urlOriginal: req.originalUrl })
            const { httpResponse } = pageContext

            if (!httpResponse) return next()

            const { body, statusCode, contentType, headers } = httpResponse
            res.status(statusCode)
            if (contentType) res.type(contentType)
            if (headers) Object.entries(headers).forEach(([k, v]) => res.setHeader(k, v))
            res.send(body)
        } catch (err) {
            vite.ssrFixStacktrace(err)
            next(err)
        }
    })

    app.listen(3000, () => {
        console.log('Server running at http://localhost:3000')
    })
}

startServer()
