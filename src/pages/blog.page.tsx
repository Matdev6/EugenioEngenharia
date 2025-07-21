import { Helmet } from 'react-helmet-async';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Blog from '../components/Blog';

export { Page };

function Page({ title, content }: { title: string, content: string }) {
    return (
        <>
            <Helmet>
                <title>{title}</title>
                <meta name="description" content={content} />
            </Helmet>

            <Header />
            <Blog />
            <Footer />
        </>
    );
}
