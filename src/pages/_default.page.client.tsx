import React from 'react';
import ReactDOM from 'react-dom/client';
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

async function render(pageContext: PageContext) {
  const { Page, pageProps, Layout } = pageContext;
  const root = document.getElementById('root');

  if (!root) {
    throw new Error('No root element found');
  }

  const isClientSideNavigation = pageContext.isClientSideNavigation;

  const app = (
    <React.StrictMode>
      <HelmetProvider>
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
    </React.StrictMode>
  );

  if (isClientSideNavigation) {
    ReactDOM.createRoot(root).render(app);
  } else {
    ReactDOM.hydrateRoot(root, app);
  }
}
