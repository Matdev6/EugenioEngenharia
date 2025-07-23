// api/index.ts
import { renderPage } from 'vike/server'
import type { IncomingMessage, ServerResponse } from 'http'

export default async function handler(req: IncomingMessage, res: ServerResponse) {
    const pageContext = await renderPage({ urlOriginal: req.url! })

    if (!pageContext.httpResponse) {
        res.statusCode = 500
        res.end('Internal Server Error')
        return
    }

    const { body, statusCode, headers } = pageContext.httpResponse
    res.writeHead(statusCode, Object.fromEntries(headers))
    res.end(body)
}
