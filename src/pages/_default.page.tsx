import { createContext, useContext } from 'react';
import type { ReactNode } from 'react';
import { Analytics } from '@vercel/analytics/react';
import '../index.css';

export const PageContext = createContext<any>(undefined);

type LayoutProps = {
    children: ReactNode;
};

function Layout({ children }: LayoutProps) {
    // const pageContext = 
    useContext(PageContext);

    return (
        <>
            <main>{children}</main>
            <Analytics />
        </>
    );
}

export { Layout };
