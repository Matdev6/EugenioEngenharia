import type { PageContextBuiltIn } from 'vike/types';
import type React from 'react';

type PageContextCustom = PageContextBuiltIn & {
    Page: React.ComponentType;
    pageProps: Record<string, unknown>;
    Layout?: React.ComponentType;
    isClientSideNavigation: boolean;
    appName?: string;
};

declare global {
    namespace Vike {
        type PageContext = PageContextCustom;
    }
}
