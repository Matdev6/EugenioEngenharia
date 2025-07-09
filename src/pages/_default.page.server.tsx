// src/pages/_default.page.server.tsx
import ReactDOMServer from 'react-dom/server';
import { escapeInject, dangerouslySkipEscape } from 'vike/server';
import { HelmetProvider } from 'react-helmet-async';
import { PageContext as PageContextReact } from './pageContext';
import type { ComponentType, ReactNode } from 'react';
import type { PageContextBuiltIn } from 'vike/types';

type PageContext = PageContextBuiltIn & {
    Page: ComponentType;
    pageProps: Record<string, unknown>;
    Layout?: ComponentType<{ children: ReactNode }>;
    isClientSideNavigation: boolean;
    appName?: string;
};

export { render };
export { onBeforeRender };

export const clientRouting = true;
export const prefetchStaticAssets = { when: 'VIEWPORT' };

async function onBeforeRender(_pageContext: PageContext) {
    return {
        pageContext: {
            appName: 'Eugênio Engenharia',
        },
    };
}

async function render(pageContext: PageContext) {
    const { Page, pageProps, Layout } = pageContext;
    const helmetContext: Record<string, unknown> = {};

    const pageHtml = ReactDOMServer.renderToString(
        <HelmetProvider context={helmetContext}>
            <PageContextReact.Provider value={pageContext}>
                {Layout ? (
                    <Layout>
                        <Page {...pageProps} />
                    </Layout>
                ) : (
                    <Page {...pageProps} />
                )}
            </PageContextReact.Provider>
        </HelmetProvider>
    );

    const { helmet } = helmetContext as any;

    const documentHtml = escapeInject`<!DOCTYPE html>
    <html lang="pt-BR">
      <head>
        <meta charset="UTF-8" />
        <link rel="icon" type="image/svg+xml" href="/vite.svg" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        ${dangerouslySkipEscape(helmet?.title?.toString() || '')}
        ${dangerouslySkipEscape(helmet?.meta?.toString() || '')}
        ${dangerouslySkipEscape(helmet?.link?.toString() || '')}
        ${dangerouslySkipEscape(helmet?.script?.toString() || '')}
      </head>
      <body>
        <div id="root">${dangerouslySkipEscape(pageHtml)}</div>
      </body>
    </html>`;

    return {
        documentHtml,
        pageContext: {},
    };
}
